import type { CartItem } from "@/types/cart";

export type CustomerPayload = {
  name: string;
  email: string;
  phone?: string;
  address: string;
  city: string;
  district: string;
  note?: string;
};

export type CreateOrderPayload = {
  items: Pick<CartItem, "productId" | "quantity">[];
  customer: CustomerPayload;
};

export type OrderResponse = {
  id: number;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  address: string;
  city: string;
  district: string;
  note?: string;
  subtotalAmount: number;
  shippingAmount: number;
  shippingCarrier: string;
  totalAmount: number;
  status:
    | "PENDING_PAYMENT"
    | "PAID"
    | "PAYMENT_FAILED"
    | "CANCELLED"
    | "PREPARING"
    | "SHIPPED"
    | "COMPLETED";
  paymentStatus: "PENDING" | "PAID" | "FAILED" | "CANCELLED";
  paymentProvider: string;
  createdAt: string;
  items: {
    id: number;
    productId: number;
    productName: string;
    unitPrice: number;
    quantity: number;
    totalPrice: number;
  }[];
};

export type PaymentInitializeResponse = {
  provider: string;
  token: string;
  orderNumber: string;
  amount: number;
  paymentPageUrl: string;
  testMode: boolean;
};

export type PaymentCallbackResponse = {
  orderNumber: string;
  orderStatus: OrderResponse["status"];
  paymentStatus: OrderResponse["paymentStatus"];
};
