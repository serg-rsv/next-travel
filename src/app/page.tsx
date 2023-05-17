import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <Hero />
      <Gallery />
    </main>
  );
}
