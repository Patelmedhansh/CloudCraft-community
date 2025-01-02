import React from 'react';
import { LucideIcon } from 'lucide-react';
import ServiceFeature from './ServiceFeature';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

export default function ServiceCard({ title, description, icon: Icon, features }: ServiceCardProps) {
  return (
    <div className="bg-dark-100 rounded-xl p-6 transition-all hover:transform hover:scale-105 hover:shadow-xl border border-gray-800">
      <div className="flex items-center space-x-4 mb-6">
        <div className="p-3 bg-primary-500/10 rounded-lg">
          <Icon className="h-8 w-8 text-primary-500" />
        </div>
        <h3 className="text-xl font-bold text-white">{title}</h3>
      </div>
      
      <p className="text-gray-300 mb-6">{description}</p>
      
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <ServiceFeature key={index} feature={feature} />
        ))}
      </ul>
    </div>
  );
}