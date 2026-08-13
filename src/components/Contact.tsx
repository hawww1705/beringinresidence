import React, { useState } from 'react';
import { Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { hotelInfo } from '../data/hotelData';

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.message) return;
    
    // Simulate sending form / formatting WhatsApp text
    const text = `Halo Beringin Residence, saya ${formData.name} (${formData.phone}). ${formData.message}`;
    const waUrl = `https://wa.me/${hotelInfo.whatsappNumber}?text=${encodeURIComponent(text)}`;
    
    setIsSubmitted(true);
    
    // After 1.5 seconds, open WhatsApp in a new tab
    setTimeout(() => {
      window.open(waUrl, '_blank');
      setFormData({ name: '', phone: '', message: '' });
      setIsSubmitted(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-beige/25 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Left Column: Info & WhatsApp Direct */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="font-sans text-xs font-bold tracking-widest text-terracotta uppercase mb-3 flex items-center gap-2">
              <Phone className="w-3.5 h-3.5" />
              GET IN TOUCH
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-forest leading-tight tracking-tight">
              We're Here for You
            </h2>
            <p className="mt-4 text-base text-dark/70 font-sans leading-relaxed">
              Memiliki pertanyaan mengenai tarif kamar, reservasi grup, fasilitas, atau rute lokasi? Hubungi tim hospitality kami langsung melalui WhatsApp untuk bantuan instan.
            </p>

            <div className="mt-8 flex flex-col gap-6 w-full font-sans">
              {/* Address detail */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-forest/5 text-forest flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-olive font-bold">Alamat</span>
                  <p className="text-sm font-medium text-dark mt-0.5">{hotelInfo.address}</p>
                </div>
              </div>

              {/* Phone detail */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-forest/5 text-forest flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-olive font-bold">Telepon & WhatsApp</span>
                  <p className="text-sm font-medium text-dark mt-0.5">{hotelInfo.phone}</p>
                </div>
              </div>

              {/* Instagram detail */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-forest/5 text-forest flex items-center justify-center shrink-0">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-olive font-bold">Instagram</span>
                  <p className="text-sm font-medium text-dark mt-0.5">{hotelInfo.instagramHandle}</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call Button */}
            <a
              href={hotelInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 bg-[#244A3A] text-cream font-sans text-sm font-semibold tracking-wider uppercase px-8 py-4 rounded-full shadow-md hover:bg-[#1f3f31] transition-all duration-300 flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 fill-cream text-forest" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Right Column: Premium Contact Form */}
          <div className="lg:col-span-7 w-full bg-cream border border-olive/10 rounded-[2.5rem] p-8 md:p-10 shadow-sm relative overflow-hidden">
            {isSubmitted ? (
              <div className="py-20 flex flex-col items-center justify-center text-center animate-scale-in">
                <CheckCircle className="w-16 h-16 text-forest animate-bounce mb-6" />
                <h3 className="font-serif text-2xl font-bold text-forest">Menghubungkan ke WhatsApp...</h3>
                <p className="mt-2 text-sm text-dark/70 font-sans max-w-sm">
                  Pesan Anda telah diformat. Anda akan dialihkan ke WhatsApp untuk mengirimkannya secara langsung.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="mb-2">
                  <h3 className="font-serif text-2xl font-bold text-forest">Kirim Pesan Cepat</h3>
                  <p className="text-xs text-olive font-sans mt-1">
                    Formulir ini akan membantu memformat pertanyaan Anda dan mengirimkannya via WhatsApp.
                  </p>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-olive font-bold font-sans uppercase">Nama Anda</label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Rian Hidayat"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-beige/20 border border-olive/20 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-forest text-dark font-sans"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-olive font-bold font-sans uppercase">Nomor WhatsApp / Kontak</label>
                  <input
                    type="tel"
                    required
                    placeholder="Contoh: 081234567890"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-beige/20 border border-olive/20 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-forest text-dark font-sans"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] text-olive font-bold font-sans uppercase">Pertanyaan / Pesan</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tulis pesan atau pertanyaan Anda di sini..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-beige/20 border border-olive/20 rounded-xl py-3 px-4 text-sm focus:outline-none focus:border-forest text-dark font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 bg-terracotta text-cream font-sans text-sm font-semibold tracking-wider uppercase py-4 rounded-xl shadow-sm hover:bg-forest transition-colors duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 shrink-0" />
                  Kirim via WhatsApp
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
export default Contact;
