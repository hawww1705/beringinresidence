import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Rooms from './components/Rooms';
import RoomDetailModal from './components/RoomDetailModal';
import BookingCTA from './components/BookingCTA';
import Facilities from './components/Facilities';
import Gallery from './components/Gallery';
import Location from './components/Location';
import InstagramSection from './components/InstagramSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import type { Room } from './data/hotelData';

export const App: React.FC = () => {
  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenRoomDetail = (room: Room) => {
    setSelectedRoom(room);
    setIsModalOpen(true);
  };

  const handleCloseRoomDetail = () => {
    setIsModalOpen(false);
    // Add brief timeout to prevent layout flicker while animating out
    setTimeout(() => setSelectedRoom(null), 300);
  };

  return (
    <div className="relative min-h-screen bg-cream flex flex-col justify-between overflow-x-hidden antialiased">
      {/* Dynamic Glass Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="flex-grow">
        {/* Cinematic Welcome Slider/Hero */}
        <Hero />

        {/* Brand Story & Highlights */}
        <About />

        {/* Accommodations Room Catalog */}
        <Rooms onViewRoom={handleOpenRoomDetail} />

        {/* Brand Booking CTA (Deep Green Backdrop) */}
        <BookingCTA />

        {/* Amenities Listing */}
        <Facilities />

        {/* visual Grid Gallery & Lightbox */}
        <Gallery />

        {/* Location & Access Details */}
        <Location />

        {/* Instagram Collage Feed */}
        <InstagramSection />

        {/* Form and Direct Call Contact Details */}
        <Contact />
      </main>

      {/* Footer Credentials */}
      <Footer />

      {/* Pop-up Room Detail Dialog */}
      <RoomDetailModal
        room={selectedRoom}
        isOpen={isModalOpen}
        onClose={handleCloseRoomDetail}
      />

      {/* Floating Action WhatsApp with Automatic Tooltip */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
