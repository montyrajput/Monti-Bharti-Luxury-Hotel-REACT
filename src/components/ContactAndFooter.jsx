import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  User,
  ArrowRight,
  CheckCircle2,
  Star,
  Quote,
  ExternalLink,
  MessageSquarePlus
} from 'lucide-react';
import { BrandLogo, WaveTransition } from './BrandEmblems';

export const ContactAndFooter = () => {
  // Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Customer Feedback / Reviews State
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'Rajesh Kumar Singh',
      location: 'Sambalpur, Odisha',
      rating: 5,
      date: '2 days ago',
      comment:
        'Exceptional hospitality and spotless rooms! The location in Sarbahal, Jharsuguda is super convenient and peaceful. Truly a luxury experience.'
    },
    {
      id: 2,
      name: 'Priya Mohanty',
      location: 'Bhubaneswar, Odisha',
      rating: 5,
      date: '1 week ago',
      comment:
        'Warm staff, delicious food, and quick concierge support. Felt completely at home during our family stay.'
    },
    {
      id: 3,
      name: 'Manjeet Sharma',
      location: 'Jharsuguda, Odisha',
      rating: 5,
      date: '2 weeks ago',
      comment:
        'Best ambience in town with top-class amenities. Highly recommended for both business travelers and families.'
    }
  ]);

  const [newReview, setNewReview] = useState({
    name: '',
    location: '',
    rating: 5,
    comment: ''
  });
  const [hoverRating, setHoverRating] = useState(0);
  const [reviewSubmitted, setReviewSubmitted] = useState(false);

  // Google Maps Link & Contact Details
  const googleMapsUrl =
    'https://www.google.com/maps/place/Sarbahal,+Jharsuguda,+Odisha/@21.8405892,83.9893603,14z/data=!4m6!3m5!1s0x3a20e1516d07e5cd:0x6aaff6493d3b40bf!8m2!3d21.8378142!4d84.0114544!16s%2Fg%2F1td_3lqc?entry=ttu&g_ep=EgoyMDI2MTExNS4wIKXMDSoASAFQAw%3D%3D';

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name.trim() || !newReview.comment.trim()) return;

    const addedReview = {
      id: Date.now(),
      name: newReview.name.trim(),
      location: newReview.location.trim() || 'Verified Guest',
      rating: newReview.rating,
      date: 'Just now',
      comment: newReview.comment.trim()
    };

    setReviews([addedReview, ...reviews]);
    setReviewSubmitted(true);
    setNewReview({ name: '', location: '', rating: 5, comment: '' });
    setTimeout(() => setReviewSubmitted(false), 4000);
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  return (
    <>
      {/* ================= CUSTOMER FEEDBACK & REVIEWS SECTION ================= */}
      <section id="feedback" className="bg-[#12151C] text-white py-16 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#B39260]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D4B584]">
                Guest Experiences & Reviews
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-semibold text-white">
                What Our Visitors Say
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 max-w-xl">
                Read authentic feedback from guests who visited us at Sarbahal, Jharsuguda, or share your own experience with us.
              </p>
            </div>

            <div className="inline-flex items-center gap-3 bg-[#1A202C] border border-white/10 px-4 py-2.5 rounded-2xl shadow-lg self-start">
              <div className="flex items-center text-[#D4B584]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4B584] text-[#D4B584]" />
                ))}
              </div>
              <div className="text-xs">
                <span className="font-bold text-white">4.9 / 5</span>{' '}
                <span className="text-gray-400">({reviews.length} Verified Reviews)</span>
              </div>
            </div>
          </div>

          {/* Grid Layout: Reviews List & Submit Feedback Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Visitor Reviews Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reviews.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#1A202C] border border-white/10 p-5 rounded-2xl shadow-xl flex flex-col justify-between space-y-4 hover:border-[#D4B584]/50 transition-all duration-300"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, idx) => (
                          <Star
                            key={idx}
                            className={`w-3.5 h-3.5 ${
                              idx < item.rating
                                ? 'fill-[#D4B584] text-[#D4B584]'
                                : 'text-gray-600'
                            }`}
                          />
                        ))}
                      </div>
                      <Quote className="w-5 h-5 text-[#D4B584]/30" />
                    </div>

                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">
                      "{item.comment}"
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#B39260]/20 text-[#D4B584] font-semibold text-xs flex items-center justify-center uppercase">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-white">{item.name}</h4>
                        <p className="text-[11px] text-gray-400">{item.location}</p>
                      </div>
                    </div>
                    <span className="text-[10px] text-gray-500">{item.date}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Submit Feedback Form */}
            <div className="lg:col-span-5 bg-[#1A202C] border border-white/10 p-6 sm:p-7 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="w-10 h-10 rounded-full bg-[#B39260]/20 flex items-center justify-center text-[#D4B584]">
                  <MessageSquarePlus className="w-5 h-5" />
                </span>
                <div>
                  <h3 className="font-serif-luxury text-xl font-semibold text-white">
                    Share Your Feedback
                  </h3>
                  <p className="text-xs text-gray-400">Visited us? We value your review.</p>
                </div>
              </div>

              <form onSubmit={handleReviewSubmit} className="space-y-4">
                {/* Interactive Star Rating */}
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Select Your Rating
                  </label>
                  <div className="flex items-center gap-1.5">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewReview({ ...newReview, rating: star })}
                        onMouseEnter={() => setHoverRating(star)}
                        onMouseLeave={() => setHoverRating(0)}
                        className="focus:outline-none transition-transform hover:scale-110"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= (hoverRating || newReview.rating)
                              ? 'fill-[#D4B584] text-[#D4B584]'
                              : 'text-gray-600'
                          }`}
                        />
                      </button>
                    ))}
                    <span className="text-xs text-gray-400 ml-2">
                      ({newReview.rating} / 5 Stars)
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name *"
                    value={newReview.name}
                    onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#12151C] border border-white/10 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4B584]"
                  />
                  <input
                    type="text"
                    placeholder="Your City (e.g. Jharsuguda)"
                    value={newReview.location}
                    onChange={(e) => setNewReview({ ...newReview, location: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#12151C] border border-white/10 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4B584]"
                  />
                </div>

                <textarea
                  rows="3"
                  required
                  placeholder="Write your feedback about your stay or visit... *"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  className="w-full p-4 rounded-xl bg-[#12151C] border border-white/10 text-xs sm:text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#D4B584]"
                />

                <div className="flex items-center justify-between pt-1">
                  {reviewSubmitted ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
                      <CheckCircle2 className="w-4 h-4" /> Thank you! Review added successfully.
                    </span>
                  ) : (
                    <span />
                  )}

                  <button
                    type="submit"
                    className="gold-gradient-btn text-[#0D1117] font-semibold text-xs sm:text-sm px-6 py-3 rounded-full inline-flex items-center gap-2 ml-auto shadow-md hover:opacity-95 transition-opacity"
                  >
                    <span>Post Review</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="bg-[#F6F4F0] text-[#12151C] pt-12 pb-4">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Contact Info (Updated with your details) */}
            <div className="lg:col-span-4 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#B39260]">
                Get in Touch
              </span>
              <h2 className="font-serif-luxury text-4xl font-semibold text-[#12151C] leading-tight">
                We're Here to Help
              </h2>
              <p className="text-xs sm:text-sm text-gray-600">
                Have questions or need assistance? Reach out to us directly.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-gray-700">
                {/* Mobile: +91 76677 89804 */}
                <a
                  href="tel:+917667789804"
                  className="flex items-center gap-3 hover:text-[#B39260] transition-colors"
                >
                  <span className="w-8 h-8 rounded-full bg-[#EFECE6] flex items-center justify-center text-[#B39260] shrink-0">
                    <Phone className="w-4 h-4" />
                  </span>
                  <span className="font-medium">+91 76677 89804</span>
                </a>

                {/* Email: ajitbharti844@gmail.com */}
                <a
                  href="mailto:ajitbharti844@gmail.com"
                  className="flex items-center gap-3 hover:text-[#B39260] transition-colors break-all"
                >
                  <span className="w-8 h-8 rounded-full bg-[#EFECE6] flex items-center justify-center text-[#B39260] shrink-0">
                    <Mail className="w-4 h-4" />
                  </span>
                  <span className="font-medium">ajitbharti844@gmail.com</span>
                </a>

                {/* Location: Sarbahal, Jharsuguda, Odisha */}
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 hover:text-[#B39260] transition-colors group"
                >
                  <span className="w-8 h-8 rounded-full bg-[#EFECE6] flex items-center justify-center text-[#B39260] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </span>
                  <span className="flex flex-col">
                    <span className="font-semibold text-[#12151C] group-hover:text-[#B39260]">
                      Sarbahal, Jharsuguda, Odisha
                    </span>
                    <span className="text-[11px] text-[#B39260] inline-flex items-center gap-1 mt-0.5">
                      Open in Google Maps <ExternalLink className="w-3 h-3" />
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-5">
              <form onSubmit={handleContactSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-black/10 text-sm focus:outline-none focus:border-[#D4B584]"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-white border border-black/10 text-sm focus:outline-none focus:border-[#D4B584]"
                    />
                  </div>
                </div>

                <textarea
                  rows="3"
                  required
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-4 rounded-xl bg-white border border-black/10 text-sm focus:outline-none focus:border-[#D4B584]"
                />

                <div className="flex items-center justify-between">
                  {submitted ? (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700">
                      <CheckCircle2 className="w-4 h-4" /> Message sent! We will reply shortly.
                    </span>
                  ) : (
                    <span />
                  )}

                  <button
                    type="submit"
                    className="gold-gradient-btn text-[#0D1117] font-semibold text-xs sm:text-sm px-6 py-3 rounded-full inline-flex items-center gap-2 ml-auto shadow"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>

            {/* Right Card: Google Maps iframe embed for Sarbahal, Jharsuguda */}
            <div className="lg:col-span-3">
              <div className="h-[235px] rounded-2xl overflow-hidden shadow-xl border border-black/10 bg-white relative group">
                <iframe
                  title="Sarbahal Jharsuguda Map"
                  src="https://maps.google.com/maps?q=21.8378142,84.0114544&z=15&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2.5 right-2.5 bg-[#0D1117]/90 text-white text-[11px] font-medium px-3 py-1.5 rounded-full inline-flex items-center gap-1.5 hover:bg-[#B39260] hover:text-[#0D1117] transition-colors shadow-md"
                >
                  <span>Directions</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <WaveTransition topColor="#F6F4F0" bottomColor="#0D1117" flip />
      </section>

      {/* ================= FOOTER SECTION ================= */}
      <footer className="bg-[#0D1117] text-white pt-10 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            <div className="lg:col-span-3 space-y-4">
              <BrandLogo variant="light" />
              <p className="text-xs text-gray-400">Stay Luxury. Stay Inspired.</p>
              <div className="flex items-center gap-3 pt-1">
                {['f', 'ig', 'p', 'in'].map((social) => (
                  <a
                    key={social}
                    href="#home"
                    className="w-8 h-8 rounded-full border border-white/20 hover:border-[#D4B584] hover:text-[#D4B584] flex items-center justify-center text-xs uppercase transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-sm font-semibold text-white">Quick Links</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                {['Home', 'Rooms', 'Amenities', 'Dining', 'Feedback', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="hover:text-[#D4B584] transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-sm font-semibold text-white">Support</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                {['FAQ', 'Privacy Policy', 'Terms & Conditions', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <a href="#contact" className="hover:text-[#D4B584] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Location & Contact Details */}
            <div className="lg:col-span-2 space-y-3">
              <h4 className="text-sm font-semibold text-white">Our Location</h4>
              <ul className="space-y-2.5 text-xs text-gray-400">
                <li>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 hover:text-[#D4B584] transition-colors"
                  >
                    <MapPin className="w-4 h-4 text-[#D4B584] shrink-0 mt-0.5" />
                    <span>Sarbahal, Jharsuguda, Odisha</span>
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+917667789804"
                    className="flex items-center gap-2 hover:text-[#D4B584] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#D4B584] shrink-0" />
                    <span>+91 76677 89804</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:ajitbharti844@gmail.com"
                    className="flex items-center gap-2 hover:text-[#D4B584] transition-colors break-all"
                  >
                    <Mail className="w-4 h-4 text-[#D4B584] shrink-0" />
                    <span>ajitbharti844@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3 space-y-3">
              <h4 className="text-sm font-semibold text-white">Subscribe to Our Newsletter</h4>
              <p className="text-xs text-gray-400">Get exclusive deals and updates.</p>
              <form onSubmit={handleNewsletter} className="flex items-center bg-white rounded-full p-1">
                <input
                  type="email"
                  required
                  placeholder="Your Email Address"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="bg-transparent text-[#0D1117] text-xs px-3.5 py-2 w-full focus:outline-none"
                />
                <button
                  type="submit"
                  className="gold-gradient-btn text-[#0D1117] font-semibold text-xs px-4 py-2 rounded-full inline-flex items-center gap-1 shrink-0"
                >
                  <span>Subscribe</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </form>
              {subscribed && (
                <p className="text-[11px] text-[#D4B584]">Thank you for subscribing to Bharti Luxury!</p>
              )}
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
            <p>© 2026 Bharti Luxury Hotel. All Rights Reserved.</p>

            <div className="w-9 h-9 rounded-full border border-[#D4B584]/40 flex items-center justify-center">
              <svg viewBox="0 0 64 64" className="w-5 h-5" fill="none">
                <path d="M32 12C27 20 25 26 25 32C25 38 28 42 32 45C36 42 39 38 39 32C39 26 37 20 32 12Z" stroke="#D4B584" strokeWidth="2.5" />
                <path d="M25 30C18 27 12 29 9 34C14 39 21 41 28 43" stroke="#D4B584" strokeWidth="2.5" />
                <path d="M39 30C46 27 52 29 55 34C50 39 43 41 36 43" stroke="#D4B584" strokeWidth="2.5" />
              </svg>
            </div>

            <div className="flex items-center gap-4">
              <a href="#contact" className="hover:text-[#D4B584]">Privacy Policy</a>
              <span>|</span>
              <a href="#contact" className="hover:text-[#D4B584]">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};