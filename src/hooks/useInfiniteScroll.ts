import { useState, useEffect } from 'react';

export function useInfiniteScroll<T>(items: T[], itemsPerPage: number = 9) {
  const [displayedItems, setDisplayedItems] = useState<T[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setDisplayedItems(items.slice(0, page * itemsPerPage));
  }, [items, page, itemsPerPage]);

  const loadMore = () => setPage(prev => prev + 1);
  const hasMore = displayedItems.length < items.length;

  return { displayedItems, loadMore, hasMore };
}