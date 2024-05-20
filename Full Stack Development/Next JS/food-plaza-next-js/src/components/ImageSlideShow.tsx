"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  {
    image:
      "https://github.com/Nimit19/foodPlazaImages/blob/master/Hero/b1.png?raw=true",
    alt: "Hero Image",
  },
  {
    image:
      "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Hero Image",
  },
  {
    image:
      "https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Hero Image",
  },
];

export default function ImageSlideshow() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.image}
          className={`absolute z-[-15]  top-0 left-0 w-full h-full object-cover transition-transform duration-500 ease-in-out ${
            index === currentImageIndex
              ? "opacity-100 scale-100 translate-x-0 rotate-0 z-10"
              : "opacity-0 scale-110 -translate-x-4 -rotate-6"
          }`}
          alt={image.alt}
        />
      ))}
    </>
  );
}
