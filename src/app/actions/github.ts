"use server";

import type {
  GitHubRepo,
  GitHubUser,
  GitHubProject,
  GitHubStats,
  GitHubData,
} from "@/types/github";

const GITHUB_API = process.env.GITHUB_API

async function fetchGitHub(endpoint: string) {
  const headers: HeadersInit = {
    Accept: "application/vnd.github.v3+json",
  };

  if (process.env.GITHUB_ACCESS_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`;
  }

  const res = await fetch(`${GITHUB_API}${endpoint}`, {
    headers,
    next: { revalidate: 3600 },
  });

  if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
  return res.json();
}

export async function getGitHubData(): Promise<GitHubData> {
  const username = process.env.GITHUB_USERNAME || "Akewich";

  const [repos, user] = await Promise.all([
    fetchGitHub(`/users/${username}/repos?sort=updated&per_page=100`) as Promise<GitHubRepo[]>,
    fetchGitHub(`/users/${username}`) as Promise<GitHubUser>,
  ]);

  const ownRepos = repos
    .filter((r) => !r.fork)
    .sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime());

  const projects: GitHubProject[] = ownRepos.slice(0, 10).map((repo) => ({
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
    homepage: repo.homepage,
    topics: repo.topics,
    language: repo.language,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
  }));

  const stats: GitHubStats = {
    publicRepos: user.public_repos,
    followers: user.followers,
    totalStars: ownRepos.reduce((sum, r) => sum + r.stargazers_count, 0),
  };

  return { projects, stats };
}
