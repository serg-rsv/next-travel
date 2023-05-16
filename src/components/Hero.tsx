import Image from 'next/image';
import Link from 'next/link';

import heroPic from 'public/images/hero.jpg';

export default function Hero() {
  return (
    <section id="home" className="container relative">
      <div className="h-screen w-full">
        <Image
          className="object-cover"
          loading="lazy"
          src={heroPic}
          fill
          alt="Green island"
        />
      </div>
      <div className="absolute top-1/4 left-1/4 -translate-x-1/4 flex flex-col">
        <h2 className="mb-4 md:w-1/2 text-4xl font-bold uppercase">
          Життя коротке, а світ безмежний
        </h2>
        <Link
          className="self-baseline px-4 py-2 border rounded-md bg-white bg-opacity-50 font-semibold"
          href="/contacts"
        >
          Залишити заявку
        </Link>
      </div>
    </section>
  );
}
