import { useState, useEffect } from 'react';

const word = 'CHINA-ZONE'.split('');

const Preloader = () => {
  const [hidden, setHidden] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2600);
    const hideTimer = setTimeout(() => setHidden(true), 3400);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-black ${
        fadeOut ? 'animate-preloader-out' : ''
      }`}
    >
      <div className="flex items-center">
        {/* Две оранжевые палочки — выезжают справа */}
        <div className="mr-3 flex animate-slide-bars items-center gap-1.5 opacity-0 sm:mr-5 sm:gap-2">
          <span className="block h-9 w-2.5 skew-x-[-20deg] bg-accent2 sm:h-14 sm:w-4 md:h-20 md:w-5" />
          <span className="block h-9 w-2.5 skew-x-[-20deg] bg-accent2 sm:h-14 sm:w-4 md:h-20 md:w-5" />
        </div>

        {/* Буквы названия — прилетают слева по очереди */}
        <div className="flex font-display text-4xl font-extrabold uppercase tracking-tight text-white sm:text-6xl md:text-7xl">
          {word.map((letter, i) => (
            <span
              key={i}
              className="inline-block animate-letter-in opacity-0"
              style={{ animationDelay: `${0.7 + i * 0.08}s` }}
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
