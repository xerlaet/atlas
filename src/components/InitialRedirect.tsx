"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function InitialRedirect() {
  const router = useRouter();
  const pathname = usePathname();
  const [hasRedirected, setHasRedirected] = useState(false);

  useEffect(() => {
    // Only redirect if we are at the exact root and haven't redirected in this session
    if (pathname === "/" && !hasRedirected) {
      setHasRedirected(true);
      router.replace("/notes/home");
    }
  }, [pathname, router, hasRedirected]);

  return null;
}
