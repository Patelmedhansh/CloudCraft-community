import React from 'react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  imageUrl: string;
}

export default function Testimonial({ content, author, role, imageUrl }: TestimonialProps) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex items-center mb-4">
        <img
          src={imageUrl}
          alt={author}
          className="h-12 w-12 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">{author}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300">{content}</p>
    </div>
  );
}