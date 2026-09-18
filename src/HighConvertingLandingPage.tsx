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

export const HighConvertingLandingPage: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-slate-100/70 sm:py-6 overflow-x-hidden">
      <main className="w-full max-w-full sm:max-w-[480px] md:max-w-[500px] min-h-screen bg-white text-slate-900 flex flex-col mx-auto antialiased relative shadow-xl overflow-x-hidden sm:rounded-3xl sm:border sm:border-slate-200/80">
        {/* 1. Hook & First Action: Hero Section (Titik 1 CTA Rp249.000) */}
        <CleanHero />

        {/* 2. Empathy & Pain Agitation: Kendala Nyata Eksekusi Audit */}
        <CleanProblem />

        {/* 3. The Breakthrough: Professional Audit Execution Framework */}
        <CleanSolution />

        {/* 4. Physical Proof: Centralized Digital Dashboard */}
        <CleanDashboard />

        {/* 5. Pilar 1: 9 Modul Panduan Metodologi & Podcast Audio */}
        <CleanModules />

        {/* 6. Pilar 2: 7 Professional Audit Workbooks (Excel & Word) */}
        <CleanWorkbooks />

        {/* 7. Pilar 3: 5 AI Prompt Frameworks Khusus Auditor */}
        <CleanAiFrameworks />

        {/* 8. Pilar 4: Simulasi Kasus Nyata & Skenario Lapangan */}
        <CleanSimulation />

        {/* 9. The Irresistible Offer: Full Stack Value Table & Titik 2 CTA (Rp249.000) */}
        <CleanOffer />

        {/* 10. Self-Qualification: Siapa yang Membutuhkan Sistem Ini? */}
        <CleanTargetAudience />

        {/* 11. Real Evidence: Yang Bisa Anda Kerjakan Dengan Sistem Ini */}
        <CleanTestimonials />

        {/* 12. Risk Reversal: Kebijakan Garansi 7 Hari Tanpa Ribet */}
        <CleanGuarantee />

        {/* 13. Objection Handling: FAQ Ringkas */}
        <CleanFaq />

        {/* 14. Closing: Titik 3 Final Call to Action (Rp249.000) */}
        <CleanFinalCta />

        {/* 15. Professional Footer */}
        <CleanFooter />
      </main>
    </div>
  );
};
