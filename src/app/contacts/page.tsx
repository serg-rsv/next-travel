'use client';

import Link from 'next/link';

import Form from '@/components/Form/Form';
import VideoBg from '@/components/VideoBg/VideoBg';

export default function Contacts() {
  return (
    <>
      <header className="header">
        <nav className="flex justify-center">
          <Link className="link" href="/">
            Головна
          </Link>
        </nav>
      </header>
      <main className="min-h-screen">
        <section>
          <VideoBg>
            <div className="flex flex-col items-center px-5 pt-20 pb-5">
              <h2 className="mb-5">Форма зворотного зв&apos;язку</h2>
              <Form />
            </div>
          </VideoBg>
        </section>
      </main>
    </>
  );
}
