"use client";

import { useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function InitialRedirect() {
  const router = useRouter();
  const pathname = usePathname();
  const hasRedirected = useRef(false);

  useEffect(() => {
    if (pathname === "/" && !hasRedirected.current) {
      hasRedirected.current = true;
      router.replace("/notes/home");
    }
  }, [pathname, router]);

  return null;
}
