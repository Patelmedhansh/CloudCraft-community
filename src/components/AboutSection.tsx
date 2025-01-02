import React from 'react';
import { Code, Users, Rocket, BookOpen, Cloud, Sparkles } from 'lucide-react';

const features = [
  {
    icon: Cloud,
    title: 'Cloud Adventures',
    description: 'Join us on exciting journeys through the cloud! From AWS to Azure, we\'re exploring and learning together.'
  },
  {
    icon: Users,
    title: 'Awesome Community',
    description: 'Connect with fellow cloud enthusiasts, share your experiences, and grow together in our friendly community.'
  },
  {
    icon: Code,
    title: 'Hands-on Learning',
    description: 'Get your hands dirty with real projects! Learn by doing with our practical workshops and coding sessions.'
  },
  {
    icon: Rocket,
    title: 'Launch Your Career',
    description: 'Take your cloud career to new heights with our mentorship and guidance from industry experts.'
  },
  {
    icon: Sparkles,
    title: 'Cool Projects',
    description: 'Work on exciting cloud projects and build your portfolio while learning the latest technologies.'
  },
  {
    icon: BookOpen,
    title: 'Knowledge Hub',
    description: 'Access our growing collection of resources, tutorials, and guides created by the community, for the community.'
  }
];

export default function AboutSection() {
  return (
    <section className="py-16 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">About CloudCraft</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're a passionate community of cloud enthusiasts and a startup on a mission to make cloud 
            learning fun and accessible! Whether you're just starting out or leveling up your skills, 
            CloudCraft is your go-to place for all things cloud. ☁️✨
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="bg-dark-200 p-6 rounded-lg transform hover:scale-105 transition-transform">
                <div className="text-primary-500 mb-4">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}