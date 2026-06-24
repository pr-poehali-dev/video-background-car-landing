import Icon from '@/components/ui/icon';

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
  return (
    <main className="relative h-screen w-screen overflow-hidden bg-background">
      {/* Видеофон / силуэт машины */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://cdn.poehali.dev/projects/5eb8108d-ac51-4f62-a8ba-0fdd7f278728/files/2b0ea665-23eb-4c93-9a9b-9ab695bbfe01.jpg"
          alt=""
          className="h-full w-full object-cover opacity-90 animate-fade-in"
        />
        {/* Свет фар */}
        <div className="absolute inset-0 animate-headlights-on bg-[radial-gradient(ellipse_40%_50%_at_30%_55%,rgba(255,225,170,0.25),transparent_60%)]" />
        {/* Затемнение */}
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/85" />
      </div>

      {/* Шапка */}
      <header className="absolute inset-x-0 top-0 z-20 animate-fade-in opacity-0" style={{ animationDelay: '0.3s' }}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 md:px-10">
          <div className="flex items-baseline gap-1 font-display text-2xl tracking-wider">
            <span className="text-gradient-gold font-semibold">AURUM</span>
            <span className="text-foreground/80">Motors</span>
          </div>

          <nav className="hidden items-center gap-9 lg:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-5">
            <div className="hidden items-center gap-4 md:flex">
              {socials.map((s) => (
                <a key={s.name} href="#" className="text-foreground/60 transition-colors hover:text-gold">
                  <Icon name={s.icon} size={18} />
                </a>
              ))}
            </div>
            <div className="mx-1 hidden h-5 w-px bg-foreground/20 md:block" />
            <button className="flex items-center gap-2 text-sm uppercase tracking-[0.15em] text-foreground/80 transition-colors hover:text-gold">
              <Icon name="User" size={16} />
              <span className="hidden sm:inline">Войти</span>
            </button>
            <button className="relative text-foreground/80 transition-colors hover:text-gold">
              <Icon name="ShoppingBag" size={20} />
              <span className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[10px] font-semibold text-black">
                0
              </span>
            </button>
          </div>
        </div>
        <div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </header>

      {/* Центральный заголовок */}
      <section className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <span
          className="mb-6 animate-fade-up text-xs uppercase tracking-[0.5em] text-gold/80 opacity-0"
          style={{ animationDelay: '1.6s' }}
        >
          Коллекция 2026
        </span>

        <h1
          className="animate-title-reveal font-display text-5xl font-medium leading-tight text-foreground opacity-0 sm:text-6xl md:text-7xl lg:text-8xl"
          style={{ animationDelay: '1.2s' }}
        >
          Искусство <span className="text-gradient-gold italic">движения</span>
        </h1>

        <p
          className="mt-6 max-w-xl animate-fade-up text-sm font-light leading-relaxed tracking-wide text-foreground/60 opacity-0 md:text-base"
          style={{ animationDelay: '2s' }}
        >
          Эксклюзивные автомобили для тех, кто ценит безупречность в каждой детали
        </p>

        <button
          className="group mt-12 flex animate-fade-up items-center gap-3 border border-gold/50 bg-gold/5 px-10 py-4 text-sm uppercase tracking-[0.2em] text-gold backdrop-blur-sm transition-all duration-500 hover:border-gold hover:bg-gold hover:text-black opacity-0"
          style={{ animationDelay: '2.3s' }}
        >
          Каталог товаров
          <Icon name="ArrowRight" size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </section>

      {/* Подвал-индикатор */}
      <div
        className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-foreground/40 opacity-0"
        style={{ animation: 'fade-in 1s ease-out 2.8s forwards' }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">AURUM Motors · Premium</span>
      </div>
    </main>
  );
};

export default Index;
