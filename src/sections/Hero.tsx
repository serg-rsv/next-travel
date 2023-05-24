import Image from 'next/image';
import Link from 'next/link';

import heroPic from 'public/images/hero.jpg';

export default function Hero() {
  return (
    <section id="home" className="relative h-screen w-full">
      <Image
        className="object-cover object-top"
        src={heroPic}
        fill
        priority
        alt="Зелені острови"
      />
      <div className="container flex flex-col w-full mx-auto pt-20 px-5 lg:px-16 xl:px-36">
        <h1 className="mb-4 text-xl drop-shadow-md md:text-4xl xl:text-5xl font-bold uppercase text-white">
          Життя коротке,
          <br /> а світ безмежний
        </h1>
        <Link
          className="self-baseline px-4 py-2 border rounded-md bg-white bg-opacity-50 hover:bg-opacity-75 text-blue-500 font-semibold md:text-lg xl:text-2xl z-[1] transition duration-300"
          href="/contacts"
        >
          Залишити заявку
        </Link>
      </div>
    </section>
  );
}
