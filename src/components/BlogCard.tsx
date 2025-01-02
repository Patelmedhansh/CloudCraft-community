import React, { useState } from 'react';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { Calendar, User } from 'lucide-react';
import type { Blog } from '../types/supabase';
import BlogModal from './BlogModal';

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const preview = blog.content.split('\n').slice(1, 3).join('\n');

  return (
    <>
      <article className="bg-white dark:bg-dark-200 rounded-xl shadow-lg overflow-hidden transition-all hover:shadow-xl">
        {blog.image_url && (
          <div className="relative h-48 overflow-hidden">
            <img
              src={blog.image_url}
              alt={blog.title}
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6">
          <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>{blog.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{format(new Date(blog.created_at), 'MMM d, yyyy')}</span>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:text-primary-500 dark:hover:text-primary-400 transition-colors">
            {blog.title}
          </h2>
          
          <div className="prose dark:prose-invert prose-sm max-w-none mb-4 line-clamp-3">
            <ReactMarkdown>{preview}</ReactMarkdown>
          </div>
          
          <button 
            onClick={() => setIsModalOpen(true)}
            className="text-primary-500 hover:text-primary-600 dark:text-primary-400 dark:hover:text-primary-300 font-medium transition-colors"
          >
            Read More →
          </button>
        </div>
      </article>

      <BlogModal
        blog={blog}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}