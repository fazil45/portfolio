"use client";
import Image from "next/image";
import {  FaMailBulk } from "react-icons/fa";
import { socials } from "@/lib/socialType";
import { toast } from "sonner";


export const Profile = () => {
  const pasteToClipboard = async() => {
    const mail = "mdfazil846@gmail.com";
    await navigator.clipboard.writeText(mail);
    toast.message("Email is Copied")
  };

  return (
    <>
      <div className="flex lg:flex-row flex-col  items-center justify-around mt-8">
        <div className="lg:h-54 lg:w-54 hidden lg:block shadow-2xl/80 dark:shadow-neutral-700 shadow-neutral-200">
          <Image
            className="rounded-lg"
            width={500}
            height={500}
            alt="Image"
            src="/photo.jpg"
          ></Image>
        </div>
        <div className="flex flex-col gap-4 h-54  lg:text-lg text-shadow-2xs/60  shadow-neutral-200 lg:max-w-xl mt-12">
          <div className="text-xl">
            Hey, I'm Fazil, a full stack developer who loves building clean,
            modern websites and apps where design, functionality, and even the
            smallest details matter, with a focus on making products that are
            both practical and visually satisfying.
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
                      className="flex items-center justify-center hover:scale-102  gap-1 p-1 border rounded text-sm cursor-pointer"
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
              className="flex items-center justify-center hover:scale-102  gap-1 p-1 border rounded text-sm cursor-pointer ml-2"
            >
              <FaMailBulk />
              Email
            </div>
          </div>
        </div>
        <div className="lg:hidden block h-54 w-54 shadow-2xl/70 mt-20 shadow-neutral-600">
          <Image
            className="rounded-lg"
            width={500}
            height={500}
            alt="Image"
            src="/photo.jpg"
          ></Image>
        </div>
      </div>
    </>
  );
};
