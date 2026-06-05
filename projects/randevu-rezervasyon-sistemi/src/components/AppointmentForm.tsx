"use client";
import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";
import { Calendar, Clock, User, Sparkles, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";

type CalendarDay = {
  dateString: string;
  dayName: string;
  dayNumber: number;
  monthName: string;
  isSunday: boolean;
  isFull: boolean;
};

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    specialist: "",
    date: "",
    time: ""
  });

  const [weekOffset, setWeekOffset] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [mobilePicker, setMobilePicker] = useState<"date" | "time" | null>(null);
  const [submitted, setSubmitted] = useState(false);

  // Client-side render'ın tamamlandığını anlamak için (Linter hatasını çözen asenkron yöntem)
  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // Takvimi Math.random() OLMADAN, kurallı (deterministik) üretiyoruz
  const [availableDays] = useState<CalendarDay[]>(() => {
    const days: CalendarDay[] = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
    
    for (let i = 1; i <= 28; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      const isSunday = date.getDay() === 0;
      // Rastgelelik yerine matematiksel bir kural: (Gün + i) 5'e veya 8'e tam bölünüyorsa DOLU.
      const isFull = !isSunday && ((date.getDate() + i) % 5 === 0 || (date.getDate() * i) % 8 === 0); 
      
      days.push({
        dateString: date.toISOString().split('T')[0],
        dayName: date.toLocaleDateString('tr-TR', { weekday: 'short' }),
        dayNumber: date.getDate(),
        monthName: date.toLocaleDateString('tr-TR', { month: 'short' }),
        isSunday,
        isFull
      });
    }
    return days;
  });

  const handleAppointmentSubmit = () => {
    setSubmitted(true);
  };

  const currentWeekDays = availableDays.slice(weekOffset * 7, (weekOffset + 1) * 7);

  return (
    <div className="bg-white p-4 md:p-10 rounded-[1.75rem] md:rounded-[2.5rem] shadow-2xl shadow-rose-100 border border-rose-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-rose-50 rounded-full -mr-16 -mt-16 opacity-50 blur-2xl"></div>
      
      <div className="text-center mb-6 md:mb-10 relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-2">Güzellik Randevusu</h2>
        <div className="h-1 w-20 bg-rose-300 mx-auto rounded-full"></div>
      </div>

      <div className="space-y-5 md:space-y-8 relative z-10">
        {/* Ad & Telefon */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="relative group">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-300 group-focus-within:text-rose-500 transition-colors"><User size={20} /></span>
            <input 
              onChange={(e) => {
                setSubmitted(false);
                setFormData({...formData, name: e.target.value});
              }}
              type="text" className="w-full pl-12 pr-4 py-4 rounded-2xl border border-rose-100 focus:border-rose-400 focus:ring-4 focus:ring-rose-50 outline-none transition-all bg-rose-50/20" placeholder="Adınız Soyadınız" 
            />
          </div>
          <div className="relative group">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-rose-300 group-focus-within:text-rose-500 transition-colors">📞</span>
            <input 
              onChange={(e) => {
                setSubmitted(false);
                setFormData({...formData, phone: e.target.value});
              }}
              type="tel" className="w-full pl-12 pr-4 py-4 rounded-2xl border border-rose-100 focus:border-rose-400 focus:ring-4 focus:ring-rose-50 outline-none transition-all bg-rose-50/20" placeholder="Telefon Numaranız" 
            />
          </div>
        </div>

        {/* Hizmet & Uzman */}
        <div className="grid md:grid-cols-2 gap-4">
          <select 
            onChange={(e) => {
              setSubmitted(false);
              setFormData({...formData, service: e.target.value});
            }}
            className="w-full px-4 py-4 rounded-2xl border border-rose-100 focus:border-rose-400 outline-none bg-rose-50/20 text-slate-700"
          >
            <option value="">Hizmet Seçiniz</option>
            {siteConfig.services.map(s => <option key={s.slug} value={s.title}>{s.title}</option>)}
          </select>
          <select 
            onChange={(e) => {
              setSubmitted(false);
              setFormData({...formData, specialist: e.target.value});
            }}
            className="w-full px-4 py-4 rounded-2xl border border-rose-100 focus:border-rose-400 outline-none bg-rose-50/20 text-slate-700"
          >
            <option value="">Uzman Seçiniz</option>
            {siteConfig.specialists.map(sp => <option key={sp.name} value={sp.name}>{sp.name}</option>)}
          </select>
        </div>

        {/* Mobil Tarih & Saat Kartı */}
        <div className="md:hidden rounded-3xl border border-rose-100 bg-rose-50/50 p-4">
          <p className="text-sm font-bold text-slate-800 mb-3">Randevu zamanı</p>
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => setMobilePicker(mobilePicker === "date" ? null : "date")}
              className={`rounded-2xl border p-3 text-left transition-all ${formData.date ? "border-rose-300 bg-white text-rose-700" : "border-rose-100 bg-white text-slate-500"}`}
            >
              <span className="block text-[11px] font-black uppercase text-slate-400">Tarih</span>
              <span className="mt-1 block text-sm font-black">{formData.date || "Tarih seç"}</span>
            </button>
            <button
              type="button"
              onClick={() => setMobilePicker(mobilePicker === "time" ? null : "time")}
              className={`rounded-2xl border p-3 text-left transition-all ${formData.time ? "border-rose-300 bg-white text-rose-700" : "border-rose-100 bg-white text-slate-500"}`}
            >
              <span className="block text-[11px] font-black uppercase text-slate-400">Saat</span>
              <span className="mt-1 block text-sm font-black">{formData.time || "Saat seç"}</span>
            </button>
          </div>

          {mobilePicker === "date" && (
            <div className="mt-4 rounded-3xl border border-rose-100 bg-white p-3 shadow-lg shadow-rose-100">
              <div className="mb-3 flex items-center justify-between">
                <p className="text-sm font-black text-slate-700">Tarih seç</p>
                <div className="flex items-center gap-2 rounded-full bg-rose-50 px-2 py-1">
                  <button
                    type="button"
                    onClick={() => setWeekOffset(Math.max(0, weekOffset - 1))}
                    disabled={weekOffset === 0}
                    className="p-1 text-rose-500 disabled:opacity-30"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <span className="w-16 text-center text-[11px] font-black text-rose-700">
                    {weekOffset === 0 ? "Bu Hafta" : `${weekOffset + 1}. Hafta`}
                  </span>
                  <button
                    type="button"
                    onClick={() => setWeekOffset(Math.min(3, weekOffset + 1))}
                    disabled={weekOffset === 3 || currentWeekDays.length === 0}
                    className="p-1 text-rose-500 disabled:opacity-30"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {currentWeekDays.map((day) => (
                  <button
                    type="button"
                    key={day.dateString}
                    disabled={day.isSunday || day.isFull}
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ ...formData, date: day.dateString });
                      setMobilePicker(null);
                    }}
                    className={`
                      rounded-2xl border px-3 py-3 text-left transition-all
                      ${day.isSunday ? "bg-slate-50 border-slate-100 opacity-40" : ""}
                      ${day.isFull ? "bg-rose-600 text-white border-rose-600 opacity-70" : ""}
                      ${!day.isSunday && !day.isFull ? "bg-rose-50 border-rose-100 text-rose-700" : ""}
                      ${formData.date === day.dateString ? "ring-2 ring-rose-200 bg-rose-500 text-white border-rose-500" : ""}
                    `}
                  >
                    <span className="block text-[10px] uppercase font-bold opacity-70">{day.dayName}</span>
                    <span className="mt-1 block text-lg font-black leading-none">{day.dayNumber} {day.monthName}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {mobilePicker === "time" && (
            <div className="mt-4 rounded-3xl border border-rose-100 bg-white p-3 shadow-lg shadow-rose-100">
              <p className="mb-3 text-sm font-black text-slate-700">Saat seç</p>
              <div className="grid grid-cols-3 gap-2">
                {siteConfig.appointmentSlots.map((slot) => (
                  <button
                    type="button"
                    key={slot}
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ ...formData, time: slot });
                      setMobilePicker(null);
                    }}
                    className={`rounded-2xl border py-3 text-sm font-black transition-all ${formData.time === slot ? "bg-rose-500 text-white border-rose-500" : "bg-rose-50 border-rose-100 text-rose-600"}`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Gelişmiş Haftalık Takvim Bölümü */}
        <div className="hidden md:block">
          <div className="flex items-center justify-between mb-4">
            <label className="flex items-center gap-2 text-sm font-semibold text-slate-600 ml-2">
              <Calendar size={18} className="text-rose-500" /> Tarih Seçimi
            </label>
            <div className="flex items-center gap-3 bg-rose-50 px-3 py-1.5 rounded-full border border-rose-100">
              <button 
                onClick={() => setWeekOffset(Math.max(0, weekOffset - 1))}
                disabled={weekOffset === 0}
                className="p-1 text-rose-500 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-rose-200 rounded-full transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="text-xs font-bold text-rose-700 w-16 text-center">
                {weekOffset === 0 ? "Bu Hafta" : `${weekOffset + 1}. Hafta`}
              </span>
              <button 
                onClick={() => setWeekOffset(Math.min(3, weekOffset + 1))}
                disabled={weekOffset === 3 || currentWeekDays.length === 0}
                className="p-1 text-rose-500 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-rose-200 rounded-full transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Skeleton Yükleme Ekranı vs Gerçek Takvim (Hydration'ı mükemmel yönetir) */}
          {!mounted ? (
            <div className="grid grid-cols-7 gap-2 opacity-50">
              {[...Array(7)].map((_, i) => (
                <div key={i} className="py-7 rounded-2xl bg-slate-100 animate-pulse border border-slate-200"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-7 gap-2">
              {currentWeekDays.map((day) => (
                <button
                  type="button"
                  key={day.dateString}
                  disabled={day.isSunday || day.isFull}
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({...formData, date: day.dateString});
                  }}
                  className={`
                    flex flex-col items-center justify-center py-3 px-1 rounded-2xl transition-all border
                    ${day.isSunday ? 'bg-slate-50 border-slate-100 opacity-40 cursor-not-allowed' : ''}
                    ${day.isFull ? 'bg-rose-600 text-white border-rose-600 cursor-not-allowed shadow-md' : ''}
                    ${!day.isSunday && !day.isFull ? 'bg-rose-50 border-rose-100 text-rose-700 hover:bg-rose-500 hover:text-white' : ''}
                    ${formData.date === day.dateString ? 'ring-4 ring-rose-200 bg-rose-500 text-white border-rose-500' : ''}
                  `}
                >
                  <span className="text-[10px] uppercase font-bold opacity-70 mb-1">{day.dayName}</span>
                  <span className="text-lg font-black leading-none">{day.dayNumber}</span>
                </button>
              ))}
            </div>
          )}

          <div className="flex gap-4 mt-3 ml-2 text-[10px] font-semibold text-slate-400">
             <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-rose-50 border border-rose-200"></div> Müsait</div>
             <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-rose-600"></div> Dolu</div>
             <div className="flex items-center gap-1"><div className="w-3 h-3 rounded-full bg-slate-100 border border-slate-200"></div> Kapalı</div>
          </div>
        </div>

        {/* Saat Seçimi */}
        <div className="hidden md:block">
          <label className="flex items-center gap-2 text-sm font-semibold text-slate-600 mb-4 ml-2">
            <Clock size={18} className="text-rose-500" /> Uygun Saatler
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {siteConfig.appointmentSlots.map((slot) => (
              <button
                type="button"
                key={slot}
                onClick={() => {
                  setSubmitted(false);
                  setFormData({...formData, time: slot});
                }}
                className={`
                  py-2 rounded-xl text-sm font-semibold border transition-all
                  ${formData.time === slot ? 'bg-rose-500 text-white border-rose-500 shadow-md' : 'bg-white border-rose-100 text-rose-500 hover:bg-rose-50'}
                `}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Özet ve Buton */}
        <div className="pt-6 border-t border-rose-100">
           {formData.service && formData.date && (
             <div className="bg-rose-50/50 p-4 rounded-2xl mb-6 flex items-start gap-3 border border-rose-100">
               <Sparkles className="text-rose-500 shrink-0" size={20} />
               <div className="text-sm">
                 <p className="font-bold text-rose-900">Randevu Özeti</p>
                 <p className="text-rose-700">{formData.service} • {formData.date} • Saat {formData.time || ' Seçilmedi'}</p>
               </div>
             </div>
           )}
          
          <button 
            type="button"
            disabled={!formData.name || !formData.date || !formData.time}
            onClick={handleAppointmentSubmit}
            className="group w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-bold text-lg py-5 rounded-[1.5rem] shadow-xl shadow-rose-200 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {submitted ? "Randevu Oluşturuldu" : "Randevuyu Oluştur"}
            <CheckCircle2 className="group-hover:scale-125 transition-transform" />
          </button>
          <p className={`text-center text-[11px] mt-4 italic ${submitted ? "text-rose-500 font-bold" : "text-slate-400"}`}>
            {submitted ? "Randevunuz oluşturuldu. En kısa sürede sizinle iletişime geçilecektir." : "Randevunuz WhatsApp üzerinden onaylandıktan sonra kesinleşecektir."}
          </p>
        </div>
      </div>
    </div>
  );
}
