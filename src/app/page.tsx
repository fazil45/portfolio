import Content from "@/components/content";

export default function Home() {
  return (
    <div
      className="
        relative mx-auto min-h-screen max-w-3xl overflow-hidden
        bg-background text-foreground
        bg-[radial-gradient(circle,rgba(0,0,0,.09)_1px,transparent_1px)]
        dark:bg-[radial-gradient(circle,rgba(255,255,255,.07)_1px,transparent_1px)]
        bg-size-[12px_12px]
      "
    >
      {/* Full-height borders */}
      <div className="absolute inset-y-0 left-0 w-px bg-neutral-700" />
      <div className="absolute inset-y-0 right-0 w-px bg-neutral-700" />

      {/* Padded content */}
      <div className="relative">
        <Content />
      </div>
    </div>
  );
}
