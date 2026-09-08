import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

type ProjectDetails = {
  image: string;
  name: string;
  details: string;
  tech: string[];
  link: string;
  github: string;
};

export const ProjectCard = ({
  image,
  name,
  details,
  link,
  github,
}: ProjectDetails) => {
  return (
    <div
      className="
        group relative w-full overflow-hidden rounded-lg
        border border-neutral-400 bg-card
        transition-all duration-300
        hover:-translate-y-1 hover:shadow-xl dark:border-neutral-300 
      "
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <div className="relative h-52 w-full">
          <Image
            src={image}
            alt={name}
            fill
            className="
              object-cover transition-transform
              duration-500 group-hover:scale-105
            "
          />

          {/* Overlay */}
          <div
            className="
              absolute inset-0
              bg-linear-to-t
              from-black/60 via-black/10 to-transparent
            "
          />

          {/* Badge */}
          <div
            className="
              absolute right-3 top-3 rounded-full
              border border-white/10
              bg-black/40 px-2.5 py-1
              text-[10px] font-medium text-white
              backdrop-blur-md
            "
          >
            Project
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-4">
        <div className="space-y-2">
          <h2
            className="
              text-lg font-semibold tracking-tight
              text-foreground
            "
          >
            {name}
          </h2>

          <p
            className="
              line-clamp-2 text-sm leading-relaxed
              text-muted-foreground
            "
          >
            {details}
          </p>
        </div>

        {/* Button */}
        <div className="flex items-center justify-center gap-4 w-full">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex items-center justify-between
            rounded-xl border border-border
            bg-muted/40 px-4 py-3
            text-sm font-medium
            transition-all duration-300
            hover:bg-muted w-full
          "
          >
            <span>View Project</span>

            <div
              className="
              flex h-8 w-8 items-center justify-center
              rounded-full bg-background
              transition-transform duration-300
              group-hover:rotate-45
            "
            >
              <GoArrowUpRight className="text-base" />
            </div>
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex items-center justify-between
            rounded-xl border border-border
            bg-muted/40 px-4 py-3
            text-sm font-medium
            transition-all duration-300
            hover:bg-muted w-full 
          "
          >
            <span>Github</span>

            <div
              className="
              flex h-8 w-8 items-center justify-center
              rounded-full bg-background
              transition-transform duration-300
              group-hover:rotate-45
            "
            >
              <GoArrowUpRight className="text-base" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export const Card = ({
  image,
  name,
  details,
  tech,
  link,
  github,
}: ProjectDetails) => {
  return (
    <div className="group relative mx-auto flex w-full max-w-3xl flex-col gap-4 overflow-hidden rounded-xl border border-neutral-200 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-950 ease-in-out sm:h-72 sm:flex-row sm:gap-5">
      <div className="h-px w-6 dark:bg-white bg-neutral-700 absolute top-2 right-2 z-10"></div>
      <div className="h-6 w-px dark:bg-white bg-neutral-700 absolute top-2 right-2 z-10"></div>
      <div className="h-px w-6 dark:bg-white bg-neutral-700 absolute bottom-2 right-2 z-10"></div>
      <div className="h-6 w-px dark:bg-white bg-neutral-700 absolute bottom-2 right-2 z-10"></div>
      {/* Image */}
      <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-lg sm:h-full sm:w-[45%]">
        <Image
          src={image}
          alt="Project preview"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-101"
        />
      </div>

      {/* Details */}
      <div className="flex min-w-0 flex-1 flex-col justify-between py-1 pr-1 sm:py-2 sm:pr-2">
        <div>
          <h2 className="mb-1.5 text-xl font-mono tracking-tight text-neutral-900 dark:text-white sm:text-2xl">
            {name}
          </h2>

          <p className="line-clamp-3 text-sm leading-6 text-neutral-600 dark:text-neutral-400 sm:line-clamp-4 font-mono">
            {details}
          </p>

          <div className="mt-3 flex flex-wrap gap-1.5">
            {tech.map((value) => (
              <span
                key={value}
                className="rounded-md bg-neutral-100 px-2 py-1 text-xs dark:bg-neutral-900 font-mono"
              >
                {value}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-2 sm:mt-0 sm:flex-row sm:items-center sm:justify-around">
          <Link href={link} className="w-full">
            <button className="w-full rounded-md bg-neutral-900 px-3 py-2 text-sm font-mono text-white transition hover:bg-neutral-700 dark:bg-white dark:text-black dark:hover:bg-neutral-200">
              View Project
            </button>
          </Link>

          <Link href={github} className="relative w-full">
            <button className="relative w-full rounded-md border border-neutral-200 px-3 py-2 text-sm font-mono dark:border-neutral-800">
              GitHub
              <span className="absolute inset-x-0 bottom-0 bg-linear-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto"></span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
