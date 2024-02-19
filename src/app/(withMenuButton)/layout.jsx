import { NavMenuButton } from '@/app/_components/NavMenuButton';

/** @type {import('next').Metadata} */
export const metadata = {
  title: 'MCCC 3D Previewer',
  description: 'A 3D previewer for MCCC - MCC Character (MCC-chan)',
};

export default function RootLayout({ children }) {
  return (
    <>
      {children}
      <NavMenuButton />
    </>
  );
}
