import { faker } from '@faker-js/faker';
import { fakerFA } from '@faker-js/faker';
import { createClient } from 'pexels';

//const client = createClient('44G3aK3TlUYfmzmUmeXXnu4kz7B2xD7SjvrUIwNJNvqLZ0O7fqyWzMCD');

export type TNavItem = {
  id: number, 
  label: string,
}

export const navItems: TNavItem[] = [
  {
    id: 0,
    label: 'خانه',
  },
  {
    id: 1,
    label: 'شاپ',
  },
  {
    id: 2,
    label: 'محصولات',
  },
  {
    id: 3,
    label: 'بلاگ',
  },
  {
    id: 4,
    label: 'درباره ما',
  },
]

export type TCategory = {
  id: string,
  name: string,
  image: string,
}

export async function fetchCategories() {
  const categories: TCategory[] = [
    {
      id: faker.string.uuid(),
      name: fakerFA.word.noun({length: 4}),
      image: '/chair-site/cats/cate-5.jpg',
    },
    {
      id: faker.string.uuid(),
      name: fakerFA.word.noun({length: 4}),
      image: '/chair-site/cats/cate-7.jpg',
    },
    {
      id: faker.string.uuid(),
      name: fakerFA.word.noun({length: 4}),
      image: '/chair-site/cats/cate-8.jpg',
    },
    {
      id: faker.string.uuid(),
      name: fakerFA.word.noun({length: 4}),
      image: '/chair-site/cats/cate-10.jpg',
    },
    {
      id: faker.string.uuid(),
      name: fakerFA.word.noun({length: 4}),
      image: '/chair-site/cats/cate-11.jpg',
    },
    {
      id: faker.string.uuid(),
      name: fakerFA.word.noun({length: 4}),
      image: '/chair-site/cats/cate-11.jpg',
    },
    {
      id: faker.string.uuid(),
      name: fakerFA.word.noun({length: 4}),
      image: '/chair-site/cats/cate-11.jpg',
    },
  ] 

  return categories;
} 

export type TProduct = {
  id: string,
  name: string,
  price: number,
  discount: number,
  images: string[],
}

// images:
const images: string[] = [
  '/chair-site/products/rio-t-pu-white-2-scaled-687x1024.jpg.webp',
  '/chair-site/products/1_main_rio-t-pu-white-685x1024.jpg.webp',
  '/chair-site/products/lotus-s16-pu-sinij-chernyj-metall10-642x1024.jpg.webp',
  '/chair-site/products/lotus-s16-pu-sinij-chernyj-metall1-642x1024.jpg.webp',
  '/chair-site/products/lotus-s6-pu-belyj-chernyj-metall10-577x1024.jpg.webp',
  '/chair-site/products/lotus-s6-pu-belyj-chernyj-metall1-577x1024.jpg.webp',
  '/chair-site/products/lotus-s2-pu-oranzhevyj-chernyj-metall10-647x1024.jpg.webp',
  '/chair-site/products/lotus-s2-pu-oranzhevyj-chernyj-metall1-647x1024.jpg.webp',
  '/chair-site/products/little-boss-grey_2-661x1024.jpg.webp',
  '/chair-site/products/little-boss-grey_1-661x1024.jpg.webp',
  '/chair-site/products/dublin-mesh-grey_interior_1.jpg',
  '/chair-site/products/dublin-mesh-grey-1.jpg',
  '/chair-site/products/drift-m-ekokozha-chernyj18-scaled-661x1024.jpg.webp',
  '/chair-site/products/drift-m-ekokozha-chernyj1-scaled-661x1024.jpg.webp',

  '/chair-site/products/deco-setka-chernaya18-scaled-698x1024.jpg.webp',
  '/chair-site/products/deco-setka-chernaya1-scaled-698x1024.jpg.webp',
  '/chair-site/products/breedge_milan-mesh-grey_2-661x1024.jpg.webp',
  '/chair-site/products/breedge_milan-mesh-grey_1-661x1024.jpg.webp',
  '/chair-site/products/breedge_little-boss_fabric-green-1-661x1024.jpg.webp',
];

export async function fetchProducts({
  count=1,
}:{
  count: number,
}) {
  const products: TProduct[] = [];
  let imgIndex: number = 0;

  for (let i=0; i < count; i++) {
    let imgUrls: string[] = []; 
    for (let j=0; j < 2; j++) {
      imgUrls.push(images[imgIndex]);
      imgIndex++;
    }

    const product: TProduct = {
      id: faker.string.uuid(),
      name: fakerFA.commerce.productName(),
      price: faker.number.float({min: 1000, max: 10000, precision: 2}),
      discount: faker.number.float({min: 1000, max: 10000, precision: 2}),
      images: imgUrls,
    }

    products.push(product);
  }

  return products;
}

// sidebar categories

export type TGroup ={
  id: number,
  name: string,
  count: number,
  subCats: TGroup[],
}

export const groups: TGroup[] = [
  {
    id: 0,
    name: 'کابینت',
    count: 5,
    subCats: [
      {id: 10, name: 'چوبی', count: 33, subCats: []},
    ],
  },
  {
    id: 1,
    name: 'کمد',
    count: 88,
    subCats: [],
  },
  {
    id: 2,
    name: 'صندلی',
    count: 7,
    subCats: [
      {id: 11, name: 'اداری', count: 47, subCats: []},
      {id: 12, name: 'بازی', count: 26, subCats: []},
    ],
  },
  {
    id: 3,
    name: 'قفسه',
    count: 3,
    subCats: [],
  },
  {
    id: 4,
    name: 'مبل',
    count: 6,
    subCats: [
      {id: 13, name: 'راحتی', count: 76, subCats: []},
    ],
  },
]

export type TColor = {
  id: number,
  name: string,
  code: string,
  persianName: string,
}

export const colors: TColor[] = [
  {
    id: 0, 
    name: 'red',
    code: 'bg-red-500',
    persianName: 'قرمز'
  },
  {
    id: 1, 
    name: 'blue',
    code: 'bg-sky-500',
    persianName: 'آبی'
  },
  {
    id: 2, 
    name: 'orange',
    code: 'bg-orange-500',
    persianName: 'نارنجی'
  },
  {
    id: 3, 
    name: 'white',
    code: 'bg-gray-50',
    persianName: 'سفید'
  },
  {
    id: 4, 
    name: 'green',
    code: 'bg-green-500',
    persianName: 'سبز'
  },
  {
    id: 5, 
    name: 'pink',
    code: 'bg-pink-500',
    persianName: 'صورتی'
  },
]

























export const explorer = {
  id: '1',
  name: 'root',
  isFolder: true,
  items: [
    {
      id: '2',
      name: 'public',
      isFolder: true,
      items: [
        {
          id: '3',
          name: 'public nested 1',
          isFolder: true,
          items: [
            {
              id: '4',
              name: 'index.html',
              isFolder: false,
              items: []
            },
            {
              id: '5',
              name: 'hello.html',
              isFolder: false,
              items: []
            },
          ]
        },
        {
          id: '6',
          name: 'public__nested_file',
          isFolder: false,
          items: []
        }
      ],
    },
    {
      id: '7',
      name: 'src',
      isFolder: true,
      items: [
        {
          id: '8',
          name: 'App.js',
          isFolder: false,
          items: []
        },
      ]
    }
  ]
}