'use client';
import Link from 'next/link';
import Form from '@/components/Form';

export default function Contacts() {
  return (
    <main className="flex min-h-screen flex-col items-center px-5 pt-4">
      <Link
        className="inline-block p-2 mb-10 uppercase font-bold lg:name-lg cursor-pointer hover:underline"
        href="/"
      >
        Головна
      </Link>
      <p>Форма зворотнього зв&apos;язку</p>
      <Form />
    </main>
  );
}
