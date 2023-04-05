import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner1 from "../assets/smiling-young-man-buying-things-with-credit-card-holding-shopping-bags-looking-happy-standing-yellow-background.jpg";
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
            style={{ height: "450px" }}
            loading="lazy"
            src={banner2}
            alt="carousel"
          />
        </div>
        <div>
          <Image
            style={{ height: "450px" }}
            loading="lazy"
            src={banner1}
            alt="carousel"
          />
        </div>
        <div>
          <Image
            style={{ height: "450px" }}
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
