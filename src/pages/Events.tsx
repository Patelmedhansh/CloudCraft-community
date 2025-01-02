import React from 'react';
import { useEvents } from '../hooks/useEvents';
import EventCard from '../components/EventCard';
import PageHeader from '../components/PageHeader';
import LoadingSpinner from '../components/LoadingSpinner';
import { useSearch } from '../hooks/useSearch';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export default function Events() {
  const { events, loading, error } = useEvents();
  const { query, setQuery, filteredItems } = useSearch(events, ['title', 'description', 'location']);
  const { displayedItems, loadMore, hasMore } = useInfiniteScroll(filteredItems);

  if (loading) return <LoadingSpinner />;

  if (error) {
    return (
      <div className="text-center py-12 text-red-500">
        Error loading events: {error}
      </div>
    );
  }

  const hackathons = displayedItems.filter(event => event.type === 'hackathon');
  const communityEvents = displayedItems.filter(event => event.type === 'event');

  return (
    <div className="min-h-screen bg-dark-200">
      <PageHeader
        title="Events & Hackathons"
        description="Join our community events and learn together"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <input
            type="search"
            placeholder="Search events..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-2 bg-dark-100 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500"
          />
        </div>

        {hackathons.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Upcoming Hackathons
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hackathons.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}

        {communityEvents.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">
              Community Events
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {communityEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        )}

        {displayedItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">
              No events found. Try adjusting your search.
            </p>
          </div>
        )}

        {hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="btn-primary"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}