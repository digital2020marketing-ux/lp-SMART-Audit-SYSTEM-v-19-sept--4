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
        {/* ISO Standard & Clarification Badges */}
        <div className="flex flex-col items-center justify-center gap-1.5 mb-3.5">
          {/* ISO Standard & ISO 19011 Guide Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-900 text-white text-[11px] sm:text-[12px] font-black tracking-wide uppercase shadow-xs border border-blue-700">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span>AUDIT INTERNAL ISO 9001 • ACUAN PANDUAN ISO 19011</span>
          </div>

          {/* Target callout */}
          <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-emerald-50 text-emerald-900 border border-emerald-200 text-[10.5px] sm:text-[11.5px] font-extrabold uppercase">
            <span>★ Untuk Auditor Pemula Lebih Mudah &amp; Terarah!</span>
          </div>

          {/* Scope disclaimer */}
          <div className="inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider flex-wrap justify-center mt-0.5">
            <span>SISTEM MANAJEMEN MUTU &amp; OPERASIONAL</span>
            <span className="text-slate-300">•</span>
            <span className="text-amber-700 font-extrabold">BUKAN AUDIT KEUANGAN</span>
          </div>
        </div>

        {/* H1 Headline - Main Punchy Hook Matching Promo Banner */}
        <div className="mb-2 flex flex-col items-center">
          {/* Main Ad Hook Alert Badge - Posisinya persis di atas kalimat JANGAN PANIK! */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600 text-white text-[12px] sm:text-[13.5px] font-black uppercase tracking-wider shadow-md mb-2 animate-pulse">
            <span className="text-amber-300 text-[14px]">❗</span>
            <span>DITUNJUK AUDIT MENDADAK?</span>
          </div>

          <h1 className="text-[30px] sm:text-[40px] font-black text-slate-950 leading-[1.08] tracking-tight uppercase break-words px-0.5">
            <span className="text-[#e24021] drop-shadow-xs block">JANGAN PANIK!</span>
            <span className="text-slate-950 block text-[22px] sm:text-[28px] mt-1 leading-[1.15]">
              PAKAI SISTEM INI, LANGSUNG SIAP AUDIT.
            </span>
          </h1>
        </div>

        {/* H2 Subheadline - Pain Titik Buta Auditor */}
        <h2 className="text-[14.5px] sm:text-[16px] font-black text-rose-950 leading-snug mb-3.5 text-center uppercase bg-rose-50 border border-rose-200 py-2.5 px-3 rounded-xl mx-auto max-w-[480px]">
          Tahu ISO-nya, tapi bingung harus mulai dari mana, bertanya apa, mencari bukti apa, dan menulis temuan bagaimana?
        </h2>

        {/* Deskripsi Solusi Workflow */}
        <p className="text-[14px] sm:text-[15px] text-slate-700 font-semibold leading-relaxed mb-3.5 max-w-[480px] mx-auto">
          <strong className="text-slate-950 font-black">SMART AUDIT SYSTEM</strong> memberikan Anda sistem kerja terstruktur lengkap dengan panduan, instrumen, dan template siap pakai agar bisa langsung bertugas dengan percaya diri.
        </p>

        {/* 4-Step Visual Flow Preview (Matching Promo Creative Diagram) */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-2.5 sm:p-3 mb-4 shadow-xs">
          <div className="text-[11px] font-black uppercase tracking-wider text-slate-500 mb-2 text-center">
            Alur Eksekusi Cepat di Lapangan
          </div>
          <div className="grid grid-cols-2 xs:grid-cols-4 gap-1.5 sm:gap-2">
            <div className="bg-white border border-blue-200 rounded-xl p-2 text-center shadow-2xs">
              <div className="w-5 h-5 rounded-full bg-blue-600 text-white font-black text-[10px] flex items-center justify-center mx-auto mb-1">
                01
              </div>
              <div className="text-[11.5px] font-black text-slate-900 leading-tight">Persiapan</div>
              <div className="text-[9.5px] text-slate-500 mt-0.5 leading-tight">Ruang lingkup &amp; jadwal</div>
            </div>
            <div className="bg-white border border-emerald-200 rounded-xl p-2 text-center shadow-2xs">
              <div className="w-5 h-5 rounded-full bg-emerald-600 text-white font-black text-[10px] flex items-center justify-center mx-auto mb-1">
                02
              </div>
              <div className="text-[11.5px] font-black text-slate-900 leading-tight">Checklist</div>
              <div className="text-[9.5px] text-slate-500 mt-0.5 leading-tight">Klausul &amp; proses</div>
            </div>
            <div className="bg-white border border-purple-200 rounded-xl p-2 text-center shadow-2xs">
              <div className="w-5 h-5 rounded-full bg-purple-600 text-white font-black text-[10px] flex items-center justify-center mx-auto mb-1">
                03
              </div>
              <div className="text-[11.5px] font-black text-slate-900 leading-tight">Pertanyaan</div>
              <div className="text-[9.5px] text-slate-500 mt-0.5 leading-tight">Wawancara terarah</div>
            </div>
            <div className="bg-white border border-orange-200 rounded-xl p-2 text-center shadow-2xs">
              <div className="w-5 h-5 rounded-full bg-orange-600 text-white font-black text-[10px] flex items-center justify-center mx-auto mb-1">
                04
              </div>
              <div className="text-[11.5px] font-black text-slate-900 leading-tight">Evidence</div>
              <div className="text-[9.5px] text-slate-500 mt-0.5 leading-tight">Verifikasi bukti</div>
            </div>
          </div>
        </div>

        {/* 6 Core Value Badges (Matching Promo Banner Bottom Bar) */}
        <div className="bg-blue-50/90 border border-blue-200/90 rounded-xl p-3 sm:p-3.5 mb-5 text-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 sm:gap-2 text-[11.5px] sm:text-[12.5px] font-black text-slate-900 text-center">
            {mainValues.map((val, idx) => (
              <div key={idx} className="bg-white py-1.5 px-2 rounded-lg border border-blue-200/80 shadow-2xs flex items-center justify-center gap-1">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="truncate">{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Utama Hero - Direct Response */}
        <div className="mb-5">
          {/* Price Anchor */}
          <div className="bg-gradient-to-r from-amber-500/15 via-orange-500/10 to-amber-500/15 border border-amber-300/90 rounded-xl py-2.5 px-3.5 mb-2.5 flex items-center justify-between text-left shadow-2xs">
            <div>
              <div className="text-[11px] font-black uppercase tracking-wider text-amber-900">HARGA SPESIAL HARI INI!</div>
              <div className="flex items-baseline gap-2">
                <span className="text-[12px] text-slate-500 line-through font-extrabold">Rp497.000</span>
                <span className="text-[22px] sm:text-[24px] font-black text-slate-950 leading-none">Rp149.000</span>
              </div>
            </div>
            <div className="text-right text-[11px] sm:text-[12px] font-bold text-slate-700">
              <div>Sekali bayar • Lifetime</div>
              <div className="text-emerald-800 font-black">Garansi 7 Hari 100%</div>
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
              <span className="drop-shadow-xs">⚡ CHECKOUT SEKARANG! — Rp149.000</span>
              <span className="text-xl group-hover:translate-x-1.5 transition-transform font-black">→</span>
            </span>
            <span className="text-[12px] sm:text-[12.5px] font-bold text-amber-100 mt-1 relative z-10 flex items-center gap-1.5 drop-shadow-xs">
              <span>Akses Digital Instan • Garansi 7 Hari Uang Kembali 100%</span>
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

        {/* Hero Bottom Trust Badges (Matching Promo Banner Bottom Bar) */}
        <div className="grid grid-cols-2 gap-1.5 text-[11px] sm:text-[12px] text-slate-800 font-bold max-w-[480px] mx-auto bg-slate-50 border border-slate-300 rounded-xl p-2.5 shadow-2xs">
          <div className="flex items-center gap-1.5 justify-center py-1 px-1 bg-white rounded-lg border border-slate-200">
            <span className="text-blue-600">✉️</span>
            <span className="truncate">Akses Instant via Email</span>
          </div>
          <div className="flex items-center gap-1.5 justify-center py-1 px-1 bg-white rounded-lg border border-slate-200">
            <span className="text-emerald-600">✍️</span>
            <span className="truncate">Bisa Diedit &amp; Disesuaikan</span>
          </div>
          <div className="flex items-center gap-1.5 justify-center py-1 px-1 bg-white rounded-lg border border-slate-200">
            <span className="text-purple-600">👥</span>
            <span className="truncate">Semua Departemen</span>
          </div>
          <div className="flex items-center gap-1.5 justify-center py-1 px-1 bg-white rounded-lg border border-slate-200">
            <span className="text-amber-600">🛡️</span>
            <span className="truncate">Garansi 7 Hari 100%</span>
          </div>
        </div>
      </div>
    </section>
  );
};
