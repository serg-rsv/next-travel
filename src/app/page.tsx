import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TopTravels from '@/components/TopTravels';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <TopTravels />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}
