export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  type: 'event' | 'hackathon';
  registration_url?: string;
  image_url?: string;
  created_at: string;
}