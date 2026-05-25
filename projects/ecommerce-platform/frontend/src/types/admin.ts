import type { Product } from "@/types/product";

export type LoginResponse = {
  token: string;
  email: string;
  role: string;
};

export type AdminProductPayload = Omit<Product, "id" | "categorySlug"> & {
  categorySlug: string;
  barcode?: string;
  modelCode?: string;
};

export type AdminProduct = Product & {
  barcode?: string;
  modelCode?: string;
};
