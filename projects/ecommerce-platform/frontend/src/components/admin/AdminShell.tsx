"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  LogOut,
  Menu,
  Package,
  ShoppingBag,
  X,
} from "lucide-react";
import { clearAdminSession, getAdminEmail } from "@/lib/adminAuth";

const links = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/products", label: "Ürünler", icon: Package },
  { href: "/admin/orders", label: "Siparişler", icon: ShoppingBag },
];

export function AdminShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setEmail(getAdminEmail() ?? "");
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  function logout() {
    clearAdminSession();
    router.push("/admin/login");
  }

  function isActive(href: string) {
    if (href === "/admin") return pathname === href;
    return pathname.startsWith(href);
  }

  return (
    <section className="admin-shell">
      <header className="admin-mobile-header">
        <div>
          <p className="eyebrow">Teddy Admin</p>
          <strong>Yönetim Paneli</strong>
        </div>

        <button
          className="admin-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <aside className={`admin-sidebar${menuOpen ? " open" : ""}`}>
        <div className="admin-sidebar-head">
          <p className="eyebrow">Teddy Admin</p>
          <h1>Yönetim</h1>
          <span>{email}</span>
        </div>

        <nav>
          {links.map(({ href, label, icon: Icon }) => (
            <Link
              className={isActive(href) ? "active" : ""}
              href={href}
              key={href}
            >
              <Icon size={17} />
              {label}
            </Link>
          ))}
        </nav>

        <button className="admin-logout-button" type="button" onClick={logout}>
          <LogOut size={17} />
          Çıkış
        </button>
      </aside>
      <div className="admin-content">{children}</div>
    </section>
  );
}
