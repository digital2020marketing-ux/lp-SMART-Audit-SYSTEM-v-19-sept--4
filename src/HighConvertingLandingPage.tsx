import React from 'react';
import { CleanHero } from './components/clean/CleanHero';
import { CleanProblem } from './components/clean/CleanProblem';
import { CleanSolution } from './components/clean/CleanSolution';
import { CleanDashboard } from './components/clean/CleanDashboard';
import { CleanModules } from './components/clean/CleanModules';
import { CleanWorkbooks } from './components/clean/CleanWorkbooks';
import { CleanAiFrameworks } from './components/clean/CleanAiFrameworks';
import { CleanSimulation } from './components/clean/CleanSimulation';
import { CleanOffer } from './components/clean/CleanOffer';
import { CleanTargetAudience } from './components/clean/CleanTargetAudience';
import { CleanTestimonials } from './components/clean/CleanTestimonials';
import { CleanGuarantee } from './components/clean/CleanGuarantee';
import { CleanFaq } from './components/clean/CleanFaq';
import { CleanFinalCta } from './components/clean/CleanFinalCta';
import { CleanFooter } from './components/clean/CleanFooter';
import { NarrativeBridge } from './components/clean/NarrativeBridge';

export const HighConvertingLandingPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-slate-100/70 sm:py-6 overflow-x-hidden">
      <main className="w-full max-w-full sm:max-w-[480px] md:max-w-[500px] min-h-screen bg-white text-slate-900 flex flex-col mx-auto antialiased relative shadow-xl overflow-x-hidden sm:rounded-3xl sm:border sm:border-slate-200/80">
        {/* 1. Hook & First Action: Hero Section (Titik 1 CTA Rp149.000) */}
        <CleanHero />

        {/* Jembatan 1: Hero -> Problem */}
        <NarrativeBridge
          question="Mengapa Banyak yang Panik Saat Ditunjuk Audit Mendadak?"
          statement="Di balik sertifikat pelatihan ISO, ada 5 kendala eksekusi nyata yang membuat auditor pemula merasa bingung dan belum siap."
          destination="5 Kendala Nyata Saat Ditunjuk Audit"
          bgColor="bg-slate-50/50"
        />

        {/* 2. Empathy & Pain Agitation: Kendala Nyata Eksekusi Audit */}
        <CleanProblem />

        {/* Jembatan 2: Problem -> Solution Workflow */}
        <NarrativeBridge
          question="Bagaimana Cara Memecahkannya?"
          statement="Bukan menghafal lebih banyak klausul, melainkan menggunakan alur kerja audit terstruktur dari awal hingga akhir."
          destination="Alur 8 Tahap Eksekusi Audit (Acuan ISO 19011)"
          bgColor="bg-white"
        />

        {/* 3. The Breakthrough: Professional Audit Execution Framework */}
        <CleanSolution />

        {/* Jembatan 3: Solution -> Dashboard */}
        <NarrativeBridge
          question="Bagaimana Alur Tersebut Digunakan Sehari-hari?"
          statement="Seluruh alur kerja diintegrasikan ke dalam satu sistem digital terpusat agar praktis saat bertugas."
          destination="Dashboard Sistem Kerja Terintegrasi"
          bgColor="bg-slate-50/50"
        />

        {/* 4. Physical Proof: Centralized Digital Dashboard */}
        <CleanDashboard />

        {/* Jembatan 4: Dashboard -> 9 Modul & 7 Workbooks */}
        <NarrativeBridge
          question="Apa Saja Isi Instrumen di Dalamnya?"
          statement="Di balik dashboard, tersedia 9 modul panduan langkah demi langkah dan 7 template kerja yang siap diedit."
          destination="9 Modul Panduan & 7 Workbooks Siap Pakai"
          bgColor="bg-white"
        />

        {/* 5. Pilar 1: 9 Modul Panduan Metodologi & Podcast Audio */}
        <CleanModules />

        {/* 6. Pilar 2: 7 Professional Audit Workbooks (Excel & Word) */}
        <CleanWorkbooks />

        {/* Jembatan 5: Workbooks -> AI Frameworks & Simulasi */}
        <NarrativeBridge
          question="Bagaimana Saat Butuh Bantuan Menyusun Draf Cepat?"
          statement="Gunakan 5 AI Audit Frameworks untuk mempercepat draf pertanyaan dan temuan, lalu uji kesiapan Anda lewat simulasi kasus nyata."
          destination="5 AI Frameworks & Simulasi Kasus Lapangan"
          bgColor="bg-slate-50/50"
        />

        {/* 7. Pilar 3: 5 AI Prompt Frameworks Khusus Auditor */}
        <CleanAiFrameworks />

        {/* 8. Pilar 4: Simulasi Kasus Nyata & Skenario Lapangan */}
        <CleanSimulation />

        {/* Jembatan 6: Instrumen -> Contoh Nyata */}
        <NarrativeBridge
          question="Bagaimana Bentuk Penerapan Nyatanya?"
          statement="Berikut contoh riil bagaimana instrumen ini memandu pembuatan checklist, perumusan PLOR, dan penetapan CAPA di lapangan."
          destination="Contoh Hasil Penggunaan di Lapangan"
          bgColor="bg-white"
        />

        {/* 9. Real Evidence / Contoh Hasil: Contoh Penggunaan di Lapangan (Checklist, PLOR, CAPA) */}
        <CleanTestimonials />

        {/* Jembatan 7: Contoh Nyata -> Penawaran & Harga */}
        <NarrativeBridge
          question="Berapa Investasi untuk Memiliki Seluruh Sistem Ini?"
          statement="Semua modul, workbooks, AI frameworks, simulasi, dan dashboard dirangkum dalam satu akses seumur hidup."
          destination="Rincian Komponen & Akses Rp149.000"
          bgColor="bg-slate-50/50"
        />

        {/* 10. The Irresistible Offer: Full Stack Value Table & Titik 2 CTA (Rp149.000) */}
        <CleanOffer />

        {/* 11. Self-Qualification: Siapa yang Membutuhkan Sistem Ini? */}
        <CleanTargetAudience />

        {/* 12. Risk Reversal: Kebijakan Garansi 7 Hari Tanpa Ribet */}
        <CleanGuarantee />

        {/* 13. Objection Handling: FAQ Ringkas */}
        <CleanFaq />

        {/* 14. Closing: Titik 3 Final Call to Action (Rp149.000) */}
        <CleanFinalCta />

        {/* 15. Professional Footer */}
        <CleanFooter />
      </main>
    </div>
  );
};
