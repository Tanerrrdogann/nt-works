"use client";

import Link from "next/link";
import { Clock3, CreditCard, PackageCheck, ReceiptText, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { useAdminGuard } from "@/components/admin/useAdminGuard";
import { getAdminOrders } from "@/lib/api";
import { getOrderStatusClass, orderStatusLabels } from "@/lib/orderStatus";
import { formatPrice } from "@/lib/products";
import type { OrderResponse } from "@/types/order";

const statusOptions = [
  "ALL",
  "PENDING_PAYMENT",
  "PAID",
  "PREPARING",
  "SHIPPED",
  "COMPLETED",
  "PAYMENT_FAILED",
  "CANCELLED",
] as const;

function formatDate(value: string) {
  return new Intl.DateTimeFormat("tr-TR", {
    day: "2-digit",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

export default function AdminOrdersPage() {
  const { token, ready } = useAdminGuard();
  const [orders, setOrders] = useState<OrderResponse[]>([]);
  const [filter, setFilter] = useState("ALL");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) return;
    getAdminOrders(token).then(setOrders).catch((err: Error) => setError(err.message));
  }, [token]);

  if (!ready) return <p className="loading-text">Admin panel hazırlanıyor...</p>;

  const visibleOrders =
    filter === "ALL" ? orders : orders.filter((order) => order.status === filter);
  const paidOrders = orders.filter((order) => order.status === "PAID");
  const pendingOrders = orders.filter((order) => order.status === "PENDING_PAYMENT");
  const preparingOrders = orders.filter((order) => order.status === "PREPARING");
  const revenue = paidOrders.reduce((total, order) => total + Number(order.totalAmount), 0);

  return (
    <AdminShell>
      <div className="admin-heading">
        <p className="eyebrow">Sipariş yönetimi</p>
        <h1>Siparişler</h1>
        <p>Yeni siparişleri, ödeme durumlarını ve kargo hazırlığını tek ekrandan takip et.</p>
      </div>

      <div className="order-metrics">
        <div>
          <ReceiptText size={20} />
          <span>Toplam sipariş</span>
          <strong>{orders.length}</strong>
        </div>
        <div>
          <CreditCard size={20} />
          <span>Ödenen ciro</span>
          <strong>{formatPrice(revenue)}</strong>
        </div>
        <div>
          <Clock3 size={20} />
          <span>Ödeme bekleyen</span>
          <strong>{pendingOrders.length}</strong>
        </div>
        <div>
          <PackageCheck size={20} />
          <span>Hazırlanan</span>
          <strong>{preparingOrders.length}</strong>
        </div>
      </div>

      <div className="filter-row admin-filter-row">
        {statusOptions.map((status) => (
          <button
            className={filter === status ? "filter active" : "filter"}
            type="button"
            key={status}
            onClick={() => setFilter(status)}
          >
            {status === "ALL" ? "Tümü" : orderStatusLabels[status]}
          </button>
        ))}
      </div>
      {error ? <p className="inline-error">{error}</p> : null}

      <div className="orders-board">
        <div className="orders-board-head">
          <div>
            <strong>{filter === "ALL" ? "Tümü" : orderStatusLabels[filter as OrderResponse["status"]]}</strong>
            <span>{visibleOrders.length} sipariş listeleniyor</span>
          </div>
          <Truck size={20} />
        </div>

        {visibleOrders.length > 0 ? (
          <div className="admin-table orders-table">
            {visibleOrders.map((order) => (
              <article className="admin-row order order-card" key={order.id}>
                <div className="order-main">
                  <strong>{order.orderNumber}</strong>
                  <span>{formatDate(order.createdAt)} tarihinde alındı</span>
                </div>
                <div className="order-customer">
                  <strong>{order.customerName}</strong>
                  <span>{order.customerEmail}</span>
                </div>
                <div className="order-items-count">
                  <span>Ürün</span>
                  <strong>{order.items.reduce((total, item) => total + item.quantity, 0)} adet</strong>
                </div>
                <div className="order-amount">
                  <span>Toplam</span>
                  <strong>{formatPrice(Number(order.totalAmount))}</strong>
                </div>
                <span className={`admin-badge ${getOrderStatusClass(order.status)}`}>
                  {orderStatusLabels[order.status]}
                </span>
                <Link className="btn btn-small" href={`/admin/orders/${order.id}`}>
                  Detay
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-admin-state">
            <ReceiptText size={34} />
            <strong>Bu filtrede sipariş yok</strong>
            <span>Başka bir durum filtresi seçerek listeyi kontrol edebilirsin.</span>
          </div>
        )}
      </div>
    </AdminShell>
  );
}
