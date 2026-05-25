"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { AdminShell } from "@/components/admin/AdminShell";
import { useAdminGuard } from "@/components/admin/useAdminGuard";
import { getAdminOrder, updateAdminOrderStatus } from "@/lib/api";
import { orderStatusLabels, paymentStatusLabels } from "@/lib/orderStatus";
import { formatPrice } from "@/lib/products";
import type { OrderResponse } from "@/types/order";

const editableStatuses: OrderResponse["status"][] = ["PREPARING", "SHIPPED"];

export default function AdminOrderDetailPage() {
  const params = useParams<{ id: string }>();
  const { token, ready } = useAdminGuard();
  const [order, setOrder] = useState<OrderResponse | null>(null);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) return;
    getAdminOrder(params.id, token)
      .then((data) => {
        setOrder(data);
        setStatus(editableStatuses.includes(data.status) ? data.status : "PREPARING");
      })
      .catch((err: Error) => setError(err.message));
  }, [params.id, token]);

  async function saveStatus() {
    if (!token || !status) return;
    setError("");
    setMessage("");

    try {
      const updated = await updateAdminOrderStatus(params.id, status, token);
      setOrder(updated);
      setStatus(updated.status);
      setMessage("Sipariş durumu güncellendi.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Durum güncellenemedi.");
    }
  }

  if (!ready) return <p className="loading-text">Admin panel hazırlanıyor...</p>;

  return (
    <AdminShell>
      <div className="admin-heading">
        <p className="eyebrow">Sipariş detayı</p>
        <h1>{order?.orderNumber ?? "Sipariş"}</h1>
      </div>
      {error ? <p className="inline-error">{error}</p> : null}
      {message ? <p className="loading-text">{message}</p> : null}
      {order ? (
        <div className="order-detail-grid">
          <section className="admin-panel">
            <h2>Müşteri</h2>
            <p>{order.customerName}</p>
            <p>{order.customerEmail}</p>
            <p>{order.address}, {order.district}/{order.city}</p>
            {order.note ? <p>Not: {order.note}</p> : null}
          </section>
          <section className="admin-panel">
            <h2>Durum</h2>
            <label>
              Sipariş durumu
              <select value={status} onChange={(event) => setStatus(event.target.value)}>
                {editableStatuses.map((item) => (
                  <option key={item} value={item}>{orderStatusLabels[item]}</option>
                ))}
              </select>
            </label>
            <p>Mevcut sipariş durumu: {orderStatusLabels[order.status]}</p>
            <p>Ödeme: {paymentStatusLabels[order.paymentStatus]}</p>
            <p>Kargo: {order.shippingCarrier}</p>
            <button className="btn" type="button" onClick={saveStatus}>Durumu Kaydet</button>
          </section>
          <section className="admin-panel full-admin-panel">
            <h2>Ürünler</h2>
            {order.items.map((item) => (
              <div className="order-line" key={item.id}>
                <span>{item.productName} x {item.quantity}</span>
                <strong>{formatPrice(Number(item.totalPrice))}</strong>
              </div>
            ))}
            <div className="order-line">
              <span>Ara toplam</span>
              <strong>{formatPrice(Number(order.subtotalAmount))}</strong>
            </div>
            <div className="order-line">
              <span>Kargo ({order.shippingCarrier})</span>
              <strong>
                {Number(order.shippingAmount) === 0
                  ? "Ücretsiz"
                  : formatPrice(Number(order.shippingAmount))}
              </strong>
            </div>
            <div className="order-line total">
              <span>Toplam</span>
              <strong>{formatPrice(Number(order.totalAmount))}</strong>
            </div>
          </section>
        </div>
      ) : (
        <p className="loading-text">Sipariş yükleniyor...</p>
      )}
    </AdminShell>
  );
}
