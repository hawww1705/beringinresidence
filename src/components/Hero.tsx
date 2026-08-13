import React from 'react';
import { Compass, CalendarDays, Phone, MapPin } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export const Hero: React.FC = () => {
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
    <section
      id="home"
      className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-forest"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero_facade.jpg"
          alt="Beringin Residence Guest House Exterior"
          className="w-full h-full object-cover object-center scale-105 animate-scale-in"
          style={{ animationDuration: '3s' }}
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/95 via-dark/60 to-dark/40" />
        <div className="absolute inset-0 bg-forest/20 mix-blend-multiply" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center text-cream flex flex-col items-center">
        {/* Premium Small Tag */}
        <div className="mb-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cream/20 bg-cream/10 backdrop-blur-sm opacity-0 animate-fade-in [animation-delay:200ms]">
          <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse" />
          <span className="font-sans text-xs font-semibold tracking-widest uppercase">
            WELCOME TO BERINGIN RESIDENCE
          </span>
        </div>

        {/* Big Premium Headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight md:leading-none max-w-4xl opacity-0 animate-fade-in [animation-delay:400ms]">
          {hotelInfo.tagline}
        </h1>

        {/* Descriptive Subheadline */}
        <p className="mt-6 text-lg md:text-xl font-accent italic text-beige/95 max-w-2xl opacity-0 animate-fade-in [animation-delay:600ms]">
          {hotelInfo.taglineSub}
        </p>

        {/* Elegant CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto opacity-0 animate-fade-in [animation-delay:800ms]">
          <button
            onClick={() => scrollToSection('rooms')}
            className="w-full sm:w-auto bg-terracotta text-cream font-sans text-sm font-semibold tracking-wider uppercase px-8 py-4 rounded-full shadow-lg hover:bg-cream hover:text-forest transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <Compass className="w-4 h-4 transition-transform duration-300 group-hover:rotate-45" />
            Explore Rooms
          </button>
          
          <button
            onClick={() => scrollToSection('rooms')}
            className="w-full sm:w-auto bg-transparent border border-cream/40 text-cream font-sans text-sm font-semibold tracking-wider uppercase px-8 py-4 rounded-full hover:bg-cream/10 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <CalendarDays className="w-4 h-4" />
            Book Your Stay
          </button>
        </div>

        {/* Short Metadata Footer */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-y-3 gap-x-8 text-sm text-beige/90 opacity-0 animate-fade-in [animation-delay:1000ms] border-t border-cream/15 pt-6 w-full max-w-xl">
          <a
            href="#location"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('location');
            }}
            className="flex items-center gap-2 hover:text-cream transition-colors group"
          >
            <MapPin className="w-4 h-4 text-terracotta transition-transform group-hover:-translate-y-0.5" />
            <span>Semarang Tengah, Indonesia</span>
          </a>
          
          <span className="hidden sm:inline w-1 h-1 rounded-full bg-cream/35" />
          
          <a
            href={hotelInfo.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-cream transition-colors"
          >
            <Phone className="w-4 h-4 text-terracotta animate-pulse" />
            <span>{hotelInfo.phone}</span>
          </a>
        </div>
      </div>

      {/* Floating subtle scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-cream/50 hover:text-cream transition-colors duration-300 cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <span className="text-[10px] tracking-widest font-sans uppercase">Scroll Down</span>
        <div className="w-[20px] h-[36px] border border-cream/40 rounded-full flex justify-center p-1.5">
          <span className="w-1.5 h-1.5 bg-cream rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
