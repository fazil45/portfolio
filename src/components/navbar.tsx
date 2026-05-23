import Link from "next/link";
import ThemeToggle from "./themeToggle";

export const Navbar = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto max-h-16 flex items-center justify-between rounded-lg shadow-2xl/25 dark:shadow-neutral-700 shadow-neutral-200 border dark:bg-black/90 bg-white/80 border-neutral-400 p-2">
        <div className="p-1 rounded text-lg lg:text-2xl font-semibold text-shadow-2xs/20">
          <Link href={"/"}>Mohd Fazil</Link>
        </div>
        <div className="flex gap-2">
          <div className="px-2 py-1 font-medium text-sm lg:text-md border rounded-md hover:bg-gray-50">
            <Link href={"/projects"}>Projects</Link>
          </div>
          <div className="p-1 font-medium text-md rounded">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
};
