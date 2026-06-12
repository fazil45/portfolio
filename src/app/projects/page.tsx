import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/projects";
import { ArrowUpRightIcon } from "lucide-react";

export const projectDetails = [
  {
    id: 1,
    name: "CollabCanvas",
    details:
      "A modern collaborative drawing platform that brings your team together.",
    link: "https://fazil-canvascraft.netlify.app/",
    github: "https://github.com/fazil45/canvascraft",
    image: "/collabcanvas.png",
  },
  {
    id: 2,
    name: "PayFlow",
    details: "Send, receive and manage your money effortlessly with PayFlow.",
    link: "https://fazil-payflow.netlify.app/",
    github: "https://github.com/fazil45/payflow",
    image: "/payflow.png",
  },
  {
    id: 3,
    name: "BrainStorm",
    details: "A cleaner home for your online brain",
    link: "https://fazil-brainstorm.netlify.app/",
    github: "https://github.com/fazil45/brainstorm-backend",
    image: "/brainstrom.png",
  },
  {
    id: 4,
    name: "Blogify",
    details: "Create your blogs",
    link: "https://fazil-blogify.netlify.app/",
    github: "https://github.com/fazil45/blogify",
    image: "/blogify.png",
  },
];

const Project = () => {
  return (
    <div className="min-h-screen w-full  dark:bg-zinc-950 dark:text-white dark:bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-white text-zinc-900 bg-[radial-gradient(circle,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-size-[12px_12px] max-w-5xl mx-auto">
      <div className="max-w-5xl mx-auto px-8 relative mt-8 mb-12">
        <div className="mb-12">
          <Navbar />
        </div>
        <div>
          <div className="flex items-center justify-center">
            <h1 className="text-2xl lg:text-4xl font-semibold mb-8">
              Projects
            </h1>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 mb-12">
            {projectDetails.map((details) => (
              <ProjectCard
                key={details.id}
                image={details.image}
                details={details.details}
                link={details.link}
                github={details.github}
                name={details.name}
              />
            ))}
          </div>
          <div className="flex items-center justify-center pb-12 ">
            <div className="px-2 py-1 group border rounded-md flex items-center justify-center gap-2 cursor-pointer">
              Check More{" "}
              <ArrowUpRightIcon className="group-hover:rotate-45 transition-all ease-in-out" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
