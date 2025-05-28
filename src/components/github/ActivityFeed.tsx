'use client';

import React from 'react';
import { getGitHubActivity } from '@/lib/github';
import { formatDistanceToNow } from 'date-fns';

function getActivityIcon(type: string) {
  switch (type) {
    case 'PushEvent':
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
      );
    case 'CreateEvent':
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
      );
    case 'WatchEvent':
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      );
    default:
      return (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
  }
}

function getActivityDescription(activity: any) {
  switch (activity.type) {
    case 'PushEvent':
      return `Pushed ${activity.payload.commits?.length || 0} commits to`;
    case 'CreateEvent':
      return 'Created';
    case 'WatchEvent':
      return 'Starred';
    default:
      return 'Interacted with';
  }
}

export async function ActivityFeed() {
  const activities = await getGitHubActivity();

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity: any) => (
          <div
            key={activity.id}
            className="flex items-start space-x-3 p-4 rounded-lg bg-white dark:bg-gray-800 shadow-sm"
          >
            <div className="flex-shrink-0 mt-1 text-blue-500 dark:text-blue-400">
              {getActivityIcon(activity.type)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-800 dark:text-gray-200">
                {getActivityDescription(activity)}{' '}
                <a
                  href={`https://github.com/${activity.repo.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-blue-600 dark:text-blue-400 hover:underline"
                >
                  {activity.repo.name.split('/')[1]}
                </a>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {formatDistanceToNow(new Date(activity.created_at), { addSuffix: true })}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 