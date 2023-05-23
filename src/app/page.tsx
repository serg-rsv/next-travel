import Header from '@/sections/Header';
import Hero from '@/sections/Hero';
import TopTravels from '@/sections/TopTravels';
import Gallery from '@/sections/Gallery';
import Footer from '@/sections/Footer';

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
