import type { CustomerProfile } from "@/types/customer";

const TOKEN_KEY = "teddy-customer-token";
const REFRESH_TOKEN_KEY = "teddy-customer-refresh-token";
const PROFILE_KEY = "teddy-customer-profile";

export function saveCustomerSession(token: string, refreshToken: string, profile: CustomerProfile) {
  window.localStorage.setItem(TOKEN_KEY, token);
  window.localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  window.localStorage.setItem(PROFILE_KEY, JSON.stringify(profile));
}

export function getCustomerToken() {
  return window.localStorage.getItem(TOKEN_KEY);
}

export function getCustomerRefreshToken() {
  return window.localStorage.getItem(REFRESH_TOKEN_KEY);
}

export function getCustomerProfile() {
  const stored = window.localStorage.getItem(PROFILE_KEY);

  if (!stored) return null;

  try {
    return JSON.parse(stored) as CustomerProfile;
  } catch {
    window.localStorage.removeItem(PROFILE_KEY);
    return null;
  }
}

export function clearCustomerSession() {
  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.removeItem(REFRESH_TOKEN_KEY);
  window.localStorage.removeItem(PROFILE_KEY);
}
