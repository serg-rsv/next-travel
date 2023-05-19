'use client';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';

import places from '@/staticData/places';

export default function Slider() {
  const [sliderRef] = useKeenSlider<HTMLUListElement>(
    {
      loop: true,
      breakpoints: {
        '(min-width: 480px)': {
          slides: { perView: 2, spacing: 5 },
        },
        '(min-width: 768px)': {
          slides: { perView: 3, spacing: 10 },
        },
        '(min-width: 1024px)': {
          slides: { perView: 4, spacing: 20 },
        },
        '(min-width: 1280px)': {
          slides: { perView: 6, spacing: 20 },
        },
      },
      slides: { perView: 1 },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on('created', () => {
          slider.container.addEventListener('mouseover', () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener('mouseout', () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on('dragStarted', clearNextTimeout);
        slider.on('animationEnded', nextTimeout);
        slider.on('updated', nextTimeout);
      },
    ]
  );
  return (
    <ul ref={sliderRef} className="keen-slider">
      {places.map(({ id, img, name, location }) => (
        <li
          key={id}
          className="keen-slider__slide relative p-1 bg-white rounded"
        >
          <Image
            src={img.src}
            width={960}
            height={600}
            loading="lazy"
            alt={name}
          />
          <p className="font-bold text-sm dark:text-black">{name}</p>
          <p className="text-sm dark:text-black">{location}</p>
        </li>
      ))}
    </ul>
  );
}
