
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
  "All Filters"
];

// Sample venue data
export const venues: VenueType[] = [
  {
    id: "1",
    name: "The Healing Garden",
    location: {
      address: "123 Garden Way",
      city: "Los Angeles, CA",
      distance: "(4.5mi)",
      coordinates: [34.052235, -118.243683]
    },
    details: {
      privateExperiences: 4,
      events: 4,
      reviews: 10,
      rating: 5,
      squareFeet: 25000,
      capacity: 100,
      amenities: ["wifi", "power", "pets"]
    },
    tags: ["Powerful", "Native Garden", "Edible Garden"],
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true
  },
  {
    id: "2",
    name: "Sunset Garden Retreat",
    location: {
      address: "456 Meadow Lane",
      city: "Los Angeles, CA",
      distance: "(4.5mi)",
      coordinates: [34.065235, -118.253683]
    },
    details: {
      privateExperiences: 4,
      events: 4,
      reviews: 10,
      rating: 5,
      squareFeet: 25000,
      capacity: 100,
      amenities: ["wifi", "power", "pets"]
    },
    tags: ["Tropical", "Leave the City", "Meditation"],
    image: "https://images.unsplash.com/photo-1551272884-3c47713b9a76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true
  },
  {
    id: "3",
    name: "Urban Oasis",
    location: {
      address: "789 Forest Avenue",
      city: "Los Angeles, CA",
      distance: "(4.5mi)",
      coordinates: [34.042235, -118.263683]
    },
    details: {
      privateExperiences: 4,
      events: 4,
      reviews: 10,
      rating: 5,
      squareFeet: 25000,
      capacity: 100,
      amenities: ["wifi", "power", "pets"]
    },
    tags: ["Kid Friendly", "Dog Friendly", "Animals"],
    image: "https://images.unsplash.com/photo-1598901865264-4f15b799a5d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true
  },
  {
    id: "4",
    name: "Mountain View Gardens",
    location: {
      address: "321 Valley Road",
      city: "Los Angeles, CA",
      distance: "(4.5mi)",
      coordinates: [34.062235, -118.233683]
    },
    details: {
      privateExperiences: 4,
      events: 4,
      reviews: 10,
      rating: 5,
      squareFeet: 25000,
      capacity: 100,
      amenities: ["wifi", "power", "pets"]
    },
    tags: ["Orchard", "Edible Garden", "Leave the City"],
    image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true
  },
  {
    id: "5",
    name: "River's Edge Garden",
    location: {
      address: "654 Riverside Drive",
      city: "Los Angeles, CA",
      distance: "(4.5mi)",
      coordinates: [34.072235, -118.283683]
    },
    details: {
      privateExperiences: 4,
      events: 4,
      reviews: 10,
      rating: 5,
      squareFeet: 25000,
      capacity: 100,
      amenities: ["wifi", "power", "pets"]
    },
    tags: ["Native Garden", "Meditation", "Dog Friendly"],
    image: "https://images.unsplash.com/photo-1600240644455-3edc55c375fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true
  },
  {
    id: "6",
    name: "Floral Paradise",
    location: {
      address: "987 Bloom Street",
      city: "Los Angeles, CA",
      distance: "(4.5mi)",
      coordinates: [34.057235, -118.273683]
    },
    details: {
      privateExperiences: 4,
      events: 4,
      reviews: 10,
      rating: 5,
      squareFeet: 25000,
      capacity: 100,
      amenities: ["wifi", "power", "pets"]
    },
    tags: ["Tropical", "Powerful", "Kid Friendly"],
    image: "https://images.unsplash.com/photo-1586280268958-9483002d016a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    isFavorite: true
  }
];
