import React from 'react';
import { ArrowRight } from 'lucide-react';
import { WaveTransition } from './BrandEmblems';

export const RoomsSection = ({ onOpenBooking }) => {
  const rooms = [
    {
      name: 'Deluxe Room',
      price: '$149',
      size: '420 sq.ft • King Bed • City & Garden View',
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=85',
    },
    {
      name: 'Executive Suite',
      price: '$249',
      size: '680 sq.ft • Private Lounge • Pool Terrace',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=85',
    },
    {
      name: 'Premium Room',
      price: '$349',
      size: '820 sq.ft • Panoramic Balcony • Butler Service',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=85',
    },
    {
      name: 'Royal Suite',
      price: '$499',
      size: '1,450 sq.ft • Presidential Wing • Private Jacuzzi',
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=800&q=85',
    },
  ];

  return (
    <section id="rooms" className="bg-[#0D1117] text-white pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-3 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4B584]">
              <span className="w-5 h-[1.5px] bg-[#D4B584]" />
              <span>Our Rooms</span>
            </div>

            <h2 className="font-serif-luxury text-4xl sm:text-5xl font-semibold text-white leading-[1.1]">
              Stay in Style
            </h2>

            <p className="text-sm text-gray-300 leading-relaxed">
              Experience unmatched comfort with our luxurious rooms.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenBooking('Deluxe Room')}
                className="gold-gradient-btn text-[#0D1117] font-semibold text-xs sm:text-sm px-6 py-3 rounded-full inline-flex items-center gap-2"
              >
                <span>View All Rooms</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            {rooms.map((room) => (
              <div
                key={room.name}
                onClick={() => onOpenBooking(room.name)}
                className="group relative h-[320px] rounded-2xl overflow-hidden cursor-pointer border border-white/10 hover:border-[#D4B584]/60 transition-all shadow-xl"
              >
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/35 to-transparent" />

                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between gap-2">
                  <div>
                    <h3 className="font-serif-luxury text-xl font-semibold text-white group-hover:text-[#D4B584] transition-colors">
                      {room.name}
                    </h3>
                    <p className="text-xs text-gray-300 mt-0.5">
                      From <span className="text-[#D4B584] font-bold text-sm">{room.price}</span> /night
                    </p>
                  </div>
                  <button
                    aria-label={`Book ${room.name}`}
                    className="w-8 h-8 rounded-full border border-white/30 group-hover:border-[#D4B584] group-hover:bg-[#D4B584] group-hover:text-[#0D1117] flex items-center justify-center transition-all shrink-0"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WaveTransition topColor="#0D1117" bottomColor="#F6F4F0" />
    </section>
  );
};
