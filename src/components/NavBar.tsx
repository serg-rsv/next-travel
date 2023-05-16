import Link from 'next/link';

type Page = {
  link: string;
  text: string;
};

const pages: Page[] = [
  {
    link: '#home',
    text: 'головна',
  },
  {
    link: '#gallery',
    text: 'галерея',
  },
  {
    link: '/contacts',
    text: 'контакти',
  },
];

export default function NavBar() {
  return (
    <ul className="flex justify-center gap-4">
      {pages.map(({ link, text }) => {
        return (
          <li key={link}>
            <Link className="p-2 uppercase lg:text-lg" href={link}>
              {text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
