"use client";
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
      <div className="my-4 flex w-full flex-col items-center justify-around px-3 sm:px-6 lg:flex-row">
        <div className="flex min-h-54 w-full max-w-xl flex-col justify-center gap-4 text-shadow-2xs/60 lg:mt-8 lg:text-lg">
          <div className="text-base leading-relaxed tracking-tight text-neutral-200 font-mono sm:text-xl sm:leading-tight">
            Hey, I&apos;m{" "}
            <span className="font-semibold text-cyan-500">Fazil</span>, a{" "}
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
          <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
              {socials.map((details) => {
                const Icon = details.icon;
                return (
                  <div key={details.id}>
                    <a
                      href={details.link}
                      target="_blank"
                      className="flex items-center justify-center gap-1 rounded border p-1 text-sm font-mono transition-transform hover:scale-102"
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
              className="ml-0 flex cursor-pointer items-center justify-center gap-1 rounded border p-1 text-sm font-mono transition-transform hover:scale-102 sm:ml-2"
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
