'use client';
import { Link } from 'react-scroll';

type Page = {
  link: string;
  text: string;
};

const pages: Page[] = [
  {
    link: 'home',
    text: 'головна',
  },
  {
    link: 'gallery',
    text: 'галерея',
  },
];

export default function NavBar() {
  return (
    <ul className="flex justify-center gap-4">
      {pages.map(({ link, text }) => {
        return (
          <li key={link}>
            <Link
              className="inline-block p-2 uppercase lg:text-lg cursor-pointer"
              to={link}
              smooth={true}
              duration={200}
            >
              {text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
