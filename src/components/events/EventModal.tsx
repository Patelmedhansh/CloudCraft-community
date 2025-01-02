import React from 'react';
import { format } from 'date-fns';
import { MapPin, Calendar, ExternalLink } from 'lucide-react';
import Modal from '../Modal';
import type { Event } from '../../types/event';

interface EventModalProps {
  event: Event;
  isOpen: boolean;
  onClose: () => void;
}

export default function EventModal({ event, isOpen, onClose }: EventModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <article className="prose dark:prose-invert max-w-none">
        {event.image_url && (
          <img
            src={event.image_url}
            alt={event.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        )}
        
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-white m-0">{event.title}</h1>
          <span className={`
            inline-block px-3 py-1 text-sm font-semibold rounded-full
            ${event.type === 'hackathon' 
              ? 'bg-primary-500 text-white' 
              : 'bg-dark-100 text-gray-200'}
          `}>
            {event.type === 'hackathon' ? 'Hackathon' : 'Event'}
          </span>
        </div>

        <div className="flex flex-col space-y-3 text-gray-300 mb-6">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 mr-2 text-primary-500" />
            <span>{format(new Date(event.date), 'MMMM d, yyyy - h:mm a')}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-primary-500" />
            <span>{event.location}</span>
          </div>
        </div>

        <div className="text-gray-300 mb-8 whitespace-pre-wrap">
          {event.description}
        </div>

        {event.registration_url && (
          <a
            href={event.registration_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors no-underline"
          >
            Register Now
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        )}
      </article>
    </Modal>
  );
}