import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

type ProjectDetails = {
  image: string;
  name: string;
  details: string;
  link: string;
};

export const ProjectCard = ({
  image,
  name,
  details,
  link,
}: ProjectDetails) => {
  return (
    <div className="group relative w-full max-w-125 overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-950/70 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-neutral-600 hover:shadow-[0_20px_80px_-20px_rgba(255,255,255,0.15)]">
      
      {/* Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-neutral-700/10 via-transparent to-neutral-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />

      {/* Image */}
      <div className="relative overflow-hidden p-3">
        <div className="relative h-52 overflow-hidden rounded-2xl border border-neutral-800 bg-linear-to-br from-neutral-900 via-neutral-800 to-black">
          
          <Image
            src={image}
            alt={name}
            width={600}
            height={400}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent opacity-60" />

          {/* Badge */}
          <div className="absolute right-3 top-3 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] text-white backdrop-blur-md">
            Project
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-4 p-4">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-white transition duration-300 group-hover:text-neutral-200">
            {name}
          </h2>

          <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-neutral-400">
            {details}
          </p>
        </div>

        {/* Button */}
        <a
          href={link}
          target="_blank"
          className="flex items-center justify-between rounded-2xl border border-neutral-800 bg-neutral-900 px-4 py-3 text-sm font-medium text-neutral-200 transition-all duration-300 hover:border-neutral-600 hover:bg-neutral-800"
        >
          <span>View Project</span>

          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black transition duration-300 group-hover:rotate-45">
            <GoArrowUpRight/>
          </div>
        </a>
      </div>
    </div>
  );
};