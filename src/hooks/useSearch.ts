import { useState, useMemo } from 'react';

export function useSearch<T>(items: T[], searchKeys: (keyof T)[]) {
  const [query, setQuery] = useState('');
  
  const filteredItems = useMemo(() => {
    if (!query) return items;
    
    return items.filter(item => 
      searchKeys.some(key => 
        String(item[key]).toLowerCase().includes(query.toLowerCase())
      )
    );
  }, [items, query, searchKeys]);
  
  return { query, setQuery, filteredItems };
}