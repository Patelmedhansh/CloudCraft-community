import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Event } from '../types/event';
import { startOfDay } from 'date-fns';

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchEvents() {
      try {
        const { data, error } = await supabase
          .from('events')
          .select('*')
          .gte('date', startOfDay(new Date()).toISOString())
          .order('date', { ascending: true });

        if (error) throw error;
        setEvents(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchEvents();
  }, []);

  return { events, loading, error };
}