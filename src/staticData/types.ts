import { StaticImageData } from 'next/image';

export type Place = {
  id: number;
  img: StaticImageData;
  name: string;
  location: string;
};
