import React from 'react';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import type { Blog } from '../types/supabase';
import PageHeader from '../components/PageHeader';
import LoadingSpinner from '../components/LoadingSpinner';
import BlogCard from '../components/BlogCard';
import { useSearch } from '../hooks/useSearch';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

export default function Blogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const { query, setQuery, filteredItems } = useSearch(blogs, ['title', 'content', 'author']);
  const { displayedItems, loadMore, hasMore } = useInfiniteScroll(filteredItems);

  useEffect(() => {
    async function fetchBlogs() {
      const { data, error } = await supabase
        .from('blogs')
        .select('*')
        .order('created_at', { ascending: false });

      if (!error && data) {
        setBlogs(data);
      }
      setLoading(false);
    }

    fetchBlogs();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-200">
      <PageHeader
        title="Blog Posts"
        description="Stay updated with the latest insights and tutorials"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <input
            type="search"
            placeholder="Search blogs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full px-4 py-2 bg-dark-100 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedItems.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={loadMore}
              className="btn-primary"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}