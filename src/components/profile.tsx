import Image from "next/image";
import { IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type Social = {
  id: number;
  name: string;
  icon: IconType;
  link: string;
};

export const socials: Social[] = [
  {
    id: 1,
    name: "Github",
    icon: FaGithub,
    link: "https://github.com/fazil45",
  },
  {
    id: 2,
    name: "Twitter",
    icon: FaXTwitter,
    link: "https://x.com/fazil_dev_",
  },
  {
    id: 3,
    name: "LinkedIn",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/mohd-fazil-462682368/",
  },
];

export const Profile = () => {
  return (
    <>
      <div className="flex items-center justify-around mt-8">
        <div className="h-54 w-54 shadow-2xl/70 shadow-neutral-600">
          <Image
            className="rounded-lg"
            width={500}
            height={500}
            alt="Image"
            src="/photo.jpg"
          ></Image>
        </div>
        <div className="flex flex-col gap-4 h-54 text-lg text-shadow-2xs/60  shadow-neutral-200 max-w-xl">
          <div className="text-xl text-neutral-300">
            Hey, I'm Fazil, a full stack developer who loves building clean,
            modern websites and apps where design, functionality, and even the
            smallest details matter, with a focus on making products that are
            both practical and visually satisfying.
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-center gap-4">
              {socials.map((details) => {
                const Icon = details.icon;
                return (
                  <div key={details.id}>
                    <a
                      href={details.link}
                      target="_blank"
                      className="flex items-center justify-center text-neutral-300 hover:scale-102 hover:text-white gap-1 p-1 border rounded text-sm cursor-pointer"
                    >
                      <Icon />
                      {details.name}
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
