/*
  # Initial Schema Setup for CloudCraft

  1. New Tables
    - `blogs`
      - `id` (uuid, primary key)
      - `title` (text)
      - `content` (text)
      - `author` (text)
      - `created_at` (timestamp)
      - `image_url` (text)
    
    - `events`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `date` (timestamp)
      - `location` (text)
      - `type` (text)
      - `registration_url` (text)
      - `image_url` (text)
    
    - `learning_paths`
      - `id` (uuid, primary key)
      - `title` (text)
      - `description` (text)
      - `category` (text)
      - `resources` (jsonb)

  2. Security
    - Enable RLS on all tables
    - Add policies for public read access
*/

-- Blogs table
CREATE TABLE IF NOT EXISTS blogs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  author text NOT NULL,
  created_at timestamptz DEFAULT now(),
  image_url text
);

ALTER TABLE blogs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to blogs"
  ON blogs
  FOR SELECT
  TO public
  USING (true);

-- Events table
CREATE TABLE IF NOT EXISTS events (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  date timestamptz NOT NULL,
  location text NOT NULL,
  type text NOT NULL CHECK (type IN ('event', 'hackathon')),
  registration_url text,
  image_url text
);

ALTER TABLE events ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to events"
  ON events
  FOR SELECT
  TO public
  USING (true);

-- Learning paths table
CREATE TABLE IF NOT EXISTS learning_paths (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  description text NOT NULL,
  category text NOT NULL CHECK (category IN ('devops', 'platform-engineering', 'open-source')),
  resources jsonb NOT NULL DEFAULT '[]'::jsonb
);

ALTER TABLE learning_paths ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to learning paths"
  ON learning_paths
  FOR SELECT
  TO public
  USING (true);