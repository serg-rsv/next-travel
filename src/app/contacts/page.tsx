'use client';

import Link from 'next/link';

import Form from '@/components/Form/Form';

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
          <div className="flex flex-col items-center py-20 px-5">
            <h2>Форма зворотного зв&apos;язку</h2>
            <Form />
          </div>
        </section>
      </main>
    </>
  );
}
