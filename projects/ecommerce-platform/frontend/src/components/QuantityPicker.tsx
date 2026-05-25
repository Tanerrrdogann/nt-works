"use client";

import { Minus, Plus } from "lucide-react";

type QuantityPickerProps = {
  value: number;
  min?: number;
  max?: number;
  onDecrease: () => void;
  onIncrease: () => void;
};

export function QuantityPicker({
  value,
  min = 1,
  max = 99,
  onDecrease,
  onIncrease,
}: QuantityPickerProps) {
  return (
    <div className="quantity-picker" aria-label="Adet seçimi">
      <button
        type="button"
        onClick={onDecrease}
        disabled={value <= min}
        aria-label="Adedi azalt"
        title="Adedi azalt"
      >
        <Minus size={16} />
      </button>
      <span>{value}</span>
      <button
        type="button"
        onClick={onIncrease}
        disabled={value >= max}
        aria-label="Adedi artır"
        title="Adedi artır"
      >
        <Plus size={16} />
      </button>
    </div>
  );
}
