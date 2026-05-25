import type { OrderResponse } from "@/types/order";

export const orderStatusLabels: Record<OrderResponse["status"], string> = {
  PENDING_PAYMENT: "Ödeme bekleniyor",
  PAID: "Ödeme alındı",
  PAYMENT_FAILED: "Ödeme başarısız",
  CANCELLED: "İptal edildi",
  PREPARING: "Hazırlanıyor",
  SHIPPED: "Sipariş yolda",
  COMPLETED: "Tamamlandı",
};

export const paymentStatusLabels: Record<OrderResponse["paymentStatus"], string> = {
  PENDING: "Ödeme bekleniyor",
  PAID: "Ödendi",
  FAILED: "Ödeme başarısız",
  CANCELLED: "İptal edildi",
};

export function getOrderStatusClass(status: OrderResponse["status"]) {
  if (status === "PAID" || status === "PREPARING" || status === "SHIPPED" || status === "COMPLETED") {
    return "success";
  }

  if (status === "PENDING_PAYMENT") {
    return "warning";
  }

  if (status === "PAYMENT_FAILED") {
    return "danger";
  }

  return "neutral";
}
