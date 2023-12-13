import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'MCCC 3D Previewer',
  description: 'A 3D previewer for MCCC - MCC Character (MCC-chan)',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body
        className={[
          inter.className,
          'bg-white text-gray-800 dark:bg-gray-800 dark:text-white',
        ].join(' ')}
      >
        {children}
      </body>
    </html>
  );
}
