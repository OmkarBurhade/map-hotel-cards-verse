
export interface EventType {
  id: string;
  name: string;
  date: string;
  time: string;
  location: {
    venue: string;
    city: string;
    state: string;
    distance: string;
    coordinates: [number, number]; // [lat, lng]
  };
  details: {
    price: number;
    capacity: number;
    amenities: string[];
    categories: string[];
    language: string;
    timeOfDay: string; // "Morning", "Afternoon", "Night"
  };
  tags: string[];
  image: string;
  isSelling: boolean; // For "Selling Fast!" badge
}

// Filter categories
export const eventCategories = [
  "Classes & Workshops",
  "Healing & Wellness",
  "Arts & Culture",
  "Live Music",
  "Food",
  "Volunteering",
  "Restoration",
  "Activism",
  "Community"
];

export const timeOfDayOptions = [
  "Morning (before 12pm)",
  "Afternoon (12pm to 5pm)",
  "Night (after 5pm)"
];

export const languageOptions = [
  "English",
  "Spanish", 
  "Chinese",
  "Vietnamese",
  "Tagalog",
  "Hindi"
];

// Sample events data based on the UI image
export const events: EventType[] = [
  {
    id: "e1",
    name: "Persimmon Festival",
    date: "Sat Jun 23",
    time: "10am",
    location: {
      venue: "Sarvodaya Farms",
      city: "Los Angeles",
      state: "CA",
      distance: "4.5mi",
      coordinates: [34.052235, -118.243683],
    },
    details: {
      price: 15,
      capacity: 120,
      amenities: ["family-friendly", "pets-allowed", "wheelchair-accessible"],
      categories: ["Food", "Community"],
      language: "English",
      timeOfDay: "Morning (before 12pm)"
    },
    tags: ["Food", "Community"],
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    isSelling: true,
  },
  {
    id: "e2",
    name: "Persimmon Festival",
    date: "Sat Jun 23",
    time: "10am",
    location: {
      venue: "Sarvodaya Farms",
      city: "Los Angeles",
      state: "CA",
      distance: "4.5mi",
      coordinates: [34.059235, -118.253683],
    },
    details: {
      price: 15,
      capacity: 120,
      amenities: ["family-friendly", "pets-allowed", "wheelchair-accessible"],
      categories: ["Food", "Community"],
      language: "English",
      timeOfDay: "Morning (before 12pm)"
    },
    tags: ["Food", "Community"],
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    isSelling: true,
  },
  {
    id: "e3",
    name: "Persimmon Festival",
    date: "Sat Jun 23",
    time: "10am",
    location: {
      venue: "Sarvodaya Farms",
      city: "Los Angeles",
      state: "CA",
      distance: "4.5mi",
      coordinates: [34.062235, -118.243683],
    },
    details: {
      price: 15,
      capacity: 80,
      amenities: ["family-friendly", "pets-allowed", "wheelchair-accessible"],
      categories: ["Food", "Community"],
      language: "Spanish",
      timeOfDay: "Morning (before 12pm)"
    },
    tags: ["Food", "Community"],
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    isSelling: true,
  },
  {
    id: "e4",
    name: "Persimmon Festival",
    date: "Sat Jun 23",
    time: "10am",
    location: {
      venue: "Sarvodaya Farms",
      city: "Los Angeles",
      state: "CA",
      distance: "4.5mi",
      coordinates: [34.042235, -118.243683],
    },
    details: {
      price: 15,
      capacity: 120,
      amenities: ["family-friendly", "pets-allowed", "wheelchair-accessible"],
      categories: ["Food", "Arts & Culture"],
      language: "English",
      timeOfDay: "Morning (before 12pm)"
    },
    tags: ["Food", "Arts & Culture"],
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    isSelling: true,
  },
  {
    id: "e5",
    name: "Persimmon Festival",
    date: "Sat Jun 23",
    time: "10am",
    location: {
      venue: "Sarvodaya Farms",
      city: "Los Angeles",
      state: "CA",
      distance: "4.5mi",
      coordinates: [34.058235, -118.273683],
    },
    details: {
      price: 15,
      capacity: 120,
      amenities: ["family-friendly", "pets-allowed", "wheelchair-accessible"],
      categories: ["Food", "Community"],
      language: "Chinese",
      timeOfDay: "Afternoon (12pm to 5pm)"
    },
    tags: ["Food", "Community"],
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    isSelling: true,
  },
  {
    id: "e6",
    name: "Persimmon Festival",
    date: "Sat Jun 23",
    time: "10am",
    location: {
      venue: "Sarvodaya Farms",
      city: "Los Angeles",
      state: "CA",
      distance: "4.5mi",
      coordinates: [34.051235, -118.233683],
    },
    details: {
      price: 15,
      capacity: 120,
      amenities: ["family-friendly", "pets-allowed", "wheelchair-accessible"],
      categories: ["Food", "Volunteering"],
      language: "Vietnamese",
      timeOfDay: "Morning (before 12pm)"
    },
    tags: ["Food", "Volunteering"],
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    isSelling: true,
  },
  // More events to make sure we have enough data
  {
    id: "e7",
    name: "Healing Gardens Workshop",
    date: "Sun Jun 24",
    time: "2pm",
    location: {
      venue: "Botanical Center",
      city: "Los Angeles",
      state: "CA",
      distance: "2.3mi",
      coordinates: [34.072235, -118.243683],
    },
    details: {
      price: 25,
      capacity: 40,
      amenities: ["wheelchair-accessible"],
      categories: ["Healing & Wellness", "Classes & Workshops"],
      language: "English",
      timeOfDay: "Afternoon (12pm to 5pm)"
    },
    tags: ["Healing & Wellness", "Classes & Workshops"],
    image: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
    isSelling: false,
  },
  {
    id: "e8",
    name: "Live Music in the Garden",
    date: "Fri Jun 22",
    time: "7pm",
    location: {
      venue: "Harmony Gardens",
      city: "Los Angeles",
      state: "CA",
      distance: "5.7mi",
      coordinates: [34.082235, -118.213683],
    },
    details: {
      price: 30,
      capacity: 200,
      amenities: ["wheelchair-accessible", "food-available"],
      categories: ["Live Music", "Arts & Culture"],
      language: "English",
      timeOfDay: "Night (after 5pm)"
    },
    tags: ["Live Music", "Arts & Culture"],
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
    isSelling: false,
  },
  {
    id: "e9",
    name: "Community Garden Restoration",
    date: "Sun Jun 24",
    time: "9am",
    location: {
      venue: "Urban Oasis",
      city: "Los Angeles",
      state: "CA",
      distance: "3.8mi",
      coordinates: [34.032235, -118.223683],
    },
    details: {
      price: 10,
      capacity: 60,
      amenities: ["family-friendly", "supplies-provided"],
      categories: ["Restoration", "Community", "Volunteering"],
      language: "Spanish",
      timeOfDay: "Morning (before 12pm)"
    },
    tags: ["Restoration", "Community", "Volunteering"],
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9",
    isSelling: false,
  }
];
