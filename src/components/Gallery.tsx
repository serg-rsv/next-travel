'use client';

import { useEffect } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';

import 'photoswipe/style.css';

import GalleryCard from '@/components/GalleryCard';
import places from '@/staticData/places';

export default function Gallery() {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: PhotoSwipe,
      loop: false,
      padding: { top: 20, bottom: 40, left: 20, right: 20 },
    });
    lightbox.on('uiRegister', function () {
      lightbox.pswp.ui.registerElement({
        name: 'custom-caption',
        order: 9,
        isButton: false,
        appendTo: 'root',
        html: 'Caption text',
        onInit: (el: HTMLElement) => {
          lightbox.pswp.on('change', () => {
            const currSlideElement = lightbox.pswp.currSlide.data.element;
            let captionHTML = '';
            if (currSlideElement) {
              const dataCaption =
                currSlideElement.querySelector('[data-caption]');
              if (dataCaption) {
                captionHTML = dataCaption.innerHTML;
              } else {
                // get caption from alt attribute
                captionHTML = currSlideElement
                  .querySelector('img')
                  .getAttribute('alt');
              }
            }
            el.innerHTML = captionHTML || '';
          });
        },
      });
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null;
    };
  }, []);

  return (
    <section id="gallery">
      <div className="container py-20 px-5">
        <h2 className="mb-12 md:mb-18 text-xl md:text-2xl font-bold text-center">
          Цікаві місця для подорожі
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {places.map(({ id, img, name, location }) => (
            <GalleryCard
              key={id}
              id={id}
              img={img}
              name={name}
              location={location}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
