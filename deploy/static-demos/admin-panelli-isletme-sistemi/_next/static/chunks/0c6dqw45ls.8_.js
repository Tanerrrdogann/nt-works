(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,5373,t=>{"use strict";let e=(0,t.i(56420).default)("file-down",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);t.s(["FileDown",0,e],5373)},53101,t=>{"use strict";var e=t.i(43476),i=t.i(5373);t.s(["QuotePdfButton",0,function({quote:t,compact:d=!1}){return(0,e.jsxs)("button",{onClick:function(){let e=window.open("","_blank","width=1000,height=780");if(!e)return;let i=t.items.map(([t,e,i])=>`<tr><td>${t}</td><td>${e}</td><td>${i}</td></tr>`).join("");e.document.write(`
      <!doctype html>
      <html lang="tr">
        <head>
          <meta charset="utf-8" />
          <title>${t.title}</title>
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
              <h1>${t.title}</h1>
              <p class="muted">${t.quoteNumber}<br/>Tedarik\xe7i: ${t.supplierName}</p>
            </div>
            <div class="muted">
              Oluşturma: ${t.createdAt}<br/>
              Ge\xe7erlilik: ${t.validUntil}<br/>
              Durum: ${t.status}
            </div>
          </div>

          <div class="summary">
            <div class="card"><div class="label">Tedarik\xe7i</div><div class="value">${t.supplierName}</div></div>
            <div class="card"><div class="label">Teklif No</div><div class="value">${t.quoteNumber}</div></div>
            <div class="card"><div class="label">Durum</div><div class="value">${t.status}</div></div>
            <div class="card"><div class="label">Toplam</div><div class="value">${t.amount}</div></div>
          </div>

          <h2>Teklif Kalemleri</h2>
          <table>
            <thead><tr><th>\xdcr\xfcn / Kalem</th><th>Miktar</th><th>Tutar</th></tr></thead>
            <tbody>${i}</tbody>
          </table>

          <h2>Notlar</h2>
          <div class="note">${t.notes}</div>

          <script>
            window.onload = () => {
              window.focus();
              window.print();
            };
          </script>
        </body>
      </html>
    `),e.document.close()},className:d?"ml-auto inline-flex items-center gap-1.5 border border-slate-200 bg-white px-3 py-1.5 text-xs font-black text-slate-600":"flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700",children:[(0,e.jsx)(i.FileDown,{size:d?14:18})," ","PDF İndir"]})}])}]);