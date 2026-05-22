import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto max-h-16 flex items-center justify-between rounded-lg shadow-2xl/25 p-2">
        <div className="p-1 rounded text-2xl font-semibold text-shadow-2xs/20">
          <Link href={"/"}>Mohd Fazil</Link>
        </div>
        <div className="flex gap-2">
          <div className="p-1 font-medium lg:text-md  rounded">
            <Link href={"/projects"}>Projects</Link>
          </div>
          <div className="p-1 font-medium text-md rounded"></div>
        </div>
      </div>
    </>
  );
};
