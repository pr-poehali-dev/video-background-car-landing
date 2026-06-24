import Icon from '@/components/ui/icon';

interface CatalogProps {
  open: boolean;
  onClose: () => void;
}

const categories = [
  { name: 'Exeed', logo: 'Gem' },
  { name: 'Chery', logo: 'Hexagon' },
  { name: 'Geely', logo: 'Shield' },
  { name: 'Haval', logo: 'Mountain' },
  { name: 'Tank', logo: 'Truck' },
  { name: 'Omoda', logo: 'Sparkles' },
  { name: 'Jaecoo', logo: 'Compass' },
  { name: 'Belgee', logo: 'Crown' },
];

const Catalog = ({ open, onClose }: CatalogProps) => {
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
            onClick={onClose}
            className="group flex items-center gap-3 font-display text-xs uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:text-accent2"
          >
            <Icon name="ArrowLeft" size={18} className="transition-transform duration-300 group-hover:-translate-x-1" />
            На главную
          </button>

          <div className="font-display text-xl font-bold uppercase tracking-[0.2em]">
            <span className="text-gradient-accent">Aurum</span>
            <span className="text-foreground/90"> Motors</span>
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
      </div>
    </div>
  );
};

export default Catalog;
