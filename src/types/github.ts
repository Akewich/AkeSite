// GitHub API response types (internal)
export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
}

export interface GitHubUser {
  public_repos: number;
  followers: number;
}

// App types (used in components)
export interface GitHubProject {
  name: string;
  description: string | null;
  url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stars: number;
  forks: number;
}

export interface GitHubStats {
  publicRepos: number;
  followers: number;
  totalStars: number;
}

export interface GitHubData {
  projects: GitHubProject[];
  stats: GitHubStats;
}
