'use client';

import NextLink from 'next/link';
import { useState } from 'react';
import Logo from '/public/icons/logo.svg';
import WordmarkLogo from '/public/icons/wordmark-logo.svg';
import { NavMenu } from '../NavMenu';
import { ToggleDarkMode } from '../ToggleDarkMode';

export const NavMenuButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className={`fixed inset-0 ${isOpen ? 'block' : 'hidden'}`}
        onClick={() => setIsOpen(false)}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            setIsOpen(false);
          }
        }}
      />
      <div
        className={`fixed flex flex-col gap-2 h-full top-0 transition-all shadow-lg backdrop-blur-md ${
          isOpen ? 'left-0' : '-left-full'
        }`}
        hidden={!isOpen}
      >
        <NextLink href="/" className="p-2">
          <WordmarkLogo height={24} />
        </NextLink>
        <NavMenu />
        <ToggleDarkMode />
      </div>
      <button
        className="fixed bottom-4 left-4 p-2 rounded-md bg-white shadow-md"
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            setIsOpen(false);
          }
        }}
      >
        <Logo width={36} height={36} />
      </button>
    </>
  );
};
