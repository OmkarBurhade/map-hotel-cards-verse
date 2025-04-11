export interface VenueType {
  id: string;
  name: string;
  location: {
    address: string;
    city: string;
    distance: string;
    coordinates: [number, number]; // [lat, lng]
  };
  details: {
    privateExperiences: number;
    events: number;
    reviews: number;
    rating: number;
    squareFeet: number;
    capacity: number;
    amenities: string[];
  };
  tags: string[];
  image: string;
  isFavorite: boolean;
}

export const venueTypes = [
  "Powerful",
  "Native Garden",
  "Edible Garden",
  "Tropical",
  "Leave the City",
  "Kid Friendly",
  "Dog Friendly",
  "Meditation",
  "Animals",
  "Orchard",
  "All Filters",
];

// International and domestic gardens and hotels
export const venues: VenueType[] = [
  // International Venues
  {
    id: "1",
    name: "Kyoto Zen Garden Hotel",
    location: {
      address: "45 Zen Path",
      city: "Kyoto, Japan",
      distance: "International",
      coordinates: [35.011665, 135.768326],
    },
    details: {
      privateExperiences: 5,
      events: 7,
      reviews: 189,
      rating: 5,
      squareFeet: 40000,
      capacity: 861,
      amenities: ["wifi", "power"],
    },
    tags: ["Meditation", "Native Garden", "Powerful"],
    image: "https://kyoto-ryokan.co.jp/images/top/main02.jpg",
    isFavorite: true,
  },
  {
    id: "2",
    name: "Bali Tropical Paradise",
    location: {
      address: "88 Beach Avenue",
      city: "Ubud, Bali",
      distance: "International",
      coordinates: [-8.506853, 115.262131],
    },
    details: {
      privateExperiences: 4,
      events: 6,
      reviews: 156,
      rating: 5,
      squareFeet: 35000,
      capacity: 202,
      amenities: ["power", "gardens"],
    },
    tags: ["Tropical", "Meditation", "Leave the City"],
    image:
      "https://images.unsplash.com/photo-1559628233-100c798642d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "3",
    name: "Kew Royal Botanical Gardens",
    location: {
      address: "Kew, Richmond",
      city: "London, UK",
      distance: "International",
      coordinates: [51.478711, -0.295427],
    },
    details: {
      privateExperiences: 5,
      events: 9,
      reviews: 203,
      rating: 5,
      squareFeet: 121400,
      capacity: 201,
      amenities: ["wifi", "power", "pets"],
    },
    tags: ["Native Garden", "Kid Friendly", "Edible Garden"],
    image:
      "https://www.guidelondon.org.uk/wp-content/uploads/2020/07/The-Palm-House-and-Parterre-at-the-Royal-Botanic-Gardens-of-Kew-in-London.jpg",
    isFavorite: true,
  },
  {
    id: "4",
    name: "Gardens by the Bay",
    location: {
      address: "18 Marina Gardens Drive",
      city: "Singapore",
      distance: "International",
      coordinates: [1.2815683, 103.8636132],
    },
    details: {
      privateExperiences: 6,
      events: 10,
      reviews: 267,
      rating: 5,
      squareFeet: 250000,
      capacity: 200,
      amenities: ["clock", "gardens"],
    },
    tags: ["Tropical", "Powerful", "Kid Friendly"],
    image:
      "https://images.unsplash.com/photo-1506351421178-63b52a2d2562?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
  {
    id: "5",
    name: "Jardin Majorelle",
    location: {
      address: "Rue Yves St Laurent",
      city: "Marrakech, Morocco",
      distance: "International",
      coordinates: [31.6423813, -8.0056631],
    },
    details: {
      privateExperiences: 4,
      events: 5,
      reviews: 178,
      rating: 5,
      squareFeet: 20000,
      capacity: 150,
      amenities: ["wifi", "pets", "clock"],
    },
    tags: ["Native Garden", "Tropical", "Meditation"],
    image:
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "6",
    name: "Butchart Gardens",
    location: {
      address: "800 Benvenuto Ave",
      city: "Victoria, Canada",
      distance: "International",
      coordinates: [48.5635, -123.4702],
    },
    details: {
      privateExperiences: 5,
      events: 7,
      reviews: 210,
      rating: 5,
      squareFeet: 55000,
      capacity: 107,
      amenities: ["power", "pets", "gardens"],
    },
    tags: ["Native Garden", "Kid Friendly", "Powerful"],
    image:
      "https://image-tc.galaxy.tf/wijpeg-b9cop6l8p8l6m7cvhs2lx19w3/butchart-gardens-sunken-garden-lookout_standard.jpg?crop=62%2C0%2C977%2C733",
    isFavorite: false,
  },
  {
    id: "7",
    name: "Keukenhof Gardens",
    location: {
      address: "Stationsweg 166A",
      city: "Lisse, Netherlands",
      distance: "International",
      coordinates: [52.2697, 4.5462],
    },
    details: {
      privateExperiences: 4,
      events: 6,
      reviews: 195,
      rating: 5,
      squareFeet: 79000,
      capacity: 199,
      amenities: ["clock", "gardens"],
    },
    tags: ["Native Garden", "Kid Friendly", "Leave the City"],
    image:
      "https://bollenstreek.nl/wp-content/uploads/2017/03/media-filer_public_thumbnails-filer_public-93-2b-932b1924-5400-479b-abe2-c83b7f230f46-160502lt0116.jpg__1200x1200_q85.jpg",
    isFavorite: true,
  },
  {
    id: "8",
    name: "Villa d'Este",
    location: {
      address: "Piazza Trento, 5",
      city: "Tivoli, Italy",
      distance: "International",
      coordinates: [41.9633, 12.7958],
    },
    details: {
      privateExperiences: 5,
      events: 6,
      reviews: 168,
      rating: 5,
      squareFeet: 40000,
      capacity: 180,
      amenities: ["wifi", "power"],
    },
    tags: ["Powerful", "Meditation", "Leave the City"],
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2e/9a/5d/19/villa-d-este-general.jpg?w=500&h=-1&s=1",
    isFavorite: false,
  },
  {
    id: "9",
    name: "Taj Mahal Palace Gardens",
    location: {
      address: "Apollo Bandar, Colaba",
      city: "Mumbai, India",
      distance: "International",
      coordinates: [18.9217, 72.8332],
    },
    details: {
      privateExperiences: 6,
      events: 8,
      reviews: 220,
      rating: 5,
      squareFeet: 60000,
      capacity: 98,
      amenities: ["wifi", "power"],
    },
    tags: ["Native Garden", "Powerful", "Meditation"],
    image:
      "https://www.eternalweddingz.in/storage/venue_images/586MY0luZMtYBUhGrgCi5slFb18ytKuCYoLJHfSq.webp",
    isFavorite: true,
  },
  {
    id: "10",
    name: "Sydney Royal Botanic Garden",
    location: {
      address: "Mrs Macquaries Rd",
      city: "Sydney, Australia",
      distance: "International",
      coordinates: [-33.8643, 151.2166],
    },
    details: {
      privateExperiences: 5,
      events: 7,
      reviews: 185,
      rating: 5,
      squareFeet: 74000,
      capacity: 45,
      amenities: ["wifi", "pets", "gardens"],
    },
    tags: ["Native Garden", "Kid Friendly", "Meditation"],
    image:
      "https://image-tc.galaxy.tf/wijpeg-dmlvkl5mzfs8ayepxnogjo31q/jamison-attractions-botanical-gardens_standard.jpg?crop=117%2C0%2C1767%2C1325",
    isFavorite: false,
  },
  // US Venues (not exclusively Los Angeles)
  {
    id: "11",
    name: "Brooklyn Botanic Garden",
    location: {
      address: "990 Washington Ave",
      city: "New York, NY",
      distance: "(3250mi)",
      coordinates: [40.6687, -73.9625],
    },
    details: {
      privateExperiences: 4,
      events: 6,
      reviews: 175,
      rating: 5,
      squareFeet: 52000,
      capacity: 125,
      amenities: ["wifi", "power", "clock", "gardens"],
    },
    tags: ["Native Garden", "Kid Friendly", "Edible Garden"],
    image:
      "https://images.unsplash.com/photo-1558694440-03ade9215d7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "12",
    name: "Longwood Gardens",
    location: {
      address: "1001 Longwood Road",
      city: "Kennett Square, PA",
      distance: "(2850mi)",
      coordinates: [39.8711, -75.6748],
    },
    details: {
      privateExperiences: 5,
      events: 8,
      reviews: 190,
      rating: 5,
      squareFeet: 110000,
      capacity: 188,
      amenities: ["power", "pets", "gardens"],
    },
    tags: ["Native Garden", "Kid Friendly", "Powerful"],
    image:
      "https://images.unsplash.com/photo-1501256504904-1fbe305bb538?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
  {
    id: "13",
    name: "Chicago Botanic Garden",
    location: {
      address: "1000 Lake Cook Rd",
      city: "Chicago, IL",
      distance: "(2100mi)",
      coordinates: [42.1498, -87.79],
    },
    details: {
      privateExperiences: 4,
      events: 7,
      reviews: 170,
      rating: 5,
      squareFeet: 87000,
      capacity: 115,
      amenities: ["clock", "gardens"],
    },
    tags: ["Native Garden", "Kid Friendly", "Edible Garden"],
    image:
      "https://images.trvl-media.com/lodging/1000000/30000/21800/21767/26a8e15a_y.jpg",
    isFavorite: true,
  },
  {
    id: "14",
    name: "Portland Japanese Garden",
    location: {
      address: "611 SW Kingston Ave",
      city: "Portland, OR",
      distance: "(960mi)",
      coordinates: [45.519, -122.7084],
    },
    details: {
      privateExperiences: 4,
      events: 5,
      reviews: 165,
      rating: 5,
      squareFeet: 35000,
      capacity: 150,
      amenities: ["power", "pets", "gardens"],
    },
    tags: ["Meditation", "Native Garden", "Leave the City"],
    image:
      "https://wpmedia.japanesegarden.org/cb:gH3K.2f15e/w:1600/h:1054/q:mauto/ig:avif/id:2accd00dc05d01f1463c076001034252/http://live-japanesegarden.pantheonsite.io/Sapporo-Lantern-in-Late-Summer-Dusk.-Photo-by-Roman-Johnston-1.webp",
    isFavorite: false,
  },
  {
    id: "15",
    name: "Miami Fairchild Tropical Garden",
    location: {
      address: "10901 Old Cutler Road",
      city: "Miami, FL",
      distance: "(2750mi)",
      coordinates: [25.6771, -80.2748],
    },
    details: {
      privateExperiences: 4,
      events: 6,
      reviews: 160,
      rating: 5,
      squareFeet: 83000,
      capacity: 120,
      amenities: ["wifi", "gardens"],
    },
    tags: ["Tropical", "Kid Friendly", "Native Garden"],
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/9f/02/80/fairchild-tropical-botanic.jpg?w=900&h=500&s=1",
    isFavorite: true,
  },
  // Some Los Angeles venues (but with less priority)
  {
    id: "16",
    name: "Stone Bridge Gardens",
    location: {
      address: "321 Rocky Road",
      city: "Los Angeles, CA",
      distance: "(5.5mi)",
      coordinates: [34.038253, -118.271701],
    },
    details: {
      privateExperiences: 3,
      events: 5,
      reviews: 37,
      rating: 4,
      squareFeet: 24000,
      capacity: 90,
      amenities: ["pets", "clock", "gardens"],
    },
    tags: ["Native Garden", "Dog Friendly", "Meditation"],
    image:
      "https://q-xx.bstatic.com/xdata/images/hotel/max500/338989411.jpg?k=5f94cf558b80d62ee4d2208493e2663637505a19a713d24bd618ab32acd514ec&o=",
    isFavorite: false,
  },
  {
    id: "17",
    name: "Enchanted Garden Resort",
    location: {
      address: "654 Fairy Lane",
      city: "Los Angeles, CA",
      distance: "(3.1mi)",
      coordinates: [34.056254, -118.281702],
    },
    details: {
      privateExperiences: 5,
      events: 7,
      reviews: 63,
      rating: 5,
      squareFeet: 39000,
      capacity: 145,
      amenities: ["wifi", "power", "gardens"],
    },
    tags: ["Powerful", "Kid Friendly", "Tropical"],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/be/Enchanted_gardens_pool.jpg",
    isFavorite: true,
  },
  {
    id: "18",
    name: "Hawaii Tropical Garden",
    location: {
      address: "27-717 Old Mamalahoa Hwy",
      city: "Papaikou, HI",
      distance: "(2500mi)",
      coordinates: [19.8075, -155.1044],
    },
    details: {
      privateExperiences: 4,
      events: 5,
      reviews: 155,
      rating: 5,
      squareFeet: 40000,
      capacity: 180,
      amenities: ["gardens"],
    },
    tags: ["Tropical", "Leave the City", "Meditation"],
    image:
      "https://images.unsplash.com/photo-1570145820259-b5b80c5c8bd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "19",
    name: "Desert Botanical Garden",
    location: {
      address: "1201 N Galvin Pkwy",
      city: "Phoenix, AZ",
      distance: "(400mi)",
      coordinates: [33.4619, -111.9434],
    },
    details: {
      privateExperiences: 4,
      events: 6,
      reviews: 165,
      rating: 5,
      squareFeet: 55000,
      capacity: 150,
      amenities: ["wifi", "clock", "gardens"],
    },
    tags: ["Native Garden", "Powerful", "Leave the City"],
    image: "https://travel.usnews.com/images/dbg_general_garden8_El8nSEM.jpg",
    isFavorite: false,
  },
  {
    id: "20",
    name: "Meadowlark Hotel",
    location: {
      address: "654 Songbird Avenue",
      city: "Los Angeles, CA",
      distance: "(5.2mi)",
      coordinates: [34.060259, -118.265707],
    },
    details: {
      privateExperiences: 4,
      events: 6,
      reviews: 48,
      rating: 5,
      squareFeet: 34000,
      capacity: 125,
      amenities: ["wifi", "power"],
    },
    tags: ["Native Garden", "Animals", "Kid Friendly"],
    image:
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
];
