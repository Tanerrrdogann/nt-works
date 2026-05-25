"use client";

import { useState } from "react";
import { AddToCartButton } from "@/components/AddToCartButton";
import { QuantityPicker } from "@/components/QuantityPicker";
import type { Product } from "@/types/product";

export function ProductDetailActions({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="detail-actions">
      <QuantityPicker
        value={quantity}
        max={product.stock}
        onDecrease={() => setQuantity((current) => Math.max(1, current - 1))}
        onIncrease={() =>
          setQuantity((current) => Math.min(product.stock, current + 1))
        }
      />
      <AddToCartButton product={product} quantity={quantity} />
    </div>
  );
}
