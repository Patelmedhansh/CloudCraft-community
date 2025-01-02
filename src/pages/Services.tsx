import React from 'react';
import ServiceCard from '../components/services/ServiceCard';
import ContactForm from '../components/services/ContactForm';
import PageHeader from '../components/PageHeader';
import { allServices } from '../data/services';

export default function Services() {
  return (
    <div className="min-h-screen bg-dark-200">
      <PageHeader
        title="Our Services"
        description="Comprehensive cloud, AI, and DevOps solutions to accelerate your digital transformation"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {allServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}