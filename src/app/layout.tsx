import './globals.css';
import { Nunito } from 'next/font/google';

const nunito = Nunito({ weight: ['400', '600', '700'], subsets: ['cyrillic'] });

export const metadata = {
  title: 'Next Travel',
  description: 'Web site about traveling',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uk">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
