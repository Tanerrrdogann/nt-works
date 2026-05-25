"use client";

import { FormEvent, useState } from "react";
import { X } from "lucide-react";

type QuickCreateModalProps = {
  isOpen: boolean;
  title: string;
  description: string;
  fields: Array<{ name: string; label: string; placeholder?: string; defaultValue?: string }>;
  submitLabel?: string;
  onClose: () => void;
  onCreate: (values: Record<string, string>) => void;
};

export function QuickCreateModal({
  isOpen,
  title,
  description,
  fields,
  submitLabel = "Kaydet",
  onClose,
  onCreate,
}: QuickCreateModalProps) {
  const [values, setValues] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextValues = fields.reduce<Record<string, string>>((acc, field) => {
      acc[field.name] = values[field.name] || field.defaultValue || "";
      return acc;
    }, {});
    onCreate(nextValues);
    setValues({});
    onClose();
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#2a3f54]/45 p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl border border-[#d9dee4] bg-white shadow-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-[#e6e9ed] bg-[#f7f7f7] px-5 py-4">
          <div>
            <h3 className="text-xl font-normal text-[#5a738e]">{title}</h3>
            <p className="mt-1 text-sm font-medium leading-6 text-[#73879c]">{description}</p>
          </div>
          <button type="button" onClick={onClose} className="p-2 text-[#73879c] transition hover:bg-white">
            <X size={20} />
          </button>
        </div>

        <div className="grid gap-4 p-5 sm:grid-cols-2">
          {fields.map((field) => (
            <label key={field.name} className="text-sm font-bold text-[#5a738e]">
              {field.label}
              <input
                value={values[field.name] ?? field.defaultValue ?? ""}
                onChange={(event) => setValues((current) => ({ ...current, [field.name]: event.target.value }))}
                placeholder={field.placeholder}
                className="mt-1.5 w-full border border-[#d9dee4] bg-white px-3 py-2.5 text-sm font-semibold text-[#2a3f54] outline-none transition focus:border-[#1abb9c]"
              />
            </label>
          ))}
        </div>

        <div className="flex justify-end gap-2 border-t border-[#e6e9ed] bg-[#f7f7f7] px-5 py-4">
          <button type="button" onClick={onClose} className="border border-[#d9dee4] bg-white px-4 py-2 text-sm font-bold text-[#5a738e] transition hover:bg-[#f2f5f7]">
            Vazgeç
          </button>
          <button type="submit" className="bg-[#1abb9c] px-5 py-2 text-sm font-black text-white transition hover:bg-[#169f85]">
            {submitLabel}
          </button>
        </div>
      </form>
    </div>
  );
}
