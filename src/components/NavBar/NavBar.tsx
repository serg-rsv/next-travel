'use client';

import { Link } from 'react-scroll';

import anchors from './anchors';

export default function NavBar() {
  return (
    <nav>
      <ul className="flex justify-center gap-4">
        {anchors.map(({ anchor, name }) => {
          return (
            <li key={anchor} className="hover:underline">
              <Link
                className="inline-block p-2 uppercase font-bold lg:name-lg cursor-pointer"
                to={anchor}
                smooth={true}
                duration={0}
              >
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}