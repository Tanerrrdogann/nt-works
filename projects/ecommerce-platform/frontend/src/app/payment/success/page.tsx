"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { confirmPayment } from "@/lib/api";
import { useCart } from "@/store/cartStore";

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<PaymentResultSkeleton />}>
      <PaymentSuccessContent />
    </Suspense>
  );
}

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const { clearCart } = useCart();
  const orderNumber = searchParams.get("orderNumber");
  const token = searchParams.get("token");
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("Ödeme sonucu doğrulanıyor...");

  useEffect(() => {
    if (!token) {
      setStatus("error");
      setMessage("Ödeme bilgisi bulunamadı.");
      return;
    }

    confirmPayment(token, "SUCCESS")
      .then((result) => {
        if (result.orderStatus === "PAID") {
          clearCart();
          setStatus("success");
          setMessage("Siparişiniz başarıyla alınmıştır.");
          return;
        }

        setStatus("error");
        setMessage("Ödeme sonucu doğrulanamadı.");
      })
      .catch((error: Error) => {
        setStatus("error");
        setMessage(error.message);
      });
  }, [clearCart, token]);

  return (
    <section className="page-shell narrow">
      <div className={status === "error" ? "result-state failure" : "result-state success"}>
        <CheckCircle2 size={52} />
        <p className="eyebrow">{status === "loading" ? "Ödeme kontrolü" : "Ödeme başarılı"}</p>
        <h1>{message}</h1>
        <p>
          Sipariş numaranız: <strong>{orderNumber ?? "Sipariş bilgisi bekleniyor"}</strong>.
          En kısa sürede sizinle iletişime geçilecektir.
        </p>
        <div className="hero-actions centered">
          <Link className="btn" href="/products">
            Alışverişe Devam Et
          </Link>
          <Link className="btn btn-ghost" href="/">
            Ana Sayfa
          </Link>
        </div>
      </div>
    </section>
  );
}

function PaymentResultSkeleton() {
  return (
    <section className="page-shell narrow">
      <div className="result-state success">
        <CheckCircle2 size={52} />
        <p className="eyebrow">Ödeme kontrolü</p>
        <h1>Ödeme sonucu doğrulanıyor...</h1>
      </div>
    </section>
  );
}
