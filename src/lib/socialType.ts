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
