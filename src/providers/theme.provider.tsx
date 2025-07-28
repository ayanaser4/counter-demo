
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useEventBus } from "./event-bus.provider";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const eventBus = useEventBus();
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    function handler() {
      setTheme((prev) => (prev === "light" ? "dark" : "light"));
    }
    eventBus.on("toggle-theme", handler);
    return () => {
      eventBus.off("toggle-theme", handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eventBus]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => eventBus.emit("toggle-theme");

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
}

// Theme toggle icon button component
export function ThemeToggleIcon() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="text-2xl bg-white text-black dark:bg-black dark:text-white rounded-full p-2 border border-gray-300 dark:border-gray-700 shadow transition-colors duration-300"
      style={{ cursor: "pointer" }}
    >
      {theme === "light" ? "🌞" : "🌙"}
    </button>
  );
}
