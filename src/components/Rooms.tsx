import React from 'react';
import { Users, BedDouble, Maximize2, Sparkles, CheckCircle2 } from 'lucide-react';
import { roomsData } from '../data/hotelData';
import type { Room } from '../data/hotelData';

interface RoomsProps {
  onViewRoom: (room: Room) => void;
}

export const Rooms: React.FC<RoomsProps> = ({ onViewRoom }) => {
  return (
    <section id="rooms" className="py-24 md:py-32 bg-beige/25 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Text */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <span className="font-sans text-xs font-bold tracking-widest text-terracotta uppercase mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            ACCOMMODATIONS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-forest leading-tight tracking-tight">
            Find Your Perfect Stay
          </h2>
          <p className="mt-4 text-base text-dark/70 font-sans">
            Pilihlah tipe kamar yang dirancang khusus untuk memenuhi standar kenyamanan, privasi, dan kehangatan bermalam Anda.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10">
          {roomsData.map((room) => (
            <div
              key={room.id}
              className="bg-cream rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-olive/10 flex flex-col justify-between group"
            >
              {/* Card Image Wrapper */}
              <div className="relative aspect-[4/3] overflow-hidden cursor-pointer" onClick={() => onViewRoom(room)}>
                <img
                  src={room.images[0]}
                  alt={room.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <span className="text-cream text-sm font-semibold tracking-wider flex items-center gap-1.5 bg-forest/80 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Maximize2 className="w-4 h-4" /> Quick View Details
                  </span>
                </div>
                
                {/* Float capacity badge */}
                <div className="absolute top-4 right-4 bg-cream/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold text-forest shadow-sm">
                  {room.size}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-2xl font-bold text-forest group-hover:text-terracotta transition-colors duration-300">
                    {room.name}
                  </h3>
                  <p className="mt-3 text-sm text-dark/70 leading-relaxed font-sans line-clamp-2">
                    {room.description}
                  </p>

                  {/* Room Key specs info grid */}
                  <div className="mt-6 py-4 border-y border-olive/10 grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2.5 text-xs text-olive font-sans">
                      <Users className="w-4 h-4 text-terracotta shrink-0" />
                      <span>{room.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2.5 text-xs text-olive font-sans">
                      <BedDouble className="w-4 h-4 text-terracotta shrink-0" />
                      <span>{room.bedType}</span>
                    </div>
                  </div>

                  {/* Features / Amenities Checklist */}
                  <div className="mt-6 flex flex-col gap-2">
                    {room.facilities.slice(0, 3).map((fac, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-dark/80 font-sans">
                        <CheckCircle2 className="w-3.5 h-3.5 text-olive shrink-0" />
                        <span className="truncate">{fac}</span>
                      </div>
                    ))}
                    {room.facilities.length > 3 && (
                      <span className="text-[10px] text-olive font-accent italic">+{room.facilities.length - 3} fasilitas lainnya</span>
                    )}
                  </div>
                </div>

                {/* Price and CTA */}
                <div className="mt-8 pt-6 border-t border-olive/10 flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase tracking-widest text-olive font-sans">Mulai Dari</span>
                    <span className="text-xl font-bold text-forest font-serif">{room.price} <span className="text-xs font-normal text-olive">/malam</span></span>
                  </div>
                  
                  <button
                    onClick={() => onViewRoom(room)}
                    className="bg-forest text-cream font-sans text-xs font-bold tracking-wider uppercase px-5 py-3 rounded-full hover:bg-terracotta transition-colors duration-300 flex items-center gap-1.5"
                  >
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Rooms;
