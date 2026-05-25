"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import {
  customerLogin,
  customerRegister,
  getCustomerProfile as fetchCustomerProfile,
  updateCustomerProfile,
} from "@/lib/api";
import {
  clearCustomerSession,
  getCustomerProfile,
  getCustomerToken,
  saveCustomerSession,
} from "@/lib/customerAuth";
import type {
  CustomerProfile,
  CustomerProfilePayload,
  CustomerRegisterPayload,
} from "@/types/customer";

type CustomerContextValue = {
  token: string;
  profile: CustomerProfile | null;
  ready: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (payload: CustomerRegisterPayload) => Promise<void>;
  updateProfile: (payload: CustomerProfilePayload) => Promise<void>;
  logout: () => void;
};

const CustomerContext = createContext<CustomerContextValue | null>(null);

export function CustomerProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState("");
  const [profile, setProfile] = useState<CustomerProfile | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const storedToken = getCustomerToken();
    const storedProfile = getCustomerProfile();

    if (storedToken && storedProfile) {
      setToken(storedToken);
      setProfile(storedProfile);
      fetchCustomerProfile(storedToken)
        .then((freshProfile) => {
          setProfile(freshProfile);
          saveCustomerSession(storedToken, freshProfile);
        })
        .catch(() => {
          clearCustomerSession();
          setToken("");
          setProfile(null);
        })
        .finally(() => setReady(true));
      return;
    }

    setReady(true);
  }, []);

  const login = useCallback(async (email: string, password: string) => {
    const response = await customerLogin(email, password);
    saveCustomerSession(response.token, response.profile);
    setToken(response.token);
    setProfile(response.profile);
  }, []);

  const register = useCallback(async (payload: CustomerRegisterPayload) => {
    const response = await customerRegister(payload);
    saveCustomerSession(response.token, response.profile);
    setToken(response.token);
    setProfile(response.profile);
  }, []);

  const updateProfile = useCallback(
    async (payload: CustomerProfilePayload) => {
      if (!token) return;

      const updated = await updateCustomerProfile(payload, token);
      saveCustomerSession(token, updated);
      setProfile(updated);
    },
    [token],
  );

  const logout = useCallback(() => {
    clearCustomerSession();
    setToken("");
    setProfile(null);
  }, []);

  const value = useMemo(
    () => ({ token, profile, ready, login, register, updateProfile, logout }),
    [login, logout, profile, ready, register, token, updateProfile],
  );

  return <CustomerContext.Provider value={value}>{children}</CustomerContext.Provider>;
}

export function useCustomer() {
  const context = useContext(CustomerContext);

  if (!context) {
    throw new Error("useCustomer must be used within CustomerProvider");
  }

  return context;
}
