import React from 'react';
import * as Icons from 'lucide-react';
import { facilitiesData } from '../data/hotelData';

// Dynamic Icon rendering helper
const IconRenderer: React.FC<{ name: string; className?: string }> = ({ name, className }) => {
  // Safe lookup for icons
  const LucideIcon = (Icons as any)[name];
  if (!LucideIcon) {
    return <Icons.HelpCircle className={className} />;
  }
  return <LucideIcon className={className} />;
};

export const Facilities: React.FC = () => {
  return (
    <section id="facilities" className="py-24 md:py-32 bg-cream relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="font-sans text-xs font-bold tracking-widest text-terracotta uppercase mb-3 flex items-center justify-center gap-2">
            <Icons.Sparkles className="w-3.5 h-3.5" />
            OUR AMENITIES
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-forest leading-tight tracking-tight">
            Everything You Need for a Comfortable Stay
          </h2>
          <p className="mt-4 text-base text-dark/70 font-sans">
            Kami berkomitmen menyediakan fasilitas lengkap untuk menunjang kenyamanan istirahat, liburan, maupun perjalanan produktif Anda di Semarang.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {facilitiesData.map((fac, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-beige/20 border border-olive/10 hover:border-forest/35 hover:bg-beige/40 shadow-sm hover:shadow-md transition-all duration-500 group"
            >
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-2xl bg-forest/5 text-forest flex items-center justify-center transition-all duration-500 group-hover:bg-forest group-hover:text-cream shadow-sm">
                <IconRenderer name={fac.iconName} className="w-6 h-6" />
              </div>

              {/* Title & Description */}
              <h3 className="font-serif text-lg font-bold text-forest mt-6 group-hover:text-terracotta transition-colors duration-300">
                {fac.name}
              </h3>
              
              <p className="mt-3 text-xs md:text-sm text-dark/70 leading-relaxed font-sans">
                {fac.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Facilities;
