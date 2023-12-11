import { NavMenu } from '@/app/_components/NavMenu';

import WordmarkLogo from '/public/wordmark-logo.svg';

export default function Home() {
  return (
    <>
      <div className="w-32 mb-3">
        <WordmarkLogo />
      </div>
      <NavMenu />
    </>
  );
}
