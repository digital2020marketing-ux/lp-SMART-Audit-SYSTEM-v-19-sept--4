import React from 'react';
import { getCheckoutUrl, getWhatsAppUrl, trackCheckoutClick, trackWhatsAppClick } from '../../constants';
import { handleImageFallback, SMARTBOOK_IMAGES } from '../../imageConstants';

export const CleanTestimonials: React.FC = () => {
  const checkoutUrl = getCheckoutUrl();

  const handleCtaClick = () => {
    trackCheckoutClick('testimonials_cta', 'Testimonials - AMBIL SMART AUDIT SYSTEM — Rp249.000');
  };
  const screenshots = [
    {
      id: 1,
      benefit: 'Checklist & Pertanyaan Lebih Terarah',
      caption: 'Mempermudah penyusunan poin observasi dan checklist audit di lapangan.',
      webp: '/images/testi2.webp',
      png: '/images/testi2.png',
      remoteUrl: SMARTBOOK_IMAGES.testi2?.url,
      alt: 'Tangkapan layar pengguna - Checklist & Pertanyaan Lebih Terarah',
    },
    {
      id: 2,
      benefit: 'PLOR & CAPA Lebih Mudah Dipahami',
      caption: 'Membantu merumuskan temuan audit secara objektif dan menentukan tindakan korektif.',
      webp: '/images/testi1.webp',
      png: '/images/testi1.png',
      remoteUrl: SMARTBOOK_IMAGES.testi1?.url,
      alt: 'Tangkapan layar pengguna - PLOR & CAPA Lebih Mudah Dipahami',
    },
    {
      id: 3,
      benefit: 'Lebih Siap Saat Mendapat Tugas Audit Mendadak',
      caption: 'Framework dan workbook siap pakai mempercepat persiapan tanpa harus membuat file dari awal.',
      webp: '/images/testi5.webp',
      png: '/images/testi5.png',
      remoteUrl: SMARTBOOK_IMAGES.testi5?.url,
      alt: 'Tangkapan layar pengguna - Lebih Siap Saat Mendapat Tugas Audit Mendadak',
    },
  ];

  return (
    <section className="bg-slate-50 py-10 px-4 sm:px-5 border-b border-slate-200/80" id="testimoni">
      <div className="w-full text-center max-w-[480px] mx-auto">
        {/* Eyebrow Pill */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-[11.5px] sm:text-[12px] font-black tracking-wider uppercase shadow-xs">
            <span>CONTOH PENGGUNAAN DI LAPANGAN</span>
          </div>
        </div>

        {/* H2 */}
        <h2 className="text-[22px] sm:text-[26px] font-black text-slate-950 leading-[1.25] tracking-tight mb-2 text-center uppercase">
          YANG BISA ANDA KERJAKAN DENGAN SISTEM INI
        </h2>

        {/* Subtitle */}
        <p className="text-[14px] sm:text-[15px] text-slate-600 font-medium leading-relaxed mb-6 text-center">
          Bagaimana instrumen SMART AUDIT SYSTEM membantu mempermudah checklist, penulisan temuan PLOR, hingga kesiapan menghadapi audit mutu.
        </p>

        {/* Real Screenshot Proof Cards */}
        <div className="space-y-4 text-left">
          {screenshots.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-slate-300 shadow-sm bg-white p-4 transition-all hover:border-slate-400"
            >
              {/* Manfaat Yang Dirasakan */}
              <div className="mb-2">
                <span className="text-[11px] font-black uppercase tracking-wider text-blue-900 bg-blue-50 border border-blue-200 px-2 py-0.5 rounded inline-block mb-1">
                  CONTOH HASIL KERJA
                </span>
                <h3 className="text-[16px] sm:text-[17px] font-black text-slate-950 leading-snug">
                  {item.benefit}
                </h3>
              </div>

              <p className="text-[13.5px] text-slate-600 font-medium leading-relaxed mb-3">
                {item.caption}
              </p>

              {/* Image Container */}
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50 p-1 shadow-inner">
                <picture>
                  <source srcSet={item.webp} type="image/webp" />
                  <img
                    src={item.webp}
                    onError={(e) => handleImageFallback(e, item.png, item.remoteUrl)}
                    referrerPolicy="no-referrer"
                    alt={item.alt}
                    width={500}
                    height={380}
                    className="w-full h-auto rounded-lg block bg-white mx-auto"
                    loading="lazy"
                  />
                </picture>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
