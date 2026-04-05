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
    <div className="flex flex-wrap items-center justify-center  gap-4 m-4 border border-neutral-400 p-4 rounded-md">
        
      {skillsDetail.map((skillDetails) => {
        const Icon = skillDetails.icon
        return <div className="flex items-center justify-center border border-neutral-400 hover:scale-102 cursor-pointer hover:bg-neutral-800 hover:text-white rounded-md p-1 gap-2" key={skillDetails.id}>
          <Icon/>
          <div className="text-sm flex items-center justify-center text-neutral-400 hover:text-white">{skillDetails.skill}</div>
        </div>;
      })}
    </div>
  );
};
