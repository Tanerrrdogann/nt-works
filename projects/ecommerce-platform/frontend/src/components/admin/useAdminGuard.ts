"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAdminToken } from "@/lib/adminAuth";

export function useAdminGuard() {
  const router = useRouter();
  const [token, setToken] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedToken = getAdminToken();

    if (!storedToken) {
      router.push("/admin/login");
      return;
    }

    setToken(storedToken);
    setReady(true);
  }, [router]);

  return { token, ready };
}
