import type { CartItem } from "@/types/cart";
import type { Product } from "@/types/product";

export const CART_STORAGE_KEY = "teddy-jewellry-cart";
export const SHIPPING_FEE = 99.9;
export const FREE_SHIPPING_ITEM_THRESHOLD = 2;
export const SHIPPING_CARRIER = "Sürat Kargo";

export function toCartItem(product: Product, quantity = 1): CartItem {
  return {
    productId: product.id,
    slug: product.slug,
    name: product.name,
    price: product.price,
    quantity,
    imageUrl: product.imageUrl,
    stock: product.stock,
    discountType: product.discountType ?? "NONE",
    discountValue: product.discountValue ?? 0,
    discountMinQuantity: product.discountMinQuantity ?? 1,
  };
}

export function getDiscountedUnitPrice(item: Pick<CartItem, "price" | "quantity" | "discountType" | "discountValue" | "discountMinQuantity">) {
  const minQuantity = item.discountMinQuantity ?? 1;
  const discountValue = item.discountValue ?? 0;

  if ((item.discountType ?? "NONE") === "NONE" || item.quantity < minQuantity) {
    return item.price;
  }

  if (item.discountType === "PERCENT") {
    return Math.max(0, item.price - item.price * (discountValue / 100));
  }

  return Math.max(0, item.price - discountValue);
}

export function getCartSubtotal(items: CartItem[]) {
  return items.reduce((total, item) => total + getDiscountedUnitPrice(item) * item.quantity, 0);
}

export function getCartCount(items: CartItem[]) {
  return items.reduce((total, item) => total + item.quantity, 0);
}

export function getCartShipping(items: CartItem[]) {
  if (items.length === 0) return 0;

  return getCartCount(items) >= FREE_SHIPPING_ITEM_THRESHOLD ? 0 : SHIPPING_FEE;
}
