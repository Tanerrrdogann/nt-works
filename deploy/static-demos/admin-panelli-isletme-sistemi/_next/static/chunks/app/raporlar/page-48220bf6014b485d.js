(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[254],{1012:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(772).A)("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]])},1421:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>h});var s=a(5155),l=a(2115),r=a(1375),d=a(5238),i=a(5341),n=a(4038);let o=(0,a(772).A)("trending-up",[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]);var c=a(1012),p=a(3089),x=a(7946);function h(){let[e,t]=(0,l.useState)(n.F.generatedReports),[a,h]=(0,l.useState)(!1),b=Math.max(...n.F.weeklySalesSeries.map(e=>e.sales)),u=Math.max(...n.F.weeklySalesSeries.map(e=>e.transactions)),f=[["Bug\xfcnk\xfc satış",n.F.reports.todaySales],["Bu haftaki toplam satış",n.F.reports.weeklySales],["Bu ay tahmini ciro",n.F.reports.monthlyRevenue],["En aktif tedarik\xe7i",n.F.reports.mostActiveSupplier]];function k(e="Detaylı Market Raporu"){let t=window.open("","_blank","width=1100,height=820");if(!t)return;let a=n.F.weeklySalesSeries.map(e=>`<tr><td>${e.day}</td><td>₺${e.sales.toLocaleString("tr-TR")}</td><td>${e.transactions}</td></tr>`).join(""),s=n.F.categorySummary.map(e=>`<tr><td>${e.name}</td><td>₺${e.value.toLocaleString("tr-TR")}</td><td>%${e.percent}</td></tr>`).join(""),l=n.F.products.filter(e=>["Azaldı","Kritik","T\xfckendi","SKT Yaklaşıyor"].includes(e.status)).map(e=>`<tr><td>${e.name}</td><td>${e.stock}</td><td>${e.minStock}</td><td>${e.status}</td><td>${e.expiryDate}</td></tr>`).join(""),r=n.F.cashSummary.map(([e,t])=>`<tr><td>${e}</td><td>${t}</td></tr>`).join(""),d=n.F.staffWorkload.map(e=>`<tr><td>${e.name}</td><td>${e.role}</td><td>${e.openTasks}</td><td>${e.completedTasks}</td><td>${e.shift}</td></tr>`).join("");t.document.write(`
      <!doctype html>
      <html lang="tr">
        <head>
          <meta charset="utf-8" />
          <title>${e}</title>
          <style>
            * { box-sizing: border-box; }
            body { margin: 0; padding: 32px; font-family: Arial, Helvetica, sans-serif; color: #2a3f54; background: #fff; }
            .header { display: flex; justify-content: space-between; gap: 24px; border-bottom: 3px solid #1abb9c; padding-bottom: 18px; margin-bottom: 24px; }
            h1 { margin: 0; font-size: 28px; color: #2a3f54; }
            h2 { margin: 28px 0 12px; font-size: 18px; color: #5a738e; border-bottom: 1px solid #d9dee4; padding-bottom: 8px; }
            .muted { color: #73879c; font-size: 13px; line-height: 1.6; }
            .summary { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin: 18px 0 8px; }
            .card { border: 1px solid #d9dee4; padding: 14px; }
            .label { color: #73879c; font-size: 12px; font-weight: 700; }
            .value { margin-top: 6px; font-size: 22px; font-weight: 800; color: #2a3f54; }
            table { width: 100%; border-collapse: collapse; margin-bottom: 12px; page-break-inside: avoid; }
            th { background: #2a3f54; color: #fff; text-align: left; font-size: 12px; padding: 9px; }
            td { border: 1px solid #d9dee4; padding: 9px; font-size: 12px; }
            .note { margin-top: 24px; padding: 12px; border-left: 4px solid #1abb9c; background: #f7f7f7; color: #5a738e; font-size: 12px; }
            @media print { body { padding: 18px; } .no-print { display: none; } }
          </style>
        </head>
        <body>
          <div class="header">
            <div>
              <h1>${e}</h1>
              <p class="muted">${n.F.company.appName} \xb7 ${n.F.company.branch}<br/>${n.F.company.location}</p>
            </div>
            <div class="muted">
              Oluşturma: ${new Date().toLocaleDateString("tr-TR")}<br/>
              Sorumlu: ${n.F.company.userName}<br/>
              Para birimi: TL
            </div>
          </div>

          <div class="summary">
            <div class="card"><div class="label">Bug\xfcnk\xfc Satış</div><div class="value">${n.F.reports.todaySales}</div></div>
            <div class="card"><div class="label">Haftalık Satış</div><div class="value">${n.F.reports.weeklySales}</div></div>
            <div class="card"><div class="label">Aylık Ciro</div><div class="value">${n.F.reports.monthlyRevenue}</div></div>
            <div class="card"><div class="label">Kritik Stok</div><div class="value">${n.F.reports.criticalStockCount}</div></div>
          </div>

          <h2>Kasa \xd6zeti</h2>
          <table><thead><tr><th>Kalem</th><th>Tutar</th></tr></thead><tbody>${r}</tbody></table>

          <h2>Haftalık Satış ve İşlem Sayısı</h2>
          <table><thead><tr><th>G\xfcn</th><th>Satış</th><th>İşlem</th></tr></thead><tbody>${a}</tbody></table>

          <h2>Kategori Performansı</h2>
          <table><thead><tr><th>Kategori</th><th>Satış</th><th>Pay</th></tr></thead><tbody>${s}</tbody></table>

          <h2>Stok Riskleri</h2>
          <table><thead><tr><th>\xdcr\xfcn</th><th>Stok</th><th>Minimum</th><th>Durum</th><th>SKT</th></tr></thead><tbody>${l}</tbody></table>

          <h2>Personel G\xf6rev Y\xfck\xfc</h2>
          <table><thead><tr><th>Personel</th><th>Rol</th><th>A\xe7ık G\xf6rev</th><th>Tamamlanan</th><th>Vardiya</th></tr></thead><tbody>${d}</tbody></table>

          <div class="note">
            Bu rapor; satış, stok, kasa, tedarik ve personel g\xf6rev verilerinden hazırlanmıştır. Yazdır ekranında “PDF olarak kaydet” se\xe7eneğiyle PDF dosyası alınabilir.
          </div>
          <script>
            window.onload = () => {
              window.focus();
              window.print();
            };
          </script>
        </body>
      </html>
    `),t.document.close()}return(0,s.jsxs)(r.AppShell,{title:"Raporlar",description:"Kasa, stok, ciro ve tedarik performansı",actionLabel:"Detaylı PDF Raporu Al",onAction:()=>k(),children:[(0,s.jsx)(d.p,{isOpen:a,title:"Rapor Oluştur",description:"Rapor t\xfcr\xfc, d\xf6nem ve sorumlu bilgisiyle yeni rapor hazırlayın.",submitLabel:"Raporu Oluştur",onClose:()=>h(!1),onCreate:function(e){t(t=>[{id:`rapor-${Date.now()}`,title:e.title||"Yeni Rapor",period:e.period||"Bug\xfcn",owner:e.owner||"Taner",status:"Hazır"},...t])},fields:[{name:"title",label:"Rapor Adı",placeholder:"G\xfcn sonu kasa raporu"},{name:"period",label:"D\xf6nem",placeholder:"Bug\xfcn / Bu hafta"},{name:"owner",label:"Sorumlu",placeholder:"Taner"}]}),(0,s.jsx)("section",{className:"grid gap-5 md:grid-cols-2 xl:grid-cols-4",children:f.map(([e,t])=>(0,s.jsxs)("div",{className:"rounded-3xl panel-card p-6",children:[(0,s.jsx)("p",{className:"text-sm font-black text-slate-500",children:e}),(0,s.jsx)("p",{className:"mt-3 text-3xl font-black text-slate-950",children:t})]},e))}),(0,s.jsxs)("section",{className:"mt-6 grid gap-6 lg:grid-cols-3",children:[(0,s.jsxs)("div",{className:"rounded-3xl panel-card p-6",children:[(0,s.jsx)(o,{className:"text-[#1abb9c]",size:30}),(0,s.jsx)("h2",{className:"mt-4 text-xl font-black text-slate-950",children:"Satış Performansı"}),(0,s.jsxs)("div",{className:"mt-5 space-y-4",children:[(0,s.jsx)(m,{label:"En \xe7ok satan \xfcr\xfcn",value:n.F.reports.bestSeller}),(0,s.jsx)(m,{label:"En az satan \xfcr\xfcn",value:n.F.reports.leastSeller}),(0,s.jsx)(m,{label:"En \xe7ok k\xe2r bırakan",value:n.F.reports.mostProfitable})]})]}),(0,s.jsxs)("div",{className:"rounded-3xl panel-card p-6",children:[(0,s.jsx)(c.A,{className:"text-amber-600",size:30}),(0,s.jsx)("h2",{className:"mt-4 text-xl font-black text-slate-950",children:"Stok Riskleri"}),(0,s.jsxs)("div",{className:"mt-5 space-y-4",children:[(0,s.jsx)(m,{label:"Kritik stok sayısı",value:n.F.reports.criticalStockCount}),(0,s.jsx)(m,{label:"SKT riski olan \xfcr\xfcn",value:n.F.reports.expiryRiskCount}),(0,s.jsx)(m,{label:"Tedarik bekleyen",value:"4 sipariş"})]})]}),(0,s.jsxs)("div",{className:"rounded-3xl panel-card p-6",children:[(0,s.jsx)(p.A,{className:"text-[#1abb9c]",size:30}),(0,s.jsx)("h2",{className:"mt-4 text-xl font-black text-slate-950",children:"Personel G\xf6rev Y\xfck\xfc"}),(0,s.jsxs)("div",{className:"mt-5 space-y-4",children:[n.F.staffWorkload.slice(0,2).map(e=>(0,s.jsx)(m,{label:e.name,value:`${e.openTasks} a\xe7ık g\xf6rev`},e.name)),(0,s.jsx)(m,{label:"Tamamlama oranı",value:n.F.reports.taskCompletionRate})]})]})]}),(0,s.jsxs)("section",{className:"mt-6 grid gap-6 md:grid-cols-2",children:[(0,s.jsxs)("div",{className:"panel-card rounded-3xl p-8",children:[(0,s.jsx)("h3",{className:"text-lg font-extrabold text-slate-950",children:"Haftalık Satış \xd6zeti"}),(0,s.jsx)("div",{className:"mt-6 flex h-44 items-end gap-2 rounded-2xl border border-slate-100 bg-slate-50 p-4",children:n.F.weeklySalesSeries.map(e=>(0,s.jsx)("div",{className:"relative flex-1 rounded-lg bg-[#1abb9c]",style:{height:`${e.sales/b*100}%`},children:(0,s.jsxs)("span",{className:"absolute -top-6 w-full text-center text-[10px] font-black text-[#169f85]",children:["₺",Math.round(e.sales/1e3),"k"]})},e.day))})]}),(0,s.jsxs)("div",{className:"panel-card rounded-3xl p-8",children:[(0,s.jsx)("h3",{className:"text-lg font-extrabold text-slate-950",children:"G\xfcnl\xfck İşlem Sayısı"}),(0,s.jsx)("div",{className:"mt-6 flex h-44 items-end gap-2 rounded-2xl border border-slate-100 bg-slate-50 p-4",children:n.F.weeklySalesSeries.map(e=>(0,s.jsx)("div",{className:"relative flex-1 rounded-lg bg-[#5a738e]",style:{height:`${e.transactions/u*100}%`},children:(0,s.jsx)("span",{className:"absolute -top-6 w-full text-center text-[10px] font-black text-[#5a738e]",children:e.transactions})},e.day))})]})]}),(0,s.jsxs)("section",{className:"mt-6 rounded-3xl panel-card p-6",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",children:[(0,s.jsx)("h3",{className:"text-lg font-extrabold text-slate-950",children:"Oluşturulan Raporlar"}),(0,s.jsx)("button",{onClick:()=>h(!0),className:"inline-flex items-center justify-center gap-2 bg-[#5a738e] px-4 py-2 text-sm font-black text-white transition hover:bg-[#2a3f54]",children:"Rapor Oluştur"})]}),(0,s.jsx)("div",{className:"mt-5 table-scroll",children:(0,s.jsxs)("table",{className:"w-full min-w-[760px] text-left text-sm font-medium",children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{className:"border-b border-slate-200 text-xs uppercase tracking-wider text-slate-500",children:[(0,s.jsx)("th",{className:"py-3",children:"Rapor"}),(0,s.jsx)("th",{children:"D\xf6nem"}),(0,s.jsx)("th",{children:"Sorumlu"}),(0,s.jsx)("th",{children:"Durum"}),(0,s.jsx)("th",{className:"text-right",children:"Aksiyon"})]})}),(0,s.jsx)("tbody",{children:e.map(e=>(0,s.jsxs)("tr",{className:"border-b border-slate-100 last:border-0",children:[(0,s.jsx)("td",{className:"py-4 font-black text-slate-950",children:e.title}),(0,s.jsx)("td",{children:e.period}),(0,s.jsx)("td",{children:e.owner}),(0,s.jsx)("td",{children:(0,s.jsx)(i.W,{status:e.status})}),(0,s.jsx)("td",{className:"text-right",children:(0,s.jsxs)("button",{onClick:()=>k(e.title),className:"inline-flex items-center gap-2 bg-[#1abb9c] px-3 py-1.5 text-xs font-black text-white",children:[(0,s.jsx)(x.A,{size:14})," PDF Al"]})})]},e.id))})]})})]})]})}function m({label:e,value:t}){return(0,s.jsxs)("div",{className:"flex items-center justify-between rounded-2xl bg-slate-50 p-4",children:[(0,s.jsx)("span",{className:"text-sm font-bold text-slate-500",children:e}),(0,s.jsx)("span",{className:"font-black text-slate-950",children:t})]})}},4810:(e,t,a)=>{Promise.resolve().then(a.bind(a,1421))},5341:(e,t,a)=>{"use strict";a.d(t,{W:()=>r,Y:()=>d});var s=a(5155),l=a(4038);function r({status:e}){let t=l.F.statusColors[e]??"bg-slate-100 text-slate-600 border-slate-200";return(0,s.jsx)("span",{className:`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${t}`,children:e})}function d({priority:e}){let t=l.F.priorityColors[e]??"bg-slate-100 text-slate-600 border-slate-200";return(0,s.jsx)("span",{className:`inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold ${t}`,children:e})}},7946:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(772).A)("file-down",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]])}},e=>{e.O(0,[386,375,441,794,358],()=>e(e.s=4810)),_N_E=e.O()}]);