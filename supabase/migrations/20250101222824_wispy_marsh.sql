/*
  # Events Schema and Data Setup

  1. Schema Changes
    - Create events table with improved structure
    - Add RLS policies for public read access
  
  2. Initial Data
    - Add upcoming events and hackathons
*/

-- Drop existing events table
DROP TABLE IF EXISTS events;

-- Create events table
CREATE TABLE events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  date timestamptz NOT NULL,
  location text NOT NULL,
  type text NOT NULL CHECK (type IN ('event', 'hackathon')),
  registration_url text,
  image_url text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE events ENABLE ROW LEVEL SECURITY;

-- Create read policy
CREATE POLICY "Allow public read access to events"
  ON events
  FOR SELECT
  TO public
  USING (true);

-- Insert upcoming events
INSERT INTO events (title, description, date, location, type, registration_url, image_url) VALUES
(
  'Cloud Native Workshop 2024',
  'Join us for an intensive workshop on cloud-native technologies. Learn about containers, Kubernetes, and modern deployment practices.',
  (CURRENT_DATE + interval '30 days' + interval '9 hours')::timestamptz,
  'Virtual Event',
  'event',
  'https://lu.ma/cloudcraft-workshop',
  'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9'
),
(
  'DevOps Hackathon: Build & Deploy',
  'A 48-hour hackathon focused on building and deploying cloud-native applications. Great prizes for winners!',
  (CURRENT_DATE + interval '45 days' + interval '10 hours')::timestamptz,
  'Bangalore, India',
  'hackathon',
  'https://lu.ma/devops-hackathon',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d'
),
(
  'Platform Engineering Summit 2024',
  'A full-day summit dedicated to platform engineering. Learn about building developer platforms, improving developer experience, and scaling infrastructure.',
  (CURRENT_DATE + interval '60 days' + interval '10 hours')::timestamptz,
  'Mumbai, India',
  'event',
  'https://lu.ma/platform-summit',
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b'
);