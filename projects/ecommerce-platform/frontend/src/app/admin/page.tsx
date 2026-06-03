"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Clock3, CreditCard, Package, Plus, ReceiptText, ShoppingBag } from "lucide-react";
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
        <p>Mağazanın ürün, sipariş ve ödeme durumunu tek ekrandan takip et.</p>
      </div>
      {error ? <p className="inline-error">{error}</p> : null}
      <div className="admin-stats">
        <div>
          <Package size={20} />
          <span>Toplam ürün</span>
          <strong>{products.length}</strong>
          <small>Mağazada kayıtlı ürünler</small>
        </div>
        <div>
          <ShoppingBag size={20} />
          <span>Toplam sipariş</span>
          <strong>{orders.length}</strong>
          <small>Tüm zamanlardaki siparişler</small>
        </div>
        <div>
          <ReceiptText size={20} />
          <span>Ödenmiş sipariş</span>
          <strong>{paidOrders}</strong>
          <small>Ödemesi tamamlananlar</small>
        </div>
        <div>
          <Clock3 size={20} />
          <span>Ödeme bekleyen</span>
          <strong>{pendingOrders}</strong>
          <small>Henüz ödeme alınmayanlar</small>
        </div>
        <div className="admin-stat-revenue">
          <CreditCard size={20} />
          <span>Toplam ciro</span>
          <strong>{formatPrice(revenue)}</strong>
          <small>Ödenmiş siparişlerden</small>
        </div>
      </div>
      <div className="admin-actions">
        <Link className="btn" href="/admin/products/new">
          <Plus size={17} />
          Ürün Ekle
        </Link>
        <Link className="btn btn-ghost" href="/admin/orders">
          <ReceiptText size={17} />
          Siparişleri Gör
        </Link>
      </div>
    </AdminShell>
  );
}
