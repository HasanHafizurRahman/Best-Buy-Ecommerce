import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../assets/vecteezy_paper-art-shopping-online-on-smartphone-and-new-buy-sale_3690391.jpg";
import banner2 from "../assets/vecteezy_online-1.jpg";
import banner3 from "../assets/vecteezy_online-3.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full bg-gradient-to-t from-yellow-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image
            className="h-60 sm:h-80 md:h-96 lg:h-120 xl:h-144"
            loading="lazy"
            src={banner2}
            alt="carousel"
          />
        </div>
        <div>
          <Image
            className="h-60 sm:h-80 md:h-96 lg:h-120 xl:h-144"
            loading="lazy"
            src={banner1}
            alt="carousel"
          />
        </div>
        <div>
          <Image
            className="h-60 sm:h-80 md:h-96 lg:h-120 xl:h-144"
            loading="lazy"
            src={banner3}
            alt="carousel"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
