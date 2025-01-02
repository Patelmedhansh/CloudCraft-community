import React from 'react';
import { Moon } from 'lucide-react';

export default function ThemeToggle() {
  // Remove toggle functionality since we're always in dark mode
  return (
    <div className="p-2 rounded-lg bg-dark-100 text-primary-500">
      <Moon className="h-5 w-5" />
    </div>
  );
}