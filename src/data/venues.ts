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
<<<<<<< HEAD
  // Original venues
  {
    id: "1",
    name: "The Healing Garden",
    location: {
      address: "123 Garden Way",
      city: "Los Angeles, CA",
      distance: "(4.5mi)",
      coordinates: [34.052235, -118.243683],
    },
    details: {
      privateExperiences: 4,
      events: 4,
      reviews: 10,
      rating: 5,
      squareFeet: 25000,
      capacity: 100,
      amenities: ["wifi", "power", "pets", "clock"],
    },
    tags: ["Powerful", "Native Garden", "Edible Garden"],
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "2",
    name: "Sunset Garden Retreat",
    location: {
      address: "456 Meadow Lane",
      city: "Los Angeles, CA",
      distance: "(4.5mi)",
      coordinates: [34.065235, -118.253683],
    },
    details: {
      privateExperiences: 4,
      events: 4,
      reviews: 10,
      rating: 5,
      squareFeet: 25000,
      capacity: 100,
      amenities: ["wifi", "power", "pets", "clock"],
    },
    tags: ["Tropical", "Leave the City", "Meditation"],
    image:
      "https://images.unsplash.com/photo-1551272884-3c47713b9a76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "3",
    name: "Urban Oasis",
    location: {
      address: "789 Forest Avenue",
      city: "Los Angeles, CA",
      distance: "(4.5mi)",
      coordinates: [34.042235, -118.263683],
    },
    details: {
      privateExperiences: 4,
      events: 4,
      reviews: 10,
      rating: 5,
      squareFeet: 25000,
      capacity: 100,
      amenities: ["wifi", "power", "pets"],
    },
    tags: ["Kid Friendly", "Dog Friendly", "Animals"],
    image:
      "https://images.unsplash.com/photo-1598901865264-4f15b799a5d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "4",
    name: "Mountain View Gardens",
    location: {
      address: "321 Valley Road",
      city: "Los Angeles, CA",
      distance: "(4.5mi)",
      coordinates: [34.062235, -118.233683],
    },
    details: {
      privateExperiences: 4,
      events: 4,
      reviews: 10,
      rating: 5,
      squareFeet: 25000,
      capacity: 100,
      amenities: ["wifi", "power", "pets"],
    },
    tags: ["Orchard", "Edible Garden", "Leave the City"],
    image:
      "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "5",
    name: "River's Edge Garden",
    location: {
      address: "654 Riverside Drive",
      city: "Los Angeles, CA",
      distance: "(4.5mi)",
      coordinates: [34.072235, -118.283683],
    },
    details: {
      privateExperiences: 4,
      events: 4,
      reviews: 10,
      rating: 5,
      squareFeet: 25000,
      capacity: 100,
      amenities: ["power", "pets"],
    },
    tags: ["Native Garden", "Meditation", "Dog Friendly"],
    image:
      "https://images.unsplash.com/photo-1600240644455-3edc55c375fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "6",
    name: "Floral Paradise",
    location: {
      address: "987 Bloom Street",
      city: "Los Angeles, CA",
      distance: "(4.5mi)",
      coordinates: [34.057235, -118.273683],
    },
    details: {
      privateExperiences: 4,
      events: 4,
      reviews: 10,
      rating: 5,
      squareFeet: 25000,
      capacity: 100,
      amenities: ["wifi", "power", "pets"],
    },
    tags: ["Tropical", "Powerful", "Kid Friendly"],
    image:
      "https://images.unsplash.com/photo-1586280268958-9483002d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  // Adding 40 more venues
  {
    id: "7",
    name: "Secret Garden Hotel",
    location: {
      address: "123 Hidden Lane",
      city: "Los Angeles, CA",
      distance: "(2.1mi)",
      coordinates: [34.059235, -118.283684],
    },
    details: {
      privateExperiences: 2,
      events: 3,
      reviews: 15,
      rating: 4,
      squareFeet: 15000,
      capacity: 50,
      amenities: ["pets"],
    },
    tags: ["Native Garden", "Meditation"],
    image:
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
  {
    id: "8",
    name: "Eden Retreat",
    location: {
      address: "456 Paradise Ave",
      city: "Los Angeles, CA",
      distance: "(3.2mi)",
      coordinates: [34.062236, -118.253682],
    },
    details: {
      privateExperiences: 5,
      events: 2,
      reviews: 28,
      rating: 5,
      squareFeet: 30000,
      capacity: 120,
      amenities: ["wifi", "power"],
    },
    tags: ["Powerful", "Tropical", "Meditation"],
    image:
      "https://images.unsplash.com/photo-1561648548-95afaed15cde?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "9",
    name: "Bamboo Garden Hotel",
    location: {
      address: "789 Eastern Blvd",
      city: "Los Angeles, CA",
      distance: "(5.3mi)",
      coordinates: [34.075236, -118.243685],
    },
    details: {
      privateExperiences: 3,
      events: 6,
      reviews: 42,
      rating: 4,
      squareFeet: 18000,
      capacity: 75,
      amenities: ["wifi", "power"],
    },
    tags: ["Tropical", "Meditation"],
    image:
      "https://images.unsplash.com/photo-1587817028496-40f09aeb4d31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
  {
    id: "10",
    name: "Oasis Hotel & Gardens",
    location: {
      address: "234 Fountain Way",
      city: "Los Angeles, CA",
      distance: "(1.8mi)",
      coordinates: [34.048237, -118.263681],
    },
    details: {
      privateExperiences: 6,
      events: 8,
      reviews: 56,
      rating: 5,
      squareFeet: 45000,
      capacity: 150,
      amenities: ["power", "pets"],
    },
    tags: ["Tropical", "Native Garden", "Kid Friendly"],
    image:
      "https://images.unsplash.com/photo-1649948474687-eb91caa8858d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    isFavorite: true,
  },
  {
    id: "11",
    name: "Lotus Pond Resort",
    location: {
      address: "567 Tranquil Lane",
      city: "Los Angeles, CA",
      distance: "(6.2mi)",
      coordinates: [34.035238, -118.233686],
    },
    details: {
      privateExperiences: 2,
      events: 3,
      reviews: 32,
      rating: 4,
      squareFeet: 22000,
      capacity: 80,
      amenities: ["wifi"],
    },
    tags: ["Meditation", "Leave the City"],
    image:
      "https://images.unsplash.com/photo-1596306278970-36d13c8b429e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
  {
    id: "12",
    name: "Evergreen Estate",
    location: {
      address: "890 Pine Street",
      city: "Los Angeles, CA",
      distance: "(4.7mi)",
      coordinates: [34.068239, -118.273687],
    },
    details: {
      privateExperiences: 4,
      events: 5,
      reviews: 47,
      rating: 5,
      squareFeet: 35000,
      capacity: 130,
      amenities: ["wifi", "power", "pets"],
    },
    tags: ["Native Garden", "Orchard", "Leave the City"],
    image:
      "https://images.unsplash.com/photo-1578041262030-a3d1c561e358?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "13",
    name: "Urban Garden Suites",
    location: {
      address: "432 Downtown Ave",
      city: "Los Angeles, CA",
      distance: "(1.5mi)",
      coordinates: [34.05124, -118.248688],
    },
    details: {
      privateExperiences: 2,
      events: 4,
      reviews: 23,
      rating: 4,
      squareFeet: 12000,
      capacity: 45,
      amenities: ["wifi", "power"],
    },
    tags: ["Kid Friendly", "Edible Garden"],
    image:
      "https://images.unsplash.com/photo-1591899537803-88a381f2fbcd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
  {
    id: "14",
    name: "Rose Garden Hotel",
    location: {
      address: "765 Bloom Street",
      city: "Los Angeles, CA",
      distance: "(3.8mi)",
      coordinates: [34.044241, -118.258689],
    },
    details: {
      privateExperiences: 3,
      events: 7,
      reviews: 38,
      rating: 5,
      squareFeet: 28000,
      capacity: 90,
      amenities: ["wifi", "power", "pets"],
    },
    tags: ["Powerful", "Tropical", "Kid Friendly"],
    image:
      "https://images.unsplash.com/photo-1583856888859-5cc3e02c7013?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "15",
    name: "Seaside Garden Inn",
    location: {
      address: "321 Coastal Drive",
      city: "Los Angeles, CA",
      distance: "(7.2mi)",
      coordinates: [34.073242, -118.26869],
    },
    details: {
      privateExperiences: 5,
      events: 6,
      reviews: 51,
      rating: 4,
      squareFeet: 32000,
      capacity: 125,
      amenities: ["wifi", "pets"],
    },
    tags: ["Native Garden", "Leave the City", "Dog Friendly"],
    image:
      "https://images.unsplash.com/photo-1566919903558-ccedea24345a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
  {
    id: "16",
    name: "Lavender Fields Hotel",
    location: {
      address: "654 Purple Lane",
      city: "Los Angeles, CA",
      distance: "(5.1mi)",
      coordinates: [34.037243, -118.278691],
    },
    details: {
      privateExperiences: 4,
      events: 5,
      reviews: 62,
      rating: 5,
      squareFeet: 27000,
      capacity: 95,
      amenities: ["wifi", "power"],
    },
    tags: ["Powerful", "Meditation", "Native Garden"],
    image:
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "17",
    name: "Butterfly Garden Resort",
    location: {
      address: "987 Wings Avenue",
      city: "Los Angeles, CA",
      distance: "(3.6mi)",
      coordinates: [34.055244, -118.238692],
    },
    details: {
      privateExperiences: 3,
      events: 4,
      reviews: 29,
      rating: 4,
      squareFeet: 20000,
      capacity: 70,
      amenities: ["wifi", "pets"],
    },
    tags: ["Animals", "Kid Friendly", "Tropical"],
    image:
      "https://images.unsplash.com/photo-1584130539365-34f85025deca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
  {
    id: "18",
    name: "Hillside Gardens Hotel",
    location: {
      address: "456 Mountain View",
      city: "Los Angeles, CA",
      distance: "(6.5mi)",
      coordinates: [34.066245, -118.255693],
    },
    details: {
      privateExperiences: 5,
      events: 8,
      reviews: 45,
      rating: 5,
      squareFeet: 38000,
      capacity: 140,
      amenities: ["wifi", "power", "pets"],
    },
    tags: ["Native Garden", "Leave the City", "Powerful"],
    image:
      "https://images.unsplash.com/photo-1591556066345-17aa748920c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "19",
    name: "Garden View Hotel",
    location: {
      address: "123 Scenic Road",
      city: "Los Angeles, CA",
      distance: "(2.8mi)",
      coordinates: [34.047246, -118.265694],
    },
    details: {
      privateExperiences: 2,
      events: 3,
      reviews: 27,
      rating: 4,
      squareFeet: 18000,
      capacity: 65,
      amenities: ["wifi"],
    },
    tags: ["Tropical", "Meditation"],
    image:
      "https://images.unsplash.com/photo-1577717903188-9ab122793637?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
  {
    id: "20",
    name: "Sunset View Lodge",
    location: {
      address: "789 Horizon Drive",
      city: "Los Angeles, CA",
      distance: "(5.7mi)",
      coordinates: [34.058247, -118.275695],
    },
    details: {
      privateExperiences: 4,
      events: 6,
      reviews: 53,
      rating: 5,
      squareFeet: 33000,
      capacity: 110,
      amenities: ["wifi", "power", "pets"],
    },
    tags: ["Leave the City", "Dog Friendly", "Powerful"],
    image:
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "21",
    name: "Wildflower Hotel",
    location: {
      address: "321 Meadow Road",
      city: "Los Angeles, CA",
      distance: "(4.2mi)",
      coordinates: [34.069248, -118.245696],
    },
    details: {
      privateExperiences: 3,
      events: 4,
      reviews: 35,
      rating: 4,
      squareFeet: 22000,
      capacity: 85,
      amenities: ["wifi", "pets"],
    },
    tags: ["Native Garden", "Edible Garden", "Kid Friendly"],
    image:
      "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
  {
    id: "22",
    name: "Green Valley Inn",
    location: {
      address: "654 Valley View",
      city: "Los Angeles, CA",
      distance: "(3.3mi)",
      coordinates: [34.041249, -118.235697],
    },
    details: {
      privateExperiences: 4,
      events: 5,
      reviews: 42,
      rating: 5,
      squareFeet: 29000,
      capacity: 105,
      amenities: ["wifi", "power"],
    },
    tags: ["Orchard", "Dog Friendly", "Edible Garden"],
    image:
      "https://images.unsplash.com/photo-1577553696038-c499e3b00faa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "23",
    name: "Tranquil Gardens Hotel",
    location: {
      address: "987 Peaceful Lane",
      city: "Los Angeles, CA",
      distance: "(6.8mi)",
      coordinates: [34.06325, -118.225698],
    },
    details: {
      privateExperiences: 5,
      events: 7,
      reviews: 58,
      rating: 5,
      squareFeet: 36000,
      capacity: 135,
      amenities: ["wifi", "power", "pets"],
    },
    tags: ["Meditation", "Powerful", "Leave the City"],
    image:
      "https://images.unsplash.com/photo-1575517111839-3a3843ee7f5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "24",
    name: "City View Garden Hotel",
    location: {
      address: "456 Urban Street",
      city: "Los Angeles, CA",
      distance: "(1.2mi)",
      coordinates: [34.054251, -118.251699],
    },
    details: {
      privateExperiences: 2,
      events: 4,
      reviews: 31,
      rating: 4,
      squareFeet: 15000,
      capacity: 55,
      amenities: ["wifi"],
    },
    tags: ["Kid Friendly", "Edible Garden"],
    image:
      "https://images.unsplash.com/photo-1584809615688-91e518c26dc1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
  {
    id: "25",
    name: "Palm Paradise Hotel",
    location: {
      address: "789 Tropical Blvd",
      city: "Los Angeles, CA",
      distance: "(4.9mi)",
      coordinates: [34.075252, -118.2617],
    },
    details: {
      privateExperiences: 4,
      events: 6,
      reviews: 49,
      rating: 5,
      squareFeet: 31000,
      capacity: 115,
      amenities: ["wifi", "power", "pets"],
    },
    tags: ["Tropical", "Powerful", "Animals"],
    image:
      "https://images.unsplash.com/photo-1571003123771-bd6a099dd83a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
=======
  
>>>>>>> main
  {
    id: "26",
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
      amenities: ["wifi", "pets"],
    },
    tags: ["Native Garden", "Dog Friendly", "Meditation"],
    image:
      "https://images.unsplash.com/photo-1580093543655-6b95d6bdc0ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
  {
    id: "27",
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
      amenities: ["wifi", "power", "pets"],
    },
    tags: ["Powerful", "Kid Friendly", "Tropical"],
    image:
      "https://images.unsplash.com/photo-1559304787-75b3f87def13?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "28",
    name: "Orchard View Inn",
    location: {
      address: "987 Fruit Tree Way",
      city: "Los Angeles, CA",
      distance: "(7.4mi)",
      coordinates: [34.072255, -118.231703],
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
    name: "Maple Tree Hotel",
    location: {
      address: "456 Autumn Avenue",
      city: "Los Angeles, CA",
      distance: "(2.6mi)",
      coordinates: [34.045256, -118.241704],
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
    name: "The Taj Mahal Palace, Mumbai",
    location: {
<<<<<<< HEAD
      address: "789 Forest Drive",
      city: "Los Angeles, CA",
      distance: "(6.3mi)",
      coordinates: [34.067257, -118.221705],
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
    name: "Willowbrook Gardens",
    location: {
      address: "123 Willow Lane",
      city: "Los Angeles, CA",
      distance: "(3.9mi)",
      coordinates: [34.039258, -118.255706],
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
      capacity: 120,
      amenities: ["wifi", "power", "pets"],
    },
    tags: ["Native Garden", "Animals", "Kid Friendly"],
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  // Adding more international gardens
  {
    id: "33",
    name: "Lotus Garden Retreat",
    location: {
      address: "45 Nehru Road",
      city: "New Delhi, India",
      distance: "(International)",
      coordinates: [28.6139, 77.209],
    },
    details: {
      privateExperiences: 5,
      events: 8,
      reviews: 62,
      rating: 5,
      squareFeet: 30000,
      capacity: 110,
      amenities: ["wifi", "power", "pets"],
    },
    tags: ["Meditation", "Powerful", "Native Garden"],
    image:
      "https://images.unsplash.com/photo-1582972236019-ea4af5ffe587?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "34",
    name: "Mumbai Botanical Gardens",
    location: {
      address: "78 Marine Drive",
      city: "Mumbai, India",
      distance: "(International)",
      coordinates: [19.076, 72.8777],
    },
    details: {
      privateExperiences: 4,
      events: 10,
      reviews: 85,
      rating: 5,
      squareFeet: 45000,
      capacity: 200,
      amenities: ["wifi", "power"],
    },
    tags: ["Tropical", "Native Garden", "Meditation"],
    image:
      "https://images.unsplash.com/photo-1591331535053-a3d749fccba7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
  {
    id: "35",
    name: "Lahore Garden Resort",
    location: {
      address: "23 Green Avenue",
      city: "Lahore, Pakistan",
      distance: "(International)",
      coordinates: [31.5204, 74.3587],
    },
    details: {
      privateExperiences: 3,
      events: 5,
      reviews: 42,
      rating: 4,
      squareFeet: 28000,
      capacity: 90,
      amenities: ["wifi", "pets"],
    },
    tags: ["Native Garden", "Edible Garden", "Meditation"],
    image:
      "https://images.unsplash.com/photo-1592318254908-0cbc63b8a394?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "36",
    name: "Karachi Coastal Gardens",
    location: {
      address: "56 Clifton Road",
      city: "Karachi, Pakistan",
      distance: "(International)",
      coordinates: [24.8607, 67.0011],
    },
    details: {
      privateExperiences: 2,
      events: 4,
      reviews: 37,
      rating: 4,
      squareFeet: 20000,
      capacity: 70,
      amenities: ["wifi", "power"],
    },
    tags: ["Tropical", "Leave the City", "Dog Friendly"],
    image:
      "https://images.unsplash.com/photo-1585553616824-adce2a8e5544?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
  {
    id: "37",
    name: "Beijing Harmony Gardens",
    location: {
      address: "89 Forbidden City Road",
      city: "Beijing, China",
      distance: "(International)",
      coordinates: [39.9042, 116.4074],
    },
    details: {
      privateExperiences: 6,
      events: 9,
      reviews: 78,
      rating: 5,
      squareFeet: 50000,
      capacity: 180,
      amenities: ["wifi", "power", "pets"],
    },
    tags: ["Meditation", "Native Garden", "Powerful"],
    image:
      "https://images.unsplash.com/photo-1583565767829-593f0ee5ad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "38",
    name: "Shanghai Garden Hotel",
    location: {
      address: "34 Bund Street",
      city: "Shanghai, China",
      distance: "(International)",
      coordinates: [31.2304, 121.4737],
    },
    details: {
      privateExperiences: 5,
      events: 7,
      reviews: 65,
      rating: 5,
      squareFeet: 42000,
      capacity: 150,
      amenities: ["wifi", "power"],
    },
    tags: ["Tropical", "Meditation", "Leave the City"],
    image:
      "https://images.unsplash.com/photo-1596415795163-d481fc8f402f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
  {
    id: "39",
    name: "Kyoto Zen Gardens",
    location: {
      address: "12 Bamboo Forest Road",
      city: "Kyoto, Japan",
      distance: "(International)",
      coordinates: [35.0116, 135.7681],
    },
    details: {
      privateExperiences: 4,
      events: 3,
      reviews: 92,
      rating: 5,
      squareFeet: 35000,
      capacity: 100,
      amenities: ["wifi", "pets"],
    },
    tags: ["Meditation", "Powerful", "Native Garden"],
    image:
      "https://images.unsplash.com/photo-1580651315530-69c8e0026377?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "40",
    name: "Bangkok Tropical Haven",
    location: {
      address: "78 Riverside Road",
      city: "Bangkok, Thailand",
      distance: "(International)",
      coordinates: [13.7563, 100.5018],
    },
    details: {
      privateExperiences: 5,
      events: 8,
      reviews: 56,
      rating: 4,
      squareFeet: 38000,
      capacity: 130,
      amenities: ["wifi", "power", "pets"],
    },
    tags: ["Tropical", "Powerful", "Animals"],
    image:
      "https://images.unsplash.com/photo-1576747236379-931c1c051adf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
  {
    id: "41",
    name: "Cape Town Botanical Gardens",
    location: {
      address: "56 Mountain View Road",
      city: "Cape Town, South Africa",
      distance: "(International)",
      coordinates: [-33.9249, 18.4241],
    },
    details: {
      privateExperiences: 3,
      events: 6,
      reviews: 48,
      rating: 5,
      squareFeet: 40000,
      capacity: 140,
      amenities: ["wifi", "power"],
    },
    tags: ["Native Garden", "Leave the City", "Animals"],
    image:
      "https://images.unsplash.com/photo-1586280268958-9483002d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "42",
    name: "Sydney Harbour Gardens",
    location: {
      address: "23 Opera House Street",
      city: "Sydney, Australia",
      distance: "(International)",
      coordinates: [-33.8688, 151.2093],
    },
    details: {
      privateExperiences: 6,
      events: 9,
      reviews: 72,
      rating: 5,
      squareFeet: 45000,
      capacity: 160,
      amenities: ["wifi", "power", "pets"],
    },
    tags: ["Native Garden", "Tropical", "Kid Friendly"],
    image:
      "https://images.unsplash.com/photo-1590973598891-ab737a1f71c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
=======
      address: "Apollo Bandar, Colaba, Mumbai, Maharashtra 400001",
      city: "Mumbai",
      distance: "(187km)",
      coordinates: [18.921664368635, 72.8332021294478],
    },
    details: {
      privateExperiences: 100,
      events: 4583130,
      reviews: 38,
      rating: 4,
      squareFeet: 1829863,
      capacity: 4,
      amenities: ["wifi", "power"],
    },
    tags: ["Tropical", "Kid Friendly", "Native Garden", "Powerful"],
    image:
      "https://images.unsplash.com/photo-1528914137830-c85ee162f588?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
>>>>>>> main
    isFavorite: false,
  },
];
