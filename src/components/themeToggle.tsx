"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle(
        "dark",
        savedTheme === "dark"
      );
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      const initialTheme = prefersDark ? "dark" : "light";

      setTheme(initialTheme);

      document.documentElement.classList.toggle(
        "dark",
        prefersDark
      );
    }
  }, []);

  const toggleTheme = () => {
    const newTheme =
      theme === "dark" ? "light" : "dark";

    setTheme(newTheme);

    document.documentElement.classList.toggle(
      "dark",
      newTheme === "dark"
    );

    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        relative flex w-13 items-center
        rounded-full border border-border
        bg-card px-1 shadow-lg
        transition-all duration-500
      "
    >
      {/* Glow */}
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

      {/* Slider */}
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