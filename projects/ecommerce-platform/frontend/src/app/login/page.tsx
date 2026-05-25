"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { useCustomer } from "@/store/customerStore";

export default function CustomerLoginPage() {
  const router = useRouter();
  const { login, register } = useCustomer();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (mode === "register") {
        await register({ name, email, password });
      } else {
        await login(email, password);
      }

      router.push("/profile");
    } catch (err) {
      setError(err instanceof Error ? err.message : "İşlem tamamlanamadı.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="page-shell narrow auth-page">
      <div className="page-heading">
        <p className="eyebrow">Müşteri hesabı</p>
        <h1>{mode === "login" ? "Giriş yap" : "Hesap oluştur"}</h1>
        <p>Adres, sepet ve sipariş geçmişini hesabında saklayabilirsin.</p>
      </div>

      <form className="checkout-form auth-form" onSubmit={handleSubmit}>
        {mode === "register" ? (
          <label className="full-field">
            Ad Soyad
            <input value={name} onChange={(event) => setName(event.target.value)} required />
          </label>
        ) : null}
        <label className="full-field">
          E-posta
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
        </label>
        <label className="full-field">
          Şifre
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
        </label>
        {error ? <p className="inline-error full-field">{error}</p> : null}
        <button className="btn full" type="submit" disabled={loading}>
          {loading ? "İşleniyor..." : mode === "login" ? "Giriş Yap" : "Hesap Oluştur"}
        </button>
      </form>

      <p className="auth-switch">
        {mode === "login" ? "Hesabın yok mu?" : "Zaten hesabın var mı?"}{" "}
        <button type="button" onClick={() => setMode(mode === "login" ? "register" : "login")}>
          {mode === "login" ? "Kayıt ol" : "Giriş yap"}
        </button>
      </p>
      <Link className="text-link" href="/products">Alışverişe dön</Link>
    </section>
  );
}
