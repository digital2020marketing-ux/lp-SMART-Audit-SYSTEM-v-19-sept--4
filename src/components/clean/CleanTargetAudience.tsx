import React from 'react';

export const CleanTargetAudience: React.FC = () => {
  const primaryAudiences = [
    {
      role: 'AUDITOR INTERNAL PEMULA',
      badge: '★ SANGAT COCOK UNTUK PEMULA',
      desc: 'Sangat cocok untuk Anda yang baru ditunjuk atau baru pertama kali menyusun dokumen, instrumen, dan checklist audit mutu internal dari nol tanpa bingung.',
      highlight: true,
    },
    {
      role: 'INTERNAL AUDITOR',
      desc: 'Untuk auditor yang membutuhkan alur kerja terstruktur dari checklist, sampling, hingga penulisan laporan formal.',
    },
    {
      role: 'QA / QC & PENJAMINAN MUTU',
      desc: 'Untuk personel penjaminan mutu yang bertanggung jawab terhadap kepatuhan sistem ISO 9001 dan kesiapan audit.',
    },
    {
      role: 'MANAGEMENT REPRESENTATIVE (MR)',
      desc: 'Untuk pimpinan mutu yang mengoordinasikan audit internal dan pelaporan hasil evaluasi ke manajemen puncak.',
    },
    {
      role: 'ISO / QMS COORDINATOR & KONSULTAN',
      desc: 'Untuk koordinator dan praktisi yang mempersiapkan jadwal, instrumen evaluasi, dan tindak lanjut temuan audit.',
    },
  ];

  return (
    <section className="bg-slate-50 py-10 px-3.5 sm:px-5 border-b border-slate-200/80 w-full overflow-hidden" id="target">
      <div className="w-full text-center max-w-full sm:max-w-[480px] mx-auto">
        {/* Eyebrow */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] sm:text-[12px] font-black tracking-wider uppercase shadow-xs">
            <span>TARGET PENGGUNA PROFESIONAL</span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-[20px] sm:text-[26px] font-black text-slate-950 leading-[1.25] tracking-tight mb-2 text-center uppercase break-words px-1">
          SIAPA YANG MENDAPATKAN VALUE DARI SYSTEM INI?
        </h2>

        <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 font-medium leading-relaxed mb-6 text-center">
          Dirancang untuk praktisi yang mengutamakan ketepatan metodologi dan efisiensi waktu kerja:
        </p>

        {/* 5 Primary Target Cards */}
        <div className="space-y-3 text-left mb-5">
          {primaryAudiences.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-xl p-3.5 sm:p-4 flex items-start gap-3.5 transition-all ${
                item.highlight
                  ? 'bg-gradient-to-b from-blue-50/90 via-white to-blue-50/30 border-2 border-blue-600 shadow-md ring-2 ring-blue-500/20'
                  : 'bg-white border border-slate-300 shadow-xs'
              }`}
            >
              <div
                className={`w-7 h-7 rounded-lg flex items-center justify-center font-black text-[12px] shrink-0 mt-0.5 ${
                  item.highlight ? 'bg-blue-700 text-white shadow-xs' : 'bg-slate-800 text-white'
                }`}
              >
                ✓
              </div>
              <div className="flex-1">
                {item.highlight && item.badge && (
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-blue-700 text-white text-[10.5px] font-black uppercase tracking-wider mb-1.5 shadow-2xs">
                    {item.badge}
                  </div>
                )}
                <h3
                  className={`font-black text-[15px] sm:text-[16px] leading-snug ${
                    item.highlight ? 'text-blue-950' : 'text-slate-950'
                  }`}
                >
                  {item.role}
                </h3>
                <p
                  className={`text-[13.5px] sm:text-[14px] mt-0.5 leading-relaxed ${
                    item.highlight ? 'text-slate-800 font-semibold' : 'text-slate-600 font-medium'
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
