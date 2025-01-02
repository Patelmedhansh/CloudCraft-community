import React from 'react';
import { Check } from 'lucide-react';

interface ServiceFeatureProps {
  feature: string;
}

export default function ServiceFeature({ feature }: ServiceFeatureProps) {
  return (
    <li className="flex items-center space-x-2 text-gray-300">
      <Check className="h-5 w-5 text-primary-500 flex-shrink-0" />
      <span>{feature}</span>
    </li>
  );
}