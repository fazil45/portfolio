import { Skill } from "./skills";
import { Card, ProjectCard } from "./projects";
import { Profile } from "./profile";
import { Navbar } from "./navbar";
import { projectDetails } from "@/app/projects/page";
import { getCachedContributions } from "@/lib/github";
import GithubCard from "./github";
import Blogs from "./blog";
import ProjectAnimation from "./projectCardAnimation";
const Content = async () => {
  const { contributions, total } = await getCachedContributions();

  return (
    <div className="py-4 sm:py-8">
      <div className="border-y border-neutral-500 ">
        <Navbar />
      </div>
      <div className="border-b border-neutral-500">
        <Profile />
      </div>
      <div className="mt-12 md:mt-10">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-mono">Work</h1>
        </div>
        <div>
          <ProjectAnimation>
            {projectDetails.map((details) => (
              <div key={details.id} className="project-card ">
                <Card
                  image={details.image}
                  tech={details.tech}
                  details={details.details}
                  link={details.link}
                  github={details.github}
                  name={details.name}
                />
              </div>
            ))}
          </ProjectAnimation>
        </div>
      </div>

      <div className="flex items-center justify-center flex-col gap-4 mt-4 border-y border-neutral-500 p-4">
        <h1 className="text-3xl  lg:text-4xl font-mono">Contributions</h1>

        <div className="w-full max-w-2xl overflow-x-auto rounded-md border border-neutral-700 px-2 py-3 sm:px-5">
          <GithubCard contributions={contributions} total={total} />
        </div>
      </div>

      <div className="flex items-center justify-center flex-col border-b border-neutral-500 p-4">
        <h1 className="text-3xl mt-4 lg:text-4xl font-mono">Blogs</h1>
        <Blogs />
      </div>

      <div className="flex items-center justify-center flex-col my-4 border-b border-neutral-500 p-4">
        <h1 className="text-3xl mt-4 lg:text-4xl font-mono">Things i know</h1>
        <Skill />
      </div>
    </div>
  );
};

export default Content;
