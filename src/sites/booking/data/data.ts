import {v4 as uuidv4} from 'uuid'
import { faker } from '@faker-js/faker';

export const categories = (() => {
  if (!window) return [];

  return [
    {
      id: faker.string.uuid(),
      gridItem: 'item-1',
      image: 'https://chisfis-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F5764100%2Fpexels-photo-5764100.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D3%26h%3D750%26w%3D1260&w=1920&q=75',
      title: faker.lorem.words(5),
      count: faker.number.int(2000)
    },
    {
      id: faker.string.uuid(),
      gridItem: 'item-2',
      image: 'https://chisfis-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F247532%2Fpexels-photo-247532.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&w=1920&q=75',
      title: faker.lorem.words(5),
      count: faker.number.int(2000)
    },
    {
      id: faker.string.uuid(),
      gridItem: 'item-3',
      image: 'https://chisfis-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F2869499%2Fpexels-photo-2869499.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&w=1920&q=75',
      title: faker.lorem.words(5),
      count: faker.number.int(2000)
    },
    {
      id: faker.string.uuid(),
      gridItem: 'item-4',
      image: 'https://chisfis-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F7031413%2Fpexels-photo-7031413.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26dpr%3D2%26h%3D750%26w%3D1260&w=1920&q=75',
      title: faker.lorem.words(5),
      count: faker.number.int(2000)
    },
  ]
})()