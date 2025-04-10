
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
      distance: "(International)",
      coordinates: [35.011665, 135.768326],
    },
    details: {
      privateExperiences: 5,
      events: 7,
      reviews: 189,
      rating: 5,
      squareFeet: 40000,
      capacity: 120,
      amenities: ["wifi", "power", "pets", "clock"],
    },
    tags: ["Meditation", "Native Garden", "Powerful"],
    image:
      "https://images.unsplash.com/photo-1546875508-5e8933226669?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "2",
    name: "Bali Tropical Paradise",
    location: {
      address: "88 Beach Avenue",
      city: "Ubud, Bali",
      distance: "(International)",
      coordinates: [-8.506853, 115.262131],
    },
    details: {
      privateExperiences: 4,
      events: 6,
      reviews: 156,
      rating: 5,
      squareFeet: 35000,
      capacity: 100,
      amenities: ["wifi", "power", "pets"],
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
      distance: "(International)",
      coordinates: [51.478711, -0.295427],
    },
    details: {
      privateExperiences: 5,
      events: 9,
      reviews: 203,
      rating: 5,
      squareFeet: 121400,
      capacity: 500,
      amenities: ["wifi", "power", "pets", "clock"],
    },
    tags: ["Native Garden", "Kid Friendly", "Edible Garden"],
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "4",
    name: "Gardens by the Bay",
    location: {
      address: "18 Marina Gardens Drive",
      city: "Singapore",
      distance: "(International)",
      coordinates: [1.2815683, 103.8636132],
    },
    details: {
      privateExperiences: 6,
      events: 10,
      reviews: 267,
      rating: 5,
      squareFeet: 250000,
      capacity: 800,
      amenities: ["wifi", "power", "clock"],
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
      distance: "(International)",
      coordinates: [31.6423813, -8.0056631],
    },
    details: {
      privateExperiences: 4,
      events: 5,
      reviews: 178,
      rating: 5,
      squareFeet: 20000,
      capacity: 150,
      amenities: ["pets", "clock"],
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
      distance: "(International)",
      coordinates: [48.5635, -123.4702],
    },
    details: {
      privateExperiences: 5,
      events: 7,
      reviews: 210,
      rating: 5,
      squareFeet: 55000,
      capacity: 300,
      amenities: ["wifi", "power", "pets"],
    },
    tags: ["Native Garden", "Kid Friendly", "Powerful"],
    image:
      "https://images.unsplash.com/photo-1585236283738-a538ef322bf2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
  {
    id: "7",
    name: "Keukenhof Gardens",
    location: {
      address: "Stationsweg 166A",
      city: "Lisse, Netherlands",
      distance: "(International)",
      coordinates: [52.2697, 4.5462],
    },
    details: {
      privateExperiences: 4,
      events: 6,
      reviews: 195,
      rating: 5,
      squareFeet: 79000,
      capacity: 400,
      amenities: ["wifi", "pets", "clock"],
    },
    tags: ["Native Garden", "Kid Friendly", "Leave the City"],
    image:
      "https://images.unsplash.com/photo-1588630590486-e16163eeef66?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "8", 
    name: "Villa d'Este",
    location: {
      address: "Piazza Trento, 5",
      city: "Tivoli, Italy",
      distance: "(International)",
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
      "https://images.unsplash.com/photo-1552668252-7220d261dff0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: false,
  },
  {
    id: "9",
    name: "Taj Mahal Palace Gardens",
    location: {
      address: "Apollo Bandar, Colaba",
      city: "Mumbai, India",
      distance: "(International)",
      coordinates: [18.9217, 72.8332],
    },
    details: {
      privateExperiences: 6,
      events: 8,
      reviews: 220,
      rating: 5,
      squareFeet: 60000,
      capacity: 250,
      amenities: ["wifi", "power", "pets", "clock"],
    },
    tags: ["Native Garden", "Powerful", "Meditation"],
    image:
      "https://images.unsplash.com/photo-1587254259209-6e8cc33738ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "10",
    name: "Sydney Royal Botanic Garden",
    location: {
      address: "Mrs Macquaries Rd",
      city: "Sydney, Australia",
      distance: "(International)",
      coordinates: [-33.8643, 151.2166],
    },
    details: {
      privateExperiences: 5,
      events: 7,
      reviews: 185,
      rating: 5,
      squareFeet: 74000,
      capacity: 350,
      amenities: ["wifi", "pets"],
    },
    tags: ["Native Garden", "Kid Friendly", "Meditation"],
    image:
      "https://images.unsplash.com/photo-1596395463943-679c2d84e9af?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
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
      capacity: 270,
      amenities: ["wifi", "power", "clock"],
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
      capacity: 420,
      amenities: ["wifi", "power", "pets"],
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
      coordinates: [42.1498, -87.7900],
    },
    details: {
      privateExperiences: 4,
      events: 7,
      reviews: 170,
      rating: 5,
      squareFeet: 87000,
      capacity: 380,
      amenities: ["wifi", "pets", "clock"],
    },
    tags: ["Native Garden", "Kid Friendly", "Edible Garden"],
    image:
      "https://images.unsplash.com/photo-1585594852648-ab7a5ac2bbe5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  {
    id: "14",
    name: "Portland Japanese Garden",
    location: {
      address: "611 SW Kingston Ave",
      city: "Portland, OR",
      distance: "(960mi)",
      coordinates: [45.5190, -122.7084],
    },
    details: {
      privateExperiences: 4,
      events: 5,
      reviews: 165,
      rating: 5,
      squareFeet: 35000,
      capacity: 150,
      amenities: ["power", "pets"],
    },
    tags: ["Meditation", "Native Garden", "Leave the City"],
    image:
      "https://images.unsplash.com/photo-1576013551627-0ae7d1d006c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
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
      capacity: 320,
      amenities: ["wifi", "clock"],
    },
    tags: ["Tropical", "Kid Friendly", "Native Garden"],
    image:
      "https://images.unsplash.com/photo-1580093543655-6b95d6bdc0ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true,
  },
  // Some Los Angeles venues (but with less priority)
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
=======
    id: "30",
    name: "Hawaii Tropical Garden",
    location: {
      address: "27-717 Old Mamalahoa Hwy",
      city: "Papaikou, HI",
      distance: "(2500mi)",
      coordinates: [19.8075, -155.1044],
>>>>>>> 1ec5f79bf713f5b59e875bba68cd7d95020a477f
    },
    details: {
      privateExperiences: 4,
      events: 5,
      reviews: 155,
      rating: 5,
      squareFeet: 40000,
      capacity: 180,
      amenities: ["wifi", "pets", "clock"],
    },
    tags: ["Tropical", "Leave the City", "Meditation"],
    image:
<<<<<<< HEAD
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
=======
      "https://images.unsplash.com/photo-1570145820259-b5b80c5c8bd6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
>>>>>>> 1ec5f79bf713f5b59e875bba68cd7d95020a477f
    isFavorite: true,
  },
  {
    id: "31",
<<<<<<< HEAD
    name: "Rosehill Gardens",
    location: {
      address: "505 Rose Lane",
      city: "Glendale, CA",
      distance: "(3.9mi)",
      coordinates: [34.142508, -118.255075],
=======
    name: "Desert Botanical Garden",
    location: {
      address: "1201 N Galvin Pkwy",
      city: "Phoenix, AZ",
      distance: "(400mi)",
      coordinates: [33.4619, -111.9434],
>>>>>>> 1ec5f79bf713f5b59e875bba68cd7d95020a477f
    },
    details: {
      privateExperiences: 4,
      events: 6,
      reviews: 165,
      rating: 5,
      squareFeet: 55000,
      capacity: 250,
      amenities: ["wifi", "clock"],
    },
    tags: ["Native Garden", "Powerful", "Leave the City"],
    image:
      "https://images.unsplash.com/photo-1598080983455-829110b01fe5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
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
<<<<<<< HEAD
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
=======
  }
>>>>>>> 1ec5f79bf713f5b59e875bba68cd7d95020a477f
];
