(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,33521,e=>{"use strict";var t=e.i(43476),l=e.i(45483);e.s(["PriorityBadge",0,function({priority:e}){let i=l.crmConfig.priorityColors[e]??"bg-slate-100 text-slate-600 border-slate-200";return(0,t.jsx)("span",{className:`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${i}`,children:e})},"StatusBadge",0,function({status:e}){let i=l.crmConfig.statusColors[e]??"bg-slate-100 text-slate-600 border-slate-200";return(0,t.jsx)("span",{className:`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${i}`,children:e})}])},5373,e=>{"use strict";let t=(0,e.i(56420).default)("file-down",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);e.s(["FileDown",0,t],5373)},53101,e=>{"use strict";var t=e.i(43476),l=e.i(5373);e.s(["QuotePdfButton",0,function({quote:e,compact:i=!1}){return(0,t.jsxs)("button",{onClick:function(){let t=window.open("","_blank","width=1000,height=780");if(!t)return;let l=e.items.map(([e,t,l])=>`<tr><td>${e}</td><td>${t}</td><td>${l}</td></tr>`).join("");t.document.write(`
      <!doctype html>
      <html lang="tr">
        <head>
          <meta charset="utf-8" />
          <title>${e.title}</title>
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
              <h1>${e.title}</h1>
              <p class="muted">${e.quoteNumber}<br/>Tedarik\xe7i: ${e.supplierName}</p>
            </div>
            <div class="muted">
              Oluşturma: ${e.createdAt}<br/>
              Ge\xe7erlilik: ${e.validUntil}<br/>
              Durum: ${e.status}
            </div>
          </div>

          <div class="summary">
            <div class="card"><div class="label">Tedarik\xe7i</div><div class="value">${e.supplierName}</div></div>
            <div class="card"><div class="label">Teklif No</div><div class="value">${e.quoteNumber}</div></div>
            <div class="card"><div class="label">Durum</div><div class="value">${e.status}</div></div>
            <div class="card"><div class="label">Toplam</div><div class="value">${e.amount}</div></div>
          </div>

          <h2>Teklif Kalemleri</h2>
          <table>
            <thead><tr><th>\xdcr\xfcn / Kalem</th><th>Miktar</th><th>Tutar</th></tr></thead>
            <tbody>${l}</tbody>
          </table>

          <h2>Notlar</h2>
          <div class="note">${e.notes}</div>

          <script>
            window.onload = () => {
              window.focus();
              window.print();
            };
          </script>
        </body>
      </html>
    `),t.document.close()},className:i?"ml-auto inline-flex items-center gap-1.5 border border-slate-200 bg-white px-3 py-1.5 text-xs font-black text-slate-600":"flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700",children:[(0,t.jsx)(l.FileDown,{size:i?14:18})," ","PDF İndir"]})}])},79652,e=>{"use strict";var t=e.i(43476),l=e.i(71645),i=e.i(22016),a=e.i(49830),s=e.i(78859),d=e.i(53101),r=e.i(33521),n=e.i(45483);let o=(0,e.i(56420).default)("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);e.s(["default",0,function(){let[e,c]=(0,l.useState)(n.crmConfig.quotes),[x,p]=(0,l.useState)(!1);return(0,t.jsxs)(a.AppShell,{title:"Tedarikçi Teklifleri",description:"Market için alınan fiyat teklifleri ve toplu alım talepleri",actionLabel:"Teklif Oluştur",onAction:()=>p(!0),children:[(0,t.jsx)(s.QuickCreateModal,{isOpen:x,title:"Yeni Tedarikçi Teklifi",description:"Alış teklifi başlığı, tedarikçi ve geçerlilik bilgilerini girin.",submitLabel:"Teklifi Kaydet",onClose:()=>p(!1),onCreate:function(e){let t=e.title||"Yeni Tedarikçi Teklifi",l=e.supplierName||"Yeni Tedarikçi",i=e.amount||"₺0";c(a=>[{id:`teklif-${Date.now()}`,quoteNumber:`ALM-2026-${String(100+a.length)}`,supplierName:l,customerName:l,title:t,amount:i,status:"Onay Bekliyor",createdAt:"Bugün",validUntil:e.validUntil||"7 gün",notes:"Panel üzerinden oluşturulan tedarikçi alım teklifi.",items:[[t,"1 kalem",i]]},...a]),p(!1)},fields:[{name:"title",label:"Teklif Başlığı",placeholder:"Süt ürünleri haftalık alım"},{name:"supplierName",label:"Tedarikçi",placeholder:"Marmara Süt Ürünleri"},{name:"amount",label:"Tutar",placeholder:"₺9.740"},{name:"validUntil",label:"Geçerlilik",placeholder:"7 gün"}]}),(0,t.jsx)("div",{className:"mb-6 rounded-3xl panel-card p-5",children:(0,t.jsx)("div",{className:"flex items-center justify-between gap-4",children:(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"text-xl font-black text-slate-950",children:"Alış Teklifleri"}),(0,t.jsx)("p",{className:"text-sm font-bold text-slate-500",children:"Tedarikçilerden gelen fiyat ve toplu alım teklifleri"})]})})}),(0,t.jsx)("div",{className:"rounded-3xl panel-card p-6",children:(0,t.jsx)("div",{className:"table-scroll",children:(0,t.jsxs)("table",{className:"w-full min-w-[1020px] text-left text-sm font-medium",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500",children:[(0,t.jsx)("th",{className:"py-3",children:"Teklif"}),(0,t.jsx)("th",{children:"Tedarikçi"}),(0,t.jsx)("th",{children:"Tutar"}),(0,t.jsx)("th",{children:"Durum"}),(0,t.jsx)("th",{children:"Oluşturma"}),(0,t.jsx)("th",{children:"Geçerlilik"}),(0,t.jsx)("th",{className:"text-right",children:"Aksiyon"})]})}),(0,t.jsx)("tbody",{children:e.map(e=>(0,t.jsxs)("tr",{className:"border-b border-slate-100 last:border-0 hover:bg-slate-50",children:[(0,t.jsx)("td",{className:"py-4",children:n.crmConfig.quotes.some(t=>t.id===e.id)?(0,t.jsxs)(i.default,{href:`/teklifler/${e.id}`,className:"hover:text-blue-600",children:[(0,t.jsx)("p",{className:"font-black text-slate-950",children:e.title}),(0,t.jsx)("p",{className:"text-xs font-bold text-slate-500",children:e.quoteNumber})]}):(0,t.jsxs)("div",{children:[(0,t.jsx)("p",{className:"font-black text-slate-950",children:e.title}),(0,t.jsx)("p",{className:"text-xs font-bold text-slate-500",children:e.quoteNumber})]})}),(0,t.jsx)("td",{children:e.supplierName}),(0,t.jsx)("td",{className:"text-lg font-black text-blue-600",children:e.amount}),(0,t.jsx)("td",{children:(0,t.jsx)(r.StatusBadge,{status:e.status})}),(0,t.jsxs)("td",{className:"inline-flex items-center gap-1.5 py-4",children:[(0,t.jsx)(o,{size:14})," ",e.createdAt]}),(0,t.jsx)("td",{children:e.validUntil}),(0,t.jsx)("td",{className:"text-right",children:(0,t.jsx)(d.QuotePdfButton,{quote:e,compact:!0})})]},e.id))})]})})})]})}],79652)}]);