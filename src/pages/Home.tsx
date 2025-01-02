import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/services/ServicesSection';
import FounderSection from '../components/FounderSection';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-dark-100 to-dark-300 relative py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Welcome to <span className="text-primary-400">CloudCraft</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your journey to cloud mastery starts here
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
              >
                Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/learning-paths"
                className="inline-flex items-center px-6 py-3 bg-dark-200 hover:bg-dark-100 text-white rounded-lg transition-colors border border-primary-500"
              >
                Learning Paths <BookOpen className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Founder Section */}
      <div className="flex justify-center bg-white dark:bg-dark-200">
        <div className="max-w-3xl w-full">
          <FounderSection />
        </div>
      </div>
    </div>
  );
}