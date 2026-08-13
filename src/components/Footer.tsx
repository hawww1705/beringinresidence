import React from 'react';
import { MessageCircle, CreditCard, ChevronRight } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Footer: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-forest text-cream/90 pt-20 pb-10 border-t border-cream/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 md:gap-12 mb-16">
          
          {/* Column 1: Brand & Tagline (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-start gap-4">
            <h3 className="font-serif text-2xl font-bold tracking-wider text-cream">
              {hotelInfo.brandName}
            </h3>
            <p className="font-accent italic text-beige/85 text-sm max-w-sm">
              “{hotelInfo.tagline}”
            </p>
            <p className="font-sans text-xs text-beige/70 max-w-sm leading-relaxed mt-2">
              Membangun kenangan indah di jantung Kota Semarang. Penginapan bertipe boutique guest house yang mengedepankan kebersihan, kenyamanan premium, dan kehangatan keluarga.
            </p>
          </div>

          {/* Column 2: Navigation Links (lg:col-span-2) */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <h4 className="font-serif text-base font-bold text-cream mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2.5 w-full font-sans text-sm">
              {['Home', 'Rooms', 'Facilities', 'Gallery', 'Location', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.toLowerCase());
                  }}
                  className="hover:text-cream text-beige/80 transition-colors flex items-center gap-1 group"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-terracotta transition-transform group-hover:translate-x-0.5" />
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Booking Channels (lg:col-span-2.5) */}
          <div className="lg:col-span-2.5 flex flex-col items-start">
            <h4 className="font-serif text-base font-bold text-cream mb-4">Reservasi</h4>
            <div className="flex flex-col space-y-3 w-full font-sans text-xs font-semibold">
              <a
                href={hotelInfo.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-cream/5 hover:bg-cream/10 border border-cream/10 py-2.5 px-4 rounded-xl transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-cream text-forest shrink-0" />
                <span>WhatsApp Booking</span>
              </a>
              <a
                href={hotelInfo.agodaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-cream/5 hover:bg-cream/10 border border-cream/10 py-2.5 px-4 rounded-xl transition-all"
              >
                <CreditCard className="w-4 h-4 text-cream shrink-0" />
                <span>Agoda Portal</span>
              </a>
              <a
                href={hotelInfo.tiketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-cream/5 hover:bg-cream/10 border border-cream/10 py-2.5 px-4 rounded-xl transition-all"
              >
                <CreditCard className="w-4 h-4 text-cream shrink-0" />
                <span>Tiket.com Portal</span>
              </a>
            </div>
          </div>

          {/* Column 4: Contact Brief (lg:col-span-2.5) */}
          <div className="lg:col-span-2.5 flex flex-col items-start gap-3">
            <h4 className="font-serif text-base font-bold text-cream mb-1">Hubungi Kami</h4>
            <p className="font-sans text-xs text-beige/85 leading-relaxed">
              {hotelInfo.address}
            </p>
            <div className="flex flex-col gap-1.5 font-sans text-xs mt-2">
              <span>📞 {hotelInfo.phone}</span>
              <a
                href={hotelInfo.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-cream transition-colors text-beige/85"
              >
                <InstagramIcon className="w-3.5 h-3.5" />
                <span>{hotelInfo.instagramHandle}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Separator */}
        <div className="border-t border-cream/15 pt-8 flex flex-col items-center justify-between gap-4 text-center">
          {/* Subtle Watermark BenchCode */}
          <div className="text-[10px] font-mono tracking-widest text-cream/10 select-none hover:text-cream/35 transition-colors duration-500 font-light">
            BenchCode™
          </div>

          {/* Copyright Info */}
          <div className="text-[11px] font-sans text-beige/65 flex flex-col md:flex-row items-center gap-2">
            <span>© 2026 Beringin Residence Guest House. All Rights Reserved.</span>
            <span className="hidden md:inline text-cream/20">•</span>
            <span>Semarang Tengah, Jawa Tengah, Indonesia.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
