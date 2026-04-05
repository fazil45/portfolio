"use client";

import { GitHubCalendar } from "react-github-calendar";

export default function GithubSection() {
  return (
    <section className="w-full rounded-3xl border border-white/10 bg-[#0b0b0b] p-6 md:p-8 text-white shadow-xl">
      <div className="mb-8">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
          Coding Activity
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          GitHub Contributions
        </h2>
        <p className="text-zinc-400 mt-3 max-w-2xl">
          A visual overview of my consistency, commits, and open-source
          activity.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="rounded-2xl bg-zinc-900 p-4">
          <p className="text-zinc-400 text-sm">Commits</p>
          <h3 className="text-2xl font-bold">500+</h3>
        </div>
        <div className="rounded-2xl bg-zinc-900 p-4">
          <p className="text-zinc-400 text-sm">Projects</p>
          <h3 className="text-2xl font-bold">15+</h3>
        </div>
        <div className="rounded-2xl bg-zinc-900 p-4">
          <p className="text-zinc-400 text-sm">Streak</p>
          <h3 className="text-2xl font-bold">30 Days</h3>
        </div>
        <div className="rounded-2xl bg-zinc-900 p-4">
          <p className="text-zinc-400 text-sm">Open Source</p>
          <h3 className="text-2xl font-bold">Active</h3>
        </div>
      </div>

      <div className="w-full flex justify-center">
        <div className="scale-[0.75] sm:scale-90 md:scale-100 origin-top overflow-hidden">
          <GitHubCalendar
            username="fazil45"
            blockSize={15}
            blockMargin={5}
            fontSize={14}
            colorScheme="dark"
          />
        </div>
      </div>

      <a
        href="https://github.com/fazil45"
        target="_blank"
        className="inline-block mt-8 px-5 py-3 rounded-2xl bg-white text-black font-semibold hover:scale-105 transition"
      >
        View GitHub
      </a>
    </section>
  );
}
