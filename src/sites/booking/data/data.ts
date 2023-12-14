import {v4 as uuidv4} from 'uuid'
import { faker } from '@faker-js/faker';
import { cityNames } from './const';

import { createClient } from 'pexels';

const client = createClient('44G3aK3TlUYfmzmUmeXXnu4kz7B2xD7SjvrUIwNJNvqLZ0O7fqyWzMCD');
//const query = 'Nature';

export const categories = (() => {
  if (typeof window === 'undefined') return null;

  return [
    {
      id: faker.string.uuid(),
      gridItem: 'item-1',
      image: '/booking/banners/pexels-photo-247532.webp',
      title: faker.lorem.words(5),
      count: faker.number.int(2000)
    },
    {
      id: faker.string.uuid(),
      gridItem: 'item-2',
      image: '/booking/banners/pexels-photo-2869499.webp',
      title: faker.lorem.words(5),
      count: faker.number.int(2000)
    },
    {
      id: faker.string.uuid(),
      gridItem: 'item-3',
      image: '/booking/banners/pexels-photo-7031413.webp',
      title: faker.lorem.words(5),
      count: faker.number.int(2000)
    },
    {
      id: faker.string.uuid(),
      gridItem: 'item-4',
      image: '/booking/banners/SVG-subcribe2.webp',
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
      name: 'All',
      term: 'all', 
    },
    {
      id: 1, 
      name: 'New York',
      term: 'new-york', 
    }, 
    {
      id: 2, 
      name: 'Tokyo',
      term: 'tokyo', 
    },
    {
      id: 3, 
      name: 'Paris',
      term: 'paris'
    },
    {
      id: 4,
      name: 'London',
      term: 'london'
    }
  ]
})()

// get random city names
function getRandomCityName(names:any) {
  const keys = Object.keys(names);
  const randomIndex = Math.floor(Math.random() * keys.length);
  const randomCityName = names[keys[randomIndex]];
  return randomCityName;
}

export const fetchFeaturedLocations =  async () => {
  if (typeof window === 'undefined') return null;
  
  const numOfLocations = 30;
  //const photos = await client.photos.search({ query: 'house', per_page: 4 });
  //console.log(photos)

  const promises = [];
  let currentPage = 1;

  try {
    if (!localStorage.getItem('locations')) {
      for (let i=0; i < numOfLocations; i++) {
        promises.push(
          (async () => {
            const images: any = await client.photos.search({
              query: 'house',
              per_page: 4,
              page: currentPage,
            });
            console.log(images)
            let imgUrls = [];
            if (images?.photos.length) {
               imgUrls = images.photos.map((el:any, ) => {
                return el.src.landscape;
              })
            } 
    
            return {
              id: faker.string.uuid(),
              images: imgUrls,
              price: "$" + faker.number.int({max: 1000}),
              numOfBeds: faker.number.int({max: 8}),
              address: faker.address.streetAddress(true),
              name: faker.lorem.words(5),
              score: faker.datatype.float({ min: 0, max: 5, precision: 1 }),
              numOfReviews: faker.number.int({max: 200}),
              city: getRandomCityName(cityNames),
            };
          })()
        );

        currentPage += 1;
      }
    
      const locations = await Promise.all(promises);
      //console.log(locations)
      
      localStorage.setItem('locations', JSON.stringify(locations));
    }
    
    const localLocations = localStorage.getItem('locations');
    if (!localLocations) return []
    return JSON.parse(localLocations);
  } catch(error:any) {
    console.log(error.message);
  }
}