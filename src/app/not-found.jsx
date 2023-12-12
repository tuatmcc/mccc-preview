import NextLink from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <p className="text-2xl font-bold text-gray-900">404: Not Found</p>
      <p className="text-xl text-gray-900">
        <NextLink href="/" className="text-blue-500 hover:underline">
          Go back home
        </NextLink>
      </p>
    </div>
  );
}
