'use client';

import React, { useEffect, useState } from 'react';
import { getGitHubStats } from '@/lib/github';
import { GitHubStats } from '@/types/github';

export function Profile() {
  const [stats, setStats] = useState<GitHubStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getGitHubStats();
        setStats(data);
      } catch (error) {
        console.error('Error fetching GitHub stats:', error);
        setError('Failed to load GitHub profile');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm animate-pulse">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full" />
          <div className="space-y-2">
            <div className="h-4 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-3 w-24 bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !stats) {
    return (
      <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>{error || 'GitHub profile not available'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-sm">
      <div className="flex items-center space-x-4">
        <img
          src={stats.avatar_url}
          alt={`${stats.name}'s avatar`}
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h2 className="text-xl font-bold">{stats.name}</h2>
          <p className="text-gray-600 dark:text-gray-300">@{stats.login}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-700 dark:text-gray-300">{stats.bio}</p>
      <div className="mt-4 grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold">{stats.public_repos}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Repositories</div>
        </div>
        <div>
          <div className="text-2xl font-bold">{stats.followers}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Followers</div>
        </div>
        <div>
          <div className="text-2xl font-bold">{stats.following}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Following</div>
        </div>
      </div>
      <div className="mt-6 flex items-center space-x-4">
        {stats.location && (
          <div className="flex items-center text-gray-600 dark:text-gray-400">
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span>{stats.location}</span>
          </div>
        )}
        {stats.blog && (
          <a
            href={stats.blog.startsWith('http') ? stats.blog : `https://${stats.blog}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            <svg
              className="w-4 h-4 mr-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            <span>Website</span>
          </a>
        )}
      </div>
    </div>
  );
} 