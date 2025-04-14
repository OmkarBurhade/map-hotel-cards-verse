
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { EventType } from "@/data/events";
import { Calendar, Clock, MapPin, Ticket, X } from "lucide-react";
import { Button } from "./ui/button";

interface EventPopupProps {
  event: EventType | null;
  isOpen: boolean;
  onClose: () => void;
}

const EventPopup = ({ event, isOpen, onClose }: EventPopupProps) => {
  if (!event) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden rounded-2xl">
        <div className="relative h-60">
          <img
            src={event.image}
            alt={event.name}
            className="w-full h-full object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white p-1 rounded-full hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
          {event.isSelling && (
            <div className="absolute bottom-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              Selling Fast!
            </div>
          )}
        </div>

        <div className="p-6">
          <DialogTitle className="text-2xl font-bold mb-4">{event.name}</DialogTitle>
          
          <div className="space-y-4 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-pink-500" />
              <span>{event.date} at {event.time}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-pink-500" />
              <span>
                {event.location.venue}, {event.location.city} {event.location.state} ({event.location.distance})
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <Ticket className="h-5 w-5 text-pink-500" />
              <span>Tickets from ${event.details.price}</span>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="font-medium mb-2">Event Details</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Language</p>
                <p>{event.details.language}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Time of Day</p>
                <p>{event.details.timeOfDay}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Capacity</p>
                <p>{event.details.capacity} attendees</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Categories</p>
                <p>{event.details.categories.join(", ")}</p>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Button className="flex-1 bg-pink-500 hover:bg-pink-600">
              Get Tickets
            </Button>
            <Button variant="outline" className="flex-1 border-pink-500 text-pink-500 hover:bg-pink-50">
              Contact Host
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EventPopup;
