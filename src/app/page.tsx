import Header from '@/components/Header';
import Gallery from '@/components/Gallery';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import TopTravels from '@/components/TopTravels';

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center">
        <Header />
        <Hero />
        <TopTravels />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
