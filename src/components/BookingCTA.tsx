import React from 'react';
import { MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export const BookingCTA: React.FC = () => {
  return (
    <section className="py-20 md:py-28 bg-forest text-cream relative overflow-hidden">
      {/* Decorative botanical element backgrounds or subtle textures */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-cream/5 blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-terracotta/10 blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10 flex flex-col items-center">
        {/* Sparkle Tag */}
        <div className="mb-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cream/10 border border-cream/15">
          <Sparkles className="w-3.5 h-3.5 text-terracotta" />
          <span className="font-sans text-[10px] font-bold tracking-widest uppercase text-beige">
            RESERVE YOUR STAY
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
          Ready to Experience Beringin Residence?
        </h2>

        {/* Supporting description */}
        <p className="mt-6 text-base md:text-lg font-sans text-beige/85 max-w-2xl leading-relaxed">
          Pesan kamar Anda hari ini secara praktis dan langsung melalui saluran resmi WhatsApp kami untuk penawaran terbaik, atau kunjungi platform booking online pilihan Anda.
        </p>

        {/* Button Options */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
          {/* Main WhatsApp Button */}
          <a
            href={hotelInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-terracotta text-cream font-sans text-sm font-semibold tracking-wider uppercase px-8 py-4 rounded-full shadow-lg hover:bg-cream hover:text-forest transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <MessageCircle className="w-4 h-4 fill-cream text-terracotta group-hover:text-forest" />
            Book via WhatsApp
          </a>

          {/* Secondary Agoda Button */}
          <a
            href={hotelInfo.agodaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-transparent border border-cream/30 text-cream font-sans text-sm font-semibold tracking-wider uppercase px-8 py-4 rounded-full hover:bg-cream/10 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ExternalLink className="w-4 h-4" />
            View Agoda
          </a>
        </div>

        {/* Location and booking notes */}
        <div className="mt-8 text-xs text-beige/65 font-sans">
          <span>*Respon cepat via WhatsApp pada pukul 08.00 - 21.00 WIB.</span>
        </div>
      </div>
    </section>
  );
};
export default BookingCTA;
