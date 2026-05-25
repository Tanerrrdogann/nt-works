"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AdminShell } from "@/components/admin/AdminShell";
import { useAdminGuard } from "@/components/admin/useAdminGuard";
import { getAdminOrders, getAdminProducts } from "@/lib/api";
import { formatPrice } from "@/lib/products";
import type { OrderResponse } from "@/types/order";
import type { Product } from "@/types/product";

export default function AdminDashboardPage() {
  const { token, ready } = useAdminGuard();
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<OrderResponse[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!token) return;

    Promise.all([getAdminProducts(token), getAdminOrders(token)])
      .then(([productData, orderData]) => {
        setProducts(productData);
        setOrders(orderData);
      })
      .catch((err: Error) => setError(err.message));
  }, [token]);

  if (!ready) return <p className="loading-text">Admin panel hazırlanıyor...</p>;

  const paidOrders = orders.filter((order) => order.status === "PAID").length;
  const pendingOrders = orders.filter((order) => order.status === "PENDING_PAYMENT").length;
  const revenue = orders
    .filter((order) => order.paymentStatus === "PAID")
    .reduce((total, order) => total + Number(order.totalAmount), 0);

  return (
    <AdminShell>
      <div className="admin-heading">
        <p className="eyebrow">Dashboard</p>
        <h1>Genel Bakış</h1>
      </div>
      {error ? <p className="inline-error">{error}</p> : null}
      <div className="admin-stats">
        <div><span>Ürün</span><strong>{products.length}</strong></div>
        <div><span>Sipariş</span><strong>{orders.length}</strong></div>
        <div><span>Ödenmiş</span><strong>{paidOrders}</strong></div>
        <div><span>Bekleyen</span><strong>{pendingOrders}</strong></div>
        <div><span>Ciro</span><strong>{formatPrice(revenue)}</strong></div>
      </div>
      <div className="admin-actions">
        <Link className="btn" href="/admin/products/new">Ürün Ekle</Link>
        <Link className="btn btn-ghost" href="/admin/orders">Siparişleri Gör</Link>
      </div>
    </AdminShell>
  );
}
