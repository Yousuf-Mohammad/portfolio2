'use client';
import { useMediaQuery } from '../hooks/use-media-query';
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useRef, useCallback, useEffect } from 'react';
import data from "../public/projects/data.json"
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
    <div id='projects' className='md:sticky md:top-0  relative flex flex-col justify-center items-center bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)] md:min-h-screen rounded-2xl p-24  h-full'>
        <h1 className='md:text-6xl text-4xl md:mb-10 font-bold font-[exo] text-gray-700 text-center underline underline-offset-4'>Some Of My Projects</h1>
        
    <div
      className=" w-full  dark:bg-gradient-to-b from-black from-10% to-gray-950 to-100%  rounded-md  "
      onMouseLeave={handleMouseLeave}>
      {data.map((image) => (
        <Link href={`/project/${image.id}`}
          key={image.id}
          className={`p-4 cursor-pointer relative sm:flex items-center justify-between`}
          onMouseEnter={() => handleImageHover(image)}>
          {!isDesktop && (
             <Image
             src={image.src}
             width={300}
             height={400}
             className="sm:w-32 sm:h-20 w-full h-52 object-cover rounded-md"
             alt={image.name}
             loading="lazy"
             placeholder="blur"
             blurDataURL={image.src}
           />
          )}
          <h2
            className={`font-[exo] dark:text-gray-300 uppercase md:text-4xl sm:text-2xl text-xl font-bold sm:py-6 py-2 leading-[100%] relative ${
              activeImage?.id === image?.id
                ? 'mix-blend-difference z-20 text-gray-300'
                : 'text-gray-700'
            }`}>
            {image.name}
          </h2>
          <button
            className={`sm:block hidden p-4 rounded-full transition-all duration-300 ease-out  ${
              activeImage?.id === image?.id
                ? 'mix-blend-difference z-20 bg-white text-black'
                : ''
            }`}>
            <span className='font-bold flex items-center justify-center '> 
              <MoveUpRight className="w-8 h-8" /></span>
          </button>
          <div
            className={`h-[2px] dark:bg-white bg-black absolute bottom-0 left-0 transition-all duration-300 ease-linear ${
              activeImage?.id === image?.id ? 'w-full' : 'w-0'
            }`}
          />
        </Link>
      ))}
      {isDesktop && activeImage && (
        <img
          src={activeImage.src}
          alt={activeImage.alt}
          className={`fixed dark:bg-gray-950 bg-white object-cover pointer-events-none z-10 w-[300px] h-[400px] rounded-lg`}
          style={{
            left: `${cursorPosition.x}px`,
            top: `${cursorPosition.y}px`,
            transform: `translate(-50%, -50%) scale(${scale})`,
            opacity: opacity,
          }}
        />
      )}
    </div>
    </div>
  );
};
export default Projects;
