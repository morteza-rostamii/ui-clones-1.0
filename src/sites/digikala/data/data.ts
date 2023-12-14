//import { HiBuildingStorefront } from "react-icons/hi2";
import {v4 as uuidv4} from 'uuid'
import { faker } from '@faker-js/faker';
import { fakerFA } from '@faker-js/faker';
import { createClient } from 'pexels';

const client = createClient('44G3aK3TlUYfmzmUmeXXnu4kz7B2xD7SjvrUIwNJNvqLZ0O7fqyWzMCD');

async function getImages({
  per_page=1,
  page=1, 
  category,
}: {
  per_page: number,
  page: number,
  category: string,
}) {
  let currentPage = 1;

  const images: any = await client.photos.search({
    query: category,
    per_page: per_page,
    page: page,
  });
  //console.log(images)
  let imgUrls = [];
  if (images?.photos.length) {
     imgUrls = images.photos.map((el:any, ) => {
      return el.src.landscape;
    })
  }
  return imgUrls;
}

export const getProducts = async ({
  numberOfProducts=5,
  page=1,
  term='product'
}: {
  numberOfProducts: number,
  page: number,
  term: string,
}) => {
  if (typeof window === 'undefined') return null;

  //const photos = await client.photos.search({ query: 'house', per_page: 4 });
  //console.log(photos)

  try {
    //if (!localStorage.getItem('products')) {
    const images: any = await getImages({per_page: numberOfProducts, category: term, page: page});

    let products = [];
    for (let i=0; i < numberOfProducts; i++) {
      
          /* 
          numOfBeds: faker.number.int({max: 8}),
          address: faker.address.streetAddress(true),
          name: faker.lorem.words(5),
          score: faker.datatype.float({ min: 0, max: 5, precision: 1 }),
          numOfReviews: faker.number.int({max: 200}),
          city: getRandomCityName(cityNames),
          */
      const product = {
        id: faker.string.uuid(),
        name: fakerFA.lorem.words(2),
        image: images[i],
        price: faker.number.int({min: 500, max: 2000}),
        percent: faker.number.int({min: 0, max: 100}) + '%',
        discount: faker.number.int({min: 400, max: 1200}), 
      }
      products.push(product);
    }
    
      //localStorage.setItem('products', JSON.stringify(products));
    //}
    
    //const localProducts = localStorage.getItem('products');
    //if (!localProducts) return []
    //return JSON.parse(localProducts);
    //console.log('---------', products);
    return products;
  } catch(error:any) {
    console.log(error.message);
  }
}

export const catItems = [
  {
    id: uuidv4(),
    image: '/digikala/categories/1fad42c6177e71db1a368e258c5bc004d6073a3a_1701193064.png',
    name: fakerFA.lorem.words(2), 
  },
  {
    id: uuidv4(),
    image: '/digikala/categories/3e3ec550569f974bc7e9d78c30b48612e5b1c606_1701193057.png',
    name: fakerFA.lorem.words(2), 
  },
  {
    id: uuidv4(),
    image: '/digikala/categories/5f3aa7bb8bde7c7433d31025d508ee3afd367773_1701193071.png',
    name: fakerFA.lorem.words(2), 
  },
  {
    id: uuidv4(),
    image: '/digikala/categories/5421d413c4f0a943cdc1cca473eb15536b13c98f_1701193112.png',
    name: fakerFA.lorem.words(2), 
  },
  {
    id: uuidv4(),
    image: '/digikala/categories/510816e9ec4cbfad2edbff2763e2059a504e571b_1701193038.png',
    name: fakerFA.lorem.words(2), 
  },
  {
    id: uuidv4(),
    image: '/digikala/categories/1fad42c6177e71db1a368e258c5bc004d6073a3a_1701193064.png',
    name: fakerFA.lorem.words(2), 
  },
  {
    id: uuidv4(),
    image: '/digikala/categories/ac63c44ab551dc24421aea53b92686a2f72906ff_1701193119.png',
    name: fakerFA.lorem.words(2), 
  },
  {
    id: uuidv4(),
    image: '/digikala/categories/ba175c709e3cc22e3fd7c65c7c6a21854d1c3765_1701193047.png',
    name: fakerFA.lorem.words(2), 
  },
  {
    id: uuidv4(),
    image: '/digikala/categories/1fad42c6177e71db1a368e258c5bc004d6073a3a_1701193064.png',
    name: fakerFA.lorem.words(2), 
  },
  {
    id: uuidv4(),
    image: '/digikala/categories/1fad42c6177e71db1a368e258c5bc004d6073a3a_1701193064.png',
    name: fakerFA.lorem.words(2), 
  },
  {
    id: uuidv4(),
    image: '/digikala/categories/1fad42c6177e71db1a368e258c5bc004d6073a3a_1701193064.png',
    name: fakerFA.lorem.words(2), 
  },
  {
    id: uuidv4(),
    image: '/digikala/categories/1fad42c6177e71db1a368e258c5bc004d6073a3a_1701193064.png',
    name: fakerFA.lorem.words(2), 
  },
]