import { StaticImageData } from 'next/image';
import places001 from '../../public/gallery/places-001-960x600.jpg';
import places002 from '../../public/gallery/places-002-960x600.jpg';
import places003 from '../../public/gallery/places-003-960x600.jpg';
import places004 from '../../public/gallery/places-004-960x600.jpg';
import places005 from '../../public/gallery/places-005-960x600.jpg';
import places006 from '../../public/gallery/places-006-960x600.jpg';
import places007 from '../../public/gallery/places-007-960x600.jpg';
import places008 from '../../public/gallery/places-008-960x600.jpg';
import places009 from '../../public/gallery/places-009-960x600.jpg';
import places010 from '../../public/gallery/places-010-960x600.jpg';
import places011 from '../../public/gallery/places-011-960x600.jpg';
import places012 from '../../public/gallery/places-012-960x600.jpg';
import places013 from '../../public/gallery/places-013-960x600.jpg';
import places014 from '../../public/gallery/places-014-960x600.jpg';
import places015 from '../../public/gallery/places-015-960x600.jpg';
import places016 from '../../public/gallery/places-016-960x600.jpg';
import places017 from '../../public/gallery/places-017-960x600.jpg';
import places018 from '../../public/gallery/places-018-960x600.jpg';
import places019 from '../../public/gallery/places-019-960x600.jpg';
import places020 from '../../public/gallery/places-020-960x600.jpg';

type Place = {
  id: number;
  img: StaticImageData;
  name: string;
  location: string;
};

const images: Place[] = [
  {
    id: 1,
    img: places001,
    name: 'Antelope Canyon',
    location: 'Page, Arizona, USA',
  },
  {
    id: 2,
    img: places002,
    name: 'Ice Cave',
    location: 'Mendenhall Glacier, Juneau, Alaska, USA',
  },
  {
    id: 3,
    img: places003,
    name: 'Banff National Park',
    location: 'Canada',
  },
  {
    id: 4,
    img: places004,
    name: 'Ik-Kil Cenote near Chichen Itza',
    location: 'Mexico',
  },
  {
    id: 5,
    img: places005,
    name: 'Rainbow Mountain',
    location: 'Vinicunca, Cusco Region, Peru',
  },
  {
    id: 6,
    img: places006,
    name: 'Uyuni Salt Flats',
    location: 'Bolivia',
  },
  {
    id: 7,
    img: places007,
    name: 'Iguazu Waterfalls',
    location: 'Foz Do Iguazu, Brazil',
  },
  {
    id: 8,
    img: places008,
    name: 'Machu Picchu',
    location: 'Peru',
  },
  {
    id: 9,
    img: places009,
    name: 'Marble Caves in Patagonia',
    location: 'Chile',
  },
  {
    id: 10,
    img: places010,
    name: 'Provence Lavender Fields',
    location: 'Valensole, France',
  },
  {
    id: 11,
    img: places011,
    name: 'Plitvice Lakes National Park',
    location: 'Croatia',
  },
  {
    id: 12,
    img: places012,
    name: 'Mostar',
    location: 'Bosnia and Herzegovina',
  },
  {
    id: 13,
    img: places013,
    name: 'Keukenhof Gardens',
    location: 'Netherlands',
  },
  {
    id: 14,
    img: places014,
    name: 'Seven Sisters Chalk Cliffs',
    location: 'England, UK',
  },
  {
    id: 15,
    img: places015,
    name: 'Azores',
    location: 'Ponta Delgada, Sao Miguel, Portugal',
  },
  {
    id: 16,
    img: places016,
    name: 'Alto Douro',
    location: 'Portugal',
  },
  {
    id: 17,
    img: places017,
    name: 'Tunnel of Love',
    location: 'Klevan, Ukraine',
  },
  {
    id: 18,
    img: places018,
    name: 'Blue Lagoon',
    location: 'Iceland',
  },
  {
    id: 19,
    img: places019,
    name: 'Pamukkale',
    location: 'Turkey',
  },
  {
    id: 20,
    img: places020,
    name: 'Navagio Beach',
    location: 'Zakynthos Island, Greece',
  },
];

export default images;
