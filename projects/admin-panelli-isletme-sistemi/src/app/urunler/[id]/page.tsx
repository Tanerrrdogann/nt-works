import { notFound } from "next/navigation";
import { AppShell } from "@/components/AppShell";
import { StatusBadge } from "@/components/StatusBadge";
import { crmConfig } from "@/config/crm";

export function generateStaticParams() {
  return crmConfig.products.map((product) => ({ id: product.id }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = crmConfig.products.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  const movements = crmConfig.stockMovements.filter((movement) => movement.product === product.name);
  const relatedSupplier = crmConfig.suppliers.find((supplier) => supplier.category === product.category) ?? crmConfig.suppliers[0];
  const marginText = calculateMargin(product.buyPrice, product.salePrice);

  return (
    <AppShell
      title={product.name}
      description="Ürün kartı, stok durumu, fiyat ve tedarik bilgisi"
      actionLabel="Stok Güncelle"
    >
      <section className="grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-3xl panel-card p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">{product.category}</p>
              <h2 className="mt-3 text-3xl font-black text-slate-950">{product.name}</h2>
              <p className="mt-3 text-sm font-bold text-slate-500">Barkod: {product.barcode}</p>
            </div>
            <StatusBadge status={product.status} />
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <InfoCard label="Alış Fiyatı" value={product.buyPrice} />
            <InfoCard label="Satış Fiyatı" value={product.salePrice} strong />
            <InfoCard label="Mevcut Stok" value={`${product.stock} adet`} />
            <InfoCard label="Minimum Stok" value={`${product.minStock} adet`} />
            <InfoCard label="Son Kullanma Tarihi" value={product.expiryDate} />
            <InfoCard label="Tahmini Kâr Oranı" value={marginText} />
          </div>
        </div>

        <div className="grid gap-6">
          <div className="rounded-3xl panel-card p-6">
            <h2 className="text-xl font-black text-slate-950">Tedarik Bilgisi</h2>
            <div className="mt-5 rounded-2xl bg-slate-50 p-5">
              <p className="font-black text-slate-950">{relatedSupplier.name}</p>
              <p className="mt-1 text-sm font-bold text-slate-500">
                {relatedSupplier.contact} · {relatedSupplier.phone}
              </p>
              <p className="mt-3 text-sm text-slate-600">
                Son sipariş: {relatedSupplier.lastOrder} · Cari durum: {relatedSupplier.balance}
              </p>
            </div>
          </div>

          <div className="rounded-3xl panel-card p-6">
            <h2 className="text-xl font-black text-slate-950">Stok Aksiyonu</h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <button className="rounded-2xl bg-[#1abb9c] px-4 py-3 text-sm font-black text-white">Stok Girişi</button>
              <button className="rounded-2xl bg-slate-950 px-4 py-3 text-sm font-black text-white">Tedarik Siparişi Aç</button>
              <button className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-black text-slate-700">Etiket Yazdır</button>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-6 rounded-3xl panel-card p-6">
        <h2 className="text-xl font-black text-slate-950">Son Stok Hareketleri</h2>
        <div className="mt-5 grid gap-3">
          {(movements.length ? movements : crmConfig.stockMovements.slice(0, 3)).map((movement) => (
            <div key={movement.id} className="grid gap-3 rounded-2xl bg-slate-50 p-4 md:grid-cols-[1fr_auto_auto] md:items-center">
              <div>
                <p className="font-black text-slate-950">{movement.product}</p>
                <p className="text-xs font-bold text-slate-500">{movement.reason} · {movement.time}</p>
              </div>
              <span className="font-black text-slate-700">{movement.type}</span>
              <span className="text-lg font-black text-blue-600">{movement.amount}</span>
            </div>
          ))}
        </div>
      </section>
    </AppShell>
  );
}

function InfoCard({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <p className="text-xs font-black uppercase tracking-wider text-slate-400">{label}</p>
      <p className={`mt-2 text-lg font-black ${strong ? "text-blue-600" : "text-slate-950"}`}>{value}</p>
    </div>
  );
}

function calculateMargin(buyPrice: string, salePrice: string) {
  const buy = Number(buyPrice.replace(/[^\d,]/g, "").replace(",", "."));
  const sale = Number(salePrice.replace(/[^\d,]/g, "").replace(",", "."));

  if (!buy || !sale || sale <= buy) {
    return "Kontrol edilmeli";
  }

  return `%${Math.round(((sale - buy) / sale) * 100)}`;
}
