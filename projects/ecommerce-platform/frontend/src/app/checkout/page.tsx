"use client";

import Link from "next/link";
import { LockKeyhole, Mail } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { FREE_SHIPPING_ITEM_THRESHOLD, SHIPPING_CARRIER, getDiscountedUnitPrice } from "@/lib/cart";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/store/cartStore";
import { useCustomer } from "@/store/customerStore";
import type { CustomerPayload } from "@/types/order";

export default function CheckoutPage() {
  const { items, subtotal, shipping, total } = useCart();
  const { profile } = useCustomer();
  const [form, setForm] = useState<CustomerPayload>({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    district: "",
    note: "",
  });
  const [demoNotice, setDemoNotice] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!profile) return;

    setForm((current) => ({
      ...current,
      name: current.name || profile.name,
      email: current.email || profile.email,
      phone: current.phone || profile.phone,
      address: current.address || profile.address,
      city: current.city || profile.city,
      district: current.district || profile.district,
    }));
  }, [profile]);

  function updateField(field: keyof CustomerPayload, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(false);
    setError("");
    setDemoNotice(
      "Bu sayfa canlı inceleme demosudur. Gerçek sipariş oluşturma ve ödeme alma bu demo sürümünde aktif değildir."
    );
  }

  if (items.length === 0) {
    return (
      <section className="page-shell narrow">
        <div className="empty-state">
          <h1>Sipariş için sepet gerekli</h1>
          <p>Adres bilgisi girmeden önce sepete ürün eklemelisin.</p>
          <Link className="btn" href="/products">
            Ürünlere Dön
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-shell">
      <div className="page-heading">
        <p className="eyebrow">Güvenli ödeme</p>
        <h1>Teslimat Bilgileri</h1>
        <p>Siparişiniz Sürat Kargo ile özenle hazırlanır.</p>
      </div>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          {!profile ? (
            <div className="checkout-login-nudge full-field">
              <div>
                <strong>Hesabın varsa teslimat bilgilerini biz dolduralım</strong>
                <span>Giriş yapınca adresin, e-postan ve sipariş takibin profilinde hazır olur.</span>
              </div>
              <Link className="btn btn-ghost" href="/login">
                Giriş Yap
              </Link>
            </div>
          ) : null}
          <label>
            Ad Soyad
            <input
              type="text"
              placeholder="Adınız Soyadınız"
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              required
            />
          </label>
          <label>
            E-posta
            <input
              type="email"
              placeholder="ornek@mail.com"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              readOnly={Boolean(profile)}
              required
            />
          </label>
          <label>
            Telefon
            <input
              type="tel"
              placeholder="05xx xxx xx xx"
              value={form.phone ?? ""}
              onChange={(event) => updateField("phone", event.target.value)}
            />
          </label>
          <label className="full-field">
            Adres
            <textarea
              placeholder="Mahalle, cadde, bina, daire"
              rows={4}
              value={form.address}
              onChange={(event) => updateField("address", event.target.value)}
              required
            />
          </label>
          <label>
            İl
            <input
              type="text"
              placeholder="İstanbul"
              value={form.city}
              onChange={(event) => updateField("city", event.target.value)}
              required
            />
          </label>
          <label>
            İlçe
            <input
              type="text"
              placeholder="Kadıköy"
              value={form.district}
              onChange={(event) => updateField("district", event.target.value)}
              required
            />
          </label>
          <label className="full-field">
            Sipariş Notu
            <textarea
              placeholder="Varsa notunuzu yazın"
              rows={3}
              value={form.note}
              onChange={(event) => updateField("note", event.target.value)}
            />
          </label>
          {error ? <p className="inline-error full-field">{error}</p> : null}
          {demoNotice ? (
            <div className="demo-checkout-notice full-field">
              <strong>Sipariş oluşturma bu demo sürümünde kapalıdır.</strong>
              <span>{demoNotice}</span>
            </div>
          ) : null}
          <button className="btn full" type="submit" disabled={submitting}>
            {submitting ? "Sipariş Oluşturuluyor..." : "Siparişi Onayla ve Ödemeye Geç"}
          </button>
        </form>

        <aside className="summary-panel checkout-summary">
          <h2>Sipariş Özeti</h2>
          {items.map((item) => (
            <div key={item.productId}>
              <span>
                {item.name} x {item.quantity}
              </span>
              <strong>{formatPrice(getDiscountedUnitPrice(item) * item.quantity)}</strong>
            </div>
          ))}
          <div className="summary-total">
            <span>Ara toplam</span>
            <strong>{formatPrice(subtotal)}</strong>
          </div>
          <div>
            <span>Kargo ({SHIPPING_CARRIER})</span>
            <strong>{shipping === 0 ? "Ücretsiz" : formatPrice(shipping)}</strong>
          </div>
          <p className="secure-note">
            {FREE_SHIPPING_ITEM_THRESHOLD} ve üzeri ürün siparişlerinde kargo ücretsiz.
          </p>
          <div className="summary-total">
            <span>Genel toplam</span>
            <strong>{formatPrice(total)}</strong>
          </div>
          <p className="secure-note">
            <LockKeyhole size={17} />
            Ödeme bilgileriniz güvenli şekilde işlenir.
          </p>
          <p className="contact-note">
            <Mail size={16} />
            Sipariş sonrası bilgilendirme e-posta ile yapılır.
          </p>
        </aside>
      </div>
    </section>
  );
}
