export interface Room {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  capacity: string;
  size: string;
  bedType: string;
  price: string;
  images: string[];
  facilities: string[];
}

export interface FacilityItem {
  name: string;
  description: string;
  iconName: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  category: 'rooms' | 'interior' | 'exterior' | 'facilities';
  title: string;
}

export interface Testimonial {
  name: string;
  role: string;
  comment: string;
  rating: number;
}

export const hotelInfo = {
  brandName: 'BERINGIN RESIDENCE',
  fullName: 'Beringin Residence Guest House',
  tagline: 'Dirancang khusus untuk kenyamanan Anda✨',
  taglineSub: 'Tempat beristirahat yang nyaman, hangat, dan strategis di jantung Kota Semarang.',
  address: 'Jl. Karel Sasuit Tubun No.32, Sekayu, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50132',
  locationBrief: 'Semarang Tengah, Jawa Tengah',
  phone: '0822-4103-8457',
  whatsappNumber: '6282241038457',
  whatsappUrl: 'https://wa.me/6282241038457',
  agodaUrl: 'https://www.agoda.com/id-id/beringin-residence-guest-house/hotel/semarang-id.html?cid=1844104&ds=ERHbGsagc5yvBCpA',
  tiketUrl: 'https://www.tiket.com/id-id/homes/indonesia/beringin-residence-guest-house-712001733264846978',
  instagramUrl: 'https://www.instagram.com/beringinresidence_/?hl=en',
  instagramHandle: '@beringinresidence_',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.226065538053!2d110.41372557604561!3d-6.982635993018247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b5aa0ec746d%3A0xe9f79927be636d93!2sBeringin%20Residence%20Guest%20House!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid',
  directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Beringin+Residence+Guest+House+Semarang',
};

export const roomsData: Room[] = [
  {
    id: 'deluxe-room',
    name: 'Deluxe Room',
    description: 'Kamar dengan sentuhan klasik modern Jawa yang hangat, homey, dan nyaman.',
    longDescription: 'Dirancang untuk memberikan ketenangan maksimal setelah seharian beraktivitas di Semarang. Kamar Deluxe menghadirkan perpaduan harmonis antara kenyamanan modern dan estetika urban tropical, lengkap dengan ranjang berkualitas tinggi, pencahayaan warm ambient, dan jendela yang memberikan ventilasi udara alami.',
    capacity: '2 Dewasa',
    size: '24 m²',
    bedType: '1 Queen Bed',
    price: 'Rp 350.000',
    images: ['/images/room_deluxe.jpg', '/images/lobby.jpg', '/images/garden.jpg'],
    facilities: [
      'Aesthetic Ambient Lighting',
      'Pendingin Ruangan (AC)',
      'Free High-Speed Wi-Fi',
      'Flat Screen TV 32"',
      'Kamar Mandi Bersih & Modern',
      'Shower Air Panas (Water Heater)',
      'Perlengkapan Mandi (Toiletries)',
      'Air Minum Kemasan Gratis',
    ],
  },
  {
    id: 'executive-room',
    name: 'Executive Room',
    description: 'Dilengkapi area meja kerja pribadi yang tenang, cocok untuk perjalanan bisnis Anda.',
    longDescription: 'Sangat sesuai bagi kalangan profesional maupun traveler bisnis yang membutuhkan kenyamanan ekstra untuk bekerja secara produktif. Kamar Executive dilengkapi dengan meja kerja kayu ergonomis, kursi yang nyaman, serta pemandangan taman tropical yang menenangkan langsung dari jendela kaca kamar Anda.',
    capacity: '2 Dewasa',
    size: '28 m²',
    bedType: '1 King Bed',
    price: 'Rp 450.000',
    images: ['/images/room_executive.jpg', '/images/garden.jpg', '/images/lobby.jpg'],
    facilities: [
      'Ergonomic Work Space (Meja & Kursi Kerja)',
      'Pendingin Ruangan (AC)',
      'Free High-Speed Wi-Fi',
      'Flat Screen TV 32"',
      'Shower Air Panas (Water Heater)',
      'Kulkas Kecil (Mini Fridge)',
      'Coffee & Tea Maker',
      'Premium Toiletries & Towels',
      'Air Minum Kemasan & Ketel Elektrik',
    ],
  },
  {
    id: 'suite-room',
    name: 'Suite Room',
    description: 'Kamar terluas kami dengan lounge area pribadi yang mewah dan pemandangan asri.',
    longDescription: 'Menghadirkan definisi kemewahan sesungguhnya di Beringin Residence. Suite Room menawarkan tata ruang terbuka yang sangat luas dengan lounge area sofa santai terpisah, kamar mandi berkelas premium, dan pemandangan urban tropical asri. Sangat cocok bagi pasangan atau keluarga kecil yang menginginkan liburan tak terlupakan di Semarang.',
    capacity: '3 Dewasa / 2 Dewasa + 1 Anak',
    size: '38 m²',
    bedType: '1 Super King Bed',
    price: 'Rp 600.000',
    images: ['/images/room_suite.jpg', '/images/lobby.jpg', '/images/garden.jpg'],
    facilities: [
      'Spacious Lounge Area (Sofa Keluarga & Coffee Table)',
      'Super King Bed Premium Linens',
      'Pendingin Ruangan (AC)',
      'Free High-Speed Wi-Fi',
      'Smart TV 43" (Netflix & Youtube Access)',
      'Mini Bar & Small Refrigerator',
      'Premium Coffee & Tea Station',
      'Jubah Mandi & Perlengkapan Mandi Eksklusif',
      'Shower Air Panas Premium',
    ],
  },
];

export const facilitiesData: FacilityItem[] = [
  {
    name: 'Free High-Speed Wi-Fi',
    description: 'Koneksi internet nirkabel cepat dan stabil di seluruh area guest house untuk bekerja atau hiburan.',
    iconName: 'Wifi',
  },
  {
    name: 'Air Conditioning',
    description: 'Semua kamar dilengkapi AC modern berkualitas tinggi untuk menyejukkan istirahat Anda.',
    iconName: 'Wind',
  },
  {
    name: 'Clean Bathrooms & Hot Water',
    description: 'Kamar mandi bersih dengan perlengkapan mandi lengkap dan shower air panas untuk menyegarkan diri.',
    iconName: 'ShowerHead',
  },
  {
    name: 'Flat Screen TV',
    description: 'Nikmati hiburan tayangan televisi lokal dan internasional berkualitas tajam di dalam kamar.',
    iconName: 'Tv',
  },
  {
    name: 'Secured Parking Space',
    description: 'Area parkir kendaraan roda dua dan roda empat yang aman tepat di dalam area residence.',
    iconName: 'ParkingCircle',
  },
  {
    name: 'Urban Tropical Garden',
    description: 'Taman asri dengan aneka tanaman hijau untuk bersantai sore hari yang tenang dan instagramable.',
    iconName: 'Flower',
  },
  {
    name: '24/7 Hospitality Guest Assistance',
    description: 'Layanan bantuan staf ramah yang siap membantu kebutuhan informasi dan kenyamanan Anda.',
    iconName: 'Clock',
  },
  {
    name: 'Strategic Downtown Location',
    description: 'Hanya beberapa menit dari pusat kuliner, perkantoran, dan kawasan wisata ikonik di Semarang.',
    iconName: 'MapPin',
  },
];

export const galleryData: GalleryItem[] = [
  { id: 'g1', url: '/images/hero_facade.jpg', category: 'exterior', title: 'Tampak Depan Beringin Residence' },
  { id: 'g2', url: '/images/lobby.jpg', category: 'interior', title: 'Lobby & Reception Area' },
  { id: 'g3', url: '/images/room_deluxe.jpg', category: 'rooms', title: 'Kamar Deluxe' },
  { id: 'g4', url: '/images/room_executive.jpg', category: 'rooms', title: 'Kamar Executive' },
  { id: 'g5', url: '/images/room_suite.jpg', category: 'rooms', title: 'Kamar Suite' },
  { id: 'g6', url: '/images/garden.jpg', category: 'exterior', title: 'Tropical Garden & Courtyard' },
];

export const testimonialsData: Testimonial[] = [
  {
    name: 'Rian Hidayat',
    role: 'Business Traveler',
    comment: 'Sangat terkesan dengan ketenangan di sini meski lokasinya tepat di tengah Kota Semarang. Kamar Executive-nya bersih sekali, Wi-Fi-nya kencang untuk meeting online, dan taman di depannya asri sekali.',
    rating: 5,
  },
  {
    name: 'Amalia & Family',
    role: 'Family Vacation',
    comment: 'Bawa anak-anak menginap di Suite Room dan mereka suka sekali. Desainnya premium dan homey, bed-nya empuk sekali. Akses ke Paragon Mall dan kuliner Semarang dekat sekali. Stafnya ramah dan membantu!',
    rating: 5,
  },
  {
    name: 'Budi Santoso',
    role: 'Couples Getaway',
    comment: 'Boutique guest house terbaik di Semarang. Suasananya tenang, aesthetic forest green-nya dapet banget, dan bed-nya kerasa premium. Booking lewat WhatsApp cepat dibantu.',
    rating: 5,
  },
];
