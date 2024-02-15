"use client";

import { useCallback, useEffect } from "react";
import DarkModeIcon from "/public/icons/dark-mode.svg";

export const ToggleDarkMode = () => {
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = useCallback(() => {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      className="fixed bottom-2 right-2 z-50 flex transition-all items-center justify-center w-12 h-12 m-2 bg-gray-800 rounded-md dark:bg-gray-100 dark:text-gray-900"
    >
      <DarkModeIcon width={36} height={36} className="text-yellow-400" />
    </button>
  );
};
