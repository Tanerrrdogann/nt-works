"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut } from "lucide-react";
import { clearAdminSession, getAdminEmail } from "@/lib/adminAuth";

export function AdminShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const email = typeof window !== "undefined" ? getAdminEmail() : "";

  function logout() {
    clearAdminSession();
    router.push("/admin/login");
  }

  return (
    <section className="admin-shell">
      <aside className="admin-sidebar">
        <div>
          <p className="eyebrow">Teddy Admin</p>
          <h1>Yönetim</h1>
          <span>{email}</span>
        </div>
        <nav>
          <Link href="/admin">Dashboard</Link>
          <Link href="/admin/products">Ürünler</Link>
          <Link href="/admin/orders">Siparişler</Link>
        </nav>
        <button type="button" onClick={logout}>
          <LogOut size={16} />
          Çıkış
        </button>
      </aside>
      <div className="admin-content">{children}</div>
    </section>
  );
}
