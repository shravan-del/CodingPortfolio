import { GitHubRepo, GitHubActivity, GitHubStats } from '@/types/github';

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch GitHub repositories');
  }

  return response.json();
}

export async function getGitHubActivity(): Promise<GitHubActivity[]> {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const response = await fetch(
    `https://api.github.com/users/${username}/events/public?per_page=10`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
      next: { revalidate: 1800 }, // Cache for 30 minutes
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch GitHub activity');
  }

  return response.json();
}

export async function getGitHubStats(): Promise<GitHubStats> {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
    },
    next: { revalidate: 3600 }, // Cache for 1 hour
  });

  if (!response.ok) {
    throw new Error('Failed to fetch GitHub stats');
  }

  return response.json();
} 