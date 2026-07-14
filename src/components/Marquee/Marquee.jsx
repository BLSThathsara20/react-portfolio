import React from 'react';

const Marquee = ({ items = [], speed = 'normal' }) => {
  const loop = [...items, ...items];
  const anim = speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee';

  return (
    <div className="relative overflow-hidden border-y border-border marquee-mask py-4">
      <div className={`flex w-max gap-8 ${anim}`}>
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display text-xl sm:text-2xl tracking-tight text-ink-soft whitespace-nowrap flex items-center gap-8"
          >
            {item}
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
