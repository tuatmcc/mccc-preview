import { NavMenu } from '@/app/_components/NavMenu';

import WordmarkLogo from '/public/wordmark-logo.svg';

export default function Home() {
  return (
    <main>
      <div className="w-32 p-2 mb-3">
        <WordmarkLogo />
      </div>
      <p className="p-2 mb-3">
        <a
          href="https://x.com/tuatmcc"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline hover:text-blue-700 font-bold"
        >
          MCC
        </a>{' '}
        のオリジナル3Dキャラクター(開発中)をプレビューするためのサイトです。
      </p>
      <NavMenu />
      <p className="p-2 my-3 text-sm">
        <a
          href="https://github.com/tuatmcc/mccc"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline"
        >
          開発中のモデル
        </a>
        が更新されると自動でこのサイトも更新されます。 ソースコード →
        <a
          href="https://github.com/tuatmcc/mccc-preview"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>
      </p>
      <p className="p-2 text-gray-600 text-sm text-center mt-3">
        {'\u00A9'} 2023 東京農工大学マイクロコンピュータークラブ
      </p>
    </main>
  );
}
