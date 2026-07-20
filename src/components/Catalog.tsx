import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { categories, Brand, Model, Modification, Product } from '@/data/catalog';

interface CatalogProps {
  open: boolean;
  onClose: () => void;
}

const Tile = ({
  image,
  label,
  isCar,
  onClick,
}: {
  image?: string;
  label: string;
  isCar?: boolean;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    className="group relative flex aspect-square flex-col items-center justify-end overflow-hidden rounded-2xl border border-foreground/10 bg-gradient-to-br from-white/[0.04] to-transparent shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-1 hover:border-accent2/50 hover:shadow-[0_20px_50px_-15px_rgba(249,115,22,0.35)]"
  >
    {image && (
      <>
        <img
          src={image}
          alt={label}
          className={`absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
            isCar ? 'opacity-90' : ''
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
      </>
    )}
    <span className="relative z-10 mb-5 px-3 text-center font-display text-sm font-semibold uppercase tracking-[0.14em] text-foreground transition-colors duration-300 group-hover:text-accent2">
      {label}
    </span>
    <Icon
      name="ArrowUpRight"
      size={18}
      className="absolute right-4 top-4 z-10 text-foreground/0 transition-all duration-300 group-hover:text-accent2"
    />
  </button>
);

const Catalog = ({ open, onClose }: CatalogProps) => {
  const [brand, setBrand] = useState<Brand | null>(null);
  const [model, setModel] = useState<Model | null>(null);
  const [modification, setModification] = useState<Modification | null>(null);

  const reset = () => {
    setBrand(null);
    setModel(null);
    setModification(null);
  };

  const handleClose = () => {
    onClose();
    setTimeout(reset, 700);
  };

  const goBack = () => {
    if (modification) setModification(null);
    else if (model) setModel(null);
    else if (brand) setBrand(null);
    else handleClose();
  };

  const backLabel = modification || model || brand ? 'Назад' : 'На главную';

  const selectModel = (m: Model) => {
    setModel(m);
    if (!m.modifications) setModification(null);
  };

  const products: Product[] | null = modification
    ? modification.products
    : model && !model.modifications
    ? model.products ?? null
    : null;

  const heading = () => {
    if (products) return { tag: modification ? modification.name : model!.name, title: 'Товары' };
    if (model && model.modifications) return { tag: model.name, title: 'Выберите модификацию' };
    if (brand) return { tag: brand.name, title: 'Выберите модель' };
    return { tag: 'Каталог', title: 'Выберите бренд' };
  };
  const { tag, title } = heading();

  return (
    <div
      className={`fixed inset-0 z-50 overflow-y-auto bg-background transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        open ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Шапка каталога */}
      <header className="sticky top-0 z-10 border-b border-foreground/10 bg-background/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <button
            onClick={goBack}
            className="group flex items-center gap-3 font-display text-xs uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:text-accent2"
          >
            <Icon name="ArrowLeft" size={18} className="transition-transform duration-300 group-hover:-translate-x-1" />
            {backLabel}
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
        <div className="mb-12 text-center md:text-left">
          <span className="font-display text-xs uppercase tracking-[0.4em] text-accent2">{tag}</span>
          <h1 className="mt-3 font-display text-3xl font-extrabold uppercase tracking-tight text-foreground md:text-5xl">
            {title}
          </h1>
        </div>

        {/* Уровень: товары */}
        {products ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:gap-6 lg:grid-cols-4">
            {products.map((p) => (
              <div
                key={p.id}
                className="group mx-auto flex min-h-[500px] w-full max-w-[300px] flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-gradient-to-b from-white/[0.04] to-transparent shadow-[0_10px_40px_-15px_rgba(0,0,0,0.8)] transition-all duration-300 hover:-translate-y-1 hover:border-accent2/40"
              >
                <div className="relative aspect-square overflow-hidden bg-black/40">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col px-4 pb-4 pt-3">
                  <h3 className="mb-2 line-clamp-2 min-h-[2.5rem] text-sm font-medium leading-snug text-foreground/90" title={p.name}>
                    {p.name}
                  </h3>
                  <div className="mt-auto">
                    <div className="mb-3 font-display text-2xl font-extrabold text-foreground">
                      {p.price.toLocaleString('ru-RU')} ₽
                    </div>
                    <div className="flex gap-2">
                      <button className="flex flex-1 items-center justify-center gap-2 bg-accent2 py-3 font-display text-xs font-semibold uppercase tracking-[0.12em] text-black transition-colors hover:bg-foreground">
                        <Icon name="ShoppingCart" size={15} />
                        В корзину
                      </button>
                      <button className="flex items-center justify-center border border-foreground/15 px-3.5 text-foreground/70 transition-colors hover:border-accent2/60 hover:text-accent2">
                        <Icon name="Info" size={17} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : model && model.modifications ? (
          /* Уровень: модификации */
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {model.modifications.map((m) => (
              <Tile key={m.name} image={m.image} label={m.name} isCar onClick={() => setModification(m)} />
            ))}
          </div>
        ) : brand ? (
          /* Уровень: модели */
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {brand.models.map((m) => (
              <Tile key={m.name} image={m.image} label={m.name} isCar onClick={() => selectModel(m)} />
            ))}
          </div>
        ) : (
          /* Уровень: бренды */
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setBrand(cat)}
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
        )}
      </div>
    </div>
  );
};

export default Catalog;