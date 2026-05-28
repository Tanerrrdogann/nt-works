import type { CartItem } from "@/types/cart";
import type { OrderResponse } from "@/types/order";

export type CustomerProfile = {
  email: string;
  name: string;
  phone: string;
  address: string;
  city: string;
  district: string;
};

export type CustomerAuthResponse = {
  token: string;
  refreshToken: string;
  profile: CustomerProfile;
};

export type CustomerRegisterPayload = {
  name: string;
  email: string;
  password: string;
};

export type CustomerPasswordResetResponse = {
  message: string;
};

export type CustomerCartItem = CartItem;

export type CustomerProfilePayload = Omit<CustomerProfile, "email">;

export type CustomerOrdersResponse = OrderResponse[];
