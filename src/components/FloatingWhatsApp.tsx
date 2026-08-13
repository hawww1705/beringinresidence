import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    
    // Show tooltip after 3 seconds of load to catch attention, then auto-hide after 5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
      const hideTimer = setTimeout(() => setShowTooltip(false), 5000);
      return () => clearTimeout(hideTimer);
    }, 4000);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      clearTimeout(timer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 select-none">
      
      {/* Interactive Tooltip / Speech Bubble */}
      <div
        className={`bg-cream border border-olive/20 text-forest shadow-md px-4 py-2.5 rounded-2xl text-xs font-semibold font-sans tracking-wide transition-all duration-500 transform ${
          showTooltip 
            ? 'opacity-100 translate-x-0 scale-100' 
            : 'opacity-0 translate-x-4 scale-95 pointer-events-none'
        }`}
      >
        <span className="relative z-10">Chat with us! 👋</span>
        {/* Little speech tail */}
        <div className="absolute right-[-6px] top-1/2 -translate-y-1/2 w-3 h-3 rotate-45 bg-cream border-t border-r border-olive/20" />
      </div>

      {/* Floating WhatsApp Action Button */}
      <a
        href={hotelInfo.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-14 h-14 bg-[#25D366] text-cream hover:bg-[#20ba59] shadow-xl hover:shadow-2xl rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 group relative"
        aria-label="Chat on WhatsApp"
      >
        {/* Pulse ring effect */}
        <span className="absolute inset-0 rounded-full bg-[#25D366]/45 animate-ping opacity-75 group-hover:hidden" />
        
        <MessageCircle className="w-7 h-7 fill-cream text-[#25D366] relative z-10" />
      </a>
    </div>
  );
};
export default FloatingWhatsApp;
