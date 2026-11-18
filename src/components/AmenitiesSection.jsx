import React from 'react';
import { ArrowRight, Wifi } from 'lucide-react';
import { WaveTransition } from './BrandEmblems';

export const AmenitiesSection = () => {
  const facilities = [
    {
      title: 'Swimming Pool',
      image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=500&q=85',
    },
    {
      title: 'Fitness Center',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=500&q=85',
    },
    {
      title: 'Spa & Wellness',
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=500&q=85',
    },
    {
      title: 'Fine Dining',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=500&q=85',
    },
    {
      title: 'Free Wi-Fi',
      isIconCard: true,
    },
    {
      title: 'Free Parking',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=500&q=85',
    },
  ];

  return (
    <section id="amenities" className="bg-[#F6F4F0] text-[#12151C] pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-3 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B39260]">
              <span className="w-5 h-[1.5px] bg-[#D4B584]" />
              <span>Our Amenities</span>
            </div>

            <h2 className="font-serif-luxury text-4xl sm:text-5xl font-semibold text-[#12151C] leading-[1.08]">
              World-Class <br />
              Facilities
            </h2>

            <p className="text-sm text-gray-600 leading-relaxed">
              From a relaxing pool to a rejuvenating spa, we offer everything you need for a perfect stay.
            </p>

            <div className="pt-2">
              <a
                href="#dining"
                className="gold-gradient-btn text-[#0D1117] font-semibold text-xs sm:text-sm px-6 py-3 rounded-full inline-flex items-center gap-2 shadow-md"
              >
                <span>Explore All Amenities</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {facilities.map((item) => (
              <div key={item.title} className="group text-center">
                <div className="h-36 rounded-2xl overflow-hidden shadow-md border border-black/5 bg-[#E7E3DC] flex items-center justify-center relative">
                  {item.isIconCard ? (
                    <div className="w-full h-full bg-gradient-to-br from-[#EAE6DF] to-[#DCD6CB] flex flex-col items-center justify-center p-4">
                      <Wifi className="w-12 h-12 text-[#12151C] stroke-[2.2] group-hover:scale-110 transition-transform" />
                    </div>
                  ) : (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                </div>
                <p className="mt-3 text-xs sm:text-sm font-semibold text-[#12151C] leading-snug">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <WaveTransition topColor="#F6F4F0" bottomColor="#0D1117" flip />
    </section>
  );
};
