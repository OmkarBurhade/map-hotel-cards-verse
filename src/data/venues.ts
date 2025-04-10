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
=======
      address: "789 Forest Drive",
      city: "Los Angeles, CA",
      distance: "(6.3mi)",
      coordinates: [34.067257, -118.221705],
>>>>>>> 5707321 (utility buttons updated and map updatetd)
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
<<<<<<< HEAD
      capacity: 125,
      amenities: ["wifi", "power"]
    },
    tags: ["Native Garden", "Animals", "Kid Friendly"],
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true
=======
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
>>>>>>> 5707321 (utility buttons updated and map updatetd)
  },
  {
    id: "33",
    name: "Sunflower Garden Hotel",
    location: {
<<<<<<< HEAD
      address: "987 Sunny Road",
      city: "Los Angeles, CA",
      distance: "(1.7mi)",
      coordinates: [34.053260, -118.275708]
=======
      address: "56 Clifton Road",
      city: "Karachi, Pakistan",
      distance: "(International)",
      coordinates: [24.8607, 67.0011],
>>>>>>> 5707321 (utility buttons updated and map updatetd)
    },
    details: {
      privateExperiences: 2,
      events: 3,
      reviews: 25,
      rating: 4,
<<<<<<< HEAD
      squareFeet: 16000,
      capacity: 60,
      amenities: ["wifi"]
    },
    tags: ["Edible Garden", "Kid Friendly", "Tropical"],
    image: "https://images.unsplash.com/photo-1589923188900-1a53b21c655a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false
=======
      squareFeet: 20000,
      capacity: 70,
      amenities: ["wifi", "power"],
    },
    tags: ["Tropical", "Leave the City", "Dog Friendly"],
    image:
      "https://images.unsplash.com/photo-1585553616824-adce2a8e5544?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
>>>>>>> 5707321 (utility buttons updated and map updatetd)
  },
  {
    id: "34",
    name: "Four Seasons Garden Hotel",
    location: {
<<<<<<< HEAD
      address: "321 Weather Lane",
      city: "Los Angeles, CA",
      distance: "(4.8mi)",
      coordinates: [34.074261, -118.235709]
=======
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
>>>>>>> 5707321 (utility buttons updated and map updatetd)
    },
    details: {
      privateExperiences: 5,
      events: 7,
      reviews: 61,
      rating: 5,
<<<<<<< HEAD
      squareFeet: 37000,
      capacity: 140,
      amenities: ["wifi", "power", "pets"]
    },
    tags: ["Native Garden", "Orchard", "Leave the City"],
    image: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true
  },
  {
    id: "35",
    name: "Riverside Garden Hotel",
    location: {
      address: "654 Stream Boulevard",
      city: "Los Angeles, CA",
      distance: "(6.9mi)",
      coordinates: [34.046262, -118.245710]
    },
    details: {
      privateExperiences: 3,
      events: 5,
      reviews: 39,
      rating: 4,
      squareFeet: 25000,
      capacity: 95,
      amenities: ["wifi", "pets"]
    },
    tags: ["Dog Friendly", "Meditation", "Native Garden"],
    image: "https://images.unsplash.com/photo-1584890132050-13cabe1a2e5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false
  },
  {
    id: "36",
    name: "Sacred Grove Hotel",
    location: {
      address: "789 Ancient Path",
      city: "Los Angeles, CA",
      distance: "(3.5mi)",
      coordinates: [34.065263, -118.255711]
    },
    details: {
      privateExperiences: 4,
      events: 6,
      reviews: 52,
      rating: 5,
      squareFeet: 32000,
      capacity: 115,
      amenities: ["wifi", "power"]
    },
    tags: ["Powerful", "Meditation", "Native Garden"],
    image: "https://images.unsplash.com/photo-1571003123894-246247acff13?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true
  },
  {
    id: "37",
    name: "Zen Garden Hotel",
    location: {
      address: "123 Harmony Way",
      city: "Los Angeles, CA",
      distance: "(5.9mi)",
      coordinates: [34.036264, -118.265712]
    },
    details: {
      privateExperiences: 5,
      events: 4,
      reviews: 45,
      rating: 5,
      squareFeet: 27000,
      capacity: 90,
      amenities: ["wifi", "power", "pets"]
    },
    tags: ["Meditation", "Powerful", "Leave the City"],
    image: "https://images.unsplash.com/photo-1576013551627-0ae7d1d006c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true
  },
  {
    id: "38",
    name: "Botanic Garden Hotel",
    location: {
      address: "456 Plant Avenue",
      city: "Los Angeles, CA",
      distance: "(2.4mi)",
      coordinates: [34.057265, -118.275713]
    },
    details: {
      privateExperiences: 3,
      events: 5,
      reviews: 36,
      rating: 4,
      squareFeet: 23000,
      capacity: 85,
      amenities: ["wifi", "pets"]
    },
    tags: ["Native Garden", "Edible Garden", "Tropical"],
    image: "https://images.unsplash.com/photo-1598010130946-a769af701e0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false
=======
      squareFeet: 42000,
      capacity: 150,
      amenities: ["wifi", "power"],
    },
    tags: ["Tropical", "Meditation", "Leave the City"],
    image:
      "https://images.unsplash.com/photo-1596415795163-d481fc8f402f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
>>>>>>> 5707321 (utility buttons updated and map updatetd)
  },
  {
    id: "39",
    name: "Waterfall Gardens",
    location: {
<<<<<<< HEAD
      address: "789 Cascade Drive",
      city: "Los Angeles, CA",
      distance: "(7.1mi)",
      coordinates: [34.071266, -118.245714]
=======
      address: "12 Bamboo Forest Road",
      city: "Kyoto, Japan",
      distance: "(International)",
      coordinates: [35.0116, 135.7681],
>>>>>>> 5707321 (utility buttons updated and map updatetd)
    },
    details: {
      privateExperiences: 4,
      events: 7,
      reviews: 54,
      rating: 5,
      squareFeet: 35000,
<<<<<<< HEAD
      capacity: 130,
      amenities: ["wifi", "power"]
    },
    tags: ["Powerful", "Leave the City", "Dog Friendly"],
    image: "https://images.unsplash.com/photo-1588354301499-a9a7e0894327?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true
=======
      capacity: 100,
      amenities: ["wifi", "pets"],
    },
    tags: ["Meditation", "Powerful", "Native Garden"],
    image:
      "https://images.unsplash.com/photo-1580651315530-69c8e0026377?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
>>>>>>> 5707321 (utility buttons updated and map updatetd)
  },
  {
    id: "40",
    name: "Garden of Light Hotel",
    location: {
<<<<<<< HEAD
      address: "123 Sunshine Road",
      city: "Los Angeles, CA",
      distance: "(3.7mi)",
      coordinates: [34.043267, -118.235715]
=======
      address: "78 Riverside Road",
      city: "Bangkok, Thailand",
      distance: "(International)",
      coordinates: [13.7563, 100.5018],
>>>>>>> 5707321 (utility buttons updated and map updatetd)
    },
    details: {
      privateExperiences: 3,
      events: 4,
      reviews: 29,
      rating: 4,
<<<<<<< HEAD
      squareFeet: 20000,
      capacity: 75,
      amenities: ["wifi", "pets"]
    },
    tags: ["Tropical", "Kid Friendly", "Meditation"],
    image: "https://images.unsplash.com/photo-1570592782092-a8e5282e6b6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false
=======
      squareFeet: 38000,
      capacity: 130,
      amenities: ["wifi", "power", "pets"],
    },
    tags: ["Tropical", "Powerful", "Animals"],
    image:
      "https://images.unsplash.com/photo-1576747236379-931c1c051adf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
>>>>>>> 5707321 (utility buttons updated and map updatetd)
  },
  {
    id: "41",
    name: "Whispering Pines Hotel",
    location: {
<<<<<<< HEAD
      address: "456 Forest Trail",
      city: "Los Angeles, CA",
      distance: "(6.6mi)",
      coordinates: [34.062268, -118.225716]
=======
      address: "56 Mountain View Road",
      city: "Cape Town, South Africa",
      distance: "(International)",
      coordinates: [-33.9249, 18.4241],
>>>>>>> 5707321 (utility buttons updated and map updatetd)
    },
    details: {
      privateExperiences: 5,
      events: 6,
      reviews: 47,
      rating: 5,
<<<<<<< HEAD
      squareFeet: 33000,
      capacity: 120,
      amenities: ["wifi", "power", "pets"]
    },
    tags: ["Leave the City", "Native Garden", "Powerful"],
    image: "https://images.unsplash.com/photo-1587254259209-6e8cc33738ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true
=======
      squareFeet: 40000,
      capacity: 140,
      amenities: ["wifi", "power"],
    },
    tags: ["Native Garden", "Leave the City", "Animals"],
    image:
      "https://images.unsplash.com/photo-1586280268958-9483002d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
>>>>>>> 5707321 (utility buttons updated and map updatetd)
  },
  {
    id: "42",
    name: "Sunset Rose Hotel",
    location: {
<<<<<<< HEAD
      address: "789 Flower Boulevard",
      city: "Los Angeles, CA",
      distance: "(1.9mi)",
      coordinates: [34.049269, -118.255717]
=======
      address: "23 Opera House Street",
      city: "Sydney, Australia",
      distance: "(International)",
      coordinates: [-33.8688, 151.2093],
>>>>>>> 5707321 (utility buttons updated and map updatetd)
    },
    details: {
      privateExperiences: 2,
      events: 3,
      reviews: 26,
      rating: 4,
      squareFeet: 17000,
      capacity: 65,
      amenities: ["wifi"]
    },
    tags: ["Native Garden", "Kid Friendly"],
    image: "https://images.unsplash.com/photo-1578010897928-a93aa82d67e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false
  },
  {
    id: "43",
    name: "Wildlife Garden Hotel",
    location: {
      address: "123 Animal Path",
      city: "Los Angeles, CA",
      distance: "(5.4mi)",
      coordinates: [34.068270, -118.265718]
    },
    details: {
      privateExperiences: 4,
      events: 5,
      reviews: 43,
      rating: 5,
<<<<<<< HEAD
      squareFeet: 30000,
      capacity: 110,
      amenities: ["wifi", "power"]
    },
    tags: ["Animals", "Dog Friendly", "Leave the City"],
    image: "https://images.unsplash.com/photo-1588144673206-bb28bd126a90?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true
  },
  {
    id: "44",
    name: "Herb Garden Inn",
    location: {
      address: "456 Spice Lane",
      city: "Los Angeles, CA",
      distance: "(4.1mi)",
      coordinates: [34.040271, -118.245719]
    },
    details: {
      privateExperiences: 3,
      events: 4,
      reviews: 32,
      rating: 4,
      squareFeet: 22000,
      capacity: 80,
      amenities: ["wifi", "pets"]
    },
    tags: ["Edible Garden", "Native Garden", "Kid Friendly"],
    image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false
  },
  {
    id: "45",
    name: "Nature's Glory Hotel",
    location: {
      address: "789 Wilderness Road",
      city: "Los Angeles, CA",
      distance: "(7.5mi)",
      coordinates: [34.073272, -118.235720]
    },
    details: {
      privateExperiences: 5,
      events: 7,
      reviews: 59,
      rating: 5,
      squareFeet: 38000,
      capacity: 145,
      amenities: ["wifi", "power", "pets"]
    },
    tags: ["Powerful", "Leave the City", "Native Garden"],
    image: "https://images.unsplash.com/photo-1563080351-bbcd95bdf635?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true
  },
  {
    id: "46",
    name: "Magnolia Garden Hotel",
    location: {
      address: "123 Southern Lane",
      city: "Los Angeles, CA",
      distance: "(2.7mi)",
      coordinates: [34.055273, -118.255721]
    },
    details: {
      privateExperiences: 3,
      events: 5,
      reviews: 38,
      rating: 4,
      squareFeet: 26000,
      capacity: 95,
      amenities: ["wifi", "pets"]
    },
    tags: ["Tropical", "Kid Friendly", "Native Garden"],
    image: "https://images.unsplash.com/photo-1528914137830-c85ee162f588?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false
  }
=======
      squareFeet: 45000,
      capacity: 160,
      amenities: ["wifi", "power", "pets"],
    },
    tags: ["Native Garden", "Tropical", "Kid Friendly"],
    image:
      "https://images.unsplash.com/photo-1528914137830-c85ee162f588?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
>>>>>>> 5707321 (utility buttons updated and map updatetd)
];

