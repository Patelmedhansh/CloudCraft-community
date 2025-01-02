import React, { useState } from 'react';
import { supabase } from '../../lib/supabase';
import type { Blog } from '../../types/supabase';

interface BlogFormProps {
  blog?: Blog;
  onSuccess: () => void;
}

export default function BlogForm({ blog, onSuccess }: BlogFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    title: blog?.title || '',
    content: blog?.content || '',
    author: blog?.author || '',
    image_url: blog?.image_url || ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (blog) {
        const { error } = await supabase
          .from('blogs')
          .update(formData)
          .eq('id', blog.id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('blogs')
          .insert([formData]);
        if (error) throw error;
      }
      onSuccess();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="text-red-500 text-sm">{error}</div>
      )}
      
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Title
        </label>
        <input
          type="text"
          required
          value={formData.title}
          onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Content (Markdown)
        </label>
        <textarea
          required
          rows={10}
          value={formData.content}
          onChange={e => setFormData(prev => ({ ...prev, content: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Author
        </label>
        <input
          type="text"
          required
          value={formData.author}
          onChange={e => setFormData(prev => ({ ...prev, author: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Image URL
        </label>
        <input
          type="url"
          value={formData.image_url}
          onChange={e => setFormData(prev => ({ ...prev, image_url: e.target.value }))}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary disabled:opacity-50"
      >
        {loading ? 'Saving...' : (blog ? 'Update Blog' : 'Create Blog')}
      </button>
    </form>
  );
}