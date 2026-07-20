import { useState } from 'react';
import Icon from '@/components/ui/icon';

interface CatalogProps {
  open: boolean;
  onClose: () => void;
}

const CAR_CROSSOVER = 'https://cdn.poehali.dev/projects/5eb8108d-ac51-4f62-a8ba-0fdd7f278728/files/8627e9c3-43da-4c77-9cfe-4d24ca4326c8.jpg';
const CAR_SEDAN = 'https://cdn.poehali.dev/projects/5eb8108d-ac51-4f62-a8ba-0fdd7f278728/files/59a6906b-8cb5-4da7-8fad-e5d8d39ff2db.jpg';
const CAR_OFFROAD = 'https://cdn.poehali.dev/projects/5eb8108d-ac51-4f62-a8ba-0fdd7f278728/files/b2cdea5e-96ea-4196-99f7-b8fbc9ea3d6e.jpg';

interface Model {
  name: string;
  image: string;
}

interface Brand {
  name: string;
  logo: string;
  models: Model[];
}

const categories: Brand[] = [
  {
    name: 'Exeed',
    logo: 'Gem',
    models: [
      { name: 'TXL', image: CAR_CROSSOVER },
      { name: 'VX', image: CAR_OFFROAD },
      { name: 'LX', image: CAR_CROSSOVER },
      { name: 'RX', image: CAR_CROSSOVER },
    ],
  },
  {
    name: 'Chery',
    logo: 'Hexagon',
    models: [
      { name: 'Tiggo 7 Pro', image: CAR_CROSSOVER },
      { name: 'Tiggo 8 Pro', image: CAR_CROSSOVER },
      { name: 'Tiggo 4', image: CAR_CROSSOVER },
      { name: 'Arrizo 8', image: CAR_SEDAN },
    ],
  },
  {
    name: 'Geely',
    logo: 'Shield',
    models: [
      { name: 'Coolray', image: CAR_CROSSOVER },
      { name: 'Atlas Pro', image: CAR_CROSSOVER },
      { name: 'Monjaro', image: CAR_CROSSOVER },
      { name: 'Emgrand', image: CAR_SEDAN },
    ],
  },
  {
    name: 'Haval',
    logo: 'Mountain',
    models: [
      { name: 'Jolion', image: CAR_CROSSOVER },
      { name: 'F7', image: CAR_CROSSOVER },
      { name: 'Dargo', image: CAR_OFFROAD },
      { name: 'H9', image: CAR_OFFROAD },
    ],
  },
  {
    name: 'Tank',
    logo: 'Truck',
    models: [
      { name: 'Tank 300', image: CAR_OFFROAD },
      { name: 'Tank 500', image: CAR_OFFROAD },
      { name: 'Tank 700', image: CAR_OFFROAD },
    ],
  },
  {
    name: 'Omoda',
    logo: 'Sparkles',
    models: [
      { name: 'C5', image: CAR_CROSSOVER },
      { name: 'S5', image: CAR_SEDAN },
    ],
  },
  {
    name: 'Jaecoo',
    logo: 'Compass',
    models: [
      { name: 'J7', image: CAR_CROSSOVER },
      { name: 'J8', image: CAR_OFFROAD },
    ],
  },
  {
    name: 'Belgee',
    logo: 'Crown',
    models: [
      { name: 'X50', image: CAR_CROSSOVER },
      { name: 'X70', image: CAR_CROSSOVER },
    ],
  },
];

const Catalog = ({ open, onClose }: CatalogProps) => {
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

  const handleClose = () => {
    onClose();
    setTimeout(() => setSelectedBrand(null), 700);
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-background transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Шапка каталога */}
      <header className="border-b border-foreground/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <button
            onClick={selectedBrand ? () => setSelectedBrand(null) : handleClose}
            className="group flex items-center gap-3 font-display text-xs uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:text-accent2"
          >
            <Icon name="ArrowLeft" size={18} className="transition-transform duration-300 group-hover:-translate-x-1" />
            {selectedBrand ? 'К брендам' : 'На главную'}
          </button>

          <div className="flex items-center gap-2 font-display text-xl font-extrabold uppercase tracking-tight">
            <span className="flex items-center gap-1">
              <span className="block h-5 w-1.5 skew-x-[-20deg] bg-accent2" />
              <span className="block h-5 w-1.5 skew-x-[-20deg] bg-accent2" />
            </span>
            <span className="text-foreground">China-Zone</span>
          </div>

          <button className="relative text-foreground/80 transition-colors hover:text-accent2">
            <Icon name="ShoppingBag" size={20} />
            <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent2 text-[10px] font-semibold text-black">
              0
            </span>
          </button>
        </div>
      </header>

      {/* Контент */}
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10 md:py-16">
        {!selectedBrand ? (
          <>
            <div className="mb-12 text-center md:text-left">
              <span className="font-display text-xs uppercase tracking-[0.4em] text-accent2">Каталог</span>
              <h1 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-5xl">
                Выберите бренд
              </h1>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
              {categories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setSelectedBrand(cat)}
                  className="group relative flex aspect-square flex-col items-center justify-center gap-4 rounded-2xl border border-foreground/10 bg-gradient-to-br from-white/[0.04] to-transparent shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-1 hover:border-accent2/50 hover:shadow-[0_20px_50px_-15px_rgba(249,115,22,0.35)]"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-foreground/5 text-foreground/70 transition-colors duration-300 group-hover:bg-accent2/15 group-hover:text-accent2">
                    <Icon name={cat.logo} size={32} />
                  </div>
                  <span className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-foreground/80 transition-colors duration-300 group-hover:text-foreground">
                    {cat.name}
                  </span>
                  <Icon
                    name="ArrowUpRight"
                    size={18}
                    className="absolute right-4 top-4 text-foreground/0 transition-all duration-300 group-hover:text-accent2"
                  />
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="mb-12 text-center md:text-left">
              <span className="font-display text-xs uppercase tracking-[0.4em] text-accent2">{selectedBrand.name}</span>
              <h1 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-5xl">
                Выберите модель
              </h1>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
              {selectedBrand.models.map((model) => (
                <button
                  key={model.name}
                  className="group relative flex aspect-square flex-col items-center justify-end overflow-hidden rounded-2xl border border-foreground/10 bg-gradient-to-br from-white/[0.04] to-transparent shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-1 hover:border-accent2/50 hover:shadow-[0_20px_50px_-15px_rgba(249,115,22,0.35)]"
                >
                  <img
                    src={model.image}
                    alt={model.name}
                    className="absolute inset-0 h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <span className="relative z-10 mb-5 font-display text-sm font-semibold uppercase tracking-[0.18em] text-foreground transition-colors duration-300 group-hover:text-accent2">
                    {model.name}
                  </span>
                  <Icon
                    name="ArrowUpRight"
                    size={18}
                    className="absolute right-4 top-4 z-10 text-foreground/0 transition-all duration-300 group-hover:text-accent2"
                  />
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Catalog;
