import React from 'react';
import { getCheckoutUrl, getWhatsAppUrl, trackCheckoutClick, trackWhatsAppClick } from '../../constants';

export const CleanOffer: React.FC = () => {
  const checkoutUrl = getCheckoutUrl();

  const handleCtaClick = () => {
    trackCheckoutClick('offer_cta', 'Offer - KLIK UNTUK CHECKOUT SEKARANG — Rp249.000');
  };

  const stackTable = [
    {
      item: '9 Modul Panduan',
      desc: 'Panduan workflow audit lengkap dari persiapan hingga pelaporan',
      tag: 'Metodologi',
    },
    {
      item: '7 Audit Workbooks',
      desc: 'Alat kerja audit siap pakai format spreadsheet (.xlsx) & dokumen',
      tag: 'Tools Siap Pakai',
    },
    {
      item: '5 AI Audit Frameworks',
      desc: 'Akselerasi penyusunan draft checklist, temuan PLOR, dan analisis',
      tag: 'Akselerator AI',
    },
    {
      item: 'Simulasi & Studi Kasus',
      desc: 'Latihan skenario kasus nyata dari temuan hingga rencana tindakan CAPA',
      tag: 'Studi Kasus',
    },
    {
      item: 'Audio Pendalaman Materi',
      desc: 'Penguatan konsep dan pemahaman metodologi audit ISO 19011',
      tag: 'Audio Guide',
    },
    {
      item: 'Dashboard Terpusat',
      desc: 'Satu pusat akses instan terorganisir untuk seluruh file dan instrumen',
      tag: 'All-in-One Portal',
    },
  ];

  return (
    <div id="penawaran" className="w-full overflow-hidden">
      {/* VALUE STACK & DIRECT CHECKOUT OFFER */}
      <section className="bg-slate-50 py-10 px-3.5 sm:px-5 border-b border-slate-200 w-full overflow-hidden" id="pricing">
        <div className="w-full text-center max-w-full sm:max-w-[480px] mx-auto">
          {/* Eyebrow */}
          <div className="flex justify-center mb-2.5">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 text-white text-[11px] sm:text-[12px] font-black tracking-wider uppercase shadow-xs">
              <span>NILAI LENGKAP DALAM SATU PAKET</span>
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-[21px] sm:text-[26px] font-black text-slate-950 leading-[1.25] tracking-tight mb-2 text-center uppercase break-words">
            SEMUA INSTRUMEN AUDIT DALAM SATU AKSES
          </h2>

          <p className="text-[14px] sm:text-[15.5px] text-slate-600 font-medium leading-relaxed mb-5 text-center">
            Semua yang Anda butuhkan untuk menjalankan proses audit internal secara profesional, terstruktur, dan terstandarisasi:
          </p>

          {/* Clean Value Stack Table */}
          <div className="bg-white border-2 border-slate-300 rounded-2xl overflow-hidden shadow-sm mb-6 text-left">
            <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between text-[11px] sm:text-[12px] font-black uppercase tracking-wider">
              <span>Yang Anda Dapatkan</span>
              <span>Fungsi &amp; Manfaat</span>
            </div>
            <div className="divide-y divide-slate-200">
              {stackTable.map((row, idx) => (
                <div key={idx} className="p-3.5 sm:p-4 hover:bg-slate-50/80 transition-colors">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <div className="font-black text-slate-950 text-[14px] sm:text-[15px] flex items-center gap-1.5">
                      <span className="text-blue-700 font-extrabold text-[13px]">✓</span>
                      <span>{row.item}</span>
                    </div>
                    <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-200 uppercase tracking-wide shrink-0">
                      {row.tag}
                    </span>
                  </div>
                  <p className="text-[12.5px] sm:text-[13px] text-slate-600 font-medium pl-4 leading-relaxed">
                    {row.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* High-Converting Price & Action Card */}
          <div className="bg-white border-2 border-slate-300 rounded-2xl p-5 sm:p-6 mb-5 text-center shadow-md">
            <div className="text-[11.5px] font-black tracking-wider uppercase text-slate-600 mb-1">
              TOTAL NILAI PAKET LENGKAP
            </div>
            <div className="text-[18px] text-slate-600 font-extrabold line-through mb-1">
              Rp497.000
            </div>

            <div className="text-[11px] font-black text-blue-900 uppercase tracking-wider mb-1">
              INVESTASI AKSES HARI INI
            </div>

            <div className="text-[46px] sm:text-[52px] font-black text-slate-950 tracking-tight leading-none mb-1.5">
              Rp249.000
            </div>

            <div className="text-[13.5px] sm:text-[14px] font-black text-slate-800 mb-4">
              Sekali Bayar • Lifetime Access • Tanpa Biaya Bulanan
            </div>

            {/* Micro Guarantees */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-3 mb-4 text-left space-y-1.5 text-[12.5px] font-bold text-slate-800">
              <div className="flex items-center gap-2">
                <span className="text-emerald-700 font-black">✓</span>
                <span>Akses digital instan dikirim via email aktif</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-700 font-black">✓</span>
                <span>File workbook standar (.xlsx &amp; .docx) bebas edit &amp; salin</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-emerald-700 font-black">✓</span>
                <span>Garansi 7 Hari uang kembali jika tidak sesuai kebutuhan</span>
              </div>
            </div>

            {/* Primary High-Converting CTA */}
            <a
              id="cta_offer"
              href={checkoutUrl}
              onClick={handleCtaClick}
              aria-label="Klik di sini untuk checkout sekarang seharga Rp249.000"
              className="w-full min-h-[66px] bg-gradient-to-r from-[#e24021] via-[#ea4829] to-[#cf3519] hover:from-[#cf3519] hover:to-[#b72d14] active:scale-[0.98] text-white font-black text-[16.5px] sm:text-[18px] rounded-2xl flex flex-col items-center justify-center shadow-xl shadow-[#e24021]/40 transition-all text-center tracking-tight mb-2.5 px-3.5 py-3 border-2 border-amber-300/50 group relative overflow-hidden ring-4 ring-[#e24021]/20"
            >
              {/* Shimmer Light Sweep */}
              <div className="absolute inset-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-[-20deg] pointer-events-none animate-shimmer-sweep" />

              <span className="flex items-center justify-center gap-2 text-white relative z-10">
                <span className="drop-shadow-xs">KLIK DI SINI UNTUK CHECKOUT SEKARANG</span>
                <span className="text-xl group-hover:translate-x-1.5 transition-transform font-black">→</span>
              </span>
              <span className="text-[12px] sm:text-[12.5px] font-bold text-amber-100 mt-1 relative z-10 flex items-center gap-1.5 drop-shadow-xs">
                <span>⚡ Rp249.000 • Akses Digital Langsung Aktif</span>
              </span>
            </a>

            {/* Secondary WhatsApp Support */}
            <div className="pt-2 text-center">
              <a
                href={getWhatsAppUrl('offer_wa', 'Halo Admin, saya ingin bertanya tentang SMART AUDIT SYSTEM (Rp249.000) sebelum checkout. Apakah bisa dibantu?')}
                onClick={() => trackWhatsAppClick('offer_wa')}
                className="inline-flex items-center gap-1.5 text-[12.5px] font-bold text-slate-600 hover:text-emerald-800 transition-colors"
              >
                <span>Masih punya pertanyaan sebelum membeli? <span className="text-emerald-800 font-black underline">Hubungi Admin via WhatsApp</span></span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SETELAH PEMBAYARAN BERHASIL */}
      <section className="bg-white py-10 px-4 sm:px-5 border-b border-slate-200/80">
        <div className="w-full text-center max-w-[480px] mx-auto">
          {/* Eyebrow */}
          <div className="flex justify-center mb-2.5">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-[11.5px] sm:text-[12px] font-black tracking-wider uppercase shadow-xs">
              <span>PROSES AKSES PRAKTIS</span>
            </div>
          </div>

          <h2 className="text-[22px] sm:text-[26px] font-black text-slate-950 leading-[1.25] tracking-tight mb-2 text-center uppercase">
            SETELAH PEMBAYARAN BERHASIL
          </h2>

          <p className="text-[14px] sm:text-[15px] text-slate-600 font-medium leading-relaxed mb-6 text-center">
            Langkah mudah mulai dari konfirmasi hingga penggunaan di organisasi Anda:
          </p>

          <div className="space-y-3 text-left">
            {/* Step 1 */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start gap-3.5 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-slate-950 text-white flex items-center justify-center font-black text-[13px] shrink-0 mt-0.5">
                1
              </div>
              <div>
                <h3 className="font-black text-slate-950 text-[15px] sm:text-[15.5px]">
                  Selesaikan Checkout
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-slate-600 font-medium leading-relaxed mt-0.5">
                  Lakukan pembayaran aman melalui halaman checkout resmi.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start gap-3.5 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-blue-700 text-white flex items-center justify-center font-black text-[13px] shrink-0 mt-0.5">
                2
              </div>
              <div>
                <h3 className="font-black text-slate-950 text-[15px] sm:text-[15.5px]">
                  Dapatkan Akses Seketika
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-slate-600 font-medium leading-relaxed mt-0.5">
                  Link dashboard dan akses file langsung aktif dan otomatis dikirimkan ke email aktif Anda.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start gap-3.5 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-slate-950 text-white flex items-center justify-center font-black text-[13px] shrink-0 mt-0.5">
                3
              </div>
              <div>
                <h3 className="font-black text-slate-950 text-[15px] sm:text-[15.5px]">
                  Buka Dashboard &amp; Unduh File
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-slate-600 font-medium leading-relaxed mt-0.5">
                  Buka seluruh 9 modul, 7 workbooks, 5 AI frameworks, dan simulasi kasus dalam satu portal terorganisir.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-start gap-3.5 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center font-black text-[13px] shrink-0 mt-0.5">
                4
              </div>
              <div>
                <h3 className="font-black text-slate-950 text-[15px] sm:text-[15.5px]">
                  Mulai Gunakan untuk Audit
                </h3>
                <p className="text-[13px] sm:text-[13.5px] text-slate-600 font-medium leading-relaxed mt-0.5">
                  Salin dan sesuaikan workbook dengan ruang lingkup serta proses audit departemen organisasi Anda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
