import React from "react";
import Product from "./Product";

const Productfeed = ({ products }) => {
  // console.log(products.title);
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 -mt-16 md:-mt-40 mx-auto">
      {products.slice(12, 16).map((product) => (
        <Product key={product.id} product={product} />
      ))}
      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />
      <div className="md:col-span-2">
        {products.slice(2, 3).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      {products.slice(3, 12).map((product) => (
        <Product key={product.id} product={product} />
      ))}
      {products.slice(16, products.length).map((product) => (
        <Product key={product.id} product={product} />
      ))}
      {products.slice(0, 1).map((product) => (
        <Product key={product.id} product={product} />
      ))}
      <div className="md:col-span-2">
        {products.slice(1, 2).map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Productfeed;
