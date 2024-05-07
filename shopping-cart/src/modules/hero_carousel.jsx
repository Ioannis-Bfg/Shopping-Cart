import React, { useState, useEffect } from "react";
import Hero from "./hero";

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroes = [
    <Hero
      image={"/hero.jpg"}
      subheader={"New Collection"}
      header={"Summer 2024 FOS Collection"}
      paragraph={`Get ready for the summer with our newest collection of cameras.
          Lightweight, high-quality and perfect for capturing those special
          moments. Explore our new
          summer 2024 FOS collection
          today.`}
    />,
    <Hero
      subheader={"Landscape Collection"}
      header={"Landscape Photography"}
      image={"/hero_landscape.jpg"}
      paragraph={`Enjoy the beauty of nature with our newest collection of cameras.
          Lightweight, high-quality and perfect for capturing the stunning
          landscapes and vistas. Capture the memories
          of your adventures with FOS
          today.`}
    />,
    <Hero
      subheader={"Portrait Collection"}
      header={"Perfect for portraits"}
      image={"/hero_portrait.jpg"}
      paragraph={`Enjoy capturing those special moments with our portrait collection of cameras.
          Ideal for capturing portraits and 
          family photos. Capture every single smile and laugh with our cameras.`}
    />,
    <Hero
      subheader={"Nature Collection"}
      header={"Capture all the beauty of Nature"}
      image={"/hero_nature.jpg"}
      paragraph={`Capture the beauty of the world around you with our newest collection of cameras.
          Lightweight, high-quality and perfect for capturing the stunning
          landscapes, wildlife and vistas. Explore our new
          nature collection
          today.`}
    />,
  ];

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? heroes.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === heroes.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 5000); // Change the interval duration as needed

    return () => {
      clearInterval(interval);
    };
  }, [goToNext]);
  return (
    <div className="relative flex items-center justify-center">
      {/* Previous Button */}
      <button
        onClick={goToPrev}
        className="absolute flex justify-center items-center left-20 z-10 p-2 bg-white rounded-full shadow-md cursor-pointer *:hover:stroke-white hover:bg-sky-500 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-left"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </button>

      {/* Carousel Slides */}
      <div className="overflow-hidden w-full">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {heroes.map((hero, index) => (
            <div className="flex-shrink-0 w-full" key={index}>
              {hero}
            </div>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute right-20 z-10 p-2 bg-white rounded-full shadow-md cursor-pointer *:hover:stroke-white hover:bg-sky-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-right "
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 w-24 h-2 rounded-lg bg-white opacity-70 shadow-sky-600">
        <div
          className="h-full bg-sky-400  transition-all rounded-[3px] duration-500 ease-in-out"
          style={{
            width: `(100 / ${heroes.length}) * (+${currentIndex + 1})` + "%",
            transform: `translateX(${currentIndex * (300 / (heroes.length - 1))}%)`,
            transition: "transform 0.5s ease-in-out", // Adjust the duration and timing function as needed
          }}
        />
      </div>
    </div>
  );
}
