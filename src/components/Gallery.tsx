import React, { useState } from 'react';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryData } from '../data/hotelData';

export const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'rooms' | 'interior' | 'exterior'>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter gallery items
  const filteredItems = activeFilter === 'all'
    ? galleryData
    : galleryData.filter(item => item.category === activeFilter);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    setLightboxIndex(prev => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="gallery" className="py-24 md:py-32 bg-beige/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <span className="font-sans text-xs font-bold tracking-widest text-terracotta uppercase mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            VISUAL JOURNAL
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-forest leading-tight tracking-tight">
            Follow Our Aesthetic Stay
          </h2>
          <p className="mt-4 text-base text-dark/70 font-sans">
            Lihatlah sekilas keindahan sudut Beringin Residence, mulai dari arsitektur tropis, detail interior kamar, hingga kenyamanan lobby kami.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-3 mb-12">
          {(['all', 'rooms', 'interior', 'exterior'] as const).map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveFilter(category);
                setLightboxIndex(null);
              }}
              className={`font-sans text-xs md:text-sm font-semibold tracking-wider uppercase px-6 py-2.5 rounded-full transition-all duration-300 border ${
                activeFilter === category
                  ? 'bg-forest text-cream border-forest shadow-sm'
                  : 'bg-cream text-olive border-olive/20 hover:border-forest hover:text-forest'
              }`}
            >
              {category === 'all' ? 'All Photos' : category}
            </button>
          ))}
        </div>

        {/* CSS Native Masonry Columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              className="relative overflow-hidden rounded-[2rem] border border-olive/10 group cursor-pointer break-inside-avoid shadow-sm hover:shadow-lg transition-all duration-500"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              {/* Hover Dark Overlay and Icon */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/65 via-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 md:p-8">
                <span className="text-cream/70 text-[9px] uppercase tracking-widest font-sans font-bold">
                  {item.category}
                </span>
                <h4 className="text-cream text-lg font-serif font-bold mt-1">
                  {item.title}
                </h4>
                <div className="mt-4 flex items-center gap-1.5 text-xs text-cream font-sans font-medium">
                  <Maximize2 className="w-3.5 h-3.5" /> Fullscreen View
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Overlay */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 select-none"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close Lightbox */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-cream/10 border border-cream/10 text-cream hover:bg-cream hover:text-dark transition-all duration-300 z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:left-8 p-3 rounded-full bg-cream/10 border border-cream/10 text-cream hover:bg-cream hover:text-dark transition-all duration-300 z-40"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Center Main Image Panel */}
          <div className="max-w-5xl max-h-[80vh] flex flex-col items-center gap-4 relative z-30">
            <img
              src={filteredItems[lightboxIndex].url}
              alt={filteredItems[lightboxIndex].title}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-cream/10 animate-scale-in"
            />
            {/* Title / Description */}
            <div className="text-center text-cream">
              <span className="text-[10px] uppercase tracking-widest text-beige font-sans">
                {filteredItems[lightboxIndex].category}
              </span>
              <h4 className="font-serif text-lg font-medium mt-1">
                {filteredItems[lightboxIndex].title}
              </h4>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-4 md:right-8 p-3 rounded-full bg-cream/10 border border-cream/10 text-cream hover:bg-cream hover:text-dark transition-all duration-300 z-40"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
export default Gallery;
