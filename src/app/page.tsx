import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen w-full py-8  dark:bg-zinc-950 dark:text-white dark:bg-[radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-white text-zinc-900 bg-[radial-gradient(circle,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-size-[12px_12px] ">
      <div className="w-4xl mx-auto">
        <Navbar />
      </div>
    </div>
  );
}

