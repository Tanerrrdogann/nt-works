"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { crmConfig } from "@/config/crm";
import { QuickCreateModal } from "./QuickCreateModal";
import { 
  LayoutDashboard, Users, Briefcase, CheckSquare, 
  FileText, BarChart3, Settings, Bell, Search, Menu, X,
  Package, Boxes, Truck, ShoppingCart, ReceiptText
} from "lucide-react";

type AppShellProps = {
  title: string;
  description?: string;
  children: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
};

const iconMap = {
  dashboard: <LayoutDashboard size={20} />,
  products: <Package size={20} />,
  stock: <Boxes size={20} />,
  suppliers: <Truck size={20} />,
  sales: <ReceiptText size={20} />,
  orders: <ShoppingCart size={20} />,
  customers: <Users size={20} />,
  jobs: <Briefcase size={20} />,
  tasks: <CheckSquare size={20} />,
  quotes: <FileText size={20} />,
  reports: <BarChart3 size={20} />,
  settings: <Settings size={20} />,
};

const logoSrc = "/admin-panelli-isletme-sistemi/minta-market-logo.png";

export function AppShell({ title, description, children, actionLabel = "Yeni Kayıt", onAction }: AppShellProps) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isGenericActionOpen, setIsGenericActionOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f7f7f7] text-[#52677f] font-medium">
      <QuickCreateModal
        isOpen={isGenericActionOpen}
        title={actionLabel}
        description={`${title} ekranı için hızlı işlem kaydı oluşturun.`}
        submitLabel="Kaydet"
        onClose={() => setIsGenericActionOpen(false)}
        onCreate={() => setIsGenericActionOpen(false)}
        fields={[
          { name: "title", label: "İşlem Başlığı", placeholder: actionLabel },
          { name: "note", label: "Not", placeholder: "Kısa açıklama" },
          { name: "owner", label: "Sorumlu", placeholder: crmConfig.company.userName },
        ]}
      />
      <div className="flex min-h-screen relative">
        {/* Desktop Sidebar */}
        <aside className={`fixed left-0 top-0 z-30 hidden h-screen shrink-0 bg-[#2a3f54] transition-all duration-300 lg:flex lg:flex-col ${isSidebarCollapsed ? "w-[56px]" : "w-[230px]"}`}>
          <Link href="/" className="flex h-[68px] items-center gap-3 overflow-hidden border-b border-[#233646] px-2 text-white transition hover:bg-[#24384b]">
            <span className="grid h-10 w-10 shrink-0 place-items-center overflow-hidden bg-[#1abb9c] shadow-[inset_0_0_0_1px_rgba(255,255,255,.22)]">
              <Image src={logoSrc} alt="Minta Market" width={40} height={40} unoptimized className="h-full w-full object-cover" />
            </span>
            <span className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${isSidebarCollapsed ? "w-0 opacity-0" : "w-[168px] opacity-100"}`}>
              <span className="block text-[18px] font-black leading-tight tracking-tight">Minta Market</span>
              <span className="mt-0.5 block text-[10px] font-black uppercase tracking-[0.28em] text-[#1abb9c]">Yönetim Paneli</span>
            </span>
          </Link>

          <nav className="flex-1">
            {crmConfig.sidebarNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link key={item.key} href={item.href} title={item.label} className={`group relative flex h-11 items-center gap-3 overflow-hidden border-t border-[#31495f] px-2 text-sm font-medium text-white transition ${isActive ? "bg-[#1abb9c]" : "hover:bg-[#334a60]"}`}>
                  <span className="grid h-10 w-10 shrink-0 place-items-center text-white/95">{iconMap[item.key as keyof typeof iconMap]}</span>
                  <span className={`whitespace-nowrap transition-all duration-300 ${isSidebarCollapsed ? "w-0 opacity-0" : "w-[150px] opacity-100"}`}>{item.label}</span>
                  {isActive ? <span className="absolute right-0 top-0 h-full w-1 bg-white/80" /> : null}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Main Area */}
        <div className={`flex min-w-0 flex-1 flex-col bg-[#f7f7f7] transition-[margin] duration-300 ${isSidebarCollapsed ? "lg:ml-[56px]" : "lg:ml-[230px]"}`}>
          {/* Topbar */}
          <header className="sticky top-0 z-20 border-b border-[#d9dee4] bg-[#ededed]">
            <div className="flex h-[57px] items-center justify-between gap-2 px-3 lg:gap-4 lg:px-5">
              <div className="flex items-center gap-3">
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="p-2 -ml-2 text-[#5a738e] hover:bg-white lg:hidden">
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <button onClick={() => setIsSidebarCollapsed((value) => !value)} className="hidden p-2 text-[#5a738e] transition hover:bg-white lg:block" title="Menüyü daralt / genişlet">
                  <Menu size={28} />
                </button>
                <div className="min-w-0">
                  <h1 className="truncate text-lg font-normal text-[#5a738e] tracking-tight sm:text-xl">{title}</h1>
                  {description && <p className="hidden text-xs font-medium text-[#73879c] md:block">{description}</p>}
                </div>
              </div>
              <div className="flex items-center gap-3 md:gap-4">
                <div className="hidden xl:flex items-center relative">
                  <Search size={17} className="absolute left-3 text-[#73879c]" />
                  <input className="w-72 border border-[#d9dee4] bg-white py-2 pl-10 pr-3 text-sm outline-none transition focus:border-[#1abb9c]" placeholder="Barkod, ürün veya müşteri ara..." />
                </div>
                <div className="relative">
                <button onClick={() => setIsNotificationsOpen((value) => !value)} className="relative flex h-9 w-9 items-center justify-center bg-transparent text-[#5a738e] transition hover:bg-white" title="Bildirimler">
                  <Bell size={18} />
                  <span className="absolute right-1 top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#1abb9c] text-[10px] font-bold text-white">{crmConfig.notifications.length}</span>
                </button>
                {isNotificationsOpen ? (
                  <div className="absolute right-0 top-11 z-50 w-[min(360px,calc(100vw-1.5rem))] border border-[#d9dee4] bg-white shadow-xl">
                    <div className="flex items-center justify-between border-b border-[#e6e9ed] bg-[#f7f7f7] px-4 py-3">
                      <h3 className="font-bold text-[#5a738e]">Bildirimler</h3>
                      <button onClick={() => setIsNotificationsOpen(false)} className="text-xs font-bold text-[#1abb9c]">Kapat</button>
                    </div>
                    <div className="max-h-[360px] overflow-y-auto">
                      {crmConfig.notifications.map((notification) => (
                        <div key={notification.id} className="border-b border-[#edf0f2] px-4 py-3 last:border-b-0">
                          <div className="flex items-start gap-3">
                            <span className={`mt-1 h-2.5 w-2.5 shrink-0 rounded-full ${notification.tone === "danger" ? "bg-red-500" : notification.tone === "warning" ? "bg-amber-500" : notification.tone === "success" ? "bg-[#1abb9c]" : "bg-[#5a738e]"}`} />
                            <div>
                              <p className="text-sm font-black text-[#2a3f54]">{notification.title}</p>
                              <p className="mt-1 text-sm leading-5 text-[#73879c]">{notification.text}</p>
                              <p className="mt-1 text-xs font-bold text-[#a0adba]">{notification.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ) : null}
                </div>
                <button onClick={onAction ?? (() => setIsGenericActionOpen(true))} className="hidden bg-[#1abb9c] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#169f85] sm:flex">
                  + {actionLabel}
                </button>
              </div>
            </div>
            {/* Mobile Nav Drawer */}
            {isMobileMenuOpen && (
              <div className="absolute left-0 top-full z-50 flex max-h-[calc(100vh-57px)] w-full flex-col gap-1 overflow-y-auto border-b border-[#d9dee4] bg-white p-3 shadow-xl lg:hidden">
                {crmConfig.sidebarNav.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link key={item.key} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className={`flex items-center gap-3 px-4 py-3 text-sm font-semibold ${isActive ? "bg-[#1abb9c] text-white" : "text-[#5a738e] hover:bg-slate-50"}`}>
                      {iconMap[item.key as keyof typeof iconMap]} {item.label}
                    </Link>
                  );
                })}
              </div>
            )}
          </header>
          <main className="w-full min-w-0 flex-1 p-3 sm:p-4 lg:p-5">{children}</main>
        </div>
      </div>
    </div>
  );
}
