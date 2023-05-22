'use client';

import { Link } from 'react-scroll';

import anchors from './anchors';

export default function NavBar() {
  return (
    <nav>
      <ul className="flex justify-center gap-4">
        {anchors.map(({ anchor, name }) => {
          return (
            <li key={anchor}>
              <Link className="link" to={anchor} smooth={true} duration={0}>
                {name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
