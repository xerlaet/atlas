"use client";

import { useEffect, useRef, useCallback, useState, useMemo, useLayoutEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import dynamic from "next/dynamic";
import { useGraphStore } from "@/lib/store";
import type { GraphData } from "@/lib/notes";
import * as THREE from "three";

const ForceGraph3D = dynamic(() => import("react-force-graph-3d"), {
  ssr: false,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) as any;

type NodeObj = { id?: string | number; title?: string; path?: string; isStub?: boolean; x?: number; y?: number; z?: number; [key: string]: unknown };

function getLinkId(val: string | number | NodeObj | undefined): string {
  if (!val) return "";
  if (typeof val === "string") return val;
  if (typeof val === "number") return String(val);
  return String(val.id ?? "");
}

interface Props {
  data: GraphData;
}

export default function Graph({ data }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fgRef = useRef<any>(null);
  const router = useRouter();
  const params = useParams();
  const { 
    setSelectedNode, 
    cameraTrigger, 
    triggerCamera, 
    setCameraDirty,
    uplinkDepth,
    backlinkDepth,
    setReady,
    isReady,
    theme
  } = useGraphStore();

  // Keep spin values in refs so callbacks don't change reference
  const spinRef = useRef({ 
    isSpinning: useGraphStore.getState().isSpinning, 
    spinSpeed: useGraphStore.getState().spinSpeed 
  });
  useLayoutEffect(() => {
    spinRef.current = { 
      isSpinning: useGraphStore.getState().isSpinning, 
      spinSpeed: useGraphStore.getState().spinSpeed 
    };
  });
  
  const [hoverNodeId, setHoverNodeId] = useState<string | null>(null);
  const slug = params?.slug as string;

  const spriteCache = useRef<Map<string, { sprite: THREE.Sprite, canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, texture: THREE.CanvasTexture }>>(new Map());
  const nodeTypeCache = useRef<Map<string, string>>(new Map());

  const selectedNodeId = useMemo(() => {
    return data.nodes.find(n => n.path === (slug || 'home'))?.id;
  }, [data.nodes, slug]);

  const flyToNode = useCallback((nodeId: string, duration = 2000) => {
    if (!fgRef.current) return;
    const node = data.nodes.find((n) => n.id === nodeId);
    if (!node || node.x === undefined || node.y === undefined || node.z === undefined) return;

    const distance = 400;
    const distRatio = 1 + distance / Math.hypot(node.x, node.y, node.z);

    fgRef.current.cameraPosition(
      { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }, 
      node, 
      duration
    );
    setSelectedNode(node.id);
    setCameraDirty(false);
  }, [data.nodes, setSelectedNode, setCameraDirty]);

  // Handle camera movement
  useEffect(() => {
    // Only move camera if engine is ready (has positions)
    if (!isReady || !fgRef.current) return;

    const targetSlug = slug || "home";
    const node = data.nodes.find((n) => n.path === targetSlug);
    if (node && node.x !== undefined) {
      flyToNode(node.id, 2000);
    }
  }, [slug, isReady, cameraTrigger, flyToNode, data.nodes]);

  // Slow spin effect — only runs once when engine starts
  // Speed changes are picked up by onRender via spinRef
  useEffect(() => {
    if (!fgRef.current) return;
    const controls = fgRef.current.controls();
    if (controls) {
      const { isSpinning, spinSpeed } = spinRef.current;
      controls.autoRotate = isSpinning;
      controls.autoRotateSpeed = spinSpeed * 0.5;
    }
  }, [isReady]); // isReady ensures it runs after engine is stable

  // Safety fallback for splash screen
  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 5000);
    return () => clearTimeout(timer);
  }, [setReady]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleNodeClick = useCallback((node: any) => {
    if (node && node.path) {
      if (node.isStub) return;
      if (node.path === (slug || 'home')) {
        triggerCamera();
      } else {
        router.push(`/notes/${node.path}`);
      }
    }
  }, [router, slug, triggerCamera]);

  // Calculate highlighted nodes and links based on depth
  const highlightedInfo = useMemo(() => {
    const info = new Map<string, { type: 'uplink' | 'backlink', depth: number }>();
    if (!selectedNodeId) return info;

    if (uplinkDepth > 0) {
      const queue: { id: string, d: number }[] = [{ id: selectedNodeId, d: 0 }];
      const visited = new Set([selectedNodeId]);
      while (queue.length > 0) {
        const { id, d } = queue.shift()!;
        if (d > 0) info.set(id, { type: 'uplink', depth: d });
        if (d < uplinkDepth) {
          data.links.forEach(l => {
            const s = getLinkId(l.source);
            const t = getLinkId(l.target);
            if (s === id && !visited.has(t)) {
              visited.add(t);
              queue.push({ id: t, d: d + 1 });
            }
          });
        }
      }
    }

    if (backlinkDepth > 0) {
      const queue: { id: string, d: number }[] = [{ id: selectedNodeId, d: 0 }];
      const visited = new Set([selectedNodeId]);
      while (queue.length > 0) {
        const { id, d } = queue.shift()!;
        if (d > 0) {
          const existing = info.get(id);
          if (!existing || d < existing.depth || (d === existing.depth && existing.type === 'backlink')) {
            info.set(id, { type: 'backlink', depth: d });
          }
        }
        if (d < backlinkDepth) {
          data.links.forEach(l => {
            const s = getLinkId(l.source);
            const t = getLinkId(l.target);
            if (t === id && !visited.has(s)) {
              visited.add(s);
              queue.push({ id: s, d: d + 1 });
            }
          });
        }
      }
    }
    return info;
  }, [data.links, selectedNodeId, uplinkDepth, backlinkDepth]);

  // Precise helper to determine if a link is part of the active flow
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getLinkType = useCallback((link: any) => {
    if (!selectedNodeId) return 'inactive';
    
    const s = getLinkId(link.source);
    const t = getLinkId(link.target);

    const sInfo = highlightedInfo.get(s);
    const tInfo = highlightedInfo.get(t);

    // 1. Primary Uplink (from selection)
    if (s === selectedNodeId && tInfo?.type === 'uplink' && tInfo.depth === 1) return 'active-uplink';
    
    // 2. Secondary Uplink (between highlighted nodes)
    if (sInfo?.type === 'uplink' && tInfo?.type === 'uplink' && tInfo.depth === sInfo.depth + 1) return 'active-uplink';

    // 3. Primary Backlink (to selection)
    if (t === selectedNodeId && sInfo?.type === 'backlink' && sInfo.depth === 1) return 'active-backlink';

    // 4. Secondary Backlink (between highlighted nodes)
    if (tInfo?.type === 'backlink' && sInfo?.type === 'backlink' && sInfo.depth === tInfo.depth + 1) return 'active-backlink';

    return 'inactive';
  }, [selectedNodeId, highlightedInfo]);

  // Force refresh the graph when highlighting parameters change
  useEffect(() => {
    if (fgRef.current) {
      fgRef.current.refresh();
    }
  }, [selectedNodeId, uplinkDepth, backlinkDepth, highlightedInfo, getLinkType]);

  const updateLabelTexture = useCallback((nodeId: string, title: string, color: string, isStub?: boolean) => {
    const cached = spriteCache.current.get(nodeId);
    if (!cached) return;
    const { context, canvas, texture } = cached;
    
    const displayTitle = title === "Home" ? "/" : title;
    
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = theme === "dark" ? 'rgba(2, 6, 23, 0.95)' : 'rgba(255, 255, 255, 0.95)';
    context.beginPath();
    context.roundRect(0, 0, canvas.width, canvas.height, 15);
    context.fill();
    context.strokeStyle = color;
    context.lineWidth = 4;
    context.stroke();
    
    context.fillStyle = isStub 
      ? (theme === "dark" ? '#475569' : '#94a3b8')
      : (theme === "dark" ? '#f8fafc' : '#0f172a');
    context.font = 'bold 40px sans-serif';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(displayTitle, canvas.width / 2, canvas.height / 2);
    texture.needsUpdate = true;
  }, [theme]);

  useEffect(() => {
    spriteCache.current.forEach((cached, nodeId) => {
      const isSelected = nodeId === selectedNodeId;
      const isHovered = nodeId === hoverNodeId;
      const highlight = highlightedInfo.get(nodeId);
      const isActive = isSelected || isHovered || !!highlight;
      
      cached.sprite.visible = isActive;
      
      if (isActive) {
        cached.sprite.material.opacity = isHovered ? 1 : 0.9;
        
        let type = 'default';
        let color = theme === "dark" ? 'rgba(148, 163, 184, 0.4)' : 'rgba(100, 116, 139, 0.4)';
        
        if (isSelected) {
          type = 'selected';
          color = '#2dd4bf';
        } else if (highlight?.type === 'uplink') {
          type = 'uplink';
          color = '#38bdf8';
        } else if (highlight?.type === 'backlink') {
          type = 'backlink';
          color = '#d946ef';
        }
        
        // Force redraw if theme changed even if type is the same
        if (nodeTypeCache.current.get(nodeId) !== type || true) { 
          const node = data.nodes.find(n => n.id === nodeId);
          if (node) {
            updateLabelTexture(nodeId, node.title, color, node.isStub);
            nodeTypeCache.current.set(nodeId, type);
          }
        }
      }
    });
  }, [selectedNodeId, hoverNodeId, highlightedInfo, data.nodes, updateLabelTexture, theme]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getLabelSprite = useCallback((node: any) => {
    if (spriteCache.current.has(node.id)) return spriteCache.current.get(node.id)!.sprite;
    
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d')!;
    const fontSize = 40;
    context.font = `bold ${fontSize}px sans-serif`;
    
    const displayTitle = node.title === "Home" ? "/" : node.title;
    const textWidth = context.measureText(displayTitle).width;
    canvas.width = textWidth + 40;
    canvas.height = fontSize + 30;
    
    const isSelected = node.id === selectedNodeId;
    const highlight = highlightedInfo.get(node.id);
    let color = theme === "dark" ? 'rgba(148, 163, 184, 0.4)' : 'rgba(100, 116, 139, 0.4)';
    let type = 'default';
    
    if (isSelected) {
      color = '#2dd4bf';
      type = 'selected';
    } else if (highlight?.type === 'uplink') {
      color = '#38bdf8';
      type = 'uplink';
    } else if (highlight?.type === 'backlink') {
      color = '#d946ef';
      type = 'backlink';
    }
    
    context.fillStyle = theme === "dark" ? 'rgba(2, 6, 23, 0.95)' : 'rgba(255, 255, 255, 0.95)';
    context.beginPath();
    context.roundRect(0, 0, canvas.width, canvas.height, 15);
    context.fill();
    context.strokeStyle = color;
    context.lineWidth = 4;
    context.stroke();
    
    context.fillStyle = node.isStub 
      ? (theme === "dark" ? '#475569' : '#94a3b8')
      : (theme === "dark" ? '#f8fafc' : '#0f172a');
    context.font = 'bold 40px sans-serif';
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(displayTitle, canvas.width / 2, canvas.height / 2);

    const texture = new THREE.CanvasTexture(canvas);
    const spriteMaterial = new THREE.SpriteMaterial({ map: texture, transparent: true, depthTest: false });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(canvas.width / 8, canvas.height / 8, 1);
    sprite.position.set(0, 18, 0);
    sprite.visible = isSelected || !!highlight;

    spriteCache.current.set(node.id, { sprite, canvas, context, texture });
    nodeTypeCache.current.set(node.id, type);
    
    return sprite;
  }, [selectedNodeId, highlightedInfo, theme]);

  // Library callback wrappers (library types require `any`)
  /* eslint-disable @typescript-eslint/no-explicit-any */
  const nodeColorCb = (node: any) => {
    if (node.isStub) return theme === "dark" ? '#1e293b' : '#e2e8f0';
    if (node.id === selectedNodeId) return '#2dd4bf';
    if (node.id === hoverNodeId) return '#5eead4';
    const highlight = highlightedInfo.get(node.id);
    if (highlight?.type === 'uplink') return '#38bdf8';
    if (highlight?.type === 'backlink') return '#d946ef';
    return theme === "dark" ? '#475569' : '#cbd5e1';
  };
  const linkColorCb = (link: any) => {
    const type = getLinkType(link);
    if (type === 'active-uplink') return 'rgba(56, 189, 248, 0.8)';
    if (type === 'active-backlink') return 'rgba(217, 70, 239, 0.8)';
    return theme === "dark" ? 'rgba(148, 163, 184, 0.4)' : 'rgba(100, 116, 139, 0.2)';
  };
  const linkArrowColorCb = (link: any) => {
    const type = getLinkType(link);
    if (type === 'active-uplink') return 'rgba(56, 189, 248, 0.8)';
    if (type === 'active-backlink') return 'rgba(217, 70, 239, 0.8)';
    return 'transparent';
  };
  const linkWidthCb = (link: any) => {
    const type = getLinkType(link);
    return type === 'inactive' ? 1.5 : 4;
  };
  const linkArrowLenCb = (link: any) => {
    const type = getLinkType(link);
    return type === 'inactive' ? 0 : 8;
  };
  /* eslint-enable @typescript-eslint/no-explicit-any */

  return (
    <div 
      className="h-full w-full" 
      onPointerDown={() => setCameraDirty(true)}
      onWheel={() => setCameraDirty(true)}
    >
      <ForceGraph3D
        ref={fgRef}
        controlType="orbit"
        graphData={data}
        onNodeClick={handleNodeClick}
        onNodeHover={(node: NodeObj | null) => setHoverNodeId(node ? String(node.id ?? "") : null)}
        backgroundColor={theme === "dark" ? "#020617" : "#f8fafc"}
        showNavInfo={false}
        
        nodeColor={nodeColorCb}
        nodeVal={1}
        nodeRelSize={5}
        nodeThreeObject={getLabelSprite}
        nodeThreeObjectExtend={true}

        linkColor={linkColorCb}
        linkDirectionalArrowColor={linkArrowColorCb}
        linkWidth={linkWidthCb}
        linkDirectionalArrowLength={linkArrowLenCb}
        linkDirectionalArrowRelPos={1}

        warmupTicks={150}
        cooldownTicks={0}
        onEngineStop={() => {
          setReady(true);
          const { isSpinning, spinSpeed } = spinRef.current;
          const controls = fgRef.current?.controls();
          if (controls) {
            controls.autoRotate = isSpinning;
            controls.autoRotateSpeed = spinSpeed * 0.5;
          }
        }}
        onRender={() => {
          const { isSpinning, spinSpeed } = spinRef.current;
          const controls = fgRef.current?.controls();
          if (controls) {
            controls.autoRotate = isSpinning;
            if (isSpinning) {
              controls.autoRotateSpeed = spinSpeed * 0.5;
              controls.update();
            }
          }
        }}
      />
    </div>
  );
}
