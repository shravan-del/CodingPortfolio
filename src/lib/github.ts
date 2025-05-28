import { GitHubRepo, GitHubActivity, GitHubStats } from '@/types/github';

async function fetchWithAuth(url: string, revalidate: number = 3600) {
  const token = process.env.NEXT_PUBLIC_GITHUB_TOKEN || process.env.GITHUB_ACCESS_TOKEN;
  
  try {
    const response = await fetch(url, {
      headers: {
        ...(token ? { Authorization: `token ${token}` } : {}),
        'User-Agent': 'Portfolio-Website'
      },
      next: { revalidate }
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    return null;
  }
}

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  if (!username) return [];

  const data = await fetchWithAuth(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
  );

  return data || [];
}

export async function getGitHubActivity(): Promise<GitHubActivity[]> {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  if (!username) return [];

  const data = await fetchWithAuth(
    `https://api.github.com/users/${username}/events/public?per_page=10`,
    1800 // Cache for 30 minutes
  );

  return data || [];
}

export async function getGitHubStats(): Promise<GitHubStats | null> {
  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME;
  if (!username) return null;

  const data = await fetchWithAuth(
    `https://api.github.com/users/${username}`
  );

  return data;
} 