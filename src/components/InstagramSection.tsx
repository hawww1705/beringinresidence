import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';
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

export const InstagramSection: React.FC = () => {
  // Mock posts using our generated high-end photos
  const instaPosts = [
    { id: 1, img: '/images/hero_facade.jpg', likes: '243', comments: '18' },
    { id: 2, img: '/images/room_deluxe.jpg', likes: '189', comments: '12' },
    { id: 3, img: '/images/lobby.jpg', likes: '312', comments: '27' },
    { id: 4, img: '/images/room_executive.jpg', likes: '156', comments: '8' },
    { id: 5, img: '/images/garden.jpg', likes: '280', comments: '22' },
    { id: 6, img: '/images/room_suite.jpg', likes: '204', comments: '15' },
  ];

  return (
    <section className="py-24 md:py-32 bg-cream border-t border-olive/10 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        
        {/* Section Header */}
        <div className="max-w-xl mx-auto mb-12">
          <span className="font-sans text-xs font-bold tracking-widest text-terracotta uppercase mb-3 flex items-center justify-center gap-2">
            <InstagramIcon className="w-3.5 h-3.5" />
            INSTAGRAM FEED
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-forest tracking-tight">
            Follow Our Story
          </h2>
          <a
            href={hotelInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block font-sans text-sm font-semibold text-terracotta hover:text-forest transition-colors duration-300"
          >
            {hotelInfo.instagramHandle}
          </a>
        </div>

        {/* Feed Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instaPosts.map((post) => (
            <a
              key={post.id}
              href={hotelInfo.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square overflow-hidden rounded-2xl group shadow-sm hover:shadow-md transition-shadow duration-500"
            >
              {/* Image */}
              <img
                src={post.img}
                alt={`Instagram post placeholder ${post.id}`}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              
              {/* Instagram Hover Stats Overlay */}
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 text-cream">
                <div className="flex items-center gap-1 text-sm font-sans font-bold">
                  <Heart className="w-4 h-4 fill-cream text-cream shrink-0" />
                  <span>{post.likes}</span>
                </div>
                <div className="flex items-center gap-1 text-sm font-sans font-bold">
                  <MessageCircle className="w-4 h-4 fill-cream text-cream shrink-0" />
                  <span>{post.comments}</span>
                </div>
                {/* Float small logo */}
                <div className="absolute top-3 right-3 text-cream/70">
                  <InstagramIcon className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <a
            href={hotelInfo.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-transparent border border-olive/30 text-forest font-sans text-xs font-bold tracking-wider uppercase px-8 py-3.5 rounded-full hover:bg-forest hover:text-cream hover:border-forest transition-all duration-300"
          >
            <InstagramIcon className="w-4 h-4 shrink-0" />
            Follow us on Instagram
          </a>
        </div>

      </div>
    </section>
  );
};
export default InstagramSection;
