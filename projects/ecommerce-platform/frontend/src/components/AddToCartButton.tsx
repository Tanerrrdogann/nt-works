"use client";

import { ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/store/cartStore";
import type { Product } from "@/types/product";

type AddToCartButtonProps = {
  product: Product;
  quantity?: number;
  variant?: "primary" | "compact";
};

export function AddToCartButton({
  product,
  quantity = 1,
  variant = "primary",
}: AddToCartButtonProps) {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const disabled = product.stock <= 0;

  function handleAdd() {
    addItem(product, quantity);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1200);
  }

  return (
    <button
      className={variant === "compact" ? "btn btn-small" : "btn"}
      type="button"
      onClick={handleAdd}
      disabled={disabled}
      title={disabled ? "Stokta yok" : "Sepete ekle"}
    >
      <ShoppingBag size={18} />
      {disabled ? "Stokta Yok" : added ? "Eklendi" : "Sepete Ekle"}
    </button>
  );
}
