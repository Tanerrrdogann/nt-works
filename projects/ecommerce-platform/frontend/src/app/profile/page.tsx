"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { PackageCheck } from "lucide-react";
import { getCustomerOrders } from "@/lib/api";
import { formatPrice } from "@/lib/products";
import { orderStatusLabels } from "@/lib/orderStatus";
import { useCustomer } from "@/store/customerStore";
import type { OrderResponse } from "@/types/order";

export default function ProfilePage() {
  const { token, profile, ready, updateProfile, logout } = useCustomer();
  const [orders, setOrders] = useState<OrderResponse[]>([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    district: "",
  });

  useEffect(() => {
    if (!profile) return;

    setForm({
      name: profile.name,
      phone: profile.phone,
      address: profile.address,
      city: profile.city,
      district: profile.district,
    });
  }, [profile]);

  useEffect(() => {
    if (token) {
      getCustomerOrders(token).then(setOrders).catch(() => setOrders([]));
    }
  }, [token]);

  function update(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setError("");
    setMessage("");

    try {
      await updateProfile(form);
      setMessage("Profil ve adres bilgilerin kaydedildi.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Profil kaydedilemedi.");
    } finally {
      setSaving(false);
    }
  }

  if (!ready) {
    return <p className="loading-text">Profil hazırlanıyor...</p>;
  }

  if (!profile) {
    return (
      <section className="page-shell narrow auth-required-page">
        <div className="empty-state auth-required-card">
          <p className="eyebrow">Hesabım</p>
          <h1>Giriş yapmadınız</h1>
          <p>
            Profil bilgilerinizi, adresinizi ve sipariş geçmişinizi görmek için
            müşteri hesabınıza giriş yapabilirsiniz.
          </p>
          <div className="auth-required-actions">
            <Link className="btn" href="/login">
              Giriş Yap veya Hesap Oluştur
            </Link>
            <Link className="btn btn-ghost" href="/products">
              Alışverişe Devam Et
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="page-shell profile-page">
      <div className="page-heading">
        <p className="eyebrow">Hesabım</p>
        <h1>Profilim</h1>
        <p>{profile.email}</p>
      </div>

      <div className="profile-layout">
        <form className="checkout-form profile-form" onSubmit={handleSubmit}>
          <label>
            Ad Soyad
            <input value={form.name} onChange={(event) => update("name", event.target.value)} required />
          </label>
          <label>
            Telefon
            <input value={form.phone} onChange={(event) => update("phone", event.target.value)} />
          </label>
          <label className="full-field">
            Adres
            <textarea rows={4} value={form.address} onChange={(event) => update("address", event.target.value)} />
          </label>
          <label>
            İl
            <input value={form.city} onChange={(event) => update("city", event.target.value)} />
          </label>
          <label>
            İlçe
            <input value={form.district} onChange={(event) => update("district", event.target.value)} />
          </label>
          {message ? <p className="success-text full-field">{message}</p> : null}
          {error ? <p className="inline-error full-field">{error}</p> : null}
          <button className="btn full" type="submit" disabled={saving}>
            {saving ? "Kaydediliyor..." : "Bilgileri Kaydet"}
          </button>
          <button className="btn btn-ghost full" type="button" onClick={logout}>
            Çıkış Yap
          </button>
        </form>

        <div className="profile-orders">
          <div className="section-heading compact-heading">
            <p className="eyebrow">Sipariş geçmişi</p>
            <h2>Siparişlerim</h2>
          </div>
          {orders.length === 0 ? (
            <div className="empty-state compact">
              <PackageCheck />
              <p>Henüz sipariş geçmişin yok.</p>
              <Link className="btn btn-ghost" href="/products">Ürünlere Bak</Link>
            </div>
          ) : (
            orders.map((order) => (
              <article className="profile-order-card" key={order.id}>
                <div>
                  <strong>{order.orderNumber}</strong>
                  <span>{orderStatusLabels[order.status]}</span>
                </div>
                <strong>{formatPrice(order.totalAmount)}</strong>
                <Link className="text-link" href={`/order-status?order=${order.orderNumber}`}>
                  Detay
                </Link>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
