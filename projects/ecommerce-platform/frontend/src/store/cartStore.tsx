"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  CART_STORAGE_KEY,
  getCartCount,
  getCartShipping,
  getCartSubtotal,
  toCartItem,
} from "@/lib/cart";
import type { CartItem } from "@/types/cart";
import type { Product } from "@/types/product";
import { getCustomerCart, saveCustomerCart } from "@/lib/api";
import { useCustomer } from "@/store/customerStore";

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  shipping: number;
  total: number;
  addItem: (product: Product, quantity?: number) => void;
  increaseItem: (productId: number) => void;
  decreaseItem: (productId: number) => void;
  removeItem: (productId: number) => void;
  clearCart: () => void;
  getItemQuantity: (productId: number) => number;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const { token, ready: customerReady } = useCustomer();
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [remoteHydrated, setRemoteHydrated] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(CART_STORAGE_KEY);

    if (stored) {
      try {
        setItems(JSON.parse(stored) as CartItem[]);
      } catch {
        window.localStorage.removeItem(CART_STORAGE_KEY);
      }
    }

    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) {
      window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    }
  }, [hydrated, items]);

  useEffect(() => {
    if (!customerReady || !token) {
      setRemoteHydrated(false);
      return;
    }

    getCustomerCart(token)
      .then((remoteItems) => {
        setItems((current) => {
          const merged = [...remoteItems];

          for (const localItem of current) {
            const existing = merged.find((item) => item.productId === localItem.productId);

            if (existing) {
              existing.quantity = Math.min(existing.stock, existing.quantity + localItem.quantity);
            } else {
              merged.push(localItem);
            }
          }

          return merged;
        });
      })
      .finally(() => setRemoteHydrated(true));
  }, [customerReady, token]);

  useEffect(() => {
    if (!token || !remoteHydrated) return;

    const timeout = window.setTimeout(() => {
      saveCustomerCart(
        items.map((item) => ({ productId: item.productId, quantity: item.quantity })),
        token,
      ).catch(() => undefined);
    }, 350);

    return () => window.clearTimeout(timeout);
  }, [items, remoteHydrated, token]);

  const addItem = useCallback((product: Product, quantity = 1) => {
    if (product.stock <= 0) return;

    setItems((current) => {
      const existing = current.find((item) => item.productId === product.id);

      if (!existing) {
        return [...current, toCartItem(product, Math.min(quantity, product.stock))];
      }

      return current.map((item) =>
        item.productId === product.id
          ? {
              ...item,
              quantity: Math.min(item.quantity + quantity, item.stock),
            }
          : item,
      );
    });
  }, []);

  const increaseItem = useCallback((productId: number) => {
    setItems((current) =>
      current.map((item) =>
        item.productId === productId
          ? { ...item, quantity: Math.min(item.quantity + 1, item.stock) }
          : item,
      ),
    );
  }, []);

  const decreaseItem = useCallback((productId: number) => {
    setItems((current) =>
      current
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }, []);

  const removeItem = useCallback((productId: number) => {
    setItems((current) => current.filter((item) => item.productId !== productId));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const getItemQuantity = useCallback(
    (productId: number) =>
      items.find((item) => item.productId === productId)?.quantity ?? 0,
    [items],
  );

  const value = useMemo(
    () => ({
      items,
      itemCount: getCartCount(items),
      subtotal: getCartSubtotal(items),
      shipping: getCartShipping(items),
      total: getCartSubtotal(items) + getCartShipping(items),
      addItem,
      increaseItem,
      decreaseItem,
      removeItem,
      clearCart,
      getItemQuantity,
    }),
    [addItem, clearCart, decreaseItem, getItemQuantity, increaseItem, items, removeItem],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }

  return context;
}
