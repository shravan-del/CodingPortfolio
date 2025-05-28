'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { format } from 'date-fns';

interface GitHubEvent {
  id: string;
  type: string;
  repo: {
    name: string;
    url: string;
  };
  created_at: string;
  payload: any;
}

export function GitHubActivity() {
  const [events, setEvents] = useState<GitHubEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubActivity = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/yourusername/events/public'
        );
        const data = await response.json();
        setEvents(data.slice(0, 10));
      } catch (error) {
        console.error('Error fetching GitHub activity:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubActivity();
  }, []);

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'PushEvent':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        );
      case 'CreateEvent':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
              clipRule="evenodd"
            />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z"
              clipRule="evenodd"
            />
          </svg>
        );
    }
  };

  const getEventDescription = (event: GitHubEvent) => {
    switch (event.type) {
      case 'PushEvent':
        return `Pushed ${event.payload.commits?.length || 0} commits to`;
      case 'CreateEvent':
        return `Created ${event.payload.ref_type}`;
      case 'IssuesEvent':
        return `${event.payload.action} issue in`;
      case 'PullRequestEvent':
        return `${event.payload.action} pull request in`;
      default:
        return 'Interacted with';
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-6">Recent GitHub Activity</h2>
      {loading ? (
        <div className="flex justify-center items-center h-32">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500" />
        </div>
      ) : (
        <div className="space-y-4">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-700"
            >
              <div className="text-blue-500 dark:text-blue-400">
                {getEventIcon(event.type)}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {getEventDescription(event)}{' '}
                  <a
                    href={`https://github.com/${event.repo.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {event.repo.name}
                  </a>
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {format(new Date(event.created_at), 'MMM d, yyyy h:mm a')}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
} 