(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[239],{796:(e,t,l)=>{Promise.resolve().then(l.bind(l,5203))},5203:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>m});var i=l(5155),a=l(2115),s=l(8500),d=l.n(s),r=l(1375),n=l(5238),o=l(5996),c=l(5341),p=l(4038);let x=(0,l(772).A)("calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);function m(){let[e,t]=(0,a.useState)(p.F.quotes),[l,s]=(0,a.useState)(!1);return(0,i.jsxs)(r.AppShell,{title:"Tedarik\xe7i Teklifleri",description:"Market i\xe7in alınan fiyat teklifleri ve toplu alım talepleri",actionLabel:"Teklif Oluştur",onAction:()=>s(!0),children:[(0,i.jsx)(n.p,{isOpen:l,title:"Yeni Tedarik\xe7i Teklifi",description:"Alış teklifi başlığı, tedarik\xe7i ve ge\xe7erlilik bilgilerini girin.",submitLabel:"Teklifi Kaydet",onClose:()=>s(!1),onCreate:function(e){let l=e.title||"Yeni Tedarik\xe7i Teklifi",i=e.supplierName||"Yeni Tedarik\xe7i",a=e.amount||"₺0";t(t=>[{id:`teklif-${Date.now()}`,quoteNumber:`ALM-2026-${String(100+t.length)}`,supplierName:i,customerName:i,title:l,amount:a,status:"Onay Bekliyor",createdAt:"Bug\xfcn",validUntil:e.validUntil||"7 g\xfcn",notes:"Panel \xfczerinden oluşturulan tedarik\xe7i alım teklifi.",items:[[l,"1 kalem",a]]},...t]),s(!1)},fields:[{name:"title",label:"Teklif Başlığı",placeholder:"S\xfct \xfcr\xfcnleri haftalık alım"},{name:"supplierName",label:"Tedarik\xe7i",placeholder:"Marmara S\xfct \xdcr\xfcnleri"},{name:"amount",label:"Tutar",placeholder:"₺9.740"},{name:"validUntil",label:"Ge\xe7erlilik",placeholder:"7 g\xfcn"}]}),(0,i.jsx)("div",{className:"mb-6 rounded-3xl panel-card p-5",children:(0,i.jsx)("div",{className:"flex items-center justify-between gap-4",children:(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{className:"text-xl font-black text-slate-950",children:"Alış Teklifleri"}),(0,i.jsx)("p",{className:"text-sm font-bold text-slate-500",children:"Tedarik\xe7ilerden gelen fiyat ve toplu alım teklifleri"})]})})}),(0,i.jsx)("div",{className:"rounded-3xl panel-card p-6",children:(0,i.jsx)("div",{className:"table-scroll",children:(0,i.jsxs)("table",{className:"w-full min-w-[1020px] text-left text-sm font-medium",children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{className:"border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500",children:[(0,i.jsx)("th",{className:"py-3",children:"Teklif"}),(0,i.jsx)("th",{children:"Tedarik\xe7i"}),(0,i.jsx)("th",{children:"Tutar"}),(0,i.jsx)("th",{children:"Durum"}),(0,i.jsx)("th",{children:"Oluşturma"}),(0,i.jsx)("th",{children:"Ge\xe7erlilik"}),(0,i.jsx)("th",{className:"text-right",children:"Aksiyon"})]})}),(0,i.jsx)("tbody",{children:e.map(e=>(0,i.jsxs)("tr",{className:"border-b border-slate-100 last:border-0 hover:bg-slate-50",children:[(0,i.jsx)("td",{className:"py-4",children:p.F.quotes.some(t=>t.id===e.id)?(0,i.jsxs)(d(),{href:`/teklifler/${e.id}`,className:"hover:text-blue-600",children:[(0,i.jsx)("p",{className:"font-black text-slate-950",children:e.title}),(0,i.jsx)("p",{className:"text-xs font-bold text-slate-500",children:e.quoteNumber})]}):(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{className:"font-black text-slate-950",children:e.title}),(0,i.jsx)("p",{className:"text-xs font-bold text-slate-500",children:e.quoteNumber})]})}),(0,i.jsx)("td",{children:e.supplierName}),(0,i.jsx)("td",{className:"text-lg font-black text-blue-600",children:e.amount}),(0,i.jsx)("td",{children:(0,i.jsx)(c.W,{status:e.status})}),(0,i.jsxs)("td",{className:"inline-flex items-center gap-1.5 py-4",children:[(0,i.jsx)(x,{size:14})," ",e.createdAt]}),(0,i.jsx)("td",{children:e.validUntil}),(0,i.jsx)("td",{className:"text-right",children:(0,i.jsx)(o.QuotePdfButton,{quote:e,compact:!0})})]},e.id))})]})})})]})}},5341:(e,t,l)=>{"use strict";l.d(t,{W:()=>s,Y:()=>d});var i=l(5155),a=l(4038);function s({status:e}){let t=a.F.statusColors[e]??"bg-slate-100 text-slate-600 border-slate-200";return(0,i.jsx)("span",{className:`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${t}`,children:e})}function d({priority:e}){let t=a.F.priorityColors[e]??"bg-slate-100 text-slate-600 border-slate-200";return(0,i.jsx)("span",{className:`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${t}`,children:e})}},5996:(e,t,l)=>{"use strict";l.d(t,{QuotePdfButton:()=>s});var i=l(5155),a=l(7946);function s({quote:e,compact:t=!1}){return(0,i.jsxs)("button",{onClick:function(){let t=window.open("","_blank","width=1000,height=780");if(!t)return;let l=e.items.map(([e,t,l])=>`<tr><td>${e}</td><td>${t}</td><td>${l}</td></tr>`).join("");t.document.write(`
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
    `),t.document.close()},className:t?"ml-auto inline-flex items-center gap-1.5 border border-slate-200 bg-white px-3 py-1.5 text-xs font-black text-slate-600":"flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-black text-slate-700",children:[(0,i.jsx)(a.A,{size:t?14:18})," ","PDF İndir"]})}},7946:(e,t,l)=>{"use strict";l.d(t,{A:()=>i});let i=(0,l(772).A)("file-down",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]])}},e=>{e.O(0,[386,375,441,794,358],()=>e(e.s=796)),_N_E=e.O()}]);