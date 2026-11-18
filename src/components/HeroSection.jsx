import React, { useState } from 'react';
import {
  ArrowRight,
  Play,
  Diamond,
  Star,
  X,
  Calendar,
  Users,
  BedDouble,
  CheckCircle2,
  Phone,
  User,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import { WaveTransition } from './BrandEmblems';

export const HeroSection = ({ onOpenBooking }) => {
  const [videoOpen, setVideoOpen] = useState(false);

  // Quick Booking Bar State
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [bookingData, setBookingData] = useState({
    checkIn: today,
    checkOut: tomorrow,
    guests: '2 Adults, 0 Children',
    roomType: 'Deluxe Room'
  });

  // Booking Modal State
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [guestInfo, setGuestInfo] = useState({
    fullName: '',
    phone: '',
    specialRequest: ''
  });
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const guestAvatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80'
  ];

  const roomPrices = {
    'Deluxe Room': '₹4,500 / night',
    'Executive Suite': '₹7,200 / night',
    'Royal Presidential Suite': '₹12,500 / night',
    'Family Luxury Villa': '₹9,800 / night'
  };

  const handleQuickBookSubmit = (e) => {
    e.preventDefault();
    if (onOpenBooking) {
      onOpenBooking(bookingData.roomType, bookingData);
    }
    setBookingModalOpen(true);
  };

  const handleConfirmReservation = (e) => {
    e.preventDefault();
    if (!guestInfo.fullName.trim() || !guestInfo.phone.trim()) return;
    setBookingConfirmed(true);
    setTimeout(() => {
      setBookingConfirmed(false);
      setBookingModalOpen(false);
      setGuestInfo({ fullName: '', phone: '', specialRequest: '' });
    }, 3500);
  };

  return (
    <section id="home" className="relative bg-[#0D1117] pt-20 lg:pt-24 overflow-hidden">
      {/* Background Image with balanced, light overlay so wallpaper is clearly visible */}
      <div className="absolute inset-0 z-0">
        <img
          src={new URL('../public/hotel-exterior.png', import.meta.url).href}
          alt="Bharti Luxury Hotel Exterior"
          className="block w-full h-full object-contain object-center opacity-100"
          fetchPriority="high"
        />
        {/* Soft gradient from left side only so text is readable while image remains bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D1117]/85 via-[#0D1117]/40 to-transparent" />
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-8 lg:pt-16 lg:pb-12 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-10">
        
        {/* Left Column: Heading & Badges */}
        <div className="max-w-2xl space-y-6">
          {/* Sleek Compact Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12151C]/80 border border-[#D4B584]/40 text-xs font-medium text-gray-200 backdrop-blur-md shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#D4B584]" />
            <span>Sarbahal, Jharsuguda • Bharti Luxury Hotel</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-[64px] font-semibold text-white leading-[1.08] tracking-tight drop-shadow-md">
            Experience <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F3E5AB] to-[#D4B584]">
              True Luxury & Comfort
            </span>
          </h1>

          <p className="text-sm sm:text-base text-gray-200 max-w-lg leading-relaxed font-light drop-shadow">
            Indulge in world-class hospitality, elegantly designed rooms, and premium amenities right in the heart of Odisha.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <button
              onClick={() => {
                if (onOpenBooking) onOpenBooking(bookingData.roomType);
                setBookingModalOpen(true);
              }}
              className="gold-gradient-btn text-[#0D1117] font-semibold text-xs sm:text-sm px-6 py-3 rounded-full inline-flex items-center gap-2 shadow-xl hover:scale-105 transition-transform"
            >
              <span>Book Your Stay</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setVideoOpen(true)}
              className="inline-flex items-center gap-2.5 px-4.5 py-2.5 rounded-full bg-black/40 hover:bg-black/60 border border-white/30 text-white text-xs sm:text-sm font-medium backdrop-blur-md transition-all shadow-lg"
            >
              <span className="w-7 h-7 rounded-full border border-[#D4B584] flex items-center justify-center bg-[#0D1117]/60">
                <Play className="w-3 h-3 text-[#D4B584] fill-[#D4B584] ml-0.5" />
              </span>
              <span>Watch Walkthrough</span>
            </button>
          </div>

          {/* Social Proof Avatars */}
          <div className="flex items-center gap-3.5 pt-2">
            <div className="flex -space-x-2.5">
              {guestAvatars.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Guest ${idx + 1}`}
                  className="w-9 h-9 rounded-full object-cover border-2 border-[#0D1117]"
                />
              ))}
            </div>
            <div className="text-xs text-gray-200 font-medium">
              <span className="text-[#D4B584] font-bold">10,000+</span> Satisfied Guests & Counting
            </div>
          </div>
        </div>

        {/* Right Column: Refined Luxury Rating Card */}
        <div className="w-full lg:w-auto flex justify-center lg:justify-end">
          <div className="bg-[#12151C]/80 border border-[#D4B584]/30 rounded-2xl p-6 text-center shadow-2xl backdrop-blur-md max-w-xs w-full relative overflow-hidden group hover:border-[#D4B584]/60 transition-colors">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4B584]/10 rounded-full blur-2xl pointer-events-none" />
            
            <div className="w-11 h-11 mx-auto rounded-xl bg-[#D4B584]/20 border border-[#D4B584]/40 flex items-center justify-center mb-3 shadow-inner">
              <Diamond className="w-5 h-5 text-[#D4B584]" />
            </div>
            
            <div className="text-4xl font-serif-luxury font-bold text-white tracking-tight">5.0 / 5.0</div>
            <div className="text-xs text-[#D4B584] font-medium tracking-wider uppercase mt-1 mb-3">
              Top Rated in Jharsuguda
            </div>

            <div className="flex items-center justify-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#D4B584] fill-[#D4B584]" />
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-center gap-2 text-[11px] text-gray-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Verified Guest Experiences</span>
            </div>
          </div>
        </div>

      </div>

      {/* ================= COMPACT QUICK BOOKING BAR ================= */}
      <div id="booking" className="relative z-20 max-w-7xl mx-auto px-6 pb-12">
        <div className="bg-[#1A202C]/90 backdrop-blur-xl border border-[#D4B584]/30 rounded-2xl p-4 sm:p-5 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-4 border-b border-white/10">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-widest text-[#D4B584]">
                Instant Reservation
              </span>
              <h3 className="font-serif-luxury text-lg font-semibold text-white">
                Book Your Stay
              </h3>
            </div>
            <span className="text-[11px] text-gray-300">
              Best Rate Guarantee • Instant Confirmation
            </span>
          </div>

          <form
            onSubmit={handleQuickBookSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-end"
          >
            {/* Check-in Date */}
            <div className="lg:col-span-3 space-y-1">
              <label className="flex items-center gap-1 text-[11px] font-medium text-gray-300">
                <Calendar className="w-3 h-3 text-[#D4B584]" />
                <span>Check-In Date</span>
              </label>
              <input
                type="date"
                required
                min={today}
                value={bookingData.checkIn}
                onChange={(e) => setBookingData({ ...bookingData, checkIn: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl bg-[#12151C] border border-white/10 text-xs text-white focus:outline-none focus:border-[#D4B584] [color-scheme:dark]"
              />
            </div>

            {/* Check-out Date */}
            <div className="lg:col-span-3 space-y-1">
              <label className="flex items-center gap-1 text-[11px] font-medium text-gray-300">
                <Calendar className="w-3 h-3 text-[#D4B584]" />
                <span>Check-Out Date</span>
              </label>
              <input
                type="date"
                required
                min={bookingData.checkIn || today}
                value={bookingData.checkOut}
                onChange={(e) => setBookingData({ ...bookingData, checkOut: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl bg-[#12151C] border border-white/10 text-xs text-white focus:outline-none focus:border-[#D4B584] [color-scheme:dark]"
              />
            </div>

            {/* Guests */}
            <div className="lg:col-span-2 space-y-1">
              <label className="flex items-center gap-1 text-[11px] font-medium text-gray-300">
                <Users className="w-3 h-3 text-[#D4B584]" />
                <span>Guests</span>
              </label>
              <select
                value={bookingData.guests}
                onChange={(e) => setBookingData({ ...bookingData, guests: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl bg-[#12151C] border border-white/10 text-xs text-white focus:outline-none focus:border-[#D4B584]"
              >
                <option value="1 Adult">1 Adult</option>
                <option value="2 Adults, 0 Children">2 Adults</option>
                <option value="2 Adults, 1 Child">2 Adults, 1 Child</option>
                <option value="4 Adults (Family)">4 Adults (Family)</option>
              </select>
            </div>

            {/* Room Selection */}
            <div className="lg:col-span-2 space-y-1">
              <label className="flex items-center gap-1 text-[11px] font-medium text-gray-300">
                <BedDouble className="w-3 h-3 text-[#D4B584]" />
                <span>Room Suite</span>
              </label>
              <select
                value={bookingData.roomType}
                onChange={(e) => setBookingData({ ...bookingData, roomType: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl bg-[#12151C] border border-white/10 text-xs text-white focus:outline-none focus:border-[#D4B584]"
              >
                <option value="Deluxe Room">Deluxe Room</option>
                <option value="Executive Suite">Executive Suite</option>
                <option value="Royal Presidential Suite">Royal Suite</option>
                <option value="Family Luxury Villa">Family Villa</option>
              </select>
            </div>

            {/* Submit CTA */}
            <div className="lg:col-span-2">
              <button
                type="submit"
                className="w-full gold-gradient-btn text-[#0D1117] font-semibold text-xs px-4 py-3 rounded-xl inline-flex items-center justify-center gap-2 shadow-lg hover:opacity-95 transition-opacity"
              >
                <span>Check Availability</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <WaveTransition topColor="transparent" bottomColor="#F6F4F0" />

      {/* ================= RESERVATION MODAL ================= */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative bg-[#1A202C] border border-[#D4B584]/40 rounded-2xl max-w-lg w-full overflow-hidden shadow-2xl text-white">
            <div className="flex items-center justify-between px-6 py-4 bg-[#12151C] border-b border-white/10">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#D4B584] font-semibold">
                  Bharti Luxury Concierge
                </span>
                <h3 className="font-serif-luxury text-xl font-semibold text-white">
                  Confirm Your Reservation
                </h3>
              </div>
              <button
                onClick={() => setBookingModalOpen(false)}
                className="text-gray-400 hover:text-white p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="bg-[#12151C] border border-white/10 rounded-xl p-4 grid grid-cols-2 gap-3 text-xs">
                <div>
                  <span className="text-gray-400 block">Selected Suite</span>
                  <span className="font-semibold text-[#D4B584] text-sm">
                    {bookingData.roomType}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-gray-400 block">Tariff</span>
                  <span className="font-semibold text-white text-sm">
                    {roomPrices[bookingData.roomType]}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 block">Check-In</span>
                  <span className="text-gray-200 font-medium">{bookingData.checkIn}</span>
                </div>
                <div className="text-right">
                  <span className="text-gray-400 block">Check-Out</span>
                  <span className="text-gray-200 font-medium">{bookingData.checkOut}</span>
                </div>
              </div>

              {bookingConfirmed ? (
                <div className="py-6 text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="font-serif-luxury text-2xl text-white">Booking Confirmed!</h4>
                  <p className="text-xs sm:text-sm text-gray-300 max-w-sm mx-auto">
                    Thank you, <span className="text-[#D4B584] font-semibold">{guestInfo.fullName}</span>. Our desk at Sarbahal, Jharsuguda will contact you at <span className="text-white">{guestInfo.phone}</span> shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleConfirmReservation} className="space-y-3">
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Guest Full Name *"
                      value={guestInfo.fullName}
                      onChange={(e) => setGuestInfo({ ...guestInfo, fullName: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#12151C] border border-white/10 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4B584]"
                    />
                  </div>

                  <div className="relative">
                    <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      required
                      placeholder="Mobile Number (+91 76677 89804) *"
                      value={guestInfo.phone}
                      onChange={(e) => setGuestInfo({ ...guestInfo, phone: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#12151C] border border-white/10 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4B584]"
                    />
                  </div>

                  <textarea
                    rows="2"
                    placeholder="Special Requests (Airport pickup, etc.)"
                    value={guestInfo.specialRequest}
                    onChange={(e) =>
                      setGuestInfo({ ...guestInfo, specialRequest: e.target.value })
                    }
                    className="w-full p-3.5 rounded-xl bg-[#12151C] border border-white/10 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4B584]"
                  />

                  <button
                    type="submit"
                    className="w-full gold-gradient-btn text-[#0D1117] font-semibold text-sm py-3 rounded-full inline-flex items-center justify-center gap-2 shadow-lg"
                  >
                    <span>Confirm Reservation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}

      {/* ================= VIDEO MODAL ================= */}
      {videoOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="relative bg-[#12151C] border border-[#D4B584]/40 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <span className="font-serif-luxury text-xl text-[#D4B584]">
                Bharti Luxury Hotel — Walkthrough
              </span>
              <button onClick={() => setVideoOpen(false)} className="text-gray-400 hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="aspect-video bg-black relative">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85"
                alt="Hotel Showcase"
                className="w-full h-full object-cover opacity-75"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <span className="px-4 py-1.5 rounded-full bg-[#D4B584] text-[#0D1117] text-xs font-bold uppercase tracking-wider mb-3">
                  4K Tour
                </span>
                <h3 className="font-serif-luxury text-3xl text-white">Experience Unmatched Serenity</h3>
                <p className="text-gray-200 text-sm max-w-md mt-2">
                  Explore our luxury suites, fine dining, and pristine hospitality in Sarbahal, Jharsuguda.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};