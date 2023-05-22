import Image from 'next/image';

import { Place } from '@/staticData/types';

export default function GalleryCard({ img, name, location }: Place) {
  return (
    <li className="grid">
      <a
        className="grid"
        href={img.src}
        data-pswp-width="960"
        data-pswp-height="600"
      >
        <figure className="flex flex-col h-full">
          <Image
            className="transition duration-200 hover:contrast-125 rounded-t-md"
            src={img.src}
            width={960}
            height={600}
            loading="lazy"
            alt={name}
          />
          <figcaption className="flex flex-col flex-grow">
            <div
              className="flex-grow p-4 rounded-b-md shadow-md bg-slate-100 dark:shadow-blue-500"
              data-caption
            >
              <p className="font-bold text-black">{name}</p>
              <div className="flex gap-1">
                <svg
                  className="w-5 h-5 dark:text-black"
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
                <p className="text-black">{location}</p>
              </div>
            </div>
          </figcaption>
        </figure>
      </a>
    </li>
  );
}
