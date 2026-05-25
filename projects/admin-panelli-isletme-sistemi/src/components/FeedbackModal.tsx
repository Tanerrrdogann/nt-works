"use client";
import { X, CheckCircle } from "lucide-react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
};

export function FeedbackModal({ isOpen, onClose, title, message }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="w-full max-w-sm bg-white rounded-[2rem] p-6 shadow-2xl animate-in zoom-in-95 duration-200">
        <div className="flex justify-between items-start mb-5">
          <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center border border-emerald-100 shadow-inner">
            <CheckCircle size={28} />
          </div>
          <button onClick={onClose} className="text-slate-400 hover:bg-slate-100 p-2 rounded-xl transition active:scale-95">
            <X size={20}/>
          </button>
        </div>
        <h3 className="text-xl font-extrabold text-slate-900 mb-2 leading-tight">{title}</h3>
        <p className="text-sm font-medium text-slate-500 mb-6">{message}</p>
        <button onClick={onClose} className="w-full bg-blue-600 text-white font-bold py-3.5 rounded-xl hover:bg-blue-700 transition active:scale-95 shadow-md shadow-blue-500/20">
          Anladım, Kapat
        </button>
      </div>
    </div>
  );
}
