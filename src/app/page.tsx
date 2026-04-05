import { Navbar } from "@/components/navbar";
import { Profile } from "@/components/profile";
import { ProjectCard } from "../components/projects";
import { Skill } from "@/components/skills";
import { projectDetails } from "./projects/page";
import { Footer } from "@/components/footer";



export default function Home() {
  return (
    <div className="min-h-screen w-full  dark:bg-zinc-950 dark:text-white dark:bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-white text-zinc-900 bg-[radial-gradient(circle,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-size-[12px_12px]">
      <div className="max-w-5xl mx-auto px-8 relative mt-8">
        <div className="h-full w-px absolute top-0 -left-2 bg-zinc-300 dark:bg-zinc-700"></div>
        <div className="h-full w-px absolute top-0 -right-4 bg-zinc-300 dark:bg-zinc-700"></div>
        <div className="mt-12">
          <Navbar />
        </div>

        <div>
          <Profile />
        </div>

        <div className="mt-20">
          <div className="flex items-center justify-center">
            <h1 className="text-4xl font-semibold mb-6">Projects</h1>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8">
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
        <div className="flex items-center justify-center flex-col m-4">
          <h1 className="text-4xl font-semibold">Technologies</h1>
          <Skill />
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    </div>
  );
}

