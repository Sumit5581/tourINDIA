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
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600",
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
    image: "https://images.unsplash.com/photo-1585135497273-1a86d9d9e2e3?w=600",
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
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600",
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
    image: "https://images.unsplash.com/photo-1622310555776-03da06a64e6b?w=600",
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
    image: "https://images.unsplash.com/photo-1585135497273-1a86d9d9e2e3?w=600",
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
      { id: "r8", user: "Maria L.", rating: 5, comment: "No words can describe the beauty. A once-in-a-lifetime experience!", date: "2025-12-15" },
      { id: "r9", user: "John D.", rating: 5, comment: "Best at sunrise. Absolutely breathtaking.", date: "2025-11-30" },
    ],
  },
  {
    id: "agra-fort",
    name: "Agra Fort",
    city: "agra",
    description: "A historical fort and UNESCO World Heritage site. It was the main residence of the emperors of the Mughal Dynasty until 1638.",
    image: "https://images.unsplash.com/photo-1585135497273-1a86d9d9e2e3?w=600",
    rating: 4.5,
    reviewCount: 4800,
    category: "Heritage",
    distanceFromCenter: "3 km",
    coordinates: { lat: 27.1795, lng: 78.0211 },
    reviews: [
      { id: "r10", user: "Ravi K.", rating: 4, comment: "Massive fort with great views of the Taj.", date: "2025-10-10" },
    ],
  },
  {
    id: "fatehpur-sikri",
    name: "Fatehpur Sikri",
    city: "agra",
    description: "A city founded by Mughal Emperor Akbar. It served as the capital of the Mughal Empire for 14 years. UNESCO World Heritage Site.",
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600",
    rating: 4.3,
    reviewCount: 2200,
    category: "Heritage",
    distanceFromCenter: "37 km",
    coordinates: { lat: 27.0945, lng: 77.6679 },
    reviews: [
      { id: "r11", user: "Sneha G.", rating: 4, comment: "Fascinating ghost city with incredible architecture.", date: "2025-09-15" },
    ],
  },
  {
    id: "mehtab-bagh",
    name: "Mehtab Bagh",
    city: "agra",
    description: "A garden complex across the Yamuna from the Taj Mahal. Offers the most stunning sunset views of the Taj Mahal.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600",
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
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600",
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
    id: "city-palace-jaipur",
    name: "City Palace",
    city: "jaipur",
    description: "A complex of courtyards, gardens, and buildings blending Rajasthani and Mughal architecture. Still partially a royal residence.",
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600",
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
    image: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600",
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
    image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?w=600",
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
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600",
    rating: 4.6,
    reviewCount: 4100,
    category: "Promenade",
    distanceFromCenter: "2 km",
    coordinates: { lat: 18.9432, lng: 72.8235 },
    reviews: [
      { id: "r19", user: "Rajesh P.", rating: 5, comment: "Perfect for evening walks. The Queen's Necklace view is magical!", date: "2025-11-15" },
    ],
  },
  {
    id: "elephanta-caves",
    name: "Elephanta Caves",
    city: "mumbai",
    description: "A UNESCO World Heritage Site featuring rock-cut cave temples dedicated to Lord Shiva, dating back to the 5th-8th centuries.",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600",
    rating: 4.3,
    reviewCount: 2800,
    category: "Heritage",
    distanceFromCenter: "10 km (by ferry)",
    coordinates: { lat: 18.9633, lng: 72.9315 },
    reviews: [
      { id: "r20", user: "Meera J.", rating: 4, comment: "The ferry ride and caves are both wonderful!", date: "2025-10-25" },
    ],
  },
  {
    id: "chhatrapati-shivaji-terminus",
    name: "Chhatrapati Shivaji Terminus",
    city: "mumbai",
    description: "A historic railway station and UNESCO World Heritage Site. A masterpiece of Victorian Gothic Revival architecture blended with Indian traditional themes.",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=600",
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
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600",
    rating: 4.7,
    reviewCount: 5800,
    category: "Temple",
    distanceFromCenter: "1 km",
    coordinates: { lat: 25.3109, lng: 83.0107 },
    reviews: [
      { id: "r22", user: "Sunita D.", rating: 5, comment: "A deeply spiritual experience. The new corridor is magnificent!", date: "2025-12-20" },
    ],
  },
  {
    id: "dashashwamedh-ghat",
    name: "Dashashwamedh Ghat",
    city: "varanasi",
    description: "The main ghat in Varanasi on the Ganges. Famous for its spectacular evening Ganga Aarti ceremony.",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600",
    rating: 4.8,
    reviewCount: 4200,
    category: "Ghat",
    distanceFromCenter: "0.5 km",
    coordinates: { lat: 25.3046, lng: 83.0108 },
    reviews: [
      { id: "r23", user: "Tom H.", rating: 5, comment: "The evening aarti is the most mesmerizing experience I've ever had!", date: "2025-11-28" },
    ],
  },
  {
    id: "sarnath",
    name: "Sarnath",
    city: "varanasi",
    description: "The place where Buddha gave his first sermon. Houses the famous Ashoka Pillar with four lions, India's national emblem.",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600",
    rating: 4.4,
    reviewCount: 2600,
    category: "Buddhist Site",
    distanceFromCenter: "10 km",
    coordinates: { lat: 25.3814, lng: 83.0229 },
    reviews: [
      { id: "r24", user: "Maya K.", rating: 4, comment: "Peaceful and historically significant. The museum is excellent.", date: "2025-10-05" },
    ],
  },
  {
    id: "assi-ghat",
    name: "Assi Ghat",
    city: "varanasi",
    description: "The southernmost ghat of Varanasi. Popular for morning yoga sessions and its confluence of the Assi river with the Ganges.",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=600",
    rating: 4.3,
    reviewCount: 1900,
    category: "Ghat",
    distanceFromCenter: "3 km",
    coordinates: { lat: 25.2878, lng: 83.0054 },
    reviews: [
      { id: "r25", user: "Chris B.", rating: 4, comment: "Great for morning walks and chai by the river.", date: "2025-09-30" },
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
