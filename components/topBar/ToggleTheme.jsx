"use client";

import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export default function ToggleTheme() {
  const [isDark, setIsDark] = useState(
    () => document.documentElement.classList.contains("dark")
  );

  function handleThemeToggle() {
    const next = !isDark;

    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");

    setIsDark(next);
  }

  return (
    <button
      type="button"
      className="cursor-pointer text-muted"
      onClick={handleThemeToggle}
    >
      {isDark ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
}