import React, { useState } from 'react';
import { Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { WaveTransition } from './BrandEmblems';

export const TestimonialsAndGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: 'An absolutely amazing stay! The service, comfort and food were beyond expectations.',
      name: 'Priya Sharma',
      role: 'Business Traveler',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    },
    {
      quote: 'Luxury at its best. Highly recommended for anyone looking for comfort.',
      name: 'Rohan Mehta',
      role: 'Frequent Guest',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    },
    {
      quote: 'From the golden lobby ambiance to the private pool suites, Bharti Luxury defines royal hospitality.',
      name: 'Ananya Verma',
      role: 'Luxury Lifestyle Editor',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    },
  ];

  const galleryThumbs = [
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=300&q=80',
    'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=300&q=80',
  ];

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const visibleTestimonials = [
    testimonials[activeIndex],
    testimonials[(activeIndex + 1) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="bg-[#0D1117] text-white pt-10 pb-4">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D4B584]">
              Testimonials
            </span>
            <h2 className="font-serif-luxury text-4xl font-semibold text-white leading-tight">
              What Our Guests Say
            </h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Real experiences. Real stories.
            </p>
            <div className="flex items-center gap-2.5 pt-2">
              <button
                onClick={handlePrev}
                aria-label="Previous Testimonial"
                className="w-9 h-9 rounded-full border border-white/20 hover:border-[#D4B584] hover:text-[#D4B584] flex items-center justify-center transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next Testimonial"
                className="w-9 h-9 rounded-full border border-white/20 hover:border-[#D4B584] hover:text-[#D4B584] flex items-center justify-center transition-colors"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {visibleTestimonials.map((item) => (
              <div
                key={item.name}
                className="bg-[#151922] border border-white/10 rounded-2xl p-5 flex flex-col justify-between min-h-[210px]"
              >
                <div>
                  <div className="font-serif-luxury text-4xl text-[#D4B584] leading-none mb-2">“</div>
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                    "{item.quote}"
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-9 h-9 rounded-full object-cover border border-[#D4B584]/50"
                    />
                    <div>
                      <div className="text-xs font-semibold text-white">{item.name}</div>
                      <div className="text-[10px] text-gray-400">{item.role}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-3 h-3 text-[#D4B584] fill-[#D4B584]" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div id="gallery" className="lg:col-span-4 bg-[#151922]/70 border border-white/10 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#D4B584]">
                Our Gallery
              </span>
              <h3 className="font-serif-luxury text-2xl font-semibold text-white leading-snug">
                A Glimpse <br />
                of <br />
                Our Luxury
              </h3>
              <a
                href="#rooms"
                className="gold-gradient-btn text-[#0D1117] font-semibold text-xs px-4 py-2 rounded-full inline-flex items-center gap-1.5"
              >
                <span>View Gallery</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2 shrink-0">
              {galleryThumbs.map((src, i) => (
                <div key={i} className="w-16 h-12 rounded-lg overflow-hidden border border-white/15">
                  <img
                    src={src}
                    alt={`Gallery preview ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <WaveTransition topColor="#0D1117" bottomColor="#F6F4F0" />
    </section>
  );
};
