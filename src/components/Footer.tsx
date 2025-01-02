import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud } from 'lucide-react';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark-100 shadow-lg transition-colors">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <Cloud className="h-8 w-8 text-primary-500" />
              <span className="font-bold text-xl text-gray-900 dark:text-white">CloudCraft</span>
            </div>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Empowering the next generation of cloud engineers and developers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/learning-paths" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400">
                  Learning Paths
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400">
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Connect With Us</h3>
            <SocialLinks />
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} CloudCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}