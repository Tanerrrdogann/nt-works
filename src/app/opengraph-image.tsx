import { ImageResponse } from "next/og";

export const alt = "NT Web Çözümleri";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#071225",
          color: "#f8fafc",
          padding: "70px",
          fontFamily: "Arial, Helvetica, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(148, 163, 184, 0.20), rgba(7, 18, 37, 0.16) 42%, rgba(255, 255, 255, 0.08))",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: "-120px",
            top: "-160px",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            background: "rgba(148, 163, 184, 0.22)",
            filter: "blur(20px)",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: "24px", position: "relative" }}>
          <div style={{ fontSize: 52, fontWeight: 900, letterSpacing: "-0.08em" }}>NT</div>
          <div style={{ width: 1, height: 44, background: "rgba(248, 250, 252, 0.42)" }} />
          <div style={{ fontSize: 34, fontWeight: 700, color: "#dbeafe" }}>Web Çözümleri</div>
        </div>

        <div style={{ position: "relative", maxWidth: "890px", display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 72, lineHeight: 1.03, fontWeight: 800, letterSpacing: "-0.045em" }}>
            İşletmeniz için web sitesi, katalog, e-ticaret ve özel sistemler
          </div>
          <div style={{ marginTop: 28, fontSize: 28, lineHeight: 1.45, color: "#cbd5e1" }}>
            Kurumsal web sitesi, canlı örnekler, yönetim panelleri ve yazılım çözümleri.
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative" }}>
          <div style={{ fontSize: 24, color: "#94a3b8" }}>ntwebcozumleri.com.tr</div>
          <div
            style={{
              border: "1px solid rgba(248, 250, 252, 0.26)",
              padding: "16px 24px",
              fontSize: 22,
              color: "#f8fafc",
            }}
          >
            Teklif Al
          </div>
        </div>
      </div>
    ),
    size,
  );
}
