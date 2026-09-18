import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const CleanAuditFlow: React.FC = () => {
  const stages = [
    { num: '1', name: 'Persiapan', desc: 'Audit plan & dokumen' },
    { num: '2', name: 'Pertanyaan', desc: 'Daftar uji & interview' },
    { num: '3', name: 'Evidence', desc: 'Verifikasi bukti fisik' },
    { num: '4', name: 'Temuan', desc: 'Perumusan PLOR' },
    { num: '5', name: 'Root Cause', desc: 'Analisis 5-Why' },
    { num: '6', name: 'CAPA', desc: 'Tindakan korektif' },
    { num: '7', name: 'Laporan', desc: 'Closing & ke manajemen' },
  ];

  return (
    <section className="bg-white py-10 px-4 sm:px-8 border-b border-gray-100">
      <div className="max-w-xl mx-auto">
        <div className="text-center sm:text-left mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold mb-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" />
            <span>ALUR AUDIT STANDAR INTERNASIONAL</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
            Alur Praktik Audit Internal Lengkap
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Panduan &amp; template SMART Audit System memandu Anda di setiap 7 tahapan audit:
          </p>
        </div>

        {/* Stepper Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-4">
          {stages.map((stage, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-xl border text-left transition-all ${
                idx === 6
                  ? 'col-span-2 sm:col-span-1 bg-blue-50 border-blue-200'
                  : 'bg-slate-50 border-gray-200'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">
                  {stage.num}
                </span>
                {idx < stages.length - 1 && (
                  <ArrowRight className="w-3 h-3 text-gray-400 hidden sm:block" />
                )}
              </div>
              <div className="font-bold text-gray-900 text-xs sm:text-sm">
                {stage.name}
              </div>
              <div className="text-[11px] text-gray-500 mt-0.5 leading-tight">
                {stage.desc}
              </div>
            </div>
          ))}
        </div>

        {/* Quick summary strip */}
        <div className="bg-emerald-50 border border-emerald-200/80 rounded-xl p-3 text-center">
          <p className="text-xs text-emerald-900 font-semibold">
            Semua tahapan di atas sudah dilengkapi worksheet Word/Excel dan panduan AI Tools.
          </p>
        </div>
      </div>
    </section>
  );
};
