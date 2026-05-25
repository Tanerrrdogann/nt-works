import type { Category } from "@/types/category";
import type { AdminProduct, AdminProductPayload, LoginResponse } from "@/types/admin";
import type {
  CustomerAuthResponse,
  CustomerCartItem,
  CustomerProfile,
  CustomerProfilePayload,
  CustomerRegisterPayload,
} from "@/types/customer";
import type {
  CreateOrderPayload,
  OrderResponse,
  PaymentCallbackResponse,
  PaymentInitializeResponse,
} from "@/types/order";
import type { Product } from "@/types/product";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ?? "/ecommerce-platform";

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...init,
    headers: {
      "Content-Type": "application/json",
      ...init?.headers,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    let message = "İstek tamamlanamadı.";

    try {
      const error = (await response.json()) as { message?: string; details?: string[] };
      message = error.details?.[0] ?? error.message ?? message;
    } catch {
      message = response.statusText || message;
    }

    throw new Error(message);
  }

  return response.json() as Promise<T>;
}

function adminHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
  };
}

function authHeaders(token: string) {
  return {
    Authorization: `Bearer ${token}`,
  };
}

async function requestForm<T>(path: string, formData: FormData, token: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: adminHeaders(token),
    body: formData,
    cache: "no-store",
  });

  if (!response.ok) {
    let message = "İstek tamamlanamadı.";

    try {
      const error = (await response.json()) as { message?: string; details?: string[] };
      message = error.details?.[0] ?? error.message ?? message;
    } catch {
      message = response.statusText || message;
    }

    throw new Error(message);
  }

  return response.json() as Promise<T>;
}

export function getProducts(categorySlug?: string) {
  const query = categorySlug ? `?category=${encodeURIComponent(categorySlug)}` : "";
  return request<Product[]>(`/api/products${query}`);
}

export function getProduct(slug: string) {
  return request<Product>(`/api/products/${slug}`);
}

export function getCategories() {
  return request<Category[]>("/api/categories");
}

export function createOrder(payload: CreateOrderPayload) {
  return request<OrderResponse>("/api/orders", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function getOrderByNumber(orderNumber: string) {
  return request<OrderResponse>(`/api/orders/${encodeURIComponent(orderNumber)}`);
}

export function requestOrderReturn(orderNumber: string, reason: string) {
  return request<OrderResponse>(`/api/orders/${encodeURIComponent(orderNumber)}/return-request`, {
    method: "POST",
    body: JSON.stringify({ reason }),
  });
}

export function initializePayment(orderNumber: string) {
  return request<PaymentInitializeResponse>("/api/payments/initialize", {
    method: "POST",
    body: JSON.stringify({ orderNumber }),
  });
}

export function confirmPayment(token: string, status: "SUCCESS" | "FAILED") {
  return request<PaymentCallbackResponse>("/api/payments/callback", {
    method: "POST",
    body: JSON.stringify({ token, status }),
  });
}

export function adminLogin(email: string, password: string) {
  return request<LoginResponse>("/api/admin/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export function customerRegister(payload: CustomerRegisterPayload) {
  return request<CustomerAuthResponse>("/api/customer/auth/register", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export function customerLogin(email: string, password: string) {
  return request<CustomerAuthResponse>("/api/customer/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export function getCustomerProfile(token: string) {
  return request<CustomerProfile>("/api/customer/me", {
    headers: authHeaders(token),
  });
}

export function updateCustomerProfile(payload: CustomerProfilePayload, token: string) {
  return request<CustomerProfile>("/api/customer/me", {
    method: "PUT",
    headers: authHeaders(token),
    body: JSON.stringify(payload),
  });
}

export function getCustomerCart(token: string) {
  return request<CustomerCartItem[]>("/api/customer/cart", {
    headers: authHeaders(token),
  });
}

export function saveCustomerCart(items: Pick<CustomerCartItem, "productId" | "quantity">[], token: string) {
  return request<CustomerCartItem[]>("/api/customer/cart", {
    method: "PUT",
    headers: authHeaders(token),
    body: JSON.stringify({ items }),
  });
}

export function getCustomerOrders(token: string) {
  return request<OrderResponse[]>("/api/customer/orders", {
    headers: authHeaders(token),
  });
}

export function getAdminProducts(token: string) {
  return request<AdminProduct[]>("/api/admin/products", {
    headers: adminHeaders(token),
  });
}

export function getAdminProduct(id: string, token: string) {
  return request<AdminProduct>(`/api/admin/products/${id}`, {
    headers: adminHeaders(token),
  });
}

export function createAdminProduct(payload: AdminProductPayload, token: string) {
  return request<AdminProduct>("/api/admin/products", {
    method: "POST",
    headers: adminHeaders(token),
    body: JSON.stringify(payload),
  });
}

export function uploadAdminProductImage(file: File, token: string) {
  const formData = new FormData();
  formData.append("file", file);

  return requestForm<{ imageUrl: string }>("/api/admin/products/images", formData, token);
}

export function updateAdminProduct(id: string, payload: AdminProductPayload, token: string) {
  return request<AdminProduct>(`/api/admin/products/${id}`, {
    method: "PUT",
    headers: adminHeaders(token),
    body: JSON.stringify(payload),
  });
}

export function deactivateAdminProduct(id: number, token: string) {
  return request<AdminProduct>(`/api/admin/products/${id}`, {
    method: "DELETE",
    headers: adminHeaders(token),
  });
}

export function getAdminOrders(token: string) {
  return request<OrderResponse[]>("/api/admin/orders", {
    headers: adminHeaders(token),
  });
}

export function getAdminOrder(id: string, token: string) {
  return request<OrderResponse>(`/api/admin/orders/${id}`, {
    headers: adminHeaders(token),
  });
}

export function updateAdminOrderStatus(id: string, status: string, token: string) {
  return request<OrderResponse>(`/api/admin/orders/${id}/status`, {
    method: "PUT",
    headers: adminHeaders(token),
    body: JSON.stringify({ status }),
  });
}
