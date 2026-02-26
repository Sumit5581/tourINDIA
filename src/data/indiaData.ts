export interface Place {
  id: string;
  name: string;
  city: string;
  description: string;
  image: string;
  rating: number;
  reviewCount: number;
  category: string;
  distanceFromCenter: string;
  coordinates: { lat: number; lng: number };
  reviews: Review[];
}

export interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

export interface City {
  id: string;
  name: string;
  state: string;
  description: string;
  image: string;
  placeCount: number;
}

export const cities: City[] = [
  {
    id: "delhi",
    name: "Delhi",
    state: "Delhi",
    description: "The capital city with a rich blend of history and modernity",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600",
    placeCount: 5,
  },
  {
    id: "agra",
    name: "Agra",
    state: "Uttar Pradesh",
    description: "Home to the iconic Taj Mahal and Mughal heritage",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600",
    placeCount: 4,
  },
  {
    id: "jaipur",
    name: "Jaipur",
    state: "Rajasthan",
    description: "The Pink City known for forts, palaces and vibrant culture",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600",
    placeCount: 5,
  },
  {
    id: "mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    description: "The city of dreams, Bollywood, and the Gateway of India",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600",
    placeCount: 4,
  },
  {
    id: "varanasi",
    name: "Varanasi",
    state: "Uttar Pradesh",
    description: "One of the oldest cities in the world, spiritual capital of India",
    image: "https://i.pinimg.com/1200x/59/09/8f/59098fabd1513e48f7449ae89f057a7a.jpg",
    placeCount: 4,
  },
  {
    id: "goa",
    name: "Goa",
    state: "Goa",
    description: "Beaches, Portuguese heritage, and vibrant nightlife",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600",
    placeCount: 4,
  },
];

export const places: Place[] = [
  // Delhi
  {
    id: "india-gate",
    name: "India Gate",
    city: "delhi",
    description: "A war memorial and iconic landmark of Delhi, standing 42 meters tall. Built in memory of 70,000 Indian soldiers who lost their lives in World War I.",
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600",
    rating: 4.6,
    reviewCount: 2840,
    category: "Monument",
    distanceFromCenter: "2.5 km",
    coordinates: { lat: 28.6129, lng: 77.2295 },
    reviews: [
      { id: "r1", user: "Rahul S.", rating: 5, comment: "Magnificent structure, especially beautiful at night!", date: "2025-12-10" },
      { id: "r2", user: "Priya M.", rating: 4, comment: "A must-visit. Great for evening walks.", date: "2025-11-22" },
    ],
  },
  {
    id: "red-fort",
    name: "Red Fort",
    city: "delhi",
    description: "A historic fort in the city of Delhi that served as the main residence of the Mughal Emperors. UNESCO World Heritage Site.",
    image: "https://i.pinimg.com/736x/27/b2/6b/27b26bf9d0f286b7988d9d96355e1796.jpg",
    rating: 4.5,
    reviewCount: 3200,
    category: "Heritage",
    distanceFromCenter: "4.1 km",
    coordinates: { lat: 28.6562, lng: 77.2410 },
    reviews: [
      { id: "r3", user: "Amit K.", rating: 5, comment: "The light and sound show is spectacular!", date: "2025-10-15" },
      { id: "r4", user: "Sara J.", rating: 4, comment: "Rich history, beautiful architecture.", date: "2025-09-28" },
    ],
  },
  {
    id: "qutub-minar",
    name: "Qutub Minar",
    city: "delhi",
    description: "A 73-meter tall tower of victory, built in 1193. It is the tallest brick minaret in the world and a UNESCO World Heritage Site.",
    image: "https://i.pinimg.com/1200x/8c/a1/cf/8ca1cfe6a2f3eab340b4d194b058a0a1.jpg",
    rating: 4.4,
    reviewCount: 1950,
    category: "Monument",
    distanceFromCenter: "15 km",
    coordinates: { lat: 28.5245, lng: 77.1855 },
    reviews: [
      { id: "r5", user: "Vikram T.", rating: 5, comment: "Stunning architecture from the 12th century!", date: "2025-11-05" },
    ],
  },
  {
    id: "lotus-temple",
    name: "Lotus Temple",
    city: "delhi",
    description: "A Bahá'í House of Worship, notable for its flowerlike shape. Open to all regardless of religion. Winner of numerous architecture awards.",
    image: "https://i.pinimg.com/1200x/bc/1a/ab/bc1aab025718dc99a9b53cc2de93f30d.jpg",
    rating: 4.5,
    reviewCount: 2100,
    category: "Temple",
    distanceFromCenter: "12 km",
    coordinates: { lat: 28.5535, lng: 77.2588 },
    reviews: [
      { id: "r6", user: "Neha P.", rating: 5, comment: "Peaceful and architecturally stunning.", date: "2025-12-01" },
    ],
  },
  {
    id: "humayuns-tomb",
    name: "Humayun's Tomb",
    city: "delhi",
    description: "The tomb of the Mughal Emperor Humayun. It was the first garden-tomb on the Indian subcontinent and inspired the Taj Mahal.",
    image: "https://i.pinimg.com/1200x/a2/fd/5f/a2fd5f4ed67a773616e079f88053a153.jpg",
    rating: 4.5,
    reviewCount: 1700,
    category: "Heritage",
    distanceFromCenter: "7 km",
    coordinates: { lat: 28.5933, lng: 77.2507 },
    reviews: [
      { id: "r7", user: "David R.", rating: 4, comment: "Beautiful gardens and Mughal architecture.", date: "2025-10-20" },
    ],
  },
  // Agra
  {
    id: "taj-mahal",
    name: "Taj Mahal",
    city: "agra",
    description: "An ivory-white marble mausoleum and one of the Seven Wonders of the World. Built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600",
    rating: 4.9,
    reviewCount: 12500,
    category: "Wonder",
    distanceFromCenter: "5 km",
    coordinates: { lat: 27.1751, lng: 78.0421 },
    reviews: [
      { id: "r8", user: "Maria L.", rating: 5, comment: "No words can describe the beauty.", date: "2025-12-15" },
      { id: "r9", user: "John D.", rating: 5, comment: "Best at sunrise. Absolutely breathtaking.", date: "2025-11-30" },
    ],
  },
  {
    id: "agra-fort",
    name: "Agra Fort",
    city: "agra",
    description: "A historical fort and UNESCO World Heritage site. It was the main residence of the emperors of the Mughal Dynasty until 1638.",
    image: "https://i.pinimg.com/1200x/0c/48/ee/0c48ee6e76fba8766c53183b14767aef.jpg",
    rating: 4.5,
    reviewCount: 4800,
    category: "Heritage",
    distanceFromCenter: "3 km",
    coordinates: { lat: 27.1795, lng: 78.0211 },
    reviews: [
      { id: "r10", user: "Ravi K.", rating: 4, comment: "A must-visit if you’re in Agra. The mix of palaces, halls, and gardens is stunning and worth the entry fee.", date: "2025-10-10" },
    ],
  },
  {
    id: "fatehpur-sikri",
    name: "Fatehpur Sikri",
    city: "agra",
    description: "A city founded by Mughal Emperor Akbar. It served as the capital of the Mughal Empire for 14 years. UNESCO World Heritage Site.",
    image: "https://i.pinimg.com/1200x/74/b3/dd/74b3dd54206de47cd9c15362fb581b35.jpg",
    rating: 4.3,
    reviewCount: 2200,
    category: "Heritage",
    distanceFromCenter: "37 km",
    coordinates: { lat: 27.0945, lng: 77.6679 },
    reviews: [
      { id: "r11", user: "Sneha G.", rating: 4, comment: "Architecturally stunning and full of history. Buland Darwaza is massive and looks even better in real life.", date: "2025-09-15" },
    ],
  },
  {
    id: "mehtab-bagh",
    name: "Mehtab Bagh",
    city: "agra",
    description: "A garden complex across the Yamuna from the Taj Mahal. Offers the most stunning sunset views of the Taj Mahal.",
    image: "https://i.pinimg.com/1200x/7a/5a/3d/7a5a3d9bafe6234d2719ba7c5fd74b9b.jpg",
    rating: 4.4,
    reviewCount: 1500,
    category: "Garden",
    distanceFromCenter: "6 km",
    coordinates: { lat: 27.1800, lng: 78.0448 },
    reviews: [
      { id: "r12", user: "Arun B.", rating: 5, comment: "Best spot for Taj Mahal sunset photos!", date: "2025-11-18" },
    ],
  },
  // Jaipur
  {
    id: "hawa-mahal",
    name: "Hawa Mahal",
    city: "jaipur",
    description: "The 'Palace of Winds' is a stunning pink sandstone structure with 953 small windows. Built in 1799 by Maharaja Sawai Pratap Singh.",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600",
    rating: 4.5,
    reviewCount: 5600,
    category: "Palace",
    distanceFromCenter: "1 km",
    coordinates: { lat: 26.9239, lng: 75.8267 },
    reviews: [
      { id: "r13", user: "Anita R.", rating: 5, comment: "Iconic Jaipur landmark. The architecture is mind-blowing!", date: "2025-12-05" },
    ],
  },
  {
    id: "amber-fort",
    name: "Amber Fort",
    city: "jaipur",
    description: "A majestic fort overlooking Maota Lake. Known for its artistic Hindu-style elements and blend of Rajput and Mughal architecture.",
    image: "https://i.pinimg.com/1200x/c9/7f/9e/c97f9eff16bac9c88c16012150c73c2b.jpg",
    rating: 4.7,
    reviewCount: 4300,
    category: "Fort",
    distanceFromCenter: "11 km",
    coordinates: { lat: 26.9855, lng: 75.8513 },
    reviews: [
      { id: "r14", user: "Karan M.", rating: 5, comment: "The elephant ride up is unforgettable!", date: "2025-11-25" },
    ],
  },
  {
    id: "city-palace",
    name: "Jal Mahal",
    city: "jaipur",
    description: "Jal Mahal is a stunning 18th-century palace that appears to float in the middle of Man Sagar Lake, Jaipur.",
    image: "https://i.pinimg.com/1200x/08/70/ca/0870ca4cd44ef5b4affa49c6f4d31fc8.jpg",
    rating: 4.4,
    reviewCount: 3800,
    category: "Palace",
    distanceFromCenter: "0.5 km",
    coordinates: { lat: 26.9260, lng: 75.8235 },
    reviews: [
      { id: "r15", user: "Lisa W.", rating: 4, comment: "Beautiful palace with an excellent museum.", date: "2025-10-30" },
    ],
  },
  {
    id: "jantar-mantar",
    name: "Jantar Mantar",
    city: "jaipur",
    description: "An astronomical observation site built in the early 18th century. Houses the world's largest stone sundial. UNESCO World Heritage Site.",
    image: "https://i.pinimg.com/736x/76/69/fe/7669fef4b5a137754554ec7bf05614fc.jpg",
    rating: 4.2,
    reviewCount: 2100,
    category: "Observatory",
    distanceFromCenter: "0.8 km",
    coordinates: { lat: 26.9248, lng: 75.8246 },
    reviews: [
      { id: "r16", user: "Sam T.", rating: 4, comment: "Fascinating scientific instruments from centuries ago.", date: "2025-09-20" },
    ],
  },
  {
    id: "nahargarh-fort",
    name: "Nahargarh Fort",
    city: "jaipur",
    description: "Perched on the Aravalli hills, this fort offers panoramic views of Jaipur city. Perfect for sunset views and photography.",
    image: "https://jaipurtourism.co.in/images/places-to-visit/header/nahargarh-fort-jaipur-entry-fee-timings-holidays-reviews-header.jpg",
    rating: 4.3,
    reviewCount: 1800,
    category: "Fort",
    distanceFromCenter: "6 km",
    coordinates: { lat: 26.9385, lng: 75.8149 },
    reviews: [
      { id: "r17", user: "Deepak S.", rating: 5, comment: "Best sunset viewpoint in Jaipur!", date: "2025-12-12" },
    ],
  },
  // Mumbai
  {
    id: "gateway-of-india",
    name: "Gateway of India",
    city: "mumbai",
    description: "An arch-monument built in the 20th century overlooking the Arabian Sea. One of India's most visited tourist attractions.",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600",
    rating: 4.5,
    reviewCount: 6200,
    category: "Monument",
    distanceFromCenter: "0 km",
    coordinates: { lat: 18.9220, lng: 72.8347 },
    reviews: [
      { id: "r18", user: "Pooja N.", rating: 5, comment: "Iconic Mumbai landmark! Must visit at sunset.", date: "2025-12-08" },
    ],
  },
  {
    id: "marine-drive",
    name: "Marine Drive",
    city: "mumbai",
    description: "A 3.6 km long boulevard along the South Mumbai coastline. Known as the Queen's Necklace due to its stunning night view.",
    image: "https://i.pinimg.com/1200x/a3/7a/6f/a37a6f40882f37767b400e4c4044f59d.jpg",
    rating: 4.6,
    reviewCount: 4100,
    category: "Promenade",
    distanceFromCenter: "2 km",
    coordinates: { lat: 18.9432, lng: 72.8235 },
    reviews: [
      { id: "r19", user: "Rajesh P.", rating: 5, comment: "A peaceful seaside stretch where cool breezes, glowing city lights, and endless waves come together to create Mumbai’s most relaxing vibe.", date: "2025-11-15" },
    ],
  },
  {
    id: "elephanta-caves",
    name: "Elephanta Caves",
    city: "mumbai",
    description: "A UNESCO World Heritage Site featuring rock-cut cave temples dedicated to Lord Shiva, dating back to the 5th-8th centuries.",
    image: "https://i.pinimg.com/1200x/6d/45/0e/6d450ef975a7fd448a4a30dfff0d2694.jpg",
    rating: 4.3,
    reviewCount: 2800,
    category: "Heritage",
    distanceFromCenter: "10 km (by ferry)",
    coordinates: { lat: 18.9633, lng: 72.9315 },
    reviews: [
      { id: "r20", user: "Meera J.", rating: 4, comment: "A fascinating blend of history and art, where ancient rock-cut sculptures and peaceful surroundings make the short ferry trip totally worth it.", date: "2025-10-25" },
    ],
  },
  {
    id: "chhatrapati-shivaji-terminus",
    name: "Shree Siddhivinayak Temple",
    city: "mumbai",
    description: "It is one of Mumbai’s most famous temples, dedicated to Lord Ganesha, known for its strong spiritual energy and belief that sincere prayers here fulfill wishes.",
    image: "https://i.pinimg.com/736x/e9/cf/17/e9cf17d4f0be99946b4c44e2c65125ca.jpg",
    rating: 4.6,
    reviewCount: 3500,
    category: "Heritage",
    distanceFromCenter: "1.5 km",
    coordinates: { lat: 18.9398, lng: 72.8355 },
    reviews: [
      { id: "r21", user: "Alex F.", rating: 5, comment: "The architecture is incredibly detailed. A photographer's dream!", date: "2025-11-08" },
    ],
  },
  // Varanasi
  {
    id: "kashi-vishwanath",
    name: "Kashi Vishwanath Temple",
    city: "varanasi",
    description: "One of the most famous Hindu temples dedicated to Lord Shiva. Located on the western bank of the holy river Ganga.",
    image: "https://i.pinimg.com/736x/40/63/e3/4063e3d3533014d1513c59dfea459463.jpg",
    rating: 4.7,
    reviewCount: 5800,
    category: "Temple",
    distanceFromCenter: "1 km",
    coordinates: { lat: 25.3109, lng: 83.0107 },
    reviews: [
      { id: "r22", user: "Sunita D.", rating: 5, comment: "The place is extremely crowded but deeply spiritual. Darshan takes time, yet the energy inside the temple is powerful and peaceful.", date: "2025-12-20" },
    ],
  },
  {
    id: "dashashwamedh-ghat",
    name: "Dashashwamedh Ghat",
    city: "varanasi",
    description: "The main ghat in Varanasi on the Ganges. Famous for its spectacular evening Ganga Aarti ceremony.",
    image: "https://i.pinimg.com/1200x/e6/6d/1e/e66d1edce8404629ac1a77fc9a3b67a2.jpg",
    rating: 4.8,
    reviewCount: 4200,
    category: "Ghat",
    distanceFromCenter: "0.5 km",
    coordinates: { lat: 25.3046, lng: 83.0108 },
    reviews: [
      { id: "r23", user: "Tom H.", rating: 5, comment: "The evening Ganga Aarti is powerful and emotional, with chants, lamps, and devotion", date: "2025-11-28" },
    ],
  },
  {
    id: "dashashwamedh-ghat",
    name: "Dashashwamedh Ghat",
    city: "varanasi",
    description: "The main ghat in Varanasi on the Ganges. Famous for its spectacular evening Ganga Aarti ceremony.",
    image: "https://i.pinimg.com/1200x/e6/6d/1e/e66d1edce8404629ac1a77fc9a3b67a2.jpg",
    rating: 4.8,
    reviewCount: 4200,
    category: "Ghat",
    distanceFromCenter: "0.5 km",
    coordinates: { lat: 25.3046, lng: 83.0108 },
    reviews: [
      { id: "r23", user: "Tom H.", rating: 5, comment: "The evening Ganga Aarti is powerful and emotional, with chants, lamps, and devotion", date: "2025-11-28" },
    ],
  },
  {
    id: "sarnath",
    name: "Sarnath",
    city: "varanasi",
    description: "The place where Buddha gave his first sermon. Houses the famous Ashoka Pillar with four lions, India's national emblem.",
    image: "https://i.pinimg.com/1200x/af/c0/0a/afc00a867648b2daf0361fde5a02396b.jpg",
    rating: 4.4,
    reviewCount: 2600,
    category: "Buddhist Site",
    distanceFromCenter: "10 km",
    coordinates: { lat: 25.3814, lng: 83.0229 },
    reviews: [
      { id: "r24", user: "Maya K.", rating: 4, comment: "Peaceful and historically significant.", date: "2025-10-05" },
    ],
  },
  {
    id: "assi-ghat",
    name: "Sankat Mochan Hanuman Temple",
    city: "varanasi",
    description: "A peaceful and revered temple dedicated to Lord Hanuman, believed to remove troubles and known for its calm, devotional atmosphere in Varanasi.",
    image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/a5/e6/a2/sankat-mochan-hanuman.jpg?w=1000&h=-1&s=1",
    rating: 4.3,
    reviewCount: 1900,
    category: "Ghat",
    distanceFromCenter: "3 km",
    coordinates: { lat: 25.2878, lng: 83.0054 },
    reviews: [
      { id: "r25", user: "Chris B.", rating: 4, comment: "A calm and devotional place with a very positive vibe.", date: "2025-09-30" },
    ],
  },
  // Goa
  {
    id: "baga-beach",
    name: "Baga Beach",
    city: "goa",
    description: "One of the most popular beaches in North Goa, known for its nightlife, water sports, and beach shacks.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600",
    rating: 4.4,
    reviewCount: 3800,
    category: "Beach",
    distanceFromCenter: "16 km",
    coordinates: { lat: 15.5551, lng: 73.7514 },
    reviews: [
      { id: "r26", user: "Rohit M.", rating: 4, comment: "Great vibes! Water sports and nightlife are amazing.", date: "2025-12-18" },
    ],
  },
  {
    id: "basilica-bom-jesus",
    name: "Basilica of Bom Jesus",
    city: "goa",
    description: "A UNESCO World Heritage Site housing the mortal remains of St. Francis Xavier. A masterpiece of Baroque architecture.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600",
    rating: 4.5,
    reviewCount: 2400,
    category: "Church",
    distanceFromCenter: "10 km",
    coordinates: { lat: 15.5009, lng: 73.9116 },
    reviews: [
      { id: "r27", user: "Fernanda L.", rating: 5, comment: "Beautiful Portuguese-era church. The architecture is stunning.", date: "2025-11-12" },
    ],
  },
  {
    id: "dudhsagar-falls",
    name: "Dudhsagar Falls",
    city: "goa",
    description: "A four-tiered waterfall located on the Mandovi River. At 310 meters, it's one of the tallest waterfalls in India.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600",
    rating: 4.6,
    reviewCount: 2100,
    category: "Waterfall",
    distanceFromCenter: "60 km",
    coordinates: { lat: 15.3144, lng: 74.3143 },
    reviews: [
      { id: "r28", user: "Kavita S.", rating: 5, comment: "Breathtaking waterfall! The jeep ride through the jungle is thrilling.", date: "2025-10-08" },
    ],
  },
  {
    id: "fort-aguada",
    name: "Fort Aguada",
    city: "goa",
    description: "A well-preserved 17th-century Portuguese fort with a lighthouse. Offers panoramic views of the Arabian Sea.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600",
    rating: 4.3,
    reviewCount: 1800,
    category: "Fort",
    distanceFromCenter: "18 km",
    coordinates: { lat: 15.4923, lng: 73.7735 },
    reviews: [
      { id: "r29", user: "Miguel A.", rating: 4, comment: "Great views and well-maintained fort. The lighthouse is iconic.", date: "2025-09-22" },
    ],
  },
];

export function getCitiesBySearch(query: string): City[] {
  if (!query.trim()) return [];
  const q = query.toLowerCase();
  return cities.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.state.toLowerCase().includes(q)
  );
}

export function getPlacesByCity(cityId: string): Place[] {
  return places.filter((p) => p.city === cityId);
}

export function getPlaceById(placeId: string): Place | undefined {
  return places.find((p) => p.id === placeId);
}

export function getCityById(cityId: string): City | undefined {
  return cities.find((c) => c.id === cityId);
}
