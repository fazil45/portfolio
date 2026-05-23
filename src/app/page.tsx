import Content from "@/components/content";

export default function Home() {
  return (
    <div className="min-h-screen w-full dark:bg-background dark:text-foreground dark:bg-[radial-gradient(circle,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-background text-foreground bg-[radial-gradient(circle,rgba(0,0,0,.09)_1px,transparent_1px)] bg-size-[12px_12px] max-w-5xl mx-auto overflow-hidden">
      <div className="max-w-5xl mx-auto px-8 relative">
          <Content/>
      </div>
    </div>  
  );
}
