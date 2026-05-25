"use client";

import Link from "next/link";
import { XCircle } from "lucide-react";
import { Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { confirmPayment } from "@/lib/api";

export default function PaymentFailurePage() {
  return (
    <Suspense fallback={<PaymentFailureSkeleton />}>
      <PaymentFailureContent />
    </Suspense>
  );
}

function PaymentFailureContent() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  useEffect(() => {
    if (!token) return;

    confirmPayment(token, "FAILED").catch(() => {
      // Kullanıcıya failure ekranını göstermeye devam ediyoruz.
    });
  }, [token]);

  return (
    <section className="page-shell narrow">
      <div className="result-state failure">
        <XCircle size={52} />
        <p className="eyebrow">Ödeme başarısız</p>
        <h1>Ödeme işlemi tamamlanamadı.</h1>
        <p>Lütfen tekrar deneyin veya farklı bir ödeme yöntemi kullanın.</p>
        <div className="hero-actions centered">
          <Link className="btn" href="/cart">
            Sepete Dön
          </Link>
          <Link className="btn btn-ghost" href="/checkout">
            Tekrar Dene
          </Link>
        </div>
      </div>
    </section>
  );
}

function PaymentFailureSkeleton() {
  return (
    <section className="page-shell narrow">
      <div className="result-state failure">
        <XCircle size={52} />
        <p className="eyebrow">Ödeme başarısız</p>
        <h1>Ödeme işlemi tamamlanamadı.</h1>
      </div>
    </section>
  );
}
