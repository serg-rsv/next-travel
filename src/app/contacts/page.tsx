import Link from 'next/link';

export default function Contacts() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1>Contacts</h1>
      <Link href="/">&lt;= Повернутися на головну</Link>
    </main>
  );
}
