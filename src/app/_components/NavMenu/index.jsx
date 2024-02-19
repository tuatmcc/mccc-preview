import { pagesPath } from '@/utils/$path';
import NextLink from 'next/link';

const routes = [
  {
    name: 'React Three Fiber Sample',
    path: pagesPath.sample.$url(),
  },
  {
    name: 'MCCC',
    path: pagesPath.mccc.$url(),
  },
];

export const NavMenu = () => {
  return (
    <ul className="flex flex-col gap-2 p-2">
      {routes.map(({ name, path }) => (
        <li
          key={path}
          className="border-2 border-gray-300 rounded-lg shadow-sm"
        >
          <NextLink
            href={path}
            className="text-blue-600 flex p-2 border-inherit"
          >
            {name}
          </NextLink>
        </li>
      ))}
    </ul>
  );
};
