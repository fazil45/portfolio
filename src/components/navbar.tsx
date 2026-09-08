"use client";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [show, setShow] = useState(true);
  const handleDropDown = () => {
    setShow((prev) => !prev);
  };

  return (
    <>
      <div className="mx-auto flex min-h-16 w-full max-w-2xl items-center justify-between gap-3 p-2">
        <Link href={"/"}>
          <div className="flex items-center justify-center gap-2 rounded p-1 text-base font-mono text-shadow-2xs/20 sm:text-lg lg:text-2xl">
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
          <button
            type="button"
            onClick={handleDropDown}
            aria-label={show ? "Open menu" : "Close menu"}
            className="flex size-10 cursor-pointer items-center justify-center rounded border border-neutral-700 transition-all ease-in-out lg:hidden"
          >
            {show ? <Menu /> : <X />}
          </button>
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
        <div className="mt-3 h-fit w-full rounded-md border border-neutral-700 p-2 lg:hidden">
          <div className="flex flex-col items-center justify-center w-full gap-2">
            <div className="px-2 py-1 font-mono text-lg border lg:text-md flex items-center justify-center rounded-md w-full border-neutral-800">
              <Link href={"/projects"}>Projects</Link>
            </div>
            <div className="px-2 py-1 font-mono text-lg border lg:text-md flex items-center justify-center rounded-md w-full border-neutral-800">
              <Link href={"/blog"}>Blogs</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
