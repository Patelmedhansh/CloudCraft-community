import React from 'react';
import { Github, Linkedin, Twitter, Newspaper } from 'lucide-react';
import { Discord } from './SocialIcons';
import { useGitHubProfile } from '../hooks/useGitHubProfile';

const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/Patelmedhansh',
    icon: Github,
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/medhansh-patel-6b9349215/',
    icon: Linkedin,
  },
  {
    name: 'X (Twitter)',
    url: 'https://x.com/Medhanshhhh',
    icon: Twitter,
  },
  {
    name: 'Hashnode',
    url: 'https://hashnode.com/@Medhanshhhh',
    icon: Newspaper,
  },
  {
    name: 'Discord',
    url: 'https://discord.gg/KxUFSRkU7j',
    icon: Discord,
  },
];

export default function FounderSection() {
  const { profile, loading, error } = useGitHubProfile('Patelmedhansh');

  return (
    <section className="py-16 bg-white dark:bg-dark-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Meet the Founder
          </h2>
          <div className="flex items-center space-x-4 mb-6">
            <div className="relative w-20 h-20">
              {loading ? (
                <div className="w-20 h-20 rounded-full bg-dark-100 animate-pulse" />
              ) : error ? (
                <div className="w-20 h-20 rounded-full bg-dark-100 flex items-center justify-center">
                  <User className="h-8 w-8 text-gray-400" />
                </div>
              ) : (
                <img
                  src={profile?.avatar_url}
                  alt="Medhansh Patel"
                  className="w-20 h-20 rounded-full object-cover border-2 border-primary-500"
                />
              )}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Medhansh Patel
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                DevRel & Community Builder
              </p>
              <p className="text-primary-500 text-sm">
                Founder, CloudCraft
              </p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Hey cloud enthusiasts! 👋 I'm Medhansh, a passionate DevRel and community builder who loves all things cloud 
            and DevOps. I started CloudCraft with a simple mission: to create an awesome community where we can learn, 
            build, and grow together. Whether you're a beginner or a seasoned pro, CloudCraft is here to make your cloud 
            journey exciting and rewarding! ✨
          </p>
          <div className="flex space-x-4">
            {socialLinks.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-500 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label={name}
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}