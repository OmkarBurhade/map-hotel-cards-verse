
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

// Sample venue data plus international gardens
export const venues: VenueType[] = [
  
  {
    id: "26",
    name: "Cedar Hill Resort",
    location: {
      address: "101 Cedar Creek Rd",
      city: "San Diego, CA",
      distance: "(5.5mi)",
      coordinates: [32.715736, -117.161087],
    },
    details: {
      privateExperiences: 3,
      events: 5,
      reviews: 37,
      rating: 4,
      squareFeet: 24000,
      capacity: 90,
      amenities: ["wifi", "pets", "clock"],
    },
    tags: ["Native Garden", "Dog Friendly", "Meditation"],
    image:
      "https://images.unsplash.com/photo-1580093543655-6b95d6bdc0ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
  {
    id: "27",
    name: "Golden Leaf Retreat",
    location: {
      address: "202 Golden Lane",
      city: "Pasadena, CA",
      distance: "(3.1mi)",
      coordinates: [34.147785, -118.144516],
    },
    details: {
      privateExperiences: 5,
      events: 7,
      reviews: 63,
      rating: 5,
      squareFeet: 39000,
      capacity: 145,
      amenities: ["wifi", "power", "pets"],
    },
    tags: ["Powerful", "Kid Friendly", "Tropical"],
    image:
      "https://images.unsplash.com/photo-1559304787-75b3f87def13?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "28",
    name: "Pinecone Grove Inn",
    location: {
      address: "303 Pine Street",
      city: "Santa Monica, CA",
      distance: "(7.4mi)",
      coordinates: [34.019454, -118.491191],
    },
    details: {
      privateExperiences: 3,
      events: 4,
      reviews: 28,
      rating: 4,
      squareFeet: 21000,
      capacity: 75,
      amenities: ["wifi"],
    },
    tags: ["Orchard", "Edible Garden", "Leave the City"],
    image:
      "https://images.unsplash.com/photo-1560224803-518532a21ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
  {
    id: "29",
    name: "Amberwood Hotel",
    location: {
      address: "404 Amber Way",
      city: "Burbank, CA",
      distance: "(2.6mi)",
      coordinates: [34.180839, -118.308968],
    },
    details: {
      privateExperiences: 4,
      events: 5,
      reviews: 41,
      rating: 5,
      squareFeet: 28000,
      capacity: 100,
      amenities: ["wifi", "power"],
    },
    tags: ["Native Garden", "Meditation", "Orchard"],
    image:
      "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "30",
    name: "The Oberoi Rajvilas, Jaipur",
    location: {
      address: "Goner Road, Paldi Meena, Jaipur, Rajasthan 302031",
      city: "Jaipur",
      distance: "(187km)",
      coordinates: [26.912434, 75.787271],
    },
    details: {
      privateExperiences: 5,
      events: 8,
      reviews: 57,
      rating: 5,
      squareFeet: 42000,
      capacity: 160,
      amenities: ["wifi", "power", "pets"],
    },
    tags: ["Native Garden", "Leave the City", "Powerful"],
    image:
      "https://images.unsplash.com/photo-1587254259209-6e8cc33738ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "31",
    name: "Rosehill Gardens",
    location: {
      address: "505 Rose Lane",
      city: "Glendale, CA",
      distance: "(3.9mi)",
      coordinates: [34.142508, -118.255075],
    },
    details: {
      privateExperiences: 3,
      events: 4,
      reviews: 33,
      rating: 4,
      squareFeet: 19000,
      capacity: 70,
      amenities: ["wifi", "pets"],
    },
    tags: ["Dog Friendly", "Meditation", "Animals"],
    image:
      "https://images.unsplash.com/photo-1605540436563-5bca5a6badb4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
  {
    id: "32",
    name: "Morningstar Hotel",
    location: {
      address: "606 Dawn Drive",
      city: "Culver City, CA",
      distance: "(5.2mi)",
      coordinates: [34.021122, -118.396466],
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
  {
    id: "33",
    name: "Sunridge Garden Hotel",
    location: {
      address: "707 Sunset Blvd",
      city: "Santa Clarita, CA",
      distance: "(1.7mi)",
      coordinates: [34.391664, -118.542586],
    },
    details: {
      privateExperiences: 2,
      events: 3,
      reviews: 25,
      rating: 4,
      squareFeet: 16000,
      capacity: 60,
      amenities: ["wifi"],
    },
    tags: ["Edible Garden", "Kid Friendly", "Tropical"],
    image:
      "https://images.unsplash.com/photo-1589923188900-1a53b21c655a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
  {
    id: "34",
    name: "Evergreen Seasons Resort",
    location: {
      address: "808 Evergreen Rd",
      city: "Irvine, CA",
      distance: "(4.8mi)",
      coordinates: [33.684567, -117.826505],
    },
    details: {
      privateExperiences: 5,
      events: 7,
      reviews: 61,
      rating: 5,
      squareFeet: 37000,
      capacity: 140,
      amenities: ["wifi", "power", "pets"],
    },
    tags: ["Native Garden", "Orchard", "Leave the City"],
    image:
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "35",
    name: "Crystal River Hotel",
    location: {
      address: "909 Riverbend Ln",
      city: "Anaheim, CA",
      distance: "(6.9mi)",
      coordinates: [33.836593, -117.914301],
    },
    details: {
      privateExperiences: 3,
      events: 5,
      reviews: 39,
      rating: 4,
      squareFeet: 25000,
      capacity: 95,
      amenities: ["wifi", "pets", "clock"],
    },
    tags: ["Dog Friendly", "Meditation", "Native Garden"],
    image:
      "https://images.unsplash.com/photo-1584890132050-13cabe1a2e5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
  {
    id: "36",
    name: "Whispering Woods Hotel",
    location: {
      address: "111 Forest Path",
      city: "Ventura, CA",
      distance: "(3.5mi)",
      coordinates: [34.280494, -119.294504],
    },
    details: {
      privateExperiences: 4,
      events: 6,
      reviews: 52,
      rating: 5,
      squareFeet: 32000,
      capacity: 115,
      amenities: ["wifi", "power"],
    },
    tags: ["Powerful", "Meditation", "Native Garden"],
    image:
      "https://images.unsplash.com/photo-1571003123894-246247acff13?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "37",
    name: "Tranquil Haven Hotel",
    location: {
      address: "222 Zen Street",
      city: "Riverside, CA",
      distance: "(5.9mi)",
      coordinates: [33.980601, -117.375494],
    },
    details: {
      privateExperiences: 5,
      events: 4,
      reviews: 45,
      rating: 5,
      squareFeet: 27000,
      capacity: 90,
      amenities: ["wifi", "power", "pets"],
    },
    tags: ["Meditation", "Powerful", "Leave the City"],
    image:
      "https://images.unsplash.com/photo-1576013551627-0ae7d1d006c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "38",
    name: "Flora Park Hotel",
    location: {
      address: "333 Bloom Avenue",
      city: "Fresno, CA",
      distance: "(2.4mi)",
      coordinates: [36.737797, -119.787125],
    },
    details: {
      privateExperiences: 3,
      events: 5,
      reviews: 36,
      rating: 4,
      squareFeet: 23000,
      capacity: 85,
      amenities: ["wifi", "pets"],
    },
    tags: ["Native Garden", "Edible Garden", "Tropical"],
    image:
      "https://images.unsplash.com/photo-1598010130946-a769af701e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
  {
    id: "39",
    name: "Cascade Grove Retreat",
    location: {
      address: "444 Falls Court",
      city: "Palm Springs, CA",
      distance: "(7.1mi)",
      coordinates: [33.830296, -116.545292],
    },
    details: {
      privateExperiences: 4,
      events: 7,
      reviews: 54,
      rating: 5,
      squareFeet: 35000,
      capacity: 130,
      amenities: ["wifi", "power"],
    },
    tags: ["Powerful", "Leave the City", "Dog Friendly"],
    image:
      "https://images.unsplash.com/photo-1588354301499-a9a7e0894327?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "40",
    name: "Garden of Light Hotel",
    location: {
      address: "123 Sunshine Road",
      city: "Los Angeles, CA",
      distance: "(3.7mi)",
      coordinates: [34.043267, -118.235715],
    },
    details: {
      privateExperiences: 3,
      events: 4,
      reviews: 29,
      rating: 4,
      squareFeet: 20000,
      capacity: 75,
      amenities: ["wifi", "pets", "clock"],
    },
    tags: ["Tropical", "Kid Friendly", "Meditation"],
    image:
      "https://images.unsplash.com/photo-1570592782092-a8e5282e6b6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
  {
    id: "41",
    name: "Whispering Pines Hotel",
    location: {
      address: "456 Forest Trail",
      city: "Los Angeles, CA",
      distance: "(6.6mi)",
      coordinates: [34.062268, -118.225716],
    },
    details: {
      privateExperiences: 5,
      events: 6,
      reviews: 47,
      rating: 5,
      squareFeet: 33000,
      capacity: 120,
      amenities: ["wifi", "power", "pets"],
    },
    tags: ["Leave the City", "Native Garden", "Powerful"],
    image:
      "https://images.unsplash.com/photo-1587254259209-6e8cc33738ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "42",
    name: "Sunset Rose Hotel",
    location: {
      address: "789 Flower Boulevard",
      city: "Los Angeles, CA",
      distance: "(1.9mi)",
      coordinates: [34.049269, -118.255717],
    },
    details: {
      privateExperiences: 2,
      events: 3,
      reviews: 26,
      rating: 4,
      squareFeet: 17000,
      capacity: 65,
      amenities: ["wifi","clock"],
    },
    tags: ["Native Garden", "Kid Friendly"],
    image:
      "https://images.unsplash.com/photo-1578010897928-a93aa82d67e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
  {
    id: "43",
    name: "Wildlife Garden Hotel",
    location: {
      address: "123 Animal Path",
      city: "Los Angeles, CA",
      distance: "(5.4mi)",
      coordinates: [34.06827, -118.265718],
    },
    details: {
      privateExperiences: 4,
      events: 5,
      reviews: 43,
      rating: 5,
      squareFeet: 30000,
      capacity: 110,
      amenities: ["wifi", "power", "clock"],
    },
    tags: ["Animals", "Dog Friendly", "Leave the City"],
    image:
      "https://images.unsplash.com/photo-1588144673206-bb28bd126a90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "44",
    name: "Herb Garden Inn",
    location: {
      address: "456 Spice Lane",
      city: "Los Angeles, CA",
      distance: "(4.1mi)",
      coordinates: [34.040271, -118.245719],
    },
    details: {
      privateExperiences: 3,
      events: 4,
      reviews: 32,
      rating: 4,
      squareFeet: 22000,
      capacity: 80,
      amenities: ["wifi", "pets"],
    },
    tags: ["Edible Garden", "Native Garden", "Kid Friendly"],
    image:
      "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
  {
    id: "45",
    name: "Nature's Glory Hotel",
    location: {
      address: "789 Wilderness Road",
      city: "Los Angeles, CA",
      distance: "(7.5mi)",
      coordinates: [34.073272, -118.23572],
    },
    details: {
      privateExperiences: 5,
      events: 7,
      reviews: 59,
      rating: 5,
      squareFeet: 38000,
      capacity: 145,
      amenities: ["wifi", "power", "pets"],
    },
    tags: ["Powerful", "Leave the City", "Native Garden"],
    image:
      "https://images.unsplash.com/photo-1563080351-bbcd95bdf635?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "46",
    name: "Magnolia Garden Hotel",
    location: {
      address: "123 Southern Lane",
      city: "Los Angeles, CA",
      distance: "(2.7mi)",
      coordinates: [34.055273, -118.255721],
    },
    details: {
      privateExperiences: 3,
      events: 5,
      reviews: 38,
      rating: 4,
      squareFeet: 26000,
      capacity: 95,
      amenities: ["wifi", "pets"],
    },
    tags: ["Tropical", "Kid Friendly", "Native Garden"],
    image:
      "https://images.unsplash.com/photo-1528914137830-c85ee162f588?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
];
