"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { adminLogin } from "@/lib/api";
import { saveAdminSession } from "@/lib/adminAuth";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@teddyjewellry.com");
  const [password, setPassword] = useState("Admin12345!");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await adminLogin(email, password);
      saveAdminSession(response.token, response.email);
      router.push("/admin");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Giriş yapılamadı.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="page-shell narrow">
      <div className="admin-login">
        <div>
          <p className="eyebrow">Teddy Jewellry Admin</p>
          <h1>Admin Girişi</h1>
          <p>Ürünleri ve siparişleri yönetmek için giriş yap.</p>
        </div>
        <form className="checkout-form" onSubmit={handleSubmit}>
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
            {loading ? "Giriş Yapılıyor..." : "Giriş Yap"}
          </button>
        </form>
      </div>
    </section>
  );
}
