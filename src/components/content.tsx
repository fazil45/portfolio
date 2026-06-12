import { Skill } from "./skills";
import { ProjectCard } from "./projects";
import { Profile } from "./profile";
import { Navbar } from "./navbar";  
import { projectDetails } from "@/app/projects/page";
import { getCachedContributions } from "@/lib/github";
import GithubCard from "./github";
import Blogs from "./blog";

const Content = async () => {
  const { contributions, total } = await getCachedContributions();

  return (
    <div className="py-8">
      <div >
        <Navbar />
      </div>

      <div>
        <Profile />
      </div>
      <div className="mt-36 border dark:border-neutral-200 border-neutral-600 py-3 px-5 rounded-md">
        <GithubCard contributions={contributions} total={total}/>
      </div>

      <div className="mt-20">
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-semibold mb-6">Projects</h1>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
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
      </div>
      <div className="flex items-center justify-center flex-col m-4">
        <h1 className="text-3xl mt-4 lg:text-4xl font-semibold">
          Blogs
        </h1>
        <Blogs/>
      </div>
      <div className="flex items-center justify-center flex-col m-4">
        <h1 className="text-3xl mt-4 lg:text-4xl font-semibold">
          Technologies
        </h1>
        <Skill />
      </div>
    </div>
  );
};

export default Content;
