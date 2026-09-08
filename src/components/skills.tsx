import { IconType } from "react-icons";
import { BiLogoPostgresql } from "react-icons/bi";
import { BsFiletypeSql } from "react-icons/bs";
import { DiJavascript } from "react-icons/di";
import { FaAws, FaDocker, FaGitAlt, FaGithub } from "react-icons/fa";
import { PiPlug } from "react-icons/pi";
import { RiNextjsFill, RiReactjsFill, RiTailwindCssLine } from "react-icons/ri";
import {
  SiExpress,
  SiMongodb,
  SiNodedotjs,
  SiPostman,
  SiPrisma,
  SiReactquery,
} from "react-icons/si";
import { TbBrandTypescript } from "react-icons/tb";

type Skill = {
  id: number;
  icon: IconType;
  skill: string;
};

const skillsDetail: Skill[] = [
  { id: 1, icon: RiReactjsFill, skill: "React" },
  { id: 2, icon: RiNextjsFill, skill: "Next.js" },
  { id: 3, icon: DiJavascript, skill: "JavaScript" },
  { id: 4, icon: TbBrandTypescript, skill: "TypeScript" },
  { id: 5, icon: SiMongodb, skill: "MongoDB" },
  { id: 6, icon: SiPrisma, skill: "Prisma" },
  { id: 7, icon: RiTailwindCssLine, skill: "Tailwind CSS" },
  { id: 8, icon: SiPostman, skill: "Postman" },
  { id: 9, icon: FaGitAlt, skill: "Git" },
  { id: 10, icon: FaGithub, skill: "GitHub" },
  { id: 11, icon: SiExpress, skill: "Express" },
  { id: 12, icon: SiNodedotjs, skill: "Nodejs" },
  { id: 13, icon: FaAws, skill: "AWS" },
  { id: 14, icon: BsFiletypeSql, skill: "SQL" },
  { id: 15, icon: BiLogoPostgresql, skill: "PostgreSQL" },
  { id: 16, icon: SiReactquery, skill: "Tanstack" },
  { id: 17, icon: PiPlug, skill: "WebSockets" },
  { id: 18, icon: FaDocker, skill: "Docker" },
];

export const Skill = () => {
  return (
    <div className="m-2 flex flex-wrap items-center justify-center gap-2 rounded-md border border-neutral-300 p-3 dark:border-neutral-700 sm:m-4 sm:gap-3 sm:p-4">
      {skillsDetail.map((skillDetails) => {
        const Icon = skillDetails.icon;
        return (
          <div
            className="group flex cursor-pointer items-center justify-center gap-1.5 rounded-md border border-neutral-300 px-2 py-1 transition-all duration-200 hover:scale-105 hover:border-neutral-900 hover:bg-neutral-900 dark:border-neutral-700 dark:hover:border-white dark:hover:bg-white sm:gap-2 sm:px-3 sm:py-1.5"
            key={skillDetails.id}
          >
            <Icon className="text-sm text-neutral-500 transition-colors duration-200 group-hover:text-white dark:text-neutral-400 dark:group-hover:text-neutral-900 sm:text-base" />
            <div className="text-xs text-neutral-500 transition-colors duration-200 group-hover:text-white dark:text-neutral-400 dark:group-hover:text-neutral-900 sm:text-sm font-mono">
              {skillDetails.skill}
            </div>
          </div>
        );
      })}
    </div>
  );
};