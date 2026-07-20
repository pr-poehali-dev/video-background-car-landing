export const CAR_CROSSOVER = 'https://cdn.poehali.dev/projects/5eb8108d-ac51-4f62-a8ba-0fdd7f278728/files/8627e9c3-43da-4c77-9cfe-4d24ca4326c8.jpg';
export const CAR_SEDAN = 'https://cdn.poehali.dev/projects/5eb8108d-ac51-4f62-a8ba-0fdd7f278728/files/59a6906b-8cb5-4da7-8fad-e5d8d39ff2db.jpg';
export const CAR_OFFROAD = 'https://cdn.poehali.dev/projects/5eb8108d-ac51-4f62-a8ba-0fdd7f278728/files/b2cdea5e-96ea-4196-99f7-b8fbc9ea3d6e.jpg';

const P_BRAKES = 'https://cdn.poehali.dev/projects/5eb8108d-ac51-4f62-a8ba-0fdd7f278728/files/74922c79-e04a-4b25-ab1b-0a6a18fdb12a.jpg';
const P_WHEEL = 'https://cdn.poehali.dev/projects/5eb8108d-ac51-4f62-a8ba-0fdd7f278728/files/c720cf1a-8ef0-4c38-ae4e-97e8bd9de82a.jpg';
const P_LIGHT = 'https://cdn.poehali.dev/projects/5eb8108d-ac51-4f62-a8ba-0fdd7f278728/files/332ee545-fcd2-4303-9795-f14388b8cecc.jpg';
const P_MATS = 'https://cdn.poehali.dev/projects/5eb8108d-ac51-4f62-a8ba-0fdd7f278728/files/5197b21e-bc73-4cd9-a5d6-4b57f0833031.jpg';
const P_FILTERS = 'https://cdn.poehali.dev/projects/5eb8108d-ac51-4f62-a8ba-0fdd7f278728/files/b69b0755-dbf2-439c-b4d5-e2549141cb65.jpg';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface Modification {
  name: string;
  image: string;
  products: Product[];
}

export interface Model {
  name: string;
  image: string;
  modifications?: Modification[];
  products?: Product[];
}

export interface Brand {
  name: string;
  logo: string;
  models: Model[];
}

const sampleProducts = (prefix: string): Product[] => [
  { id: `${prefix}-1`, name: 'Комплект дисков MECHWISH передние (пара) + колодки керамика в комплекте Chery Tiggo 8 / Tiggo 8 PRO / Tiggo 8 promax (1.6) / Jaecoo 2WD - тип УХО', price: 4290, image: P_BRAKES },
  { id: `${prefix}-2`, name: 'Литой диск R18', price: 12900, image: P_WHEEL },
  { id: `${prefix}-3`, name: 'Фара LED в сборе', price: 18500, image: P_LIGHT },
  { id: `${prefix}-4`, name: 'Коврики в салон, комплект', price: 3490, image: P_MATS },
  { id: `${prefix}-5`, name: 'Комплект фильтров ТО', price: 2790, image: P_FILTERS },
  { id: `${prefix}-6`, name: 'Тормозные диски, пара', price: 7900, image: P_BRAKES },
  { id: `${prefix}-7`, name: 'Дефлекторы окон', price: 1990, image: P_MATS },
  { id: `${prefix}-8`, name: 'Масляный фильтр', price: 690, image: P_FILTERS },
];

export const categories: Brand[] = [
  {
    name: 'Exeed',
    logo: 'Gem',
    models: [
      {
        name: 'TXL',
        image: CAR_CROSSOVER,
        modifications: [
          { name: 'TXL 1.6T Flagship', image: CAR_CROSSOVER, products: sampleProducts('exeed-txl-1') },
          { name: 'TXL 2.0T Premium', image: CAR_CROSSOVER, products: sampleProducts('exeed-txl-2') },
        ],
      },
      { name: 'VX', image: CAR_OFFROAD, products: sampleProducts('exeed-vx') },
      { name: 'LX', image: CAR_CROSSOVER, products: sampleProducts('exeed-lx') },
      { name: 'RX', image: CAR_CROSSOVER, products: sampleProducts('exeed-rx') },
    ],
  },
  {
    name: 'Chery',
    logo: 'Hexagon',
    models: [
      {
        name: 'Tiggo 7 Pro',
        image: CAR_CROSSOVER,
        modifications: [
          { name: 'Tiggo 7 Pro Max', image: CAR_CROSSOVER, products: sampleProducts('chery-t7-max') },
          { name: 'Tiggo 7 Pro Plus', image: CAR_CROSSOVER, products: sampleProducts('chery-t7-plus') },
        ],
      },
      { name: 'Tiggo 8 Pro', image: CAR_CROSSOVER, products: sampleProducts('chery-t8') },
      { name: 'Tiggo 4', image: CAR_CROSSOVER, products: sampleProducts('chery-t4') },
      { name: 'Arrizo 8', image: CAR_SEDAN, products: sampleProducts('chery-a8') },
    ],
  },
  {
    name: 'Geely',
    logo: 'Shield',
    models: [
      { name: 'Coolray', image: CAR_CROSSOVER, products: sampleProducts('geely-coolray') },
      {
        name: 'Atlas Pro',
        image: CAR_CROSSOVER,
        modifications: [
          { name: 'Atlas Pro 1.5T', image: CAR_CROSSOVER, products: sampleProducts('geely-atlas-15') },
          { name: 'Atlas Pro 2.0T', image: CAR_CROSSOVER, products: sampleProducts('geely-atlas-20') },
        ],
      },
      { name: 'Monjaro', image: CAR_CROSSOVER, products: sampleProducts('geely-monjaro') },
      { name: 'Emgrand', image: CAR_SEDAN, products: sampleProducts('geely-emgrand') },
    ],
  },
  {
    name: 'Haval',
    logo: 'Mountain',
    models: [
      { name: 'Jolion', image: CAR_CROSSOVER, products: sampleProducts('haval-jolion') },
      { name: 'F7', image: CAR_CROSSOVER, products: sampleProducts('haval-f7') },
      { name: 'Dargo', image: CAR_OFFROAD, products: sampleProducts('haval-dargo') },
      { name: 'H9', image: CAR_OFFROAD, products: sampleProducts('haval-h9') },
    ],
  },
  {
    name: 'Tank',
    logo: 'Truck',
    models: [
      {
        name: 'Tank 300',
        image: CAR_OFFROAD,
        modifications: [
          { name: 'Tank 300 City', image: CAR_OFFROAD, products: sampleProducts('tank-300-city') },
          { name: 'Tank 300 Off-Road', image: CAR_OFFROAD, products: sampleProducts('tank-300-off') },
        ],
      },
      { name: 'Tank 500', image: CAR_OFFROAD, products: sampleProducts('tank-500') },
      { name: 'Tank 700', image: CAR_OFFROAD, products: sampleProducts('tank-700') },
    ],
  },
  {
    name: 'Omoda',
    logo: 'Sparkles',
    models: [
      { name: 'C5', image: CAR_CROSSOVER, products: sampleProducts('omoda-c5') },
      { name: 'S5', image: CAR_SEDAN, products: sampleProducts('omoda-s5') },
    ],
  },
  {
    name: 'Jaecoo',
    logo: 'Compass',
    models: [
      { name: 'J7', image: CAR_CROSSOVER, products: sampleProducts('jaecoo-j7') },
      { name: 'J8', image: CAR_OFFROAD, products: sampleProducts('jaecoo-j8') },
    ],
  },
  {
    name: 'Belgee',
    logo: 'Crown',
    models: [
      { name: 'X50', image: CAR_CROSSOVER, products: sampleProducts('belgee-x50') },
      { name: 'X70', image: CAR_CROSSOVER, products: sampleProducts('belgee-x70') },
    ],
  },
];