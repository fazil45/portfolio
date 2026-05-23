import { unstable_cache } from "next/cache";

type Contribution = {
  date: string;
  count: number;
  level: number;
};

type GithubResponse = {
  total: Record<string, number>;
  contributions: Contribution[];
};

const username = "fazil45";

export const getCachedContributions = unstable_cache(
  async () => {
    const response = await fetch(
      `https://github-contributions-api.jogruber.de/v4/${username}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch contributions");
    }

    const data: GithubResponse = await response.json();

    const total =
      data.total[new Date().getFullYear().toString()] || 0;

    return {
      contributions: data.contributions,
      total,
    };
  },
  ["github-contributions"],
  {
    revalidate: 60 * 60 * 24,
  }
);