import { GitHubCalendar } from "react-github-calendar";
import { GoArrowUpRight } from "react-icons/go";

export default function GithubSection() {
  return (
    <section className="relative overflow-hidden bg-transparent p-6 md:p-8">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        
        <h2 className="text-2xl font-bold tracking-tight text-white md:text-3xl">
          GitHub
        </h2>

        <a
          href="https://github.com/fazil45"
          target="_blank"
          className="group flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-900/70 px-4 py-2 text-sm text-neutral-300 transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-800 hover:text-white"
        >
          View Profile

          <GoArrowUpRight className="transition duration-300 group-hover:rotate-45" />
        </a>
      </div>

      {/* Calendar */}
      <div className="mt-10 flex justify-center overflow-x-auto scrollbar-hide">
        <div className="origin-top scale-[0.62] sm:scale-[0.78] md:scale-100">
          <GitHubCalendar
            username="fazil45"
            blockSize={14}
            blockMargin={4}
            fontSize={14}
            colorScheme="dark"
          />
        </div>
      </div>
    </section>
  );
}