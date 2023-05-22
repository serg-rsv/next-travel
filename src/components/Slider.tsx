'use client';

import { useKeenSlider } from 'keen-slider/react';

import 'keen-slider/keen-slider.min.css';

import Slide from '@/components/Slide';
import places from '@/staticData/places';

export default function Slider() {
  const [sliderRef] = useKeenSlider<HTMLUListElement>(
    {
      loop: true,
      breakpoints: {
        '(min-width: 480px)': {
          slides: { perView: 2, spacing: 8 },
        },
        '(min-width: 768px)': {
          slides: { perView: 3, spacing: 16 },
        },
        '(min-width: 1024px)': {
          slides: { perView: 4, spacing: 20 },
        },
        '(min-width: 1280px)': {
          slides: { perView: 6, spacing: 20 },
        },
      },
      slides: { perView: 1, spacing: 8 },
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
        <Slide key={id} id={id} img={img} name={name} location={location} />
      ))}
    </ul>
  );
}
