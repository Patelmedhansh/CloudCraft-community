export interface Blog {
  id: string;
  title: string;
  content: string;
  author: string;
  created_at: string;
  image_url: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  location: string;
  type: 'event' | 'hackathon';
  registration_url: string;
  image_url: string;
}

export interface LearningPath {
  id: string;
  title: string;
  description: string;
  category: 'devops' | 'platform-engineering' | 'open-source';
  resources: Resource[];
}

export interface Resource {
  title: string;
  type: 'video' | 'article' | 'documentation';
  url: string;
  description: string;
}