import React, { useState, useEffect } from 'react';
import { X, Calendar, ShieldCheck, Users, BedDouble, MessageCircle, CreditCard } from 'lucide-react';
import type { Room } from '../data/hotelData';
import { hotelInfo } from '../data/hotelData';

interface RoomDetailModalProps {
  room: Room | null;
  isOpen: boolean;
  onClose: () => void;
}

export const RoomDetailModal: React.FC<RoomDetailModalProps> = ({ room, isOpen, onClose }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  // Dynamic Date picker states for pre-filled WhatsApp message
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');

  // Default dates: check-in is tomorrow, check-out is the day after tomorrow
  useEffect(() => {
    const today = new Date();
    
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    const tomStr = tomorrow.toISOString().split('T')[0];
    
    const dayAfter = new Date(today);
    dayAfter.setDate(today.getDate() + 2);
    const dayAfterStr = dayAfter.toISOString().split('T')[0];
    
    setCheckInDate(tomStr);
    setCheckOutDate(dayAfterStr);
    setActiveImageIndex(0); // reset image index when modal opens
  }, [room]);

  if (!isOpen || !room) return null;

  // Generate dynamic WhatsApp link
  const getWhatsAppBookingUrl = () => {
    // Format Indonesian dates for readability (e.g. DD-MM-YYYY)
    const formatStrDate = (dateStr: string) => {
      if (!dateStr) return '______';
      const [year, month, day] = dateStr.split('-');
      return `${day}/${month}/${year}`;
    };

    const formattedIn = formatStrDate(checkInDate);
    const formattedOut = formatStrDate(checkOutDate);

    const message = `Halo Beringin Residence, saya ingin menanyakan ketersediaan kamar ${room.name} untuk tanggal ${formattedIn} sampai ${formattedOut}.`;
    return `https://wa.me/${hotelInfo.whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-dark/70 backdrop-blur-md transition-opacity duration-300">
      {/* Clickable Backdrop */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative bg-cream rounded-[2rem] shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto border border-olive/10 grid grid-cols-1 lg:grid-cols-12 gap-0 z-10 animate-scale-in">
        
        {/* Close Button on Desktop */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2.5 rounded-full bg-cream/90 backdrop-blur-sm text-forest border border-olive/10 shadow-sm hover:bg-terracotta hover:text-cream transition-all duration-300"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Interactive Image Gallery (lg:col-span-6) */}
        <div className="lg:col-span-6 p-6 md:p-8 flex flex-col gap-4 border-r border-olive/5 bg-beige/10">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm">
            <img
              src={room.images[activeImageIndex]}
              alt={`${room.name} main preview`}
              className="w-full h-full object-cover transition-all duration-500"
            />
            {/* Aspect rating badge */}
            <div className="absolute bottom-4 right-4 bg-dark/65 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-medium text-cream">
              Gambar {activeImageIndex + 1} dari {room.images.length}
            </div>
          </div>

          {/* Gallery Thumbnails */}
          <div className="grid grid-cols-3 gap-3">
            {room.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImageIndex(idx)}
                className={`relative aspect-[4/3] rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                  activeImageIndex === idx ? 'border-terracotta scale-95 shadow-sm' : 'border-transparent opacity-75 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`${room.name} preview ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: Specifications & Booking Form (lg:col-span-6) */}
        <div className="lg:col-span-6 p-6 md:p-8 flex flex-col justify-between">
          <div className="flex-grow">
            {/* Header / Title */}
            <div className="flex flex-col gap-1 items-start">
              <span className="text-[10px] uppercase tracking-widest text-terracotta font-sans font-bold bg-terracotta/10 px-3 py-1 rounded-full">
                {room.size} • {room.bedType}
              </span>
              <h3 className="font-serif text-3xl font-bold text-forest mt-2">
                {room.name}
              </h3>
              <p className="text-lg font-serif font-semibold text-terracotta mt-1">
                {room.price} <span className="text-xs font-normal text-olive">/malam</span>
              </p>
            </div>

            {/* Description */}
            <div className="mt-6">
              <h4 className="text-xs uppercase tracking-widest text-olive font-bold font-sans">Deskripsi Kamar</h4>
              <p className="mt-2 text-sm text-dark/85 leading-relaxed font-sans">
                {room.longDescription}
              </p>
            </div>

            {/* Room Specifications Mini Panel */}
            <div className="mt-6 p-4 rounded-xl bg-beige/35 border border-olive/15 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-forest shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-wider text-olive font-sans">Kapasitas</span>
                  <span className="text-xs font-bold text-dark">{room.capacity}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <BedDouble className="w-5 h-5 text-forest shrink-0" />
                <div className="flex flex-col">
                  <span className="text-[9px] uppercase tracking-wider text-olive font-sans">Tipe Bed</span>
                  <span className="text-xs font-bold text-dark">{room.bedType}</span>
                </div>
              </div>
            </div>

            {/* Full Facilities Checklist */}
            <div className="mt-6">
              <h4 className="text-xs uppercase tracking-widest text-olive font-bold font-sans">Fasilitas Kamar</h4>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {room.facilities.map((fac, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-dark/95 font-sans">
                    <ShieldCheck className="w-4 h-4 text-forest shrink-0" />
                    <span>{fac}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Book This Room Form & External Bookings */}
          <div className="mt-8 pt-6 border-t border-olive/15">
            <h4 className="text-xs uppercase tracking-widest text-olive font-bold font-sans mb-4">Book This Room</h4>

            {/* 1. Interactive Date Picker */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-olive font-bold font-sans uppercase">Check-In</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-olive/80 pointer-events-none" />
                  <input
                    type="date"
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    className="w-full bg-beige/30 border border-olive/20 rounded-xl py-2 pl-9 pr-3 text-xs focus:outline-none focus:border-forest text-dark font-sans"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-[10px] text-olive font-bold font-sans uppercase">Check-Out</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-olive/80 pointer-events-none" />
                  <input
                    type="date"
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    className="w-full bg-beige/30 border border-olive/20 rounded-xl py-2 pl-9 pr-3 text-xs focus:outline-none focus:border-forest text-dark font-sans"
                  />
                </div>
              </div>
            </div>

            {/* 2. Platform Options Grid */}
            <div className="flex flex-col gap-2.5">
              {/* WhatsApp Main Booking (Forest Green) */}
              <a
                href={getWhatsAppBookingUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#244A3A] text-cream font-sans text-sm font-semibold py-3.5 rounded-full flex items-center justify-center gap-2 shadow-sm hover:bg-[#1f3f31] transition-all duration-300 hover:shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-cream text-forest" />
                Book via WhatsApp (Fastest Response)
              </a>

              {/* OTA Buttons Layout */}
              <div className="grid grid-cols-2 gap-2.5">
                {/* Agoda */}
                <a
                  href={hotelInfo.agodaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-cream border border-olive/30 hover:border-forest text-forest font-sans text-xs font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:bg-beige/25"
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  Book on Agoda
                </a>
                
                {/* Tiket.com */}
                <a
                  href={hotelInfo.tiketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-cream border border-olive/30 hover:border-forest text-forest font-sans text-xs font-semibold py-3 rounded-full flex items-center justify-center gap-2 transition-all duration-300 hover:bg-beige/25"
                >
                  <CreditCard className="w-3.5 h-3.5" />
                  Book on Tiket.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
export default RoomDetailModal;
