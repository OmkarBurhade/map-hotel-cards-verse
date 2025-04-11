import { venues } from "../data/venues";
const getMaxCapacity = (): number => {
  return venues.reduce((max, venue) => {
    return venue.details.capacity > max ? venue.details.capacity : max;
  }, 0);
};

export default getMaxCapacity;
