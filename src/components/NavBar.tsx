import Link from 'next/link';

interface Page {
  link: string;
  text: string;
}

const pages: Page[] = [
  {
    link: '/',
    text: 'home',
  },
  {
    link: '/contacts',
    text: 'contacts',
  },
];

export default function NavBar() {
  return (
    <ul className="flex justify-center gap-4">
      {pages.map(({ link, text }) => {
        return (
          <li key={link}>
            <Link className="p-2 capitalize" href={link}>
              {text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
