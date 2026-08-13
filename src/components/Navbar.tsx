import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // navbar height
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-nav py-4 shadow-sm'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className={`font-serif text-xl md:text-2xl font-bold tracking-wider transition-colors duration-300 ${
            isScrolled ? 'text-forest' : 'text-cream'
          }`}
        >
          BERINGIN RESIDENCE
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {['Home', 'Rooms', 'Facilities', 'Gallery', 'Location', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.toLowerCase());
              }}
              className={`font-sans text-sm font-medium tracking-wide transition-all duration-300 relative py-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-terracotta after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 ${
                isScrolled
                  ? 'text-dark hover:text-forest'
                  : 'text-cream/90 hover:text-cream'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button
            onClick={() => scrollToSection('rooms')}
            className={`font-sans text-sm font-semibold tracking-wider uppercase px-6 py-2.5 rounded-full transition-all duration-300 flex items-center gap-2 group ${
              isScrolled
                ? 'bg-forest text-cream hover:bg-terracotta hover:shadow-md'
                : 'bg-cream text-forest hover:bg-terracotta hover:text-cream'
            }`}
          >
            Book Now
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg transition-colors focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className={`w-6 h-6 ${isScrolled ? 'text-forest' : 'text-cream'}`} />
          ) : (
            <Menu className={`w-6 h-6 ${isScrolled ? 'text-forest' : 'text-cream'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed inset-0 top-[72px] z-40 bg-cream flex flex-col justify-between px-8 py-12 transition-transform duration-500 ease-out border-t border-olive/10 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col space-y-6">
          {['Home', 'Rooms', 'Facilities', 'Gallery', 'Location', 'Contact'].map((item, idx) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.toLowerCase());
              }}
              style={{ animationDelay: `${idx * 100}ms` }}
              className={`font-serif text-2xl font-semibold text-forest hover:text-terracotta transition-colors py-2 border-b border-olive/10 ${
                isMobileMenuOpen ? 'animate-fade-in-right' : 'opacity-0'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile CTA */}
        <div
          className={`flex flex-col space-y-6 transition-all duration-500 delay-300 ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button
            onClick={() => scrollToSection('rooms')}
            className="w-full bg-forest text-cream font-sans text-base font-semibold py-4 rounded-full flex items-center justify-center gap-2 shadow-lg hover:bg-terracotta transition-all"
          >
            Book Now
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <div className="text-center text-xs text-olive">
            <p>📍 {hotelInfo.address}</p>
            <p className="mt-1">📞 {hotelInfo.phone}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
