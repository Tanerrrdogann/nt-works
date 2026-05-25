"use client";

import { ChangeEvent, DragEvent, FormEvent, useState } from "react";
import { BadgePercent, Boxes, ImagePlus, Info, PackageCheck, UploadCloud } from "lucide-react";
import { uploadAdminProductImage } from "@/lib/api";
import { getAdminToken } from "@/lib/adminAuth";
import type { AdminProduct, AdminProductPayload } from "@/types/admin";

const emptyProduct: AdminProductPayload = {
  name: "",
  slug: "",
  description: "",
  price: 0,
  oldPrice: null,
  category: "Kolye",
  categorySlug: "kolye",
  imageUrl: "",
  imageUrls: [],
  stock: 0,
  active: true,
  featured: false,
  badge: "",
  material: "",
  delivery: "1-3 iş günü içinde kargoya teslim edilir.",
  barcode: "",
  modelCode: "",
  discountType: "NONE",
  discountValue: 0,
  discountMinQuantity: 1,
};

export function ProductForm({
  initialProduct,
  submitLabel,
  onSubmit,
}: {
  initialProduct?: AdminProduct;
  submitLabel: string;
  onSubmit: (payload: AdminProductPayload) => Promise<void>;
}) {
  const token = typeof window !== "undefined" ? getAdminToken() ?? "" : "";
  const [product, setProduct] = useState<AdminProductPayload>(
    initialProduct
      ? {
          ...initialProduct,
          oldPrice: initialProduct.oldPrice ?? null,
          categorySlug: initialProduct.categorySlug ?? "",
          imageUrls: initialProduct.imageUrls?.length ? initialProduct.imageUrls : [initialProduct.imageUrl],
          discountType: initialProduct.discountType ?? "NONE",
          discountValue: initialProduct.discountValue ?? 0,
          discountMinQuantity: initialProduct.discountMinQuantity ?? 1,
        }
      : emptyProduct,
  );
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState("");
  const [uploadError, setUploadError] = useState("");

  function update<K extends keyof AdminProductPayload>(field: K, value: AdminProductPayload[K]) {
    setProduct((current) => ({ ...current, [field]: value }));
  }

  function updateDiscountType(value: AdminProductPayload["discountType"]) {
    setProduct((current) => ({
      ...current,
      discountType: value,
      discountValue: value === "NONE" ? 0 : current.discountValue,
      discountMinQuantity: value === "NONE" ? 1 : current.discountMinQuantity,
    }));
  }

  async function uploadImage(files?: FileList | File[]) {
    const selectedFiles = Array.from(files ?? []);
    if (selectedFiles.length === 0 || !token) return;

    setUploading(true);
    setUploadError("");

    try {
      const responses = await Promise.all(selectedFiles.map((file) => uploadAdminProductImage(file, token)));
      const uploadedUrls = responses.map((response) => response.imageUrl);

      setProduct((current) => {
        const imageUrls = [...(current.imageUrls ?? []), ...uploadedUrls].filter(Boolean);
        return {
          ...current,
          imageUrl: current.imageUrl || imageUrls[0],
          imageUrls,
        };
      });
    } catch (err) {
      setUploadError(err instanceof Error ? err.message : "Görsel yüklenemedi.");
    } finally {
      setUploading(false);
    }
  }

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    uploadImage(event.target.files ?? undefined);
  }

  function handleDragOver(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    setDragActive(true);
  }

  function handleDragLeave() {
    setDragActive(false);
  }

  function handleDrop(event: DragEvent<HTMLLabelElement>) {
    event.preventDefault();
    setDragActive(false);
    uploadImage(event.dataTransfer.files);
  }

  function removeImage(imageUrl: string) {
    setProduct((current) => {
      const imageUrls = (current.imageUrls ?? []).filter((url) => url !== imageUrl);
      return {
        ...current,
        imageUrl: imageUrls[0] ?? "",
        imageUrls,
      };
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!product.imageUrl) {
      setUploadError("Ürün görseli seçilmelidir.");
      return;
    }

    setSaving(true);
    setError("");

    try {
      await onSubmit(product);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Ürün kaydedilemedi.");
    } finally {
      setSaving(false);
    }
  }

  const discountType = product.discountType ?? "NONE";
  const discountValueLabel = discountType === "PERCENT" ? "İndirim yüzdesi" : "İndirim tutarı";
  const discountHelp =
    discountType === "NONE"
      ? "Bu ürün normal fiyatıyla satılır. Eski fiyat alanını sadece üzeri çizili referans fiyat göstermek için kullanabilirsin."
      : discountType === "PERCENT"
        ? "Örn. 15 yazarsan uygun adetlerde ürün fiyatına yüzde 15 indirim uygulanır."
        : "Örn. 100 yazarsan uygun adetlerde birim fiyattan 100 TL düşülür.";

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      <fieldset className="admin-form-section">
        <legend>
          <Info size={18} />
          Temel bilgiler
        </legend>
        <label>
          Ürün adı
          <input value={product.name} onChange={(event) => update("name", event.target.value)} required />
        </label>
        <label>
          Slug
          <input value={product.slug} onChange={(event) => update("slug", event.target.value)} required />
        </label>
        <label>
          Kategori
          <input value={product.category} onChange={(event) => update("category", event.target.value)} required />
        </label>
        <label>
          Kategori slug
          <input value={product.categorySlug} onChange={(event) => update("categorySlug", event.target.value)} required />
        </label>
        <label className="full-field">
          Açıklama
          <textarea value={product.description} onChange={(event) => update("description", event.target.value)} rows={4} required />
        </label>
      </fieldset>

      <fieldset className="admin-form-section">
        <legend>
          <PackageCheck size={18} />
          Fiyat, stok ve görünürlük
        </legend>
        <label>
          Satış fiyatı
          <input type="number" step="0.01" value={product.price} onChange={(event) => update("price", Number(event.target.value))} required />
        </label>
        <label>
          Eski fiyat
          <input type="number" step="0.01" value={product.oldPrice ?? ""} onChange={(event) => update("oldPrice", event.target.value ? Number(event.target.value) : null)} />
        </label>
        <label>
          Stok
          <input type="number" value={product.stock} onChange={(event) => update("stock", Number(event.target.value))} required />
        </label>
        <label>
          Rozet
          <input placeholder="Yeni, Çok Satan, Sınırlı Stok" value={product.badge ?? ""} onChange={(event) => update("badge", event.target.value)} />
        </label>
        <label className="check-field">
          <input type="checkbox" checked={product.active} onChange={(event) => update("active", event.target.checked)} />
          Satışta aktif
        </label>
        <label className="check-field">
          <input type="checkbox" checked={product.featured} onChange={(event) => update("featured", event.target.checked)} />
          Ana sayfada öne çıkar
        </label>
      </fieldset>

      <fieldset className="admin-form-section discount-section">
        <legend>
          <BadgePercent size={18} />
          İndirim ayarları
        </legend>
        <p className="admin-form-help full-field">{discountHelp}</p>
        <label>
          İndirim tipi
          <select value={discountType} onChange={(event) => updateDiscountType(event.target.value as AdminProductPayload["discountType"])}>
            <option value="NONE">İndirim yok</option>
            <option value="PERCENT">Yüzde indirim</option>
            <option value="FIXED">TL tutarında indirim</option>
          </select>
        </label>
        <label>
          {discountValueLabel}
          <input
            type="number"
            min={0}
            max={discountType === "PERCENT" ? 100 : undefined}
            step="0.01"
            value={product.discountValue ?? 0}
            disabled={discountType === "NONE"}
            onChange={(event) => update("discountValue", Number(event.target.value))}
          />
        </label>
        <label>
          Kaç adet ve üzeri?
          <input
            type="number"
            min={1}
            value={product.discountMinQuantity ?? 1}
            disabled={discountType === "NONE"}
            onChange={(event) => update("discountMinQuantity", Number(event.target.value))}
          />
        </label>
        <div className="discount-preview">
          <strong>Örnek kullanım</strong>
          <span>
            {discountType === "NONE"
              ? "İndirim kapalı."
              : `${product.discountMinQuantity ?? 1} adet ve üzeri sepette ${discountType === "PERCENT" ? `%${product.discountValue ?? 0}` : `${product.discountValue ?? 0} TL`} indirim uygulanır.`}
          </span>
        </div>
      </fieldset>

      <fieldset className="admin-form-section">
        <legend>
          <Boxes size={18} />
          Ürün detayları
        </legend>
        <label>
          Barkod no
          <input value={product.barcode ?? ""} onChange={(event) => update("barcode", event.target.value)} />
        </label>
        <label>
          Model kodu
          <input value={product.modelCode ?? ""} onChange={(event) => update("modelCode", event.target.value)} />
        </label>
        <label className="full-field">
          Materyal
          <input value={product.material} onChange={(event) => update("material", event.target.value)} required />
        </label>
        <label className="full-field">
          Teslimat
          <input value={product.delivery} onChange={(event) => update("delivery", event.target.value)} required />
        </label>
      </fieldset>

      <fieldset className="admin-form-section">
        <legend>
          <ImagePlus size={18} />
          Ürün görselleri
        </legend>
        <label
          className={`full-field image-upload-field${dragActive ? " active" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <span>Görsel yükle</span>
          <input accept="image/jpeg,image/png,image/webp" multiple type="file" onChange={handleFileChange} />
          <div className="image-upload-box">
            {product.imageUrl ? (
              <img src={product.imageUrl} alt="Ürün görsel önizlemesi" />
            ) : (
              <ImagePlus size={34} />
            )}
            <div>
              <strong>{uploading ? "Görsel yükleniyor..." : "Dosya seç veya buraya sürükle"}</strong>
              <small>JPG, PNG veya WEBP. Bir ürüne istediğin kadar görsel ekleyebilirsin.</small>
            </div>
            <UploadCloud size={22} />
          </div>
          {(product.imageUrls ?? []).length ? (
            <div className="image-thumb-grid">
              {(product.imageUrls ?? []).map((url) => (
                <button type="button" key={url} onClick={() => removeImage(url)}>
                  <img src={url} alt="Ürün görseli" />
                  <span>Kaldır</span>
                </button>
              ))}
            </div>
          ) : null}
          {uploadError ? <small className="inline-error">{uploadError}</small> : null}
          <input className="visually-hidden-input" value={product.imageUrl} onChange={(event) => update("imageUrl", event.target.value)} />
        </label>
      </fieldset>

      {error ? <p className="inline-error full-field">{error}</p> : null}
      <div className="admin-form-submit">
        <button className="btn full" type="submit" disabled={saving}>
          {saving ? "Kaydediliyor..." : submitLabel}
        </button>
      </div>
    </form>
  );
}
