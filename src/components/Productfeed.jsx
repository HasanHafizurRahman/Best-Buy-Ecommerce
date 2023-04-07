import React from "react";
import Product from "./Product";

const Productfeed = ({ products }) => {
  // console.log(products.title);
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 -mt-16 md:-mt-40 mx-auto">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Productfeed;
