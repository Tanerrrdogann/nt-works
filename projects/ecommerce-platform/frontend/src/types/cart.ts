export type CartItem = {
  productId: number;
  slug: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
  stock: number;
  discountType?: "NONE" | "PERCENT" | "FIXED";
  discountValue?: number | null;
  discountMinQuantity?: number;
};
