import NextLink from 'next/link';

const routes = ['/', '/sample', '/mccc'];

export const NavMenu = () => {
  return (
    <ul className="flex flex-col gap-2 p-2">
      {routes.map((route) => (
        <li
          key={route}
          className="p-2 border-2 border-gray-300 rounded-lg shadow-sm"
        >
          <NextLink href={route} className="text-blue-600">
            {route}
          </NextLink>
        </li>
      ))}
    </ul>
  );
};
