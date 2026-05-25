"use client";

import { useMemo, useState } from "react";
import { siteConfig } from "../config/site.config";
import VehicleCard from "./VehicleCard";

type SortOption = "default" | "price-asc" | "price-desc" | "year-new" | "km-low";

function parseNumber(value: string) {
  return Number(value.replace(/\D/g, ""));
}

export default function VehicleCatalog() {
  const [brand, setBrand] = useState("all");
  const [fuel, setFuel] = useState("all");
  const [transmission, setTransmission] = useState("all");
  const [bodyType, setBodyType] = useState("all");
  const [sortBy, setSortBy] = useState<SortOption>("default");

  const filteredVehicles = useMemo(() => {
    const next = siteConfig.vehicles.filter((vehicle) => {
      const matchesBrand = brand === "all" || vehicle.brand === brand;
      const matchesFuel = fuel === "all" || vehicle.fuel === fuel;
      const matchesTransmission = transmission === "all" || vehicle.transmission === transmission;
      const matchesBody = bodyType === "all" || vehicle.bodyType === bodyType;

      return matchesBrand && matchesFuel && matchesTransmission && matchesBody;
    });

    return [...next].sort((first, second) => {
      if (sortBy === "price-asc") return parseNumber(first.price) - parseNumber(second.price);
      if (sortBy === "price-desc") return parseNumber(second.price) - parseNumber(first.price);
      if (sortBy === "year-new") return second.year - first.year;
      if (sortBy === "km-low") return parseNumber(first.km) - parseNumber(second.km);
      return 0;
    });
  }, [brand, fuel, transmission, bodyType, sortBy]);

  function resetFilters() {
    setBrand("all");
    setFuel("all");
    setTransmission("all");
    setBodyType("all");
    setSortBy("default");
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 w-full">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 border-b border-zinc-800 pb-6">
        <div>
          <h1 className="text-4xl font-black text-white uppercase tracking-tighter">Stoktaki Araçlar</h1>
          <p className="text-zinc-400 mt-2 uppercase tracking-wider text-sm font-medium">
            {filteredVehicles.length} / {siteConfig.vehicles.length} araç listeleniyor
          </p>
        </div>

        <div className="mt-6 md:mt-0 w-full md:w-64">
          <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-2 block">Sıralama Seçenekleri</label>
          <select
            className="w-full border-zinc-800 rounded-sm text-sm bg-zinc-900 text-white border p-3 outline-none focus:border-red-600 uppercase tracking-wider"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value as SortOption)}
          >
            <option value="default">Varsayılan</option>
            <option value="price-asc">Fiyat: Düşükten Yükseğe</option>
            <option value="price-desc">Fiyat: Yüksekten Düşüğe</option>
            <option value="year-new">Yıl: Yeni</option>
            <option value="km-low">Kilometre: Düşük</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-72 flex-shrink-0">
          <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-6 sticky top-28">
            <h3 className="font-black text-white mb-6 uppercase tracking-wider text-lg border-b border-zinc-800 pb-4">Filtrele</h3>
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3 block">Marka</label>
                <select className="w-full border-zinc-800 rounded-sm text-sm bg-zinc-950 text-white border p-3 outline-none focus:border-red-600" value={brand} onChange={(event) => setBrand(event.target.value)}>
                  <option value="all">Tüm Markalar</option>
                  {siteConfig.filters.brands.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3 block">Yakıt Tipi</label>
                <div className="grid grid-cols-2 gap-2">
                  {siteConfig.filters.fuelTypes.map((item) => (
                    <button key={item} type="button" onClick={() => setFuel(fuel === item ? "all" : item)} className={`${fuel === item ? "bg-red-600 border-red-600 text-white" : "bg-zinc-950 border-zinc-800 text-zinc-300"} border py-2 text-xs font-bold hover:border-red-600 hover:text-white uppercase rounded-sm transition-colors`}>
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3 block">Vites</label>
                <select className="w-full border-zinc-800 rounded-sm text-sm bg-zinc-950 text-white border p-3 outline-none focus:border-red-600" value={transmission} onChange={(event) => setTransmission(event.target.value)}>
                  <option value="all">Tüm Vitesler</option>
                  {siteConfig.filters.transmissions.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-3 block">Kasa Tipi</label>
                <select className="w-full border-zinc-800 rounded-sm text-sm bg-zinc-950 text-white border p-3 outline-none focus:border-red-600" value={bodyType} onChange={(event) => setBodyType(event.target.value)}>
                  <option value="all">Tüm Kasalar</option>
                  {siteConfig.filters.bodyTypes.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </div>

              <button className="w-full bg-zinc-950 border border-zinc-800 text-white rounded-sm py-4 text-sm font-black uppercase tracking-wider mt-4 hover:border-red-600 transition-colors" type="button" onClick={resetFilters}>
                Filtreleri Temizle
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1">
          {filteredVehicles.length ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredVehicles.map((vehicle) => (
                <VehicleCard key={vehicle.slug} vehicle={vehicle} />
              ))}
            </div>
          ) : (
            <div className="bg-zinc-900 border border-zinc-800 rounded-sm p-10 text-center">
              <h2 className="text-2xl font-black text-white uppercase tracking-tighter">Sonuç bulunamadı</h2>
              <p className="text-zinc-400 mt-3">Filtreleri değiştirerek tekrar deneyebilirsiniz.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
