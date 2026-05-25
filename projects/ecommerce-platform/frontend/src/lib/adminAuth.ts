"use client";

const TOKEN_KEY = "teddy-admin-token";
const EMAIL_KEY = "teddy-admin-email";

export function saveAdminSession(token: string, email: string) {
  window.localStorage.setItem(TOKEN_KEY, token);
  window.localStorage.setItem(EMAIL_KEY, email);
}

export function getAdminToken() {
  return window.localStorage.getItem(TOKEN_KEY);
}

export function getAdminEmail() {
  return window.localStorage.getItem(EMAIL_KEY);
}

export function clearAdminSession() {
  window.localStorage.removeItem(TOKEN_KEY);
  window.localStorage.removeItem(EMAIL_KEY);
}
