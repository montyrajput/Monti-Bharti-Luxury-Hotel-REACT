import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, CheckCircle2 } from 'lucide-react';

export const BookingModal = ({ isOpen, selectedRoom, onClose }) => {
  const [room, setRoom] = useState(selectedRoom || 'Royal Suite');
  const [guests, setGuests] = useState('2 Adults');
  const [checkIn, setCheckIn] = useState('2026-12-15');
  const [checkOut, setCheckOut] = useState('2026-12-18');
  const [confirmed, setConfirmed] = useState(false);

  useEffect(() => {
    if (selectedRoom) setRoom(selectedRoom);
  }, [selectedRoom]);

  if (!isOpen) return null;

  const handleConfirm = (e) => {
    e.preventDefault();
    setConfirmed(true);
    setTimeout(() => {
      setConfirmed(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-[#12151C] border border-[#D4B584]/40 rounded-2xl max-w-md w-full p-6 text-white shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-gray-400 hover:text-white"
          aria-label="Close Modal"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-xs uppercase tracking-widest text-[#D4B584] font-semibold">
          Bharti Concierge
        </span>
        <h3 className="font-serif-luxury text-3xl font-semibold mt-1">Reserve Your Luxury Stay</h3>

        {confirmed ? (
          <div className="py-10 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-[#D4B584] mx-auto" />
            <h4 className="font-serif-luxury text-2xl">Reservation Confirmed!</h4>
            <p className="text-xs text-gray-300">
              Your booking request for <strong>{room}</strong> has been registered with our 24/7 VIP desk.
            </p>
          </div>
        ) : (
          <form onSubmit={handleConfirm} className="mt-5 space-y-4">
            <div>
              <label className="block text-xs text-gray-300 mb-1.5">Select Suite / Package</label>
              <select
                value={room}
                onChange={(e) => setRoom(e.target.value)}
                className="w-full bg-[#0D1117] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-[#D4B584]"
              >
                <option value="Deluxe Room">Deluxe Room — $149 / night</option>
                <option value="Executive Suite">Executive Suite — $249 / night</option>
                <option value="Premium Room">Premium Room — $349 / night</option>
                <option value="Royal Suite">Royal Suite — $499 / night</option>
                <option value="30% Off Luxury Offer">30% Off Limited Time Package</option>
                <option value="Fine Dining Table Reservation">Signature Fine Dining Reservation</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-gray-300 mb-1.5 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#D4B584]" /> Check-In
                </label>
                <input
                  type="date"
                  value={checkIn}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className="w-full bg-[#0D1117] border border-white/15 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-300 mb-1.5 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-[#D4B584]" /> Check-Out
                </label>
                <input
                  type="date"
                  value={checkOut}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className="w-full bg-[#0D1117] border border-white/15 rounded-xl px-3 py-2 text-xs text-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-300 mb-1.5 flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-[#D4B584]" /> Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-[#0D1117] border border-white/15 rounded-xl px-4 py-2.5 text-sm text-white"
              >
                <option>1 Adult</option>
                <option>2 Adults</option>
                <option>2 Adults, 1 Child</option>
                <option>4 Adults (Family Suite)</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full gold-gradient-btn text-[#0D1117] font-semibold py-3 rounded-full text-sm mt-2"
            >
              Confirm Instant Reservation
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
