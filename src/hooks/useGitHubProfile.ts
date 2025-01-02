import { useState, useEffect } from 'react';

interface GitHubProfile {
  avatar_url: string;
  name: string;
  bio: string;
}

export function useGitHubProfile(username: string) {
  const [profile, setProfile] = useState<GitHubProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) throw new Error('Failed to fetch profile');
        const data = await response.json();
        setProfile(data);
      } catch (err) {
        console.error('Error fetching GitHub profile:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchProfile();
  }, [username]);

  return { profile, loading, error };
}