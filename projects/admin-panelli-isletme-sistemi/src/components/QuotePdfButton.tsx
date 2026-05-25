"use client";

import { FileDown } from "lucide-react";

type QuotePdfButtonProps = {
  quote: {
    quoteNumber: string;
    supplierName: string;
    title: string;
    amount: string;
    status: string;
    createdAt: string;
    validUntil: string;
    notes: string;
    items: string[][];
  };
  compact?: boolean;
};

export function QuotePdfButton({ quote, compact = false }: QuotePdfButtonProps) {
  function openQuotePdf() {
    const reportWindow = window.open("", "_blank", "width=1000,height=780");
    if (!reportWindow) return;

    const rows = quote.items
      .map(([name, quantity, amount]) => `<tr><td>${name}</td><td>${quantity}</td><td>${amount}</td></tr>`)
      .join("");

    reportWindow.document.write(`
      <!doctype html>
      <html lang="tr">
        <head>
          <meta charset="utf-8" />
          <title>${quote.title}</title>
          <style>
            body { margin: 0; padding: 32px; font-family: Arial, Helvetica, sans-serif; color: #2a3f54; }
            .header { display: flex; justify-content: space-between; gap: 24px; border-bottom: 3px solid #1abb9c; padding-bottom: 18px; margin-bottom: 24px; }
            h1 { margin: 0; font-size: 26px; color: #2a3f54; }
            h2 { margin: 26px 0 12px; font-size: 18px; color: #5a738e; border-bottom: 1px solid #d9dee4; padding-bottom: 8px; }
            .muted { color: #73879c; font-size: 13px; line-height: 1.6; }
            .summary { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-bottom: 24px; }
            .card { border: 1px solid #d9dee4; padding: 14px; }
            .label { color: #73879c; font-size: 12px; font-weight: 700; }
            .value { margin-top: 7px; font-size: 18px; font-weight: 800; color: #2a3f54; }
            table { width: 100%; border-collapse: collapse; margin-top: 8px; }
            th { background: #2a3f54; color: #fff; text-align: left; font-size: 12px; padding: 10px; }
            td { border: 1px solid #d9dee4; padding: 10px; font-size: 12px; }
            .note { margin-top: 24px; padding: 12px; border-left: 4px solid #1abb9c; background: #f7f7f7; color: #5a738e; font-size: 12px; line-height: 1.6; }
            @media print { body { padding: 18px; } }
          </style>
        </head>
        <body>
          <div class="header">
            <div>
              <h1>${quote.title}</h1>
              <p class="muted">${quote.quoteNumber}<br/>Tedarikçi: ${quote.supplierName}</p>
            </div>
            <div class="muted">
              Oluşturma: ${quote.createdAt}<br/>
              Geçerlilik: ${quote.validUntil}<br/>
              Durum: ${quote.status}
            </div>
          </div>

          <div class="summary">
            <div class="card"><div class="label">Tedarikçi</div><div class="value">${quote.supplierName}</div></div>
            <div class="card"><div class="label">Teklif No</div><div class="value">${quote.quoteNumber}</div></div>
            <div class="card"><div class="label">Durum</div><div class="value">${quote.status}</div></div>
            <div class="card"><div class="label">Toplam</div><div class="value">${quote.amount}</div></div>
          </div>

          <h2>Teklif Kalemleri</h2>
          <table>
            <thead><tr><th>Ürün / Kalem</th><th>Miktar</th><th>Tutar</th></tr></thead>
            <tbody>${rows}</tbody>
          </table>

          <h2>Notlar</h2>
          <div class="note">${quote.notes}</div>

          <script>
            window.onload = () => {
              window.focus();
              window.print();
            };
          </script>
        </body>
      </html>
    `);
    reportWindow.document.close();
  }

  return (
    <button
      onClick={openQuotePdf}
      className={
        compact
          ? "ml-auto inline-flex items-center gap-1.5 border border-slate-200 bg-white px-3 py-1.5 text-xs font-black text-slate-600"
          : "flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700"
      }
    >
      <FileDown size={compact ? 14 : 18} /> {compact ? "PDF İndir" : "PDF İndir"}
    </button>
  );
}
