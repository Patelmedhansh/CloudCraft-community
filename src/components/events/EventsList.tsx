import React from 'react';
import type { Event } from '../../types/supabase';
import EventCard from '../EventCard';

interface EventsListProps {
  title: string;
  events: Event[];
}

export default function EventsList({ title, events }: EventsListProps) {
  if (events.length === 0) return null;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold text-white mb-6">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
}