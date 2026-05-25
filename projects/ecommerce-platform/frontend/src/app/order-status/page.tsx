"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { Mail, PackageSearch, RotateCcw } from "lucide-react";
import { getOrderByNumber, requestOrderReturn } from "@/lib/api";
import { orderStatusLabels, paymentStatusLabels } from "@/lib/orderStatus";
import { formatPrice } from "@/lib/products";
import type { OrderResponse } from "@/types/order";

export default function OrderStatusPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [order, setOrder] = useState<OrderResponse | null>(null);
  const [returnReason, setReturnReason] = useState("");
  const [returnMessage, setReturnMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [returnLoading, setReturnLoading] = useState(false);

  useEffect(() => {
    const orderParam = new URLSearchParams(window.location.search).get("order");

    if (orderParam) {
      setOrderNumber(orderParam);
      getOrderByNumber(orderParam)
        .then(setOrder)
        .catch(() => undefined);
    }
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setOrder(null);
    setLoading(true);

    try {
      const result = await getOrderByNumber(orderNumber.trim());
      setOrder(result);
      setReturnMessage("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Sipariş bulunamadı.");
    } finally {
      setLoading(false);
    }
  }

  async function handleReturnRequest(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!order) return;

    setError("");
    setReturnMessage("");
    setReturnLoading(true);

    try {
      await requestOrderReturn(order.orderNumber, returnReason.trim());
      setReturnReason("");
      setReturnMessage("İade/değişim talebiniz alındı. Bilgilendirme e-postası gönderildi.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "İade/değişim talebi oluşturulamadı.");
    } finally {
      setReturnLoading(false);
    }
  }

  return (
    <section className="page-shell narrow order-status-page">
      <div className="page-heading">
        <p className="eyebrow">Sipariş takibi</p>
        <h1>Sipariş durumunu sorgula</h1>
        <p>
          Sipariş numaranı girerek ödeme, hazırlık ve kargo durumunu görebilir;
          gerekirse iade/değişim talebi başlatabilirsin.
        </p>
      </div>

      <form className="order-lookup-form" onSubmit={handleSubmit}>
        <label>
          Sipariş numarası
          <input
            value={orderNumber}
            onChange={(event) => setOrderNumber(event.target.value)}
            placeholder="ORD-2026-..."
            required
          />
        </label>
        <button className="btn" type="submit" disabled={loading}>
          <PackageSearch size={18} />
          {loading ? "Sorgulanıyor..." : "Sorgula"}
        </button>
      </form>

      {error ? <p className="inline-error">{error}</p> : null}

      {order ? (
        <div className="order-status-card">
          <div className="order-status-head">
            <div>
              <p className="eyebrow">Sipariş</p>
              <h2>{order.orderNumber}</h2>
              <span>{order.customerName} adına oluşturuldu.</span>
            </div>
            <strong>{orderStatusLabels[order.status]}</strong>
          </div>

          <div className="order-status-grid">
            <div>
              <span>Ödeme</span>
              <strong>{paymentStatusLabels[order.paymentStatus]}</strong>
            </div>
            <div>
              <span>Kargo</span>
              <strong>{order.shippingCarrier}</strong>
            </div>
            <div>
              <span>Toplam</span>
              <strong>{formatPrice(Number(order.totalAmount))}</strong>
            </div>
          </div>

          <div className="order-status-lines">
            {order.items.map((item) => (
              <div key={item.id}>
                <span>{item.productName} x {item.quantity}</span>
                <strong>{formatPrice(Number(item.totalPrice))}</strong>
              </div>
            ))}
          </div>

          <form className="return-request-box" onSubmit={handleReturnRequest}>
            <div>
              <RotateCcw size={20} />
              <h3>İade veya değişim talebi</h3>
              <p>
                Talebin satıcıya iletilir ve işlem özeti e-posta ile paylaşılır.
              </p>
            </div>
            {returnMessage ? <p className="loading-text">{returnMessage}</p> : null}
            <label>
              Talep nedeni
              <textarea
                rows={4}
                value={returnReason}
                onChange={(event) => setReturnReason(event.target.value)}
                placeholder="İade/değişim nedeninizi kısaca yazın"
                required
              />
            </label>
            <button className="btn" type="submit" disabled={returnLoading}>
              <Mail size={18} />
              {returnLoading ? "Talep gönderiliyor..." : "Talep Oluştur"}
            </button>
          </form>
        </div>
      ) : null}

      <p className="secure-note order-help-note">
        Sipariş numaranı ödeme sonrası başarı ekranında veya satıcıyla iletişim
        kayıtlarında bulabilirsin. Yardım için{" "}
        <Link className="text-link" href="/contact">iletişim</Link> sayfasını kullanabilirsin.
      </p>
    </section>
  );
}
