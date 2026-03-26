"use client";

import { useEffect, useRef, useCallback } from "react";

export default function SvgImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const imgRef = useRef<HTMLImageElement>(null);

  const applySize = useCallback((el: HTMLImageElement) => {
    if (el.style.width) return;
    const parentWidth = el.parentElement?.clientWidth || 700;
    const scaled = Math.min(Math.round(el.naturalWidth * 1.5), 700, parentWidth);
    el.style.width = `${scaled}px`;
    el.style.height = "auto";
  }, []);

  useEffect(() => {
    if (imgRef.current?.complete) applySize(imgRef.current);
  }, [applySize]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={className}
      onLoad={(e) => applySize(e.currentTarget)}
    />
  );
}
