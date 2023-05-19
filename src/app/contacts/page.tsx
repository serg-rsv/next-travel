'use client';
import Link from 'next/link';

import Form from '@/components/Form';

export default function Contacts() {
  return (
    <>
      <header className="fixed z-10 top-0 left-0 right-0 p-4 backdrop-blur-sm">
        <nav className="flex justify-center">
          <Link
            className="inline-block p-2  uppercase font-bold lg:name-lg cursor-pointer hover:underline"
            href="/"
          >
            Головна
          </Link>
        </nav>
      </header>
      <main className="min-h-screen">
        <section className="flex flex-col items-center py-20 px-5">
          <h2>Форма зворотного зв&apos;язку</h2>
          <Form />
        </section>
      </main>
    </>
  );
}
