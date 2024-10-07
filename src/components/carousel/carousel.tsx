"use client"

import React, { useState, useEffect } from 'react';
import { FaReact, FaPython, FaNodeJs } from 'react-icons/fa';




const gradientColors = [
    'from-blue-500 to-purple-500',
    'from-purple-500 to-purple-500',
    'from-purple-500 to-pink-500',
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Array of carousel items
  const carouselItems = [
    {
      icon: <FaReact className="text-6xl text-blue-500 mb-4" />,
      title: "React.js",
      description: "We will build the frontend using React.js.",
      bgColor: "bg-blue-100",
    },
    {
      icon: <FaPython className="text-6xl text-yellow-500 mb-4" />,
      title: "Python",
      description: "We will use Python for backend and AI integration.",
      bgColor: "bg-yellow-100",
    },
    {
      icon: <FaNodeJs className="text-6xl text-green-600 mb-4" />,
      title: "Node.js",
      description: "Node.js will handle server-side logic and API integration.",
      bgColor: "bg-green-100",
    },
  ];

 

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [carouselItems.length]);

  return (
    <div id="default-carousel" className="relative w-full">
      {/* Carousel Wrapper */}
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className={`${
              index === activeIndex ? 'block' : 'hidden'
            } duration-700 ease-in-out absolute flex flex-col items-center justify-center w-full h-full text-center ${item.bgColor}`}
          >
            {item.icon}
            <h2 className="text-black text-2xl font-bold">{item.title}</h2>
            <p className='text-gray-500'>{item.description}</p>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        onClick={() =>
          setActiveIndex((prevIndex) =>
            prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
          )
        }
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        {/* <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/50"> */}
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600">
          <svg
            className="w-4 h-4 text-blue-950"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1L1 5l4 4"
            />
          </svg>
        </span>
      </button>

      {/* Next Button */}
      <button
        onClick={() =>
          setActiveIndex((prevIndex) => (prevIndex + 1) % carouselItems.length)
        }
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
      >
        {/* <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50"> */}
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:from-blue-600 group-hover:via-purple-600 group-hover:to-pink-600">
          <svg
            className="w-4 h-4 text-blue-950"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  );
}
