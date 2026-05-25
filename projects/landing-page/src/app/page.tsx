import { siteConfig } from "@/config/site";

const landingPath = "/landing-page/landing";

function PanelIcon({ icon }: { icon: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className: "h-7 w-7",
    "aria-hidden": true,
  };

  if (icon === "cup") {
    return (
      <svg {...common}>
        <path d="M5 8h11v6.5A4.5 4.5 0 0 1 11.5 19h-2A4.5 4.5 0 0 1 5 14.5V8Z" />
        <path d="M16 10h2.2a2.3 2.3 0 0 1 0 4.6H16" />
        <path d="M7 4.5h7" />
      </svg>
    );
  }

  if (icon === "leaf") {
    return (
      <svg {...common}>
        <path d="M5 19c8.5-.8 13-5.3 14-14-8.7.8-13.2 5.3-14 14Z" />
        <path d="M5 19 15 9" />
      </svg>
    );
  }

  if (icon === "frame") {
    return (
      <svg {...common}>
        <rect x="4" y="5" width="16" height="14" rx="2.5" />
        <path d="m7 16 3.2-3.2a1.4 1.4 0 0 1 2 0L16 16" />
        <path d="M15.5 10.5h.01" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M12 21s7-5.1 7-11a7 7 0 1 0-14 0c0 5.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#151311] text-white">
      <section className="entry-screen relative grid min-h-screen place-items-center px-5 py-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(180deg, rgba(11,9,8,.2), rgba(11,9,8,.48)), url(${siteConfig.hero.entryImage})`,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(255,255,255,.2),transparent_32%)]" />
        <div className="relative z-10 w-full max-w-5xl">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.panels.map((item) => (
              <a key={item.href} href={`${landingPath}${item.href}`} className="entry-card group">
                <span className="entry-card-icon">
                  <PanelIcon icon={item.icon} />
                </span>
                <span className="entry-card-label">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
