import React from 'react';
import { getCheckoutUrl, getWhatsAppUrl, trackCheckoutClick, trackWhatsAppClick } from '../../constants';

export const CleanFinalCta: React.FC = () => {
  const checkoutUrl = getCheckoutUrl();

  const handleCtaClick = () => {
    trackCheckoutClick('final_cta', 'Final - KLIK UNTUK CHECKOUT SEKARANG — Rp149.000');
  };

  const deliverables = [
    '9 Modul Panduan',
    '7 Audit Workbooks',
    '5 AI Audit Frameworks',
    'Simulasi & Studi Kasus',
    'Audio Pendalaman',
    'Dashboard Terintegrasi',
    'Garansi 7 Hari',
  ];

  return (
    <section className="bg-slate-950 text-white py-12 px-3.5 sm:px-6 border-b border-slate-900 w-full overflow-hidden" id="final-cta">
      <div className="w-full text-center max-w-full sm:max-w-[480px] mx-auto">
        {/* Eyebrow */}
        <div className="flex flex-col items-center justify-center gap-1.5 mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/80 text-emerald-300 text-[11px] sm:text-[12px] font-black tracking-wider uppercase border border-emerald-700/60 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
            <span>★ SANGAT COCOK UNTUK AUDITOR PEMULA</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-slate-300 text-[11px] sm:text-[11.5px] font-bold tracking-wider uppercase border border-slate-800">
            <span>AUDIT EXECUTION READINESS • ISO 9001 &amp; ISO 19011</span>
          </div>
        </div>

        {/* Headline - Final CTA */}
        <h2 className="text-[22px] sm:text-[28px] font-black text-white leading-[1.22] tracking-tight mb-3 text-center uppercase break-words px-1">
          JALANKAN AUDIT INTERNAL DENGAN WORKFLOW YANG JELAS DAN TERSTRUKTUR.
        </h2>

        {/* Subhead */}
        <p className="text-[14px] sm:text-[15.5px] text-slate-300 leading-relaxed mb-6 text-center font-medium">
          Gunakan workflow audit, 7 workbooks, PLOR Framework, simulasi kasus, dan 5 AI Audit Frameworks untuk membantu Anda menyiapkan dan menjalankan proses audit internal secara lebih sistematis.
        </p>

        {/* Product Box in dark mode */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 sm:p-6 mb-5 text-center shadow-xl">
          <h3 className="text-[20px] sm:text-[23px] font-black text-white uppercase tracking-tight mb-0.5">
            SMART AUDIT SYSTEM
          </h3>
          <div className="text-[13px] sm:text-[13.5px] font-extrabold text-blue-400 mb-4">
            Professional Audit Execution Framework
          </div>

          <div className="text-[11px] font-black uppercase tracking-wider text-slate-400 mb-0.5">
            TOTAL NILAI KOMPONEN
          </div>
          <div className="text-[16px] text-slate-400 line-through font-bold mb-2">
            Rp497.000
          </div>

          <div className="text-[11px] font-black text-blue-400 uppercase tracking-wider mb-1">
            AKSES SMART AUDIT SYSTEM
          </div>

          <div className="text-[44px] sm:text-[50px] font-black text-white tracking-tight leading-none mb-1.5">
            Rp149.000
          </div>

          <div className="text-[13px] sm:text-[13.5px] font-bold text-slate-200 mb-4">
            Sekali Bayar • Lifetime Access • Tanpa Biaya Bulanan
          </div>

          {/* Deliverables summary */}
          <div className="grid grid-cols-2 gap-2 text-[12px] font-bold text-slate-200 pt-3.5 border-t border-slate-800 text-left">
            {deliverables.map((item, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span className="text-emerald-400 font-black">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Utama */}
        <a
          id="cta_final"
          href={checkoutUrl}
          onClick={handleCtaClick}
          aria-label="Klik untuk checkout sekarang seharga Rp149.000"
          className="w-full min-h-[66px] bg-gradient-to-r from-[#e24021] via-[#ea4829] to-[#cf3519] hover:from-[#cf3519] hover:to-[#b72d14] active:scale-[0.98] text-white font-black text-[16.5px] sm:text-[18px] rounded-2xl flex flex-col items-center justify-center shadow-xl shadow-[#e24021]/40 transition-all text-center tracking-tight mb-3 px-3.5 py-3 border-2 border-amber-300/50 group relative overflow-hidden ring-4 ring-[#e24021]/20"
        >
          {/* Shimmer Light Sweep */}
          <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] pointer-events-none animate-shimmer-sweep" />

          <span className="flex items-center justify-center gap-2 text-white relative z-10">
            <span className="drop-shadow-xs">⚡ CHECKOUT SMART AUDIT SYSTEM — Rp149.000</span>
            <span className="text-xl group-hover:translate-x-1.5 transition-transform font-black">→</span>
          </span>
          <span className="text-[12px] sm:text-[12.5px] font-bold text-amber-100 mt-1 relative z-10 flex items-center gap-1.5 drop-shadow-xs">
            <span>Sekali bayar • Lifetime Access • Garansi 7 Hari</span>
          </span>
        </a>

        {/* Secondary WhatsApp Helper */}
        <div className="mt-2 text-center">
          <a
            href={getWhatsAppUrl('final_cta_wa', 'Halo Admin, saya ingin bertanya tentang SMART AUDIT SYSTEM (Rp149.000) sebelum checkout.')}
            onClick={() => trackWhatsAppClick('final_cta_wa')}
            className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-slate-300 hover:text-emerald-300 transition-colors"
          >
            <span>Masih punya pertanyaan sebelum membeli? <span className="text-emerald-300 font-black underline">Hubungi Admin via WhatsApp</span></span>
          </a>
        </div>
      </div>
    </section>
  );
};
