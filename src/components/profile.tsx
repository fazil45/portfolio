"use client";
import Image from "next/image";
import { FaMailBulk } from "react-icons/fa";
import { socials } from "@/lib/socialType";
import { toast } from "sonner";


export const Profile = () => {
  const pasteToClipboard = async () => {
    const mail = "mdfazil846@gmail.com";
    await navigator.clipboard.writeText(mail);
    toast.message("Email is Copied");
  };

  return (
    <>
      <div className="flex lg:flex-row flex-col  items-center justify-around my-4">
        <div className="flex flex-col gap-4 h-54  lg:text-lg text-shadow-2xs/60 lg:max-w-xl lg:mt-8">

          <div className="text-xl leading-tight tracking-tight dark:text-neutral-200 text-neutral-800 font-mono">
            Hey, I'm <span className="font-semibold text-cyan-500">Fazil</span>,
            a{" "}
            <span className="font-semibold text-cyan-500">
              Full Stack Developer
            </span>{" "}
            focused on building scalable, high-performance web applications with
            modern UI/UX, cloud infrastructure, and{" "}
            <span className="font-semibold text-cyan-500">
              DevOps workflows using AWS, Docker, and CI/CD
            </span>{" "}
            — creating products that are both visually polished and
            production-ready.
          </div>
          <div className="mt-4 flex gap-2">
            <div className="flex items-center justify-center gap-4">
              {socials.map((details) => {
                const Icon = details.icon;
                return (
                  <div key={details.id}>
                    <a
                      href={details.link}
                      target="_blank"
                      className="flex items-center justify-center hover:scale-102  gap-1 p-1 border rounded text-sm cursor-pointer font-mono"
                    >
                      <Icon />
                      {details.name}
                    </a>
                  </div>
                );
              })}
            </div>
            <div
              onClick={pasteToClipboard}
              className="flex items-center justify-center hover:scale-102  gap-1 p-1 border rounded text-sm cursor-pointer ml-2 font-mono"
            >
              <FaMailBulk />
              Email
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
