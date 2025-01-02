import React from 'react';
import { Cloud, Code, Bot } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { Link } from 'react-router-dom';

export const services = [
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    description: 'End-to-end cloud infrastructure design and implementation',
    features: [
      'Cloud architecture design',
      'Infrastructure automation',
      'Cost optimization',
      'Multi-cloud strategies'
    ]
  },
  {
    icon: Bot,
    title: 'AI Agents Development',
    description: 'Custom AI agents tailored to your business needs',
    features: [
      'Custom AI assistant design',
      'Process automation',
      'Knowledge base integration',
      'Workflow optimization'
    ]
  },
  {
    icon: Code,
    title: 'DevOps Consulting',
    description: 'Streamline your development and operations workflow',
    features: [
      'CI/CD pipeline setup',
      'Container orchestration',
      'Infrastructure as Code',
      'Monitoring and logging'
    ]
  }
];

export default function ServicesSection() {
  return (
    <section className="py-16 bg-dark-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional cloud, AI, and DevOps services to accelerate your digital transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/services"
            className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}