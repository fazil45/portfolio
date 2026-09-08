"use client";
import Link from "next/link";
import Image from "next/image";
import { Cross, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [show, setShow] = useState(true);
  const handleDropDown = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <div className="max-w-2xl mx-auto max-h-16 flex items-center justify-between p-2">
        <Link href={"/"}>
          <div className="flex items-center justify-center gap-2 p-1 rounded text-lg lg:text-2xl font-mono text-shadow-2xs/20 ">
            <Image
              className="object-cover rounded-md cursor-pointer"
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
            className="cursor-pointer flex items-center justify-center lg:hidden transition-all ease-in-out"
          >
            {show ? <Menu /> : <X />}
          </div>
          <div className="hidden lg:flex gap-4 items-center justify-center">
            <div className="px-2 py-1  font-mono text-sm lg:text-md border rounded-md">
              <Link href={"/blog"}>Blogs</Link>
            </div>
            <div className="px-2 py-1  font-mono text-sm lg:text-md border rounded-md">
              <Link href={"/projects"}>Projects</Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${show ? "hidden" : "block"} transition-all ease-in-out`}
      >
        <div className="h-fit p-2 rounded-md w-full  border mt-4  border-neutral-700 lg:hidden">
          <div className="flex flex-col items-center justify-center w-full gap-2">
            <div className="px-2 py-1 font-mono text-lg border lg:text-md flex items-center justify-center rounded-md w-full border-neutral-800">
              <Link href={"/projects"}>Projects</Link>
            </div>
            <div className="px-2 py-1 font-mono text-lg border lg:text-md flex items-center justify-center rounded-md w-full border-neutral-800">
              <Link href={"/blogs"}>Blogs</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
