import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { WaveTransition } from './BrandEmblems';

export const DiningAndOffers = ({ onOpenBooking }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 12,
    hours: 8,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n) => String(n).padStart(2, '0');

  const dishes = [
    {
      name: 'Wagyu Tenderloin',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=500&q=85',
    },
    {
      name: 'Truffle Tagliatelle',
      image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=500&q=85',
    },
    {
      name: 'Artisanal Pastry',
      image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=500&q=85',
    },
  ];

  return (
    <>
      <section id="dining" className="bg-[#0D1117] text-white pt-10 pb-4">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <div className="rounded-2xl overflow-hidden h-[250px] shadow-2xl border border-[#D4B584]/25">
                <img
                  src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=85"
                  alt="Signature Fine Dining Dish & Wine"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4B584]">
                <span className="w-5 h-[1.5px] bg-[#D4B584]" />
                <span>Dining Experience</span>
              </div>

              <h2 className="font-serif-luxury text-4xl font-semibold text-white leading-tight">
                A Culinary Journey
              </h2>

              <p className="text-sm text-gray-300 leading-relaxed">
                Savor exquisite flavors at our signature restaurant, where every dish is a masterpiece.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking('Fine Dining Table Reservation')}
                  className="gold-gradient-btn text-[#0D1117] font-semibold text-xs sm:text-sm px-6 py-3 rounded-full inline-flex items-center gap-2"
                >
                  <span>Explore Dining</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 grid grid-cols-3 gap-3">
              {dishes.map((dish) => (
                <div
                  key={dish.name}
                  className="h-[195px] rounded-2xl overflow-hidden border border-white/10 group relative shadow-lg"
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                    <span className="text-[11px] font-medium text-[#D4B584]">{dish.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <WaveTransition topColor="#0D1117" bottomColor="#F6F4F0" />
      </section>

      <section id="offers" className="bg-[#F6F4F0] text-[#12151C] pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4">
              <div className="relative h-[190px] rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=85"
                  alt="Special Offer 30% Off Resort Pool"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0D1117]/80 via-[#0D1117]/40 to-transparent flex flex-col justify-center p-6 text-white">
                  <span className="text-xs uppercase tracking-widest text-[#D4B584] font-semibold">
                    Special Offer
                  </span>
                  <div className="font-serif-luxury text-4xl font-bold mt-1">
                    Save 30%
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#B39260]">
                Limited Time Offer
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-semibold text-[#12151C] leading-tight">
                Get 30% Off on Your Stay
              </h2>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Book now and enjoy an exclusive 30% discount on luxury stays at Bharti Luxury Hotel.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking('30% Off Luxury Offer')}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#12151C]/20 hover:bg-[#12151C] hover:text-white text-xs sm:text-sm font-semibold transition-all"
                >
                  <span>Book Now</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 flex items-center justify-start lg:justify-end gap-3">
              {[
                { label: 'Days', value: pad(timeLeft.days) },
                { label: 'Hours', value: pad(timeLeft.hours) },
                { label: 'Minutes', value: pad(timeLeft.minutes) },
                { label: 'Seconds', value: pad(timeLeft.seconds) },
              ].map((unit) => (
                <div
                  key={unit.label}
                  className="w-18 sm:w-20 h-20 rounded-2xl bg-white border border-black/5 shadow-md flex flex-col items-center justify-center px-3"
                >
                  <span className="text-2xl sm:text-3xl font-bold text-[#12151C] tabular-nums">
                    {unit.value}
                  </span>
                  <span className="text-[11px] text-gray-500 font-medium mt-0.5">{unit.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <WaveTransition topColor="#F6F4F0" bottomColor="#0D1117" flip />
      </section>
    </>
  );
};
