import React from "react";
import Homepage from "./homepage";
import { getGitHubData } from "@/app/actions/github";
import type { GitHubData } from "@/types/github";

export default async function Page() {
  let githubData: GitHubData | null = null;

  try {
    githubData = await getGitHubData();
  } catch (error) {
    console.error("Failed to fetch GitHub data:", error);
  }

  return (
    <div>
      <Homepage githubData={githubData} />
    </div>
  );
}
