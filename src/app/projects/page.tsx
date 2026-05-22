import { Navbar } from "@/components/navbar";
import { ProjectCard } from "@/components/projects";

export const projectDetails = [
  {
    id: 1,
    name: "CollabCanvas",
    details:
      "A modern collaborative drawing platform that brings your team together.",
    link: "https://fazil-canvascraft.netlify.app/",
    image: "/collabcanvas.png",
  },
  {
    id: 2,
    name: "PayFlow",
    details: "Send, receive and manage your money effortlessly with PayFlow.",
    link: "https://fazil-payflow.netlify.app/",
    image: "/payflow.png",
  },
  {
    id: 3,
    name: "BrainStorm",
    details: "A cleaner home for your online brain",
    link: "https://fazil-payflow.netlify.app/",
    image: "/brainstrom.png",
  },
  {
    id: 4,
    name: "Blogify",
    details: "Create your blogs",
    link: "https://fazil-blogify.netlify.app/",
    image: "/blogify.png",
  },
];

const Project = () => {
  return (
    <div className="min-h-screen w-full  dark:bg-zinc-950 dark:text-white dark:bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-white text-zinc-900 bg-[radial-gradient(circle,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-size-[12px_12px]">
      <div className="max-w-5xl mx-auto px-8 relative mt-8">
        <div className="h-full w-px absolute top-0 -left-2 bg-zinc-300 dark:bg-zinc-700"></div>
        <div className="h-full w-px absolute top-0 -right-4 bg-zinc-300 dark:bg-zinc-700"></div>
        <div>
          <Navbar />
        </div>
        <div>
          <div className="flex items-center justify-center">
            <h1 className="text-4xl font-semibold mb-4">Projects</h1>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
            {projectDetails.map((details) => (
              <ProjectCard
                key={details.id}
                image={details.image}
                details={details.details}
                link={details.link}
                name={details.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
