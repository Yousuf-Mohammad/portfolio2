'use client';
import { useMediaQuery } from '../hooks/use-media-query';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useRef, useCallback, useEffect } from 'react';
import data from "../public/projects/data.json";
import Button from './Button';

// Home shows a curated slice; the full set lives at /work.
const HOME_COUNT = 6;
const featured = data.slice(0, HOME_COUNT);

const Projects = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const [activeImage, setActiveImage] = useState(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [scale, setScale] = useState(0.5);
  const timeoutRef = useRef(null);
  const requestRef = useRef(null);
  const prevCursorPosition = useRef({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    const { clientX, clientY } = e;
    const dx = clientX - prevCursorPosition.current.x;
    const dy = clientY - prevCursorPosition.current.y;
    const easeAmount = 0.2;
    const newX = prevCursorPosition.current.x + dx * easeAmount;
    const newY = prevCursorPosition.current.y + dy * easeAmount;
    setCursorPosition({ x: newX, y: newY });
    prevCursorPosition.current = { x: newX, y: newY };
  }, []);

  useEffect(() => {
    const updateCursorPosition = (e) => {
      if (requestRef.current) return;
      requestRef.current = requestAnimationFrame(() => {
        handleMouseMove(e);
        requestRef.current = null;
      });
    };
    window.addEventListener('mousemove', updateCursorPosition);
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [handleMouseMove]);

  const handleImageHover = useCallback(
    (image) => {
      if (activeImage !== image) {
        setActiveImage(image);
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
          setOpacity(1);
          setScale(1);
        }, 50);
      } else {
        setOpacity(1);
        setScale(1);
      }
    },
    [activeImage]
  );

  const handleMouseLeave = useCallback(() => {
    setOpacity(0);
    setScale(0.5);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setActiveImage(null);
    }, 300);
  }, []);

  return (
    <section
      id="projects"
      className="relative z-20 min-h-screen w-full rounded-t-[2.5rem] border-t border-line bg-coal px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <div className="mb-4 flex items-center gap-4">
              <span className="font-mono text-sm text-acid">03</span>
              <span className="kicker text-dust">Selected Work</span>
            </div>
            <h2 className="font-display display-tight text-5xl font-semibold text-bone sm:text-6xl md:text-7xl">
              Things I&apos;ve <span className="italic text-acid">built</span>
            </h2>
          </div>
          <span className="hidden font-mono text-sm text-dust sm:block">
            ({String(data.length).padStart(2, '0')})
          </span>
        </div>

        <div className="border-t border-line" onMouseLeave={handleMouseLeave}>
          {featured.map((image, index) => (
            <Link
              href={`/project/${image.id}`}
              key={image.id}
              className="group relative flex flex-col gap-4 border-b border-line py-6 transition-colors duration-300 sm:flex-row sm:items-center sm:justify-between sm:py-7"
              onMouseEnter={() => handleImageHover(image)}
            >
              <div className="flex items-center gap-5 sm:gap-8">
                <span className="font-mono text-xs text-dust/70 transition-colors duration-300 group-hover:text-acid">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h3
                  className={`font-display text-3xl font-medium uppercase leading-none tracking-tight transition-all duration-300 sm:text-5xl md:text-6xl ${
                    activeImage?.id === image?.id
                      ? 'translate-x-2 text-acid'
                      : 'text-bone'
                  }`}
                >
                  {image.name}
                </h3>
              </div>

              {!isDesktop && (
                <Image
                  src={image.src}
                  width={300}
                  height={400}
                  className="h-52 w-full rounded-xl object-cover ring-1 ring-line"
                  alt={image.name}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={image.src}
                />
              )}

              <div className="flex items-center gap-4 self-start sm:self-auto">
                <span className="hidden font-mono text-xs uppercase tracking-widest text-dust sm:block">
                  View case
                </span>
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-300 ${
                    activeImage?.id === image?.id
                      ? 'border-acid bg-acid text-ink'
                      : 'border-line text-bone'
                  }`}
                >
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button linkString="/work" buttonName="Browse all work →" />
        </div>

        {isDesktop && activeImage && (
          <img
            src={activeImage.src}
            alt={activeImage.name}
            className="pointer-events-none fixed z-30 h-[340px] w-[260px] rounded-2xl object-cover shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)] ring-1 ring-white/15"
            style={{
              left: `${cursorPosition.x}px`,
              top: `${cursorPosition.y}px`,
              transform: `translate(-50%, -50%) scale(${scale}) rotate(-3deg)`,
              opacity: opacity,
              transition: 'opacity 0.3s ease, transform 0.3s cubic-bezier(0.16,1,0.3,1)',
            }}
          />
        )}
      </div>
    </section>
  );
};

export default Projects;
