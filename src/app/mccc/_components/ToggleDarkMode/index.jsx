import React, { useState, useCallback } from 'react';

export const ToggleDarkMode = () => {
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
      className="fixed bottom-0 right-0 z-50 p-4 m-4 bg-gray-900 rounded-full dark:bg-gray-100"
    >
      T
    </button>
  );
};
