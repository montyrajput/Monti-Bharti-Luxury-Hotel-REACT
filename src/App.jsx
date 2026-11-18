import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { RoomsSection } from './components/RoomsSection';
import { AmenitiesSection } from './components/AmenitiesSection';
import { DiningAndOffers } from './components/DiningAndOffers';
import { TestimonialsAndGallery } from './components/TestimonialsAndGallery';
import { ContactAndFooter } from './components/ContactAndFooter';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState('Royal Suite');

  const handleOpenBooking = (roomName) => {
    setSelectedRoom(roomName);
    setBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0D1117] text-white">
      <Navbar onOpenBooking={handleOpenBooking} />
      <main>
        <HeroSection onOpenBooking={handleOpenBooking} />
        <AboutSection />
        <RoomsSection onOpenBooking={handleOpenBooking} />
        <AmenitiesSection />
        <DiningAndOffers onOpenBooking={handleOpenBooking} />
        <TestimonialsAndGallery />
        <ContactAndFooter />
      </main>
      <BookingModal
        isOpen={bookingModalOpen}
        selectedRoom={selectedRoom}
        onClose={() => setBookingModalOpen(false)}
      />
    </div>
  );
}
