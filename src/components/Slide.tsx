import Image from "next/image";

import { Place } from "@/staticData/types";

export default function Slide({ img, name, location }:Place) {
  return (
    <li className="keen-slider__slide relative p-1 bg-white rounded">
      <Image src={img.src} width={320} height={200} loading="lazy" alt={name} />
      <p className="font-bold text-sm dark:text-black">{name}</p>
      <p className="text-sm dark:text-black">{location}</p>
    </li>
  );
}
