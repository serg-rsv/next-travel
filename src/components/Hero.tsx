import Image from 'next/image';
import Link from 'next/link';

import heroPic from 'public/images/hero.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full">
      <Image
        className="object-cover"
        src={heroPic}
        fill
        priority
        alt="Зелені острови"
      />
      <div className="absolute top-0 left-0 w-full">
        <div className="container flex flex-col w-full mx-auto pt-24 px-5 lg:px-16 xl:px-36">
          <h1 className="mb-4 sm:w-1/2 md:w-1/2 text-2xl md:text-4xl xl:text-5xl font-bold uppercase text-white">
            Життя коротке, а світ безмежний
          </h1>
          <Link
            className="self-baseline px-4 py-2 border rounded-md bg-white bg-opacity-50 hover:bg-opacity-75 font-semibold md:text-lg xl:text-2xl"
            href="/contacts"
          >
            Залишити заявку
          </Link>
        </div>
      </div>
    </section>
  );
}
