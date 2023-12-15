'use client';

import React, { useEffect, useCallback } from 'react';

export const ToggleDarkMode = () => {
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    } else {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = useCallback(() => {
    if (localStorage.theme === 'dark') {
      localStorage.theme = 'light';
      document.documentElement.classList.remove('dark');
    } else {
      localStorage.theme = 'dark';
      document.documentElement.classList.add('dark');
    }
  }, []);

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      className="fixed bottom-0 right-0 z-50 flex items-center justify-center w-12 h-12 m-2 bg-gray-400 rounded-full dark:bg-gray-100 dark:text-gray-900"
    >
      {'🌓'}
    </button>
  );
};
