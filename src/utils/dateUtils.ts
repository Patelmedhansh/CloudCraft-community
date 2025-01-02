import { format } from 'date-fns';

export function formatEventDate(date: string): string {
  return format(new Date(date), 'MMMM d, yyyy - h:mm a');
}

export function isUpcomingEvent(date: string): boolean {
  return new Date(date) >= new Date();
}