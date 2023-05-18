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
    name: 'Каньйон Антилопи',
    location: 'Пейдж, Аризона, США',
  },
  {
    id: 2,
    img: places002,
    name: 'Льодова печера',
    location: 'Джуно, Аляска, США',
  },
  {
    id: 3,
    img: places003,
    name: 'Нціональний парк Банфф',
    location: 'Канада',
  },
  {
    id: 4,
    img: places004,
    name: 'Сенот Ік-Кіль біля Чічен-Іца',
    location: 'Мексика',
  },
  {
    id: 5,
    img: places005,
    name: 'Райдужний гора',
    location: 'Вінікунка, регіон Куско, Перу',
  },
  {
    id: 6,
    img: places006,
    name: 'Солоні плато Уюні',
    location: 'Болівія',
  },
  {
    id: 7,
    img: places007,
    name: 'Водоспади Ігуасу',
    location: 'Фоз-ду-Ігуасу, Бразилія',
  },
  {
    id: 8,
    img: places008,
    name: 'Мачу-Пікчу',
    location: 'Перу',
  },
  {
    id: 9,
    img: places009,
    name: 'Мармурові печери в Патагонії',
    location: 'Чилі',
  },
  {
    id: 10,
    img: places010,
    name: 'Лавандові поля в Провансі',
    location: 'Валансоль, Франція',
  },
  {
    id: 11,
    img: places011,
    name: 'Нціональний парк Плітвіцькі Леза',
    location: 'Хорватія',
  },
  {
    id: 12,
    img: places012,
    name: 'Мостар',
    location: 'Боснія і Герцеговина',
  },
  {
    id: 13,
    img: places013,
    name: 'Сади Койкенгоф',
    location: 'Нідерланди',
  },
  {
    id: 14,
    img: places014,
    name: 'Сім сестер, крейда, скелі',
    location: 'Англія, Великобританія',
  },
  {
    id: 15,
    img: places015,
    name: 'Азорські острови',
    location: 'Понта-Дельгада, Португалія',
  },
  {
    id: 16,
    img: places016,
    name: 'Альто-Дору',
    location: 'Португалія',
  },
  {
    id: 17,
    img: places017,
    name: 'Тунель кохання',
    location: 'Клеван, Україна',
  },
  {
    id: 18,
    img: places018,
    name: 'Блакитна лагуна',
    location: 'Ісландія',
  },
  {
    id: 19,
    img: places019,
    name: 'Памуккале',
    location: 'Туреччина',
  },
  {
    id: 20,
    img: places020,
    name: 'Пляж Наваджіо',
    location: 'Острів Закінтос, Греція',
  },
];

export default images;
