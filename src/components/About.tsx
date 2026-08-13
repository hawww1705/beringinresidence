import React from 'react';
import { ShieldCheck, MapPin, Smile, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Decorative subtle background shape */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-beige/35 blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-olive/10 blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Heading & Paragraphs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="font-sans text-xs font-bold tracking-widest text-terracotta uppercase mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              OUR IDENTITY
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-forest leading-tight tracking-tight">
              A Comfortable Stay in the Heart of Semarang
            </h2>
            <p className="mt-6 text-base md:text-lg text-dark/80 leading-relaxed font-sans">
              Beringin Residence Guest House menghadirkan pengalaman menginap yang nyaman, tenang, dan praktis di lokasi strategis Kota Semarang. Dirancang dengan perhatian penuh terhadap detail, setiap ruang memberikan suasana hangat yang membuat Anda merasa seperti di rumah sendiri.
            </p>
            <p className="mt-4 text-sm md:text-base text-olive leading-relaxed font-accent italic">
              “Kombinasi keindahan arsitektur tropical modern, kamar premium yang tenang, serta hospitality yang ramah khas Indonesia di pusat kota.”
            </p>

            {/* 3 Highlight Cards */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
              
              {/* Comfort Card */}
              <div className="p-6 rounded-2xl bg-beige/40 border border-olive/10 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start">
                <div className="p-3 rounded-xl bg-forest/10 text-forest mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-forest">Comfort</h3>
                <p className="mt-2 text-xs md:text-sm text-dark/70 leading-relaxed">
                  Ruang yang dirancang khusus untuk memberikan kenyamanan maksimal selama Anda menginap.
                </p>
              </div>

              {/* Strategic Location Card */}
              <div className="p-6 rounded-2xl bg-beige/40 border border-olive/10 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start">
                <div className="p-3 rounded-xl bg-forest/10 text-forest mb-4">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-forest">Strategic</h3>
                <p className="mt-2 text-xs md:text-sm text-dark/70 leading-relaxed">
                  Berada di kawasan Semarang Tengah dengan akses mudah ke berbagai pusat destinasi utama.
                </p>
              </div>

              {/* Warm Hospitality Card */}
              <div className="p-6 rounded-2xl bg-beige/40 border border-olive/10 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col items-start">
                <div className="p-3 rounded-xl bg-forest/10 text-forest mb-4">
                  <Smile className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-forest">Hospitality</h3>
                <p className="mt-2 text-xs md:text-sm text-dark/70 leading-relaxed">
                  Pengalaman menginap yang hangat, penuh perhatian, personal, dan profesional.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Premium Collage */}
          <div className="lg:col-span-5 relative w-full h-[400px] md:h-[550px] flex items-center justify-center">
            {/* Base Background Overlay Frame */}
            <div className="absolute w-[80%] h-[80%] border-2 border-olive/20 rounded-[2rem] -rotate-3 translate-x-4 -translate-y-2 pointer-events-none" />

            {/* Main Large Image (Lobby) */}
            <div className="absolute w-[85%] h-[75%] rounded-[2rem] overflow-hidden shadow-2xl z-10 -translate-y-6 -translate-x-4 hover:scale-[1.02] transition-transform duration-500">
              <img
                src="/images/lobby.jpg"
                alt="Beringin Residence Cozy Lobby"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/40 to-transparent" />
            </div>

            {/* Overlapping Small Image (Garden) */}
            <div className="absolute w-[55%] h-[45%] rounded-[2rem] overflow-hidden shadow-2xl z-20 bottom-4 right-0 md:-right-4 border-4 border-cream hover:scale-105 transition-transform duration-500 hover:z-30">
              <img
                src="/images/garden.jpg"
                alt="Beringin Residence Garden Pathway"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent" />
            </div>

            {/* Floating Mini-Badge */}
            <div className="absolute bg-terracotta text-cream p-4 rounded-2xl shadow-xl z-20 top-12 right-6 rotate-6 animate-pulse font-serif text-sm font-semibold tracking-wider">
              100% Homey ✨
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
export default About;
