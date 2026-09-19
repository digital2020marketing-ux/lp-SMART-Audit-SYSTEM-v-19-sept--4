import React, { useState, useEffect } from 'react';
import { getCheckoutUrl, getWhatsAppUrl, trackCheckoutClick, trackWhatsAppClick } from '../../constants';

export const CleanMobileSticky: React.FC = () => {
  const checkoutUrl = getCheckoutUrl();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky after scrolling 160px for prompt mobile engagement
      if (window.scrollY > 160) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  const handleCtaClick = () => {
    trackCheckoutClick('sticky_cta', 'Sticky - AMBIL SEKARANG — Rp149.000');
  };

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('sticky_wa', 'Sticky WhatsApp Chat');
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-3 py-2 bg-slate-950/98 backdrop-blur-md border-t border-slate-800 shadow-[0_-4px_25px_rgba(0,0,0,0.4)] sm:hidden safe-area-bottom">
      <div className="max-w-[480px] mx-auto flex items-center justify-between gap-2">
        {/* Left Side: Pricing & Discount Badge */}
        <div className="flex-1 min-w-0 pr-1">
          <div className="flex items-center gap-1 mb-0.5">
            <span className="text-[10px] font-black text-amber-400 uppercase tracking-wider bg-amber-400/20 px-1.5 py-0.2 rounded border border-amber-400/40">
              HEMAT 70%
            </span>
            <span className="text-[10px] font-bold text-slate-400 truncate">
              ⚡ Akses Instan
            </span>
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-[19px] font-black text-white leading-tight">
              Rp149.000
            </span>
            <span className="text-[11px] text-slate-400 line-through">
              Rp497.000
            </span>
          </div>
        </div>

        {/* Action Buttons: WhatsApp Quick Chat + Main Checkout Button */}
        <div className="flex items-center gap-1.5 shrink-0">
          {/* WhatsApp 1-Tap Quick Chat */}
          <a
            href={getWhatsAppUrl('sticky_wa', 'Halo Admin, saya mau tanya / pesan SMART AUDIT SYSTEM Rp149.000 via WhatsApp.')}
            onClick={handleWhatsAppClick}
            aria-label="Chat WhatsApp Admin"
            className="w-[46px] h-[46px] bg-emerald-600 hover:bg-emerald-500 active:scale-[0.95] text-white rounded-xl flex items-center justify-center shadow-md shadow-emerald-900/40 border border-emerald-400/40 shrink-0"
            title="Tanya Admin via WhatsApp"
          >
            <span className="text-[20px] leading-none">💬</span>
          </a>

          {/* Primary Checkout CTA (NO target=_blank for seamless Meta in-app browser flow) */}
          <a
            id="cta_sticky"
            href={checkoutUrl}
            onClick={handleCtaClick}
            className="h-[46px] px-3.5 bg-[#e24021] hover:bg-[#cf3519] active:scale-[0.98] text-white font-black text-[13.5px] rounded-xl inline-flex items-center justify-center shadow-lg shadow-[#e24021]/40 transition-all text-center tracking-tight border border-[#cf3519]/60 shrink-0 whitespace-nowrap animate-pulse"
          >
            <span>AMBIL SEKARANG →</span>
          </a>
        </div>
      </div>
    </div>
  );
};

