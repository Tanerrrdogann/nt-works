"use client";

import Link from "next/link";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/store/cartStore";

export function CartLink() {
  const { itemCount } = useCart();

  return (
    <Link className="cart-link" href="/cart" aria-label={`Sepet, ${itemCount} ürün`}>
      <ShoppingBag size={20} />
      <span>{itemCount}</span>
    </Link>
  );
}
