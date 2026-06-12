import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

type ProjectDetails = {
  image: string;
  name: string;
  details: string;
  link: string;
  github:string;
};

export const ProjectCard = ({ image, name, details, link, github }: ProjectDetails) => {
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
