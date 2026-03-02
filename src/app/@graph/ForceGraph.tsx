"use client";

import { useEffect, useRef, useCallback, useState, useMemo } from "react";
import { useRouter, useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { useGraphStore } from "@/lib/store";
import type { GraphData } from "@/lib/notes";
import * as THREE from "three";

const ForceGraph3D = dynamic(() => import("react-force-graph-3d"), {
  ssr: false,
});

interface Props {
  data: GraphData;
}

export default function Graph({ data }: Props) {
  const fgRef = useRef<any>(null);
  const router = useRouter();
  const params = useParams();
  const { setSelectedNode, cameraTrigger, triggerCamera, setCameraDirty } = useGraphStore();
  
  const [hoverNodeId, setHoverNodeId] = useState<string | null>(null);
  const slug = params?.slug as string;

  const spriteCache = useRef<Map<string, THREE.Sprite>>(new Map());

  const flyToNode = useCallback((nodeId: string, duration = 2000) => {
    if (!fgRef.current) return;
    const node = data.nodes.find((n: any) => n.id === nodeId);
    if (!node || node.x === undefined) return;

    const distance = 400;
    const distRatio = 1 + distance / Math.hypot(node.x || 1, node.y || 1, node.z || 1);

    fgRef.current.cameraPosition(
      { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, 
      node, 
      duration
    );
    setSelectedNode(node.id);
    
    // Immediately clear dirty flag when we start a focus move
    setCameraDirty(false);
  }, [data.nodes, setSelectedNode, setCameraDirty]);

  useEffect(() => {
    const targetSlug = slug || "home";
    const node = data.nodes.find((n) => n.path === targetSlug);
    if (node) {
      const timer = setTimeout(() => flyToNode(node.id, 2000), 500);
      return () => clearTimeout(timer);
    }
  }, [slug, flyToNode, data.nodes, cameraTrigger]);

  const handleNodeClick = useCallback((node: any) => {
    if (node && node.path) {
      if (node.path === (slug || 'home')) {
        triggerCamera();
      } else {
        router.push(`/notes/${node.path}`);
      }
    }
  }, [router, slug, triggerCamera]);

  const selectedNodeId = useMemo(() => {
    return data.nodes.find(n => n.path === (slug || 'home'))?.id;
  }, [data.nodes, slug]);

  const neighbors = useMemo(() => {
    if (!selectedNodeId) return new Set();
    return new Set(
      data.links
        .filter(l => {
          const s = typeof l.source === 'object' ? (l.source as any).id : l.source;
          return s === selectedNodeId;
        })
        .map(l => typeof l.target === 'object' ? (l.target as any).id : l.target)
    );
  }, [data.links, selectedNodeId]);

  useEffect(() => {
    spriteCache.current.forEach((sprite, nodeId) => {
      const isSelected = nodeId === selectedNodeId;
      const isHovered = nodeId === hoverNodeId;
      const isNeighbor = neighbors.has(nodeId);
      const isActive = isSelected || isHovered || isNeighbor;
      sprite.visible = isActive;
      if (isActive) {
        sprite.material.opacity = isHovered ? 1 : 0.9;
      }
    });
  }, [selectedNodeId, hoverNodeId, neighbors]);

  const getLabelSprite = useCallback((node: any) => {
    if (spriteCache.current.has(node.id)) return spriteCache.current.get(node.id)!;
    
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d')!;
    const fontSize = 40; // Increased font size
    context.font = `bold ${fontSize}px sans-serif`;
    const textWidth = context.measureText(node.title).width;
    canvas.width = textWidth + 40;
    canvas.height = fontSize + 30;
    
    context.fillStyle = 'rgba(2, 6, 23, 0.95)';
    context.roundRect(0, 0, canvas.width, canvas.height, 15);
    context.fill();
    context.strokeStyle = 'rgba(45, 212, 191, 0.4)';
    context.lineWidth = 3;
    context.stroke();
    
    context.fillStyle = '#f8fafc';
    context.font = `bold ${fontSize}px sans-serif`;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(node.title, canvas.width / 2, canvas.height / 2);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ 
      map: texture, 
      transparent: true,
      depthTest: false 
    });
    const sprite = new THREE.Sprite(spriteMaterial);
    
    const img = texture.image as HTMLCanvasElement;
    // Larger scaling for better visibility
    sprite.scale.set(img.width / 8, img.height / 8, 1);
    sprite.position.set(0, 18, 0);
    sprite.visible = false;

    spriteCache.current.set(node.id, sprite);
    return sprite;
  }, []);

  return (
    <div 
      className="h-full w-full" 
      onPointerDown={() => setCameraDirty(true)}
      onWheel={() => setCameraDirty(true)}
    >
      <ForceGraph3D
        ref={fgRef}
        graphData={data}
        onNodeClick={handleNodeClick}
        onNodeHover={(node) => setHoverNodeId(node ? (node as any).id : null)}
        backgroundColor="#020617"
        showNavInfo={false}
        
        nodeColor={(node: any) => {
          if (node.id === selectedNodeId) return '#2dd4bf';
          if (node.id === hoverNodeId) return '#5eead4';
          if (neighbors.has(node.id)) return '#38bdf8';
          return '#475569';
        }}
        nodeRelSize={5}
        nodeThreeObject={getLabelSprite}
        nodeThreeObjectExtend={true}

        linkColor={(link: any) => {
          const s = typeof link.source === 'object' ? (link.source as any).id : link.source;
          return s === selectedNodeId ? 'rgba(56, 189, 248, 1)' : 'rgba(148, 163, 184, 0.6)';
        }}
        linkWidth={(link: any) => {
          const s = typeof link.source === 'object' ? (link.source as any).id : link.source;
          return s === selectedNodeId ? 4 : 2.5;
        }}
        linkDirectionalArrowLength={(link: any) => {
          const s = typeof link.source === 'object' ? (link.source as any).id : link.source;
          return s === selectedNodeId ? 8 : 6;
        }}
        linkDirectionalArrowRelPos={1}

        warmupTicks={150}
        cooldownTicks={0}
      />
    </div>
  );
}
