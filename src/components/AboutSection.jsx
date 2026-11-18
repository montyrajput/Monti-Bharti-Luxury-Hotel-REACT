import React from 'react';
import { ArrowRight, Crown, Diamond, UtensilsCrossed, Sparkles } from 'lucide-react';
import { WaveTransition } from './BrandEmblems';

export const AboutSection = () => {
  const highlights = [
    {
      icon: Crown,
      title: 'World-Class Service',
      subtitle: '24/7 Support',
    },
    {
      icon: Diamond,
      title: 'Premium Rooms',
      subtitle: '& Suites',
    },
    {
      icon: UtensilsCrossed,
      title: 'Fine Dining',
      subtitle: 'Restaurant',
    },
    {
      icon: Sparkles,
      title: 'Relax & Rejuvenate',
      subtitle: 'Spa & Wellness',
    },
  ];

  return (
    <section id="about" className="bg-[#F6F4F0] text-[#12151C] pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-4 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B39260]">
              <span className="w-5 h-[1.5px] bg-[#D4B584]" />
              <span>About Bharti Luxury</span>
            </div>

            <h2 className="font-serif-luxury text-4xl sm:text-5xl font-semibold text-[#12151C] leading-[1.12]">
              A Perfect Blend <br />
              of Elegance & Comfort
            </h2>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              At Bharti Luxury Hotel, we believe in creating unforgettable experiences. Our luxury hotel offers the perfect combination of sophistication, comfort and personalized service.
            </p>

            <div className="pt-2">
              <a
                href="#rooms"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#12151C]/20 hover:border-[#D4B584] hover:bg-[#12151C] hover:text-white text-[#12151C] text-sm font-semibold transition-all"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-5 relative flex items-center justify-center py-4">
            <div className="relative w-full max-w-md h-[320px] sm:h-[360px]">
              <div className="absolute left-0 bottom-0 w-[68%] h-[78%] rounded-2xl overflow-hidden shadow-xl border-4 border-[#F6F4F0] z-10">
                <img
                  src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=800&q=85"
                  alt="Bharti Luxury Lounge"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute right-0 top-0 w-[68%] h-[82%] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#F6F4F0] z-20">
                <img
                  src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=85"
                  alt="Bharti Luxury Atrium Lobby"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 space-y-6">
            {highlights.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#EFECE6] border border-[#D4B584]/30 flex items-center justify-center shrink-0 group-hover:bg-[#D4B584] transition-colors">
                    <IconComponent className="w-5 h-5 text-[#B39260] group-hover:text-[#0D1117] transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-sans text-sm font-bold text-[#12151C]">{item.title}</h3>
                    <p className="text-xs text-gray-500 mt-0.5">{item.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <WaveTransition topColor="#F6F4F0" bottomColor="#0D1117" flip />
    </section>
  );
};
