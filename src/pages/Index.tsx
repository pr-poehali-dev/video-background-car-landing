import { useState } from 'react';
import Icon from '@/components/ui/icon';
import Catalog from '@/components/Catalog';
import Preloader from '@/components/Preloader';

const navItems = [
  { label: 'Главная', href: '#' },
  { label: 'О компании', href: '#about' },
  { label: 'Отзывы', href: '#reviews' },
  { label: 'Контакты', href: '#contacts' },
];

const socials = [
  { name: 'Instagram', icon: 'Instagram' },
  { name: 'Telegram', icon: 'Send' },
  { name: 'Youtube', icon: 'Youtube' },
];

const Index = () => {
  const [catalogOpen, setCatalogOpen] = useState(false);

  return (
    <>
    <Preloader />
    <main
      className={`relative h-screen w-screen overflow-hidden bg-background transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)] ${
        catalogOpen ? '-translate-x-1/4' : 'translate-x-0'
      }`}
    >
      {/* Видеофон */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source
            src="https://cdn.poehali.dev/projects/5eb8108d-ac51-4f62-a8ba-0fdd7f278728/bucket/1abf57e0-e45c-41e0-9c30-b76339f543b7.webm"
            type="video/webm"
          />
        </video>
        {/* Затемнение — чтобы читался текст */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-black/75" />
      </div>

      {/* Шапка */}
      <header className="absolute inset-x-0 top-0 z-20 animate-fade-in opacity-0" style={{ animationDelay: '4.7s' }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <div className="flex items-center gap-2 font-display text-xl font-extrabold uppercase tracking-tight">
            <span className="flex items-center gap-1">
              <span className="block h-5 w-1.5 skew-x-[-20deg] bg-accent2" />
              <span className="block h-5 w-1.5 skew-x-[-20deg] bg-accent2" />
            </span>
            <span className="text-foreground">China-Zone</span>
          </div>

          <nav className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link font-display">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <div className="hidden items-center gap-4 md:flex">
              {socials.map((s) => (
                <a key={s.name} href="#" className="text-foreground/50 transition-colors hover:text-accent2">
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
            <div className="mx-1 hidden h-5 w-px bg-foreground/15 md:block" />
            <button className="flex items-center gap-2 font-display text-xs uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:text-accent2">
              <Icon name="User" size={16} />
              <span className="hidden sm:inline">Войти</span>
            </button>
            <button className="relative text-foreground/80 transition-colors hover:text-accent2">
              <Icon name="ShoppingBag" size={20} />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-accent2 text-[10px] font-semibold text-black">
                0
              </span>
            </button>
          </div>
        </div>
        <div className="mx-auto h-px max-w-7xl bg-foreground/10" />
      </header>

      {/* Центральный заголовок — появляется и остаётся */}
      <section className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <span
          className="mb-6 animate-fade-up font-display text-xs uppercase tracking-[0.4em] text-accent2 opacity-0"
          style={{ animationDelay: '5.1s' }}
        >
          Доставка по РФ
        </span>

        <h1
          className="animate-title-reveal font-display text-4xl font-extrabold uppercase leading-[1.05] tracking-tight text-foreground opacity-0 sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ animationDelay: '4.9s' }}
        >
          Запчасти и аксессуары
          <br />
          <span className="text-gradient-accent">для китайских авто</span>
        </h1>

        <p
          className="mt-6 max-w-md animate-fade-up text-sm font-light leading-relaxed text-foreground/55 opacity-0"
          style={{ animationDelay: '5.4s' }}
        >
          Эксклюзивные автомобили для тех, кто ценит безупречность в каждой детали
        </p>

        <button
          onClick={() => setCatalogOpen(true)}
          className="group mt-10 flex animate-fade-up items-center gap-3 bg-accent2 px-9 py-4 font-display text-xs font-semibold uppercase tracking-[0.2em] text-black opacity-0 transition-all duration-300 hover:bg-foreground"
          style={{ animationDelay: '5.7s' }}
        >
          Каталог товаров
          <Icon name="ArrowRight" size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </section>
    </main>

    <Catalog open={catalogOpen} onClose={() => setCatalogOpen(false)} />
    </>
  );
};

export default Index;