'use client';
import { Link } from 'react-scroll';

type Page = {
  anchor: string;
  name: string;
};

const pages: Page[] = [
  {
    anchor: 'home',
    name: 'головна',
  },
  {
    anchor: 'gallery',
    name: 'галерея',
  },
];

export default function NavBar() {
  return (
    <ul className="flex justify-center gap-4">
      {pages.map(({ anchor, name }) => {
        return (
          <li key={anchor}>
            <Link
              className="inline-block p-2 uppercase font-bold lg:name-lg cursor-pointer"
              to={anchor}
              smooth={true}
              duration={200}
            >
              {name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
