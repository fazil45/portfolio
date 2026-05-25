"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="
        relative flex w-13 items-center
        rounded-full border border-border
        bg-card px-1 shadow-lg
        transition-all duration-500 cursor-pointer
      "
    >
      <div
        className={`
          absolute inset-0 rounded-full
          transition-opacity duration-500
          ${
            theme === "dark"
              ? "bg-transparent opacity-100"
              : "bg-yellow-400/10 opacity-100"
          }
        `}
      />

      <div
        className={`
          relative z-10 flex h-6 w-6 items-center
          justify-center rounded-full
          bg-background shadow-md
          transition-all duration-500
          ${
            theme === "dark"
              ? "translate-x-6"
              : "-translate-x-2"
          }
        `}
      >
        {theme === "dark" ? (
          <Moon className="h-4 w-4 text-blue-400" />
        ) : (
          <Sun className="h-4 w-4 text-yellow-500" />
        )}
      </div>
    </button>
  );
}