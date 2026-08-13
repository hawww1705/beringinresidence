import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, Car, Footprints } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

export const Location: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(hotelInfo.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const nearbySpots = [
    { name: 'Paragon Mall Semarang', dist: '400 m', time: '5 Menit Jalan kaki', type: 'walk' },
    { name: 'Lawang Sewu', dist: '1.2 km', time: '4 Menit berkendara', type: 'drive' },
    { name: 'Kawasan Simpang Lima', dist: '1.8 km', time: '5 Menit berkendara', type: 'drive' },
    { name: 'Stasiun Poncol Semarang', dist: '1.9 km', time: '6 Menit berkendara', type: 'drive' },
    { name: 'Kota Lama Semarang', dist: '2.5 km', time: '8 Menit berkendara', type: 'drive' },
  ];

  return (
    <section id="location" className="py-24 md:py-32 bg-beige/25 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
          
          {/* Left Column: Address, Copy, and Distances */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="font-sans text-xs font-bold tracking-widest text-terracotta uppercase mb-3 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              EXPLORE SEMARANG
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-forest leading-tight tracking-tight">
              Stay Close to Everything
            </h2>
            <p className="mt-4 text-base text-dark/70 font-sans">
              Terletak di pusat Semarang Tengah, Beringin Residence memberikan Anda keunggulan mobilitas. Sangat dekat dengan destinasi belanja, sejarah, kuliner, dan transportasi.
            </p>

            {/* Address Card */}
            <div className="mt-8 p-6 rounded-2xl bg-cream border border-olive/10 shadow-sm w-full flex items-start gap-4 justify-between">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 text-terracotta shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-wider text-olive font-bold font-sans">Alamat Lengkap</span>
                  <p className="mt-1 text-sm text-dark/90 leading-relaxed font-sans font-medium">
                    {hotelInfo.address}
                  </p>
                </div>
              </div>
              <button
                onClick={handleCopyAddress}
                className="p-2 rounded-lg bg-beige/40 text-olive hover:text-forest hover:bg-beige/80 transition-colors border border-olive/10"
                title="Copy Address"
              >
                {copied ? <Check className="w-4 h-4 text-forest" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Nearby Highlights List */}
            <div className="mt-8 w-full">
              <h4 className="text-xs uppercase tracking-widest text-olive font-bold font-sans mb-3.5">Sekitar Beringin Residence</h4>
              <div className="flex flex-col gap-3">
                {nearbySpots.map((spot, idx) => (
                  <div
                    key={idx}
                    className="flex justify-between items-center py-2.5 border-b border-olive/10 text-xs font-sans text-dark/85"
                  >
                    <div className="flex items-center gap-2">
                      {spot.type === 'walk' ? (
                        <Footprints className="w-4 h-4 text-forest" />
                      ) : (
                        <Car className="w-4 h-4 text-olive" />
                      )}
                      <span className="font-semibold">{spot.name}</span>
                    </div>
                    <div className="text-right text-olive text-[11px]">
                      <span>{spot.dist} ({spot.time})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map Directions Action */}
            <a
              href={hotelInfo.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 bg-forest text-cream font-sans text-sm font-semibold tracking-wider uppercase px-7 py-3.5 rounded-full shadow-sm hover:bg-terracotta transition-colors duration-300 flex items-center justify-center gap-2 group"
            >
              <Navigation className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              Get Directions
            </a>
          </div>

          {/* Right Column: Google Maps Interactive Embed (lg:col-span-7) */}
          <div className="lg:col-span-7 w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden shadow-md border border-olive/10 relative">
            <iframe
              src={hotelInfo.mapsEmbedUrl}
              title="Beringin Residence Google Maps"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};
export default Location;
