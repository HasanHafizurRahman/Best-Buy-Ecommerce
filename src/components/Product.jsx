import Image from "next/image";
import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import { AiFillStar } from "react-icons/ai";

const Max = 5;
const Min = 3;
const Product = ({ product }) => {
  const [star] = useState(Math.floor(Math.random() * Max - Min + 1) + Min);
  const { id, title, description, price, category, image } = product;

  const [hasPrime] = useState(Math.random() < 0.5);
  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <div className="absolute top-2 right-2 text-sx italic text-gray-400">
        {category}
      </div>
      <Image
        src={image}
        alt="product"
        height={200}
        width={200}
        // objectFit="contain"

        className="m-auto center object-contain"
      />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(star)
          .fill()
          .map((_, i) => (
            <AiFillStar key={i} className="text-yellow-500" />
          ))}
      </div>

      <p className="text-xs my-2 line-clamp-2">{description}</p>

      <div className="mb-5">
        <CurrencyFormat value={price} prefix="BDT " suffix="/-" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img className="w-12" src="https://links.papareact.com/fdw" alt="" />
          <p className="text-xs text-gray-500">Free Next-Day Delivery!</p>
        </div>
      )}
      <button className="mt-auto button">Add To Cart</button>
    </div>
  );
};

export default Product;
