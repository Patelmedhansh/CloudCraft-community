import React, { useState } from 'react';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import type { Event } from '../types/event';
import { formatEventDate } from '../utils/dateUtils';
import EventModal from './events/EventModal';

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div 
        className="bg-dark-100 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        {event.image_url && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={event.image_url}
              alt={event.title}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute top-4 right-4">
              <span className={`
                inline-block px-3 py-1 text-sm font-semibold rounded-full
                ${event.type === 'hackathon' 
                  ? 'bg-primary-500 text-white' 
                  : 'bg-dark-100 text-gray-200'}
              `}>
                {event.type === 'hackathon' ? 'Hackathon' : 'Event'}
              </span>
            </div>
          </div>
        )}
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-3">
            {event.title}
          </h3>
          
          <p className="text-gray-300 mb-4 line-clamp-2">
            {event.description}
          </p>
          
          <div className="space-y-2 text-gray-400 mb-6">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2 text-primary-500" />
              <span>{formatEventDate(event.date)}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2 text-primary-500" />
              <span>{event.location}</span>
            </div>
          </div>

          {event.registration_url && (
            <button 
              onClick={(e) => {
                e.stopPropagation();
                window.open(event.registration_url, '_blank', 'noopener,noreferrer');
              }}
              className="w-full inline-flex items-center justify-center px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
            >
              Register Now
              <ExternalLink className="ml-2 h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      <EventModal
        event={event}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}