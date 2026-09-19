import React from 'react';

export const CleanProblem: React.FC = () => {
  const problems = [
    {
      num: '01',
      title: 'Bingung Mulai dari Mana',
      desc: 'Sudah memahami standar, tetapi belum memiliki alur kerja audit yang sistematis.',
    },
    {
      num: '02',
      title: 'Bingung Mau Bertanya Apa',
      desc: 'Pertanyaan terlalu umum sehingga sulit menggali fakta dan evidence di lapangan.',
    },
    {
      num: '03',
      title: 'Bingung Menentukan Evidence',
      desc: 'Tidak yakin dokumen, rekaman, atau bukti objektif apa yang relevan untuk diverifikasi.',
    },
    {
      num: '04',
      title: 'Sulit Menulis Temuan',
      desc: 'Menemukan masalah tetapi kesulitan menyusun temuan yang jelas dan objektif (PLOR).',
    },
    {
      num: '05',
      title: 'Root Cause & CAPA Hanya Formalitas',
      desc: 'Masalah berulang karena analisis akar penyebab dan tindakan perbaikan tidak terarah.',
    },
  ];

  return (
    <section className="bg-slate-50 py-10 px-3.5 sm:px-5 border-b border-slate-200 w-full overflow-hidden" id="masalah">
      <div className="w-full text-center max-w-full sm:max-w-[480px] mx-auto">
        {/* Eyebrow Pill */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] sm:text-[12px] font-black tracking-wider uppercase">
            <span>KENDALA EKSEKUSI AUDIT INTERNAL</span>
          </div>
        </div>

        {/* H2 */}
        <h2 className="text-[20px] sm:text-[26px] font-black text-slate-950 leading-[1.25] tracking-tight mb-6 text-center uppercase break-words px-1">
          SUDAH PAHAM ISO, TAPI MASIH BINGUNG SAAT HARUS EKSEKUSI AUDIT?
        </h2>

        {/* Problem Cards 01 - 05 */}
        <div className="space-y-3.5 mb-6 text-left">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-300 rounded-xl p-4 flex items-start gap-3.5 shadow-xs"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-950 text-white flex items-center justify-center font-black text-[13px] shrink-0 mt-0.5 shadow-xs">
                {item.num}
              </div>
              <div className="flex-1">
                <div className="font-black text-slate-950 text-[15.5px] sm:text-[16.5px] leading-snug">
                  {item.title}
                </div>
                <div className="text-[14px] sm:text-[14.5px] text-slate-700 mt-1 leading-relaxed font-normal">
                  {item.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Highlight Sesuai Priority 8 */}
        <div className="bg-slate-950 text-white border border-slate-800 rounded-2xl p-5 text-center shadow-md space-y-3">
          <div className="space-y-1">
            <p className="text-[17px] sm:text-[19px] font-extrabold text-slate-200 leading-snug">
              Masalahnya sering kali bukan kurang teori.
            </p>
            <h3 className="text-[18px] sm:text-[20px] font-black text-white leading-snug">
              Masalahnya adalah belum memiliki framework eksekusi audit yang menghubungkan teori standar dengan praktik nyata di lapangan.
            </h3>
          </div>

          <div className="pt-2 border-t border-slate-800">
            <span className="inline-block px-3.5 py-1.5 bg-blue-600 text-white font-black text-[13.5px] sm:text-[14.5px] rounded-lg uppercase tracking-wide">
              ITULAH PERAN SMART AUDIT SYSTEM.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
