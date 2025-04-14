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
  "Community",
];

export const timeOfDayOptions = [
  "Morning (before 12pm)",
  "Afternoon (12pm to 5pm)",
  "Night (after 5pm)",
];

export const languageOptions = [
  "English",
  "Spanish",
  "Chinese",
  "Vietnamese",
  "Tagalog",
  "Hindi",
];

// Sample events data based on the UI image
export const events: EventType[] = [
  {
    id: "et1",
    name: "Spring Garden Workshop",
    date: "Fri Apr 19",
    time: "9am",
    location: {
      venue: "Green Patch Gardens",
      city: "Los Angeles",
      state: "CA",
      distance: "3.1mi",
      coordinates: [51.5074, -0.1278], // Random: London, UK
    },
    details: {
      price: 10,
      capacity: 30,
      amenities: ["family-friendly", "wheelchair-accessible"],
      categories: ["Classes & Workshops", "Community"],
      language: "English",
      timeOfDay: "Morning (before 12pm)",
    },
    tags: ["Gardening", "Education"],
    image: "https://images.unsplash.com/photo-1618221606219-45f1e5207c6b",
    isSelling: true,
  },
  {
    id: "et2",
    name: "Sound Healing Journey",
    date: "Sat Apr 20",
    time: "3pm",
    location: {
      venue: "Healing Hive Garden",
      city: "Pasadena",
      state: "CA",
      distance: "6.2mi",
      coordinates: [35.6762, 139.6503], // Random: Tokyo, Japan
    },
    details: {
      price: 20,
      capacity: 50,
      amenities: ["wheelchair-accessible"],
      categories: ["Healing & Wellness"],
      language: "Hindi",
      timeOfDay: "Afternoon (12pm to 5pm)",
    },
    tags: ["Wellness", "Healing"],
    image: "https://images.unsplash.com/photo-1581075523863-69eb88e64b91",
    isSelling: false,
  },
  {
    id: "et3",
    name: "Moonlight Jazz Night",
    date: "Sat Apr 20",
    time: "8pm",
    location: {
      venue: "Skyline Terrace Hotel",
      city: "Santa Monica",
      state: "CA",
      distance: "9.5mi",
      coordinates: [-33.8688, 151.2093], // Random: Sydney, Australia
    },
    details: {
      price: 45,
      capacity: 120,
      amenities: ["wheelchair-accessible", "pets-allowed"],
      categories: ["Live Music", "Arts & Culture"],
      language: "Spanish",
      timeOfDay: "Night (after 5pm)",
    },
    tags: ["Jazz", "Nightlife"],
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
    isSelling: true,
  },
  {
    id: "et4",
    name: "Earth Day Cleanup",
    date: "Sun Apr 21",
    time: "10am",
    location: {
      venue: "Willow Grove Park",
      city: "Glendale",
      state: "CA",
      distance: "5.4mi",
      coordinates: [40.7128, -74.006], // Random: New York, USA
    },
    details: {
      price: 0,
      capacity: 80,
      amenities: ["family-friendly", "wheelchair-accessible", "pets-allowed"],
      categories: ["Volunteering", "Restoration"],
      language: "English",
      timeOfDay: "Morning (before 12pm)",
    },
    tags: ["Nature", "Volunteering"],
    image: "https://images.unsplash.com/photo-1610878180933-565d4c4102c1",
    isSelling: false,
  },
  {
    id: "et5",
    name: "Global Flavors Festival",
    date: "Sat Apr 27",
    time: "1pm",
    location: {
      venue: "Unity Square Hotel",
      city: "Burbank",
      state: "CA",
      distance: "7.1mi",
      coordinates: [48.8566, 2.3522], // Random: Paris, France
    },
    details: {
      price: 25,
      capacity: 150,
      amenities: ["wheelchair-accessible", "family-friendly", "pets-allowed"],
      categories: ["Food", "Community"],
      language: "Tagalog",
      timeOfDay: "Afternoon (12pm to 5pm)",
    },
    tags: ["Food", "Culture"],
    image: "https://images.unsplash.com/photo-1543357480-c60d6a2fa0c7",
    isSelling: true,
  },
  {
    id: "et6",
    name: "Sunrise Yoga Flow",
    date: "Sun Apr 28",
    time: "7am",
    location: {
      venue: "Lotus Bloom Sanctuary",
      city: "Los Angeles",
      state: "CA",
      distance: "2.8mi",
      coordinates: [19.4326, -99.1332], // Random: Mexico City, Mexico
    },
    details: {
      price: 18,
      capacity: 40,
      amenities: ["pets-allowed", "wheelchair-accessible"],
      categories: ["Healing & Wellness"],
      language: "English",
      timeOfDay: "Morning (before 12pm)",
    },
    tags: ["Yoga", "Wellness"],
    image: "https://images.unsplash.com/photo-1518606371711-2e1c83d41a7e",
    isSelling: true,
  },
  {
    id: "et7",
    name: "Botanical Art Class",
    date: "Sun May 5",
    time: "11am",
    location: {
      venue: "Evergreen Botanic Garden",
      city: "Los Angeles",
      state: "CA",
      distance: "4.3mi",
      coordinates: [-22.9068, -43.1729], // Random: Rio de Janeiro, Brazil
    },
    details: {
      price: 30,
      capacity: 25,
      amenities: ["pets-allowed", "family-friendly"],
      categories: ["Arts & Culture", "Workshops"],
      language: "English",
      timeOfDay: "Morning (before 12pm)",
    },
    tags: ["Painting", "Botanical"],
    image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf",
    isSelling: true,
  },
  {
    id: "et8",
    name: "Stargazing Night",
    date: "Fri May 10",
    time: "9pm",
    location: {
      venue: "Garden Heights Retreat",
      city: "Pasadena",
      state: "CA",
      distance: "6.7mi",
      coordinates: [55.7558, 37.6173], // Random: Moscow, Russia
    },
    details: {
      price: 12,
      capacity: 60,
      amenities: ["wheelchair-accessible", "family-friendly"],
      categories: ["Science & Nature", "Night Events"],
      language: "English",
      timeOfDay: "Night (after 5pm)",
    },
    tags: ["Astronomy", "Nature"],
    image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
    isSelling: false,
  },
  {
    id: "et9",
    name: "Literary Tea Gathering",
    date: "Sat May 11",
    time: "4pm",
    location: {
      venue: "The Ivy Heritage Hotel",
      city: "Santa Monica",
      state: "CA",
      distance: "8.2mi",
      coordinates: [39.9042, 116.4074], // Random: Beijing, China
    },
    details: {
      price: 22,
      capacity: 35,
      amenities: ["wheelchair-accessible", "pets-allowed"],
      categories: ["Literature", "Culture"],
      language: "English",
      timeOfDay: "Afternoon (12pm to 5pm)",
    },
    tags: ["Reading", "Tea"],
    image: "https://images.unsplash.com/photo-1588776814546-ec07b0d4db33",
    isSelling: true,
  },
  {
    id: "et10",
    name: "Nature Wellness Retreat",
    date: "Sat May 18",
    time: "10am",
    location: {
      venue: "Blue Orchid Garden Resort",
      city: "Glendale",
      state: "CA",
      distance: "5.9mi",
      coordinates: [-34.6037, -58.3816], // Random: Buenos Aires, Argentina
    },
    details: {
      price: 55,
      capacity: 100,
      amenities: ["spa-access", "meals-included", "nature-walks"],
      categories: ["pets-allowed", "family-friendly"],
      language: "English",
      timeOfDay: "Morning (before 12pm)",
    },
    tags: ["Wellness", "Escape"],
    image: "https://images.unsplash.com/photo-1578898888121-1d7871e9913e",
    isSelling: false,
  },
  {
    id: "et11",
    name: "Yoga by the Ganges",
    date: "Sat May 25",
    time: "6am",
    location: {
      venue: "Riverside Ashram",
      city: "Rishikesh",
      state: "Uttarakhand",
      distance: "0.5mi",
      coordinates: [30.0869, 78.2676], // Rishikesh, India
    },
    details: {
      price: 5,
      capacity: 50,
      amenities: ["mats-provided", "eco-friendly"],
      categories: ["Healing & Wellness"],
      language: "Hindi",
      timeOfDay: "Morning (before 12pm)",
    },
    tags: ["Yoga", "Spiritual"],
    image: "https://images.unsplash.com/photo-1603988363607-e1e4a66962c6",
    isSelling: true,
  },
  {
    id: "et12",
    name: "Spice Masterclass",
    date: "Sun May 26",
    time: "2pm",
    location: {
      venue: "Royal Kitchen Studio",
      city: "Jaipur",
      state: "Rajasthan",
      distance: "1.2mi",
      coordinates: [26.9124, 75.7873], // Jaipur, India
    },
    details: {
      price: 35,
      capacity: 15,
      amenities: ["ingredients-included", "takeaway-recipes"],
      categories: ["Food", "Workshop"],
      language: "English",
      timeOfDay: "Afternoon (12pm to 5pm)",
    },
    tags: ["Cooking", "Indian Cuisine"],
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc",
    isSelling: false,
  },
  {
    id: "et13",
    name: "Bollywood Dance Night",
    date: "Fri Jun 7",
    time: "7pm",
    location: {
      venue: "Mumbai Dance Hall",
      city: "Mumbai",
      state: "Maharashtra",
      distance: "4.7mi",
      coordinates: [19.076, 72.8777], // Mumbai, India
    },
    details: {
      price: 20,
      capacity: 100,
      amenities: ["live-music", "costume-rental"],
      categories: ["Dance", "Entertainment"],
      language: "Hindi",
      timeOfDay: "Night (after 5pm)",
    },
    tags: ["Bollywood", "Dance"],
    image: "https://images.unsplash.com/photo-1547153760-18fc86324498",
    isSelling: true,
  },
  {
    id: "et14",
    name: "Himalayan Trek Prep",
    date: "Sat Jun 15",
    time: "8am",
    location: {
      venue: "Adventure Base Camp",
      city: "Manali",
      state: "Himachal Pradesh",
      distance: "0mi",
      coordinates: [32.2432, 77.1892], // Manali, India
    },
    details: {
      price: 60,
      capacity: 20,
      amenities: ["gear-rental", "guided-session"],
      categories: ["Adventure", "Outdoors"],
      language: "English",
      timeOfDay: "Morning (before 12pm)",
    },
    tags: ["Hiking", "Mountains"],
    image: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
    isSelling: true,
  },
  {
    id: "et15",
    name: "Kerala Backwaters Cruise",
    date: "Sun Jun 23",
    time: "11am",
    location: {
      venue: "Alleppey Houseboats",
      city: "Alappuzha",
      state: "Kerala",
      distance: "0mi",
      coordinates: [9.4981, 76.3388], // Alappuzha, India
    },
    details: {
      price: 75,
      capacity: 12,
      amenities: ["lunch-included", "private-boat"],
      categories: ["Nature", "Luxury"],
      language: "Malayalam",
      timeOfDay: "Morning (before 12pm)",
    },
    tags: ["Boating", "Scenic"],
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae",
    isSelling: false,
  },
];
