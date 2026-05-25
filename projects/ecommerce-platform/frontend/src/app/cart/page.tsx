"use client";

import Link from "next/link";
import { Trash2 } from "lucide-react";
import { QuantityPicker } from "@/components/QuantityPicker";
import { FREE_SHIPPING_ITEM_THRESHOLD, SHIPPING_CARRIER, getDiscountedUnitPrice } from "@/lib/cart";
import { formatPrice } from "@/lib/products";
import { useCart } from "@/store/cartStore";
import { useCustomer } from "@/store/customerStore";

export default function CartPage() {
  const { items, subtotal, shipping, total, increaseItem, decreaseItem, removeItem } = useCart();
  const { profile } = useCustomer();

  if (items.length === 0) {
    return (
      <section className="page-shell narrow">
        <div className="empty-state">
          <h1>Sepetin boş</h1>
          <p>Teddy Jewellry koleksiyonundan favori parçanı seçerek başlayabilirsin.</p>
          <Link className="btn" href="/products">
            Ürünleri Gör
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="page-shell">
      <div className="page-heading">
        <p className="eyebrow">Alışveriş sepeti</p>
        <h1>Sepetim</h1>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {items.map((item) => {
            const unitPrice = getDiscountedUnitPrice(item);
            const discounted = unitPrice < item.price;

            return (
            <article className="cart-item" key={item.productId}>
              <img src={item.imageUrl} alt={item.name} />
              <div className="cart-item-main">
                <h2>{item.name}</h2>
                <p>{formatPrice(unitPrice)}{discounted ? ` yerine ${formatPrice(item.price)}` : ""}</p>
                <QuantityPicker
                  value={item.quantity}
                  max={item.stock}
                  onDecrease={() => decreaseItem(item.productId)}
                  onIncrease={() => increaseItem(item.productId)}
                />
              </div>
              <div className="cart-item-side">
                <strong>{formatPrice(unitPrice * item.quantity)}</strong>
                <button
                  className="icon-btn"
                  type="button"
                  onClick={() => removeItem(item.productId)}
                  aria-label={`${item.name} ürününü sepetten çıkar`}
                  title="Sepetten çıkar"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </article>
          );
          })}
        </div>

        <aside className="summary-panel">
          <h2>Sipariş Özeti</h2>
          {!profile ? (
            <div className="account-nudge">
              <strong>Hesapla daha hızlı alışveriş</strong>
              <span>Giriş yapınca adres bilgilerin otomatik gelir, siparişlerini profilinden takip edersin.</span>
              <Link className="text-link" href="/login">
                Giriş yap veya hesap oluştur
              </Link>
            </div>
          ) : null}
          <div>
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
          <Link className="btn full" href="/checkout">
            Ödemeye Geç
          </Link>
        </aside>
      </div>
    </section>
  );
}
