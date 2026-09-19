import React from 'react';
import { getCheckoutUrl, getWhatsAppUrl, trackCheckoutClick, trackWhatsAppClick } from '../../constants';
import { SMARTBOOK_IMAGES, handleImageFallback } from '../../imageConstants';

export const CleanHero: React.FC = () => {
  const checkoutUrl = getCheckoutUrl();

  const handleCtaClick = () => {
    trackCheckoutClick('hero_cta', 'Hero - MULAI GUNAKAN SMART AUDIT SYSTEM — Rp149.000');
  };

  const auditFlow = [
    'Persiapan',
    'Checklist',
    'Pertanyaan',
    'Evidence',
    'Temuan',
    'Root Cause',
    'CAPA',
    'Laporan',
  ];

  const mainValues = [
    '9 Modul Panduan',
    '7 Audit Workbooks',
    '5 AI Audit Frameworks',
    'Simulasi & Studi Kasus',
    'Audio Pendalaman',
    'Dashboard Terintegrasi',
  ];

  return (
    <section className="bg-white pt-6 sm:pt-8 pb-10 px-3.5 sm:px-5 border-b border-slate-200/80 w-full overflow-hidden">
      <div className="w-full text-center max-w-full sm:max-w-[480px] mx-auto">
        {/* Eyebrow Pill & ISO Clarification Tag */}
        <div className="flex flex-col items-center justify-center gap-1.5 mb-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-100 text-emerald-950 border border-emerald-300 text-[11px] sm:text-[12.5px] font-black uppercase tracking-wide shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>★ SANGAT COCOK UNTUK AUDITOR PEMULA</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950 text-white text-[11.5px] sm:text-[13px] font-black tracking-wider uppercase shadow-xs border border-slate-800">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            <span>AUDIT INTERNAL ISO 9001 • MENGACU PADA ISO 19011</span>
          </div>
          <div className="inline-flex items-center gap-1 text-[10.5px] sm:text-[11.5px] font-bold text-slate-500 uppercase tracking-wider flex-wrap justify-center">
            <span>SISTEM MANAJEMEN MUTU &amp; OPERASIONAL</span>
            <span className="text-slate-300">•</span>
            <span className="text-amber-700 font-extrabold">BUKAN AUDIT KEUANGAN</span>
          </div>
        </div>

        {/* H1 Headline - Main Punchy Hook */}
        <h1 className="text-[26px] sm:text-[34px] font-black text-slate-950 leading-[1.15] tracking-tight mb-2.5 text-center uppercase break-words px-0.5">
          JANGAN TURUN AUDIT DENGAN RASA RAGU.
        </h1>

        {/* H2 Subheadline - Pain Titik Buta Auditor */}
        <h2 className="text-[15.5px] sm:text-[17.5px] font-black text-rose-900 leading-snug mb-3.5 text-center uppercase bg-rose-50 border border-rose-200/90 py-2 px-3 rounded-xl mx-auto max-w-[480px]">
          TAHU ISO-NYA, TAPI BINGUNG HARUS BERTANYA APA, MENCARI BUKTI APA, DAN MENULIS TEMUAN BAGAIMANA?
        </h2>

        {/* Deskripsi Solusi Workflow & Komponen */}
        <div className="space-y-2 mb-4 text-center mx-auto max-w-[480px]">
          <p className="text-[14px] sm:text-[15.5px] text-slate-800 font-bold leading-relaxed">
            SMART AUDIT SYSTEM membantu Anda menjalankan audit internal dengan workflow terstruktur dari <span className="text-slate-950 font-black">persiapan → checklist → pertanyaan → evidence → temuan → root cause → CAPA → laporan</span>.
          </p>
          <p className="text-[13px] sm:text-[14px] text-slate-600 font-semibold leading-relaxed">
            Dilengkapi 9 Modul Panduan, 7 Audit Workbooks, 5 AI Audit Frameworks, Simulasi Kasus, Audio, dan Dashboard Terintegrasi.
          </p>
        </div>

        {/* 4 Value Badges */}
        <div className="bg-blue-50/90 border border-blue-200/90 rounded-xl p-3 sm:p-3.5 mb-5 text-center">
          <div className="grid grid-cols-2 gap-2 text-[12px] sm:text-[13px] font-black text-blue-950 text-center">
            {mainValues.map((val, idx) => (
              <div key={idx} className="bg-white/95 py-2 px-2 rounded-lg border border-blue-200/70 shadow-2xs flex items-center justify-center">
                ✓ {val}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Utama Hero - Direct Response */}
        <div className="mb-5">
          {/* Price Anchor */}
          <div className="bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-amber-500/15 border border-amber-300/90 rounded-xl py-2.5 px-3.5 mb-2.5 flex items-center justify-between text-left shadow-2xs">
            <div>
              <div className="text-[12px] text-slate-600 line-through font-extrabold">Rp497.000</div>
              <div className="text-[20px] sm:text-[22px] font-black text-slate-950 leading-none">Rp149.000</div>
            </div>
            <div className="text-right text-[11.5px] sm:text-[12px] font-bold text-slate-700">
              <div>Sekali bayar • Lifetime Access</div>
              <div className="text-emerald-800 font-black">Tanpa biaya bulanan</div>
            </div>
          </div>

          <a
            id="cta_hero"
            href={checkoutUrl}
            onClick={handleCtaClick}
            aria-label="Klik untuk checkout SMART AUDIT SYSTEM Rp149.000"
            className="w-full min-h-[66px] bg-gradient-to-r from-[#e24021] via-[#ea4829] to-[#cf3519] hover:from-[#cf3519] hover:to-[#b72d14] active:scale-[0.98] text-white font-black text-[16.5px] sm:text-[18px] rounded-2xl flex flex-col items-center justify-center shadow-xl shadow-[#e24021]/40 transition-all text-center tracking-tight px-3.5 py-3 border-2 border-amber-300/50 group relative overflow-hidden ring-4 ring-[#e24021]/20"
          >
            {/* Shimmer Light Sweep */}
            <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] pointer-events-none animate-shimmer-sweep" />

            <span className="flex items-center justify-center gap-2 text-white relative z-10">
              <span className="drop-shadow-xs">⚡ CHECKOUT SMART AUDIT SYSTEM — Rp149.000</span>
              <span className="text-xl group-hover:translate-x-1.5 transition-transform font-black">→</span>
            </span>
            <span className="text-[12px] sm:text-[12.5px] font-bold text-amber-100 mt-1 relative z-10 flex items-center gap-1.5 drop-shadow-xs">
              <span>Akses digital instan • Garansi 7 Hari</span>
            </span>
          </a>

          {/* Secondary WhatsApp Helper */}
          <div className="mt-3 text-center">
            <a
              href={getWhatsAppUrl('hero_wa', 'Halo Admin, saya ingin bertanya tentang SMART AUDIT SYSTEM (Rp149.000) sebelum membeli. Apakah bisa dibantu?')}
              onClick={() => trackWhatsAppClick('hero_wa')}
              className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-slate-600 hover:text-emerald-800 transition-colors"
            >
              <span>Masih punya pertanyaan sebelum membeli? <span className="text-emerald-800 font-black underline">Hubungi Admin via WhatsApp</span></span>
            </a>
          </div>
        </div>

        {/* Visual Mockup Dashboard Digital System */}
        <div className="rounded-2xl overflow-hidden border border-slate-300 shadow-xl bg-slate-950 p-2 sm:p-2.5 mb-4">
          <div className="bg-slate-900 text-slate-200 text-[11px] font-mono py-2 px-3 rounded-t-xl flex items-center justify-between gap-2 overflow-hidden">
            <div className="flex items-center gap-1.5 shrink-0">
              <span className="w-2 h-2 rounded-full bg-rose-500 inline-block"></span>
              <span className="w-2 h-2 rounded-full bg-amber-500 inline-block"></span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
            </div>
            <span className="text-slate-300 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider truncate min-w-0">SMART AUDIT SYSTEM • DIGITAL DASHBOARD</span>
            <span className="text-[9px] text-blue-400 font-extrabold uppercase tracking-wider shrink-0 hidden xs:inline-block">PORTAL</span>
          </div>
          <picture>
            <source srcSet={SMARTBOOK_IMAGES.dashboard.webpLocal} type="image/webp" />
            <img
              src={SMARTBOOK_IMAGES.dashboard.webpLocal}
              alt="Dashboard SMART AUDIT SYSTEM Mockup"
              width={1200}
              height={675}
              className="w-full h-auto object-cover rounded-b-xl block"
              onError={(e) =>
                handleImageFallback(
                  e,
                  SMARTBOOK_IMAGES.dashboard.local,
                  SMARTBOOK_IMAGES.dashboard.url,
                  SMARTBOOK_IMAGES.dashboard.urlAlt
                )
              }
              loading="eager"
              fetchPriority="high"
            />
          </picture>
        </div>

        {/* Hero Bottom Highlight */}
        <div className="flex items-center justify-center gap-2 text-[12.5px] sm:text-[13px] text-slate-700 font-bold max-w-[460px] mx-auto bg-slate-100/90 border border-slate-300 rounded-xl py-2.5 px-3">
          <span>⚡</span>
          <span>Akses Digital Langsung • Siap Digunakan &amp; Dapat Disesuaikan</span>
        </div>
      </div>
    </section>
  );
};
