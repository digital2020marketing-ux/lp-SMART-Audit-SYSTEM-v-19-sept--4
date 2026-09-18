import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export const CleanFaq: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Apakah cocok untuk pemula yang baru bertugas di audit internal?',
      a: 'Sangat cocok. SMART AUDIT SYSTEM dirancang khusus agar Anda tidak perlu memulai dari file kosong. Anda langsung dipandu langkah demi langkah: mulai dari checklist klausul, bank pertanyaan terarah, panduan verifikasi bukti, formula PLOR untuk menulis temuan tanpa ragu, hingga format laporan audit resmi yang siap pakai.',
    },
    {
      q: 'Bagaimana cara mendapatkan akses setelah pembayaran?',
      a: 'Setelah pembayaran selesai melalui checkout resmi, link akses ke Dashboard SMART AUDIT SYSTEM otomatis dikirimkan ke email aktif Anda saat itu juga. Anda bisa langsung membuka dan mengunduh seluruh materi.',
    },
    {
      q: 'Apakah workbook bisa diedit dan disesuaikan?',
      a: 'Ya, 100% bisa diedit. Seluruh 7 Professional Audit Workbooks disediakan dalam format spreadsheet standar (.xlsx untuk Excel & Google Sheets) serta dokumen yang bebas disesuaikan dengan proses bisnis organisasi Anda.',
    },
    {
      q: 'Software atau aplikasi apa yang dibutuhkan?',
      a: 'Cukup aplikasi spreadsheet standar seperti Microsoft Excel atau Google Sheets. Untuk 5 AI Audit Frameworks, Anda dapat menggunakannya di ChatGPT versi gratis tanpa perlu akun berbayar.',
    },
    {
      q: 'Metode pembayaran apa saja yang tersedia saat checkout?',
      a: 'Tersedia pembayaran otomatis resmi: QRIS (semua bank & e-wallet), Dana, GoPay, OVO, serta Virtual Account Mandiri, BRI, dan BNI. Terverifikasi instan 24 jam.',
    },
    {
      q: 'Bagaimana jika saya mengalami kendala atau butuh bantuan?',
      a: 'Tim support kami siap membantu Anda secara langsung via WhatsApp resmi. Jika ada kendala tautan email atau akses dashboard, tim kami siap memandu sampai lancar.',
    },
  ];

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="bg-white py-10 px-3.5 sm:px-5 border-b border-slate-200/80 w-full overflow-hidden" id="faq">
      <div className="w-full text-center max-w-full sm:max-w-[480px] mx-auto">
        {/* Eyebrow Pill */}
        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-900 text-white text-[11px] sm:text-[12px] font-black tracking-wider uppercase shadow-xs">
            <span>TANYA JAWAB UMUM (FAQ)</span>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-[20px] sm:text-[25px] font-black text-slate-950 leading-[1.25] tracking-tight mb-5 sm:mb-6 text-center uppercase break-words px-1">
          PERTANYAAN YANG SERING DIAJUKAN
        </h2>

        {/* Accordion List */}
        <div className="space-y-3 text-left w-full">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-300 rounded-xl overflow-hidden transition-all shadow-xs w-full"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full py-3.5 px-3.5 sm:px-4 text-left flex items-center justify-between gap-2.5 font-black text-slate-950 text-[14px] sm:text-[15.5px] hover:text-blue-900 transition-colors"
                >
                  <span className="leading-snug min-w-0 break-words">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-700' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-3.5 sm:px-4 pb-4 pt-1 text-[13px] sm:text-[14px] text-slate-700 font-medium leading-relaxed border-t border-slate-200 break-words">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
