"use client";
import Link from "next/link";
import Image from "next/image";
import ThemeToggle from "./themeToggle";
import { Cross, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleDropDown = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <div className="max-w-3xl mx-auto max-h-16 flex items-center justify-between rounded-lg shadow-2xl/25 dark:shadow-neutral-700 shadow-neutral-200 border dark:bg-black/90 bg-white/80 border-neutral-400 p-2">
        <Link href={"/"}>
          <div className="flex items-center justify-center gap-2 p-1 rounded text-lg lg:text-2xl font-semibold text-shadow-2xs/20">
            <Image
              className="object-cover rounded-full cursor-pointer"
              width={40}
              height={40}
              src={"/photo.jpg"}
              alt="img"
            ></Image>
            Mohd Fazil
          </div>
        </Link>
        <div className="flex gap-2">
          <div
            onClick={handleDropDown}
            className="cursor-pointer block lg:hidden transition-all ease-in-out"
          >
            {show ? <Menu /> : <X />}
          </div>
          <div className="hidden lg:flex gap-4 items-center justify-center">
            <div className="px-2 py-1  font-medium text-sm lg:text-md border rounded-md">
              <Link href={"/projects"}>Projects</Link>
            </div>
            <div className="p-1 font-medium  text-md rounded">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${show ? "hidden" : "block"} transition-all ease-in-out`}
      >
        <div className="h-fit py-4 rounded-xl w-full flex gap-8 items-center justify-center border mt-4 dark:border-neutral-300 border-neutral-700 lg:hidden">
          <div className="px-2 py-1  font-medium text-sm lg:text-md border dark:border-neutral-400 border-neutral-500 rounded-md">
            <Link href={"/projects"}>Projects</Link>
          </div>
          <div className="p-1 font-medium  text-md rounded">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
};
