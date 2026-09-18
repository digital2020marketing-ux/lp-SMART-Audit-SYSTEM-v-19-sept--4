import React from 'react';
import { SMARTBOOK_IMAGES, handleImageFallback } from '../../imageConstants';

export const CleanProductVisuals: React.FC = () => {
  const visualItems = [
    {
      title: 'Dashboard Terpusat',
      badge: 'SISTEM TERPADU',
      desc: 'Satu pintu menuju seluruh perangkat audit.',
      imageKey: 'dashboard',
    },
    {
      title: '7 Professional Audit Workbooks',
      badge: 'EDITABLE WORKBOOKS',
      desc: 'Format kerja editable untuk proses audit.',
      imageKey: 'worksheet',
    },
    {
      title: '5 AI Audit Frameworks',
      badge: 'PROMPT ACCELERATOR',
      desc: 'Framework prompt untuk membantu draft dan eksplorasi analisis.',
      imageKey: 'aiToolsSuite',
    },
    {
      title: 'Simulasi & Studi Kasus',
      badge: 'SKENARIO PRAKTIK',
      desc: 'Latihan audit berbasis skenario nyata.',
      imageKey: 'simulasi',
    },
  ];

  return (
    <section className="bg-slate-50 py-10 px-4 sm:px-5 border-b border-slate-200/80" id="sistem">
      <div className="w-full text-center max-w-[480px] mx-auto">
        {/* Eyebrow */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-slate-900 text-white text-[11.5px] sm:text-[12px] font-black tracking-wider uppercase shadow-xs">
            <span>BUKTI FISIK SISTEM DIGITAL</span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-[24px] sm:text-[28px] font-black text-slate-950 leading-[1.2] tracking-tight mb-2 text-center uppercase">
          LIHAT SISTEMNYA, BUKAN SEKADAR JANJINYA.
        </h2>

        {/* Subtitle */}
        <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 font-medium leading-relaxed mb-6 text-center">
          Tampilan nyata antarmuka, lembar kerja terstruktur, dan instrumen audit digital yang siap Anda gunakan:
        </p>

        {/* 4 Mockups Besar dengan Fokus Gambar */}
        <div className="space-y-5 text-left">
          {visualItems.map((item, idx) => {
            const imgData = SMARTBOOK_IMAGES[item.imageKey];
            return (
              <div
                key={idx}
                className="bg-white border border-slate-300 rounded-2xl p-3.5 sm:p-4 shadow-sm"
              >
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <h3 className="font-black text-slate-950 text-[16px] sm:text-[17px]">
                    {item.title}
                  </h3>
                  <span className="text-[10.5px] font-black px-2.5 py-0.5 rounded bg-blue-100 text-blue-900 border border-blue-200 uppercase tracking-wider shrink-0">
                    {item.badge}
                  </span>
                </div>
                <p className="text-[13.5px] text-slate-600 mb-3 font-medium">
                  {item.desc}
                </p>
                <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-100 shadow-inner">
                  <picture>
                    <source srcSet={imgData.webpLocal} type="image/webp" />
                    <img
                      src={imgData.webpLocal}
                      alt={item.title}
                      className="w-full h-auto object-cover block"
                      onError={(e) =>
                        handleImageFallback(
                          e,
                          imgData.local,
                          imgData.url,
                          imgData.urlAlt
                        )
                      }
                      loading="lazy"
                    />
                  </picture>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
