import {v4 as uuidv4} from 'uuid'
import { faker } from '@faker-js/faker';

export const categories = (() => {
  if (typeof window === 'undefined') return null;

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

export const cities = (() => {
  if (typeof window === 'undefined') return null;

  return [
    {
      id: faker.string.uuid(),
      name: faker.location.city(),
      image: faker.image.urlLoremFlickr({
        category: 'city',
      }),
      distance: '19 minutes drive',
      numOfLocations: '1,234',
    },
    {
      id: faker.string.uuid(),
      name: faker.location.city(),
      image: faker.image.urlLoremFlickr({
        category: 'city',
      }),
      distance: '19 minutes drive',
      numOfLocations: '1,234',
    },
    {
      id: faker.string.uuid(),
      name: faker.location.city(),
      image: faker.image.urlLoremFlickr({
        category: 'city',
      }),
      distance: '19 minutes drive',
      numOfLocations: '1,234',
    },
    {
      id: faker.string.uuid(),
      name: faker.location.city(),
      image: faker.image.urlLoremFlickr({
        category: 'city',
      }),
      distance: '19 minutes drive',
      numOfLocations: '1,234',
    },
    {
      id: faker.string.uuid(),
      name: faker.location.city(),
      image: faker.image.urlLoremFlickr({
        category: 'city',
      }),
      distance: '19 minutes drive',
      numOfLocations: '1,234',
    },
    {
      id: faker.string.uuid(),
      name: faker.location.city(),
      image: faker.image.urlLoremFlickr({
        category: 'city',
      }),
      distance: '19 minutes drive',
      numOfLocations: '1,234',
    },
    {
      id: faker.string.uuid(),
      name: faker.location.city(),
      image: faker.image.urlLoremFlickr({
        category: 'city',
      }),
      distance: '19 minutes drive',
      numOfLocations: '1,234',
    },
    {
      id: faker.string.uuid(),
      name: faker.location.city(),
      image: faker.image.urlLoremFlickr({
        category: 'city',
      }),
      distance: '19 minutes drive',
      numOfLocations: '1,234',
    },
  ]
})()

export const authors = (() => {
  if (typeof window === 'undefined') return null;

  return [
    {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      avatar: faker.image.avatar(),
      image: faker.image.urlLoremFlickr({
        category: 'house',
      }),
      subTxt: '@Author Job',
      count: faker.number.int({max: 200}),
    },
    {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      avatar: faker.image.avatar(),
      image: faker.image.urlLoremFlickr({
        category: 'house',
      }),
      subTxt: '@Author Job',
      count: faker.number.int({max: 200}),
    },
    {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      avatar: faker.image.avatar(),
      image: faker.image.urlLoremFlickr({
        category: 'house',
      }),
      subTxt: '@Author Job',
      count: faker.number.int({max: 200}),
    },
    {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      avatar: faker.image.avatar(),
      image: faker.image.urlLoremFlickr({
        category: 'house',
      }),
      subTxt: '@Author Job',
      count: faker.number.int({max: 200}),
    },
    {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      avatar: faker.image.avatar(),
      image: faker.image.urlLoremFlickr({
        category: 'house',
      }),
      subTxt: '@Author Job',
      count: faker.number.int({max: 200}),
    },
    {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      avatar: faker.image.avatar(),
      image: faker.image.urlLoremFlickr({
        category: 'house',
      }),
      subTxt: '@Author Job',
      count: faker.number.int({max: 200}),
    },
    {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      avatar: faker.image.avatar(),
      image: faker.image.urlLoremFlickr({
        category: 'house',
      }),
      subTxt: '@Author Job',
      count: faker.number.int({max: 200}),
    },
    {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      avatar: faker.image.avatar(),
      image: faker.image.urlLoremFlickr({
        category: 'house',
      }),
      subTxt: '@Author Job',
      count: faker.number.int({max: 200}),
    },
    {
      id: faker.string.uuid(),
      name: faker.person.fullName(),
      avatar: faker.image.avatar(),
      image: faker.image.urlLoremFlickr({
        category: 'house',
      }),
      subTxt: '@Author Job',
      count: faker.number.int({max: 200}),
    },
    
  ]
})()

export const catTabs = (() => {
  if (typeof window === 'undefined') return null;
  
  return [
    {
      id: 0, 
      name: 'New York',
      term: 'new-york', 
    }, 
    {
      id: 1, 
      name: 'Tokyo',
      term: 'Tokyo', 
    },
    {
      id: 2, 
      name: 'Paris',
      term: 'paris'
    },
    {
      id: 3,
      name: 'London',
      term: 'london'
    }
  ]
})()

export const featuredLocations = (() => {
  if (typeof window === 'undefined') return null;
  
  return [
    {
      id: faker.string.uuid(),
      images: Array.from(new Array(4)).map((el:any,) => {
        return faker.image.urlLoremFlickr({
          category: 'city',
        });
      }),
      price: "$" + faker.number.int({max: 1000}),
      numOfBeds: faker.number.int({max: 8}),
      address: faker.address.streetAddress(true),
      name: faker.lorem.words(5),
      score: faker.datatype.float({ min: 0, max: 5, precision: 1 }),
      numOfReviews: faker.number.int({max: 200}),
    },
    {
      id: faker.string.uuid(),
      images: Array.from(new Array(4)).map((el:any,) => {
        return faker.image.urlLoremFlickr({
          category: 'city',
        });
      }),
      price: "$" + faker.number.int({max: 1000}),
      numOfBeds: faker.number.int({max: 8}),
      address: faker.address.streetAddress(true),
      name: faker.lorem.words(5),
      score: faker.datatype.float({ min: 0, max: 5, precision: 1 }),
      numOfReviews: faker.number.int({max: 200}),
    },
    {
      id: faker.string.uuid(),
      images: Array.from(new Array(4)).map((el:any,) => {
        return faker.image.urlLoremFlickr({
          category: 'city',
        });
      }),
      price: "$" + faker.number.int({max: 1000}),
      numOfBeds: faker.number.int({max: 8}),
      address: faker.address.streetAddress(true),
      name: faker.lorem.words(5),
      score: faker.datatype.float({ min: 0, max: 5, precision: 1 }),
      numOfReviews: faker.number.int({max: 200}),
    },
    {
      id: faker.string.uuid(),
      images: Array.from(new Array(4)).map((el:any,) => {
        return faker.image.urlLoremFlickr({
          category: 'city',
        });
      }),
      price: "$" + faker.number.int({max: 1000}),
      numOfBeds: faker.number.int({max: 8}),
      address: faker.address.streetAddress(true),
      name: faker.lorem.words(5),
      score: faker.datatype.float({ min: 0, max: 5, precision: 1 }),
      numOfReviews: faker.number.int({max: 200}),
    },
    {
      id: faker.string.uuid(),
      images: Array.from(new Array(4)).map((el:any,) => {
        return faker.image.urlLoremFlickr({
          category: 'city',
        });
      }),
      price: "$" + faker.number.int({max: 1000}),
      numOfBeds: faker.number.int({max: 8}),
      address: faker.address.streetAddress(true),
      name: faker.lorem.words(5),
      score: faker.datatype.float({ min: 0, max: 5, precision: 1 }),
      numOfReviews: faker.number.int({max: 200}),
    },
    {
      id: faker.string.uuid(),
      images: Array.from(new Array(4)).map((el:any,) => {
        return faker.image.urlLoremFlickr({
          category: 'city',
        });
      }),
      price: "$" + faker.number.int({max: 1000}),
      numOfBeds: faker.number.int({max: 8}),
      address: faker.address.streetAddress(true),
      name: faker.lorem.words(5),
      score: faker.datatype.float({ min: 0, max: 5, precision: 1 }),
      numOfReviews: faker.number.int({max: 200}),
    },
    {
      id: faker.string.uuid(),
      images: Array.from(new Array(4)).map((el:any,) => {
        return faker.image.urlLoremFlickr({
          category: 'city',
        });
      }),
      price: "$" + faker.number.int({max: 1000}),
      numOfBeds: faker.number.int({max: 8}),
      address: faker.address.streetAddress(true),
      name: faker.lorem.words(5),
      score: faker.datatype.float({ min: 0, max: 5, precision: 1 }),
      numOfReviews: faker.number.int({max: 200}),
    },
    {
      id: faker.string.uuid(),
      images: Array.from(new Array(4)).map((el:any,) => {
        return faker.image.urlLoremFlickr({
          category: 'city',
        });
      }),
      price: "$" + faker.number.int({max: 1000}),
      numOfBeds: faker.number.int({max: 8}),
      address: faker.address.streetAddress(true),
      name: faker.lorem.words(5),
      score: faker.datatype.float({ min: 0, max: 5, precision: 1 }),
      numOfReviews: faker.number.int({max: 200}),
    },
  ]
})()