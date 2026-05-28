"use client";

import Link from "next/link";
import { FormEvent, Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff } from "lucide-react";
import { confirmCustomerPasswordReset, requestCustomerPasswordReset } from "@/lib/api";
import { useCustomer } from "@/store/customerStore";

export default function CustomerLoginPage() {
  return (
    <Suspense fallback={<section className="page-shell narrow auth-page" />}>
      <CustomerLoginForm />
    </Suspense>
  );
}

function CustomerLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { login, register } = useCustomer();
  const resetToken = searchParams.get("resetToken") ?? "";
  const [mode, setMode] = useState<"login" | "register" | "forgot" | "reset">(resetToken ? "reset" : "login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");
    setMessage("");

    try {
      if (mode === "forgot") {
        const response = await requestCustomerPasswordReset(email);
        setMessage(response.message);
        return;
      }

      if (mode === "reset") {
        if (password !== confirmPassword) {
          setError("Şifreler eşleşmiyor.");
          return;
        }
        const response = await confirmCustomerPasswordReset(resetToken, password);
        setMessage(response.message);
        setPassword("");
        setConfirmPassword("");
        setMode("login");
        return;
      }

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
        <h1>
          {mode === "login"
            ? "Giriş yap"
            : mode === "register"
              ? "Hesap oluştur"
              : mode === "forgot"
                ? "Şifremi unuttum"
                : "Yeni şifre belirle"}
        </h1>
        <p>
          {mode === "forgot"
            ? "Hesabına kayıtlı e-posta adresini yaz, sana sıfırlama bağlantısı hazırlayalım."
            : mode === "reset"
              ? "Yeni şifreni belirledikten sonra hesabına tekrar giriş yapabilirsin."
              : "Adres, sepet ve sipariş geçmişini hesabında saklayabilirsin."}
        </p>
      </div>

      <form className="checkout-form auth-form" onSubmit={handleSubmit}>
        {mode === "register" ? (
          <label className="full-field">
            Ad Soyad
            <input value={name} onChange={(event) => setName(event.target.value)} required />
          </label>
        ) : null}
        {mode !== "reset" ? (
          <label className="full-field">
            E-posta
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
          </label>
        ) : null}
        {mode !== "forgot" ? (
          <PasswordField
            label={mode === "reset" ? "Yeni şifreniz" : "Şifre"}
            onChange={setPassword}
            show={showPassword}
            toggleShow={() => setShowPassword((current) => !current)}
            value={password}
          />
        ) : null}
        {mode === "reset" ? (
          <PasswordField
            label="Şifreyi doğrulayın"
            onChange={setConfirmPassword}
            show={showConfirmPassword}
            toggleShow={() => setShowConfirmPassword((current) => !current)}
            value={confirmPassword}
          />
        ) : null}
        {error ? <p className="inline-error full-field">{error}</p> : null}
        {message ? <p className="auth-success full-field">{message}</p> : null}
        <button className="btn full" type="submit" disabled={loading}>
          {loading
            ? "İşleniyor..."
            : mode === "login"
              ? "Giriş Yap"
              : mode === "register"
                ? "Hesap Oluştur"
                : mode === "forgot"
                  ? "Sıfırlama Bağlantısı Gönder"
                  : "Şifreyi Güncelle"}
        </button>
      </form>

      <p className="auth-switch">
        {mode === "login" ? "Hesabın yok mu?" : "Zaten hesabın var mı?"}{" "}
        <button type="button" onClick={() => {
          setError("");
          setMessage("");
          setPassword("");
          setConfirmPassword("");
          setMode(mode === "login" ? "register" : "login");
        }}>
          {mode === "login" ? "Kayıt ol" : "Giriş yap"}
        </button>
      </p>
      {mode === "login" ? (
        <p className="auth-switch">
          Şifreni mi unuttun?{" "}
          <button type="button" onClick={() => {
            setError("");
            setMessage("");
            setPassword("");
            setConfirmPassword("");
            setMode("forgot");
          }}>
            Şifre sıfırla
          </button>
        </p>
      ) : null}
      <Link className="text-link" href="/products">Alışverişe dön</Link>
    </section>
  );
}

function PasswordField({
  label,
  onChange,
  show,
  toggleShow,
  value,
}: {
  label: string;
  onChange: (value: string) => void;
  show: boolean;
  toggleShow: () => void;
  value: string;
}) {
  return (
    <label className="full-field">
      {label}
      <span className="password-field">
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          required
          minLength={6}
        />
        <button aria-label={show ? "Şifreyi gizle" : "Şifreyi göster"} onClick={toggleShow} type="button">
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </span>
    </label>
  );
}
