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

// Sample venue data plus additional hotels
export const venues: VenueType[] = [
  
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
    isFavorite: false,
  },
];
