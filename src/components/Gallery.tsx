'use client';
import { useEffect } from 'react';
import Image from 'next/image';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipe from 'photoswipe';
import 'photoswipe/style.css';
import places from '@/staticData/places';

export default function Gallery() {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: '#gallery',
      children: 'a',
      pswpModule: PhotoSwipe,
      loop: false,
    });
    lightbox.on('uiRegister', function () {
      lightbox.pswp.ui.registerElement({
        name: 'custom-caption',
        order: 9,
        isButton: false,
        appendTo: 'root',
        html: 'Caption text',
        onInit: (el: HTMLElement, pswp: any) => {
          lightbox.pswp.on('change', () => {
            const currSlideElement = lightbox.pswp.currSlide.data.element;
            let captionHTML = '';
            if (currSlideElement) {
              const dataCaption =
                currSlideElement.querySelector('[data-caption]');
              if (dataCaption) {
                // get caption from element with class hidden-caption-content
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
    <section id="gallery" className="container py-20 px-5">
      <h2 className="mb-12 md:mb-18 text-xl md:text-2xl font-bold text-center">
        Цікаві місця для подорожі
      </h2>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {places.map(({ id, img, name, location }) => {
          return (
            <li key={id}>
              <a
                href={img.src}
                data-pswp-width="960"
                data-pswp-height="600"
                target="_blank"
              >
                <figure>
                  <Image
                    className="rounded-t-md"
                    src={img.src}
                    width={960}
                    height={600}
                    loading="lazy"
                    alt="Краєвид"
                  />
                  <figcaption>
                    <div className="p-4 rounded-b-md shadow-md" data-caption>
                      <p className="font-bold">{name}</p>
                      <div className="flex gap-1">
                        <svg
                          className="w-5 h-5 dark:text-white"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                          ></path>
                        </svg>
                        <p>{location}</p>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
