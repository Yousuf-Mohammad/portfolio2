'use client';
import Image from 'next/image';
import BentoCard from './BentoCard';
import groups from '../public/skills/data.json';

// Intentional column spans across a 6-col grid (3 balanced rows of 6).
const SPANS = [
  'md:col-span-2',
  'md:col-span-4',
  'md:col-span-2',
  'md:col-span-2',
  'md:col-span-2',
  'md:col-span-4',
  'md:col-span-2',
];

const TechChip = ({ name, logo }) => {
  if (logo) {
    return (
      <div className="group/chip flex items-center gap-2 rounded-full border border-line bg-bone/[0.03] py-1.5 pl-1.5 pr-3 transition-colors duration-300 hover:border-acid/40 hover:bg-bone/[0.06]">
        <span className="flex size-7 items-center justify-center rounded-full bg-bone/95 p-1">
          <Image
            src={logo}
            width={24}
            height={24}
            alt={name}
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </span>
        <span className="font-mono text-xs text-bone">{name}</span>
      </div>
    );
  }
  return (
    <span className="rounded-full  border border-line bg-bone/[0.03] px-5 py-3 font-mono text-xs text-dust transition-colors duration-300 hover:border-acid/40 hover:text-bone">
      {name}
    </span>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative z-20 w-full bg-atelier px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <div className="mb-4 flex items-center gap-4">
            <span className="font-mono text-sm text-acid">02</span>
            <span className="kicker text-dust">Capabilities</span>
          </div>
          <h2 className="font-display display-tight text-5xl font-semibold text-bone sm:text-6xl md:text-7xl">
            The <span className="italic text-acid">toolkit</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-6">
          {groups.map((group, i) => (
            <BentoCard
              key={group.category}
              className={`${SPANS[i] ?? 'md:col-span-2'} min-h-[180px]`}
            >
              <div className="flex h-full flex-col">
                <div className="mb-5 flex items-baseline gap-3">
                  <span className="font-mono text-xs text-acid">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-xl tracking-tight text-bone sm:text-2xl">
                    {group.category}
                  </h3>
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <TechChip key={item.name} name={item.name} logo={item.logo} />
                  ))}
                </div>
              </div>
            </BentoCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
