import React from 'react';
import { format } from 'date-fns';
import ReactMarkdown from 'react-markdown';
import { Calendar, User } from 'lucide-react';
import Modal from './Modal';
import type { Blog } from '../types/supabase';

interface BlogModalProps {
  blog: Blog;
  isOpen: boolean;
  onClose: () => void;
}

export default function BlogModal({ blog, isOpen, onClose }: BlogModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <article className="prose dark:prose-invert max-w-none">
        {blog.image_url && (
          <img
            src={blog.image_url}
            alt={blog.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
        )}
        
        <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{blog.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{format(new Date(blog.created_at), 'MMM d, yyyy')}</span>
          </div>
        </div>

        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </article>
    </Modal>
  );
}