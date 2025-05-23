import React, { useState } from "react";

const Cards = ({ products, addToCart }) => {
  return (
    <div className="flex flex-col gap-5 w-3/5 max-md:w-full">
      <h1 className="text-5xl font-semibold">Desserts</h1>
      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
        {products.map((product, index) => (
          <div className="w-full h-fit flex flex-col gap-4" key={index}>
            <div className="relative h-[30vh] w-full">
              <img
                src={product.image.desktop}
                alt={product.name}
                className="h-full w-full object-cover rounded-lg"
              />
              <div className="absolute -bottom-3 border-2 border-orange-700 left-1/2 -translate-x-1/2 w-1/2 bg-white rounded-full h-fit py-1 px-2">
                <button
                  className="w-full h-full flex items-center gap-2 text-sm justify-center cursor-pointer"
                  onClick={() => addToCart(product.id)}
                >
                  <img
                    src="./assets/images/icon-add-to-cart.svg"
                    alt=""
                    className="w-4 h-4"
                  />
                  add to cart
                </button>
              </div>
            </div>
            <span className="text-gray-700">{product.category}</span>
            <h3 className="text-lg font-bold leading-0">{product.name}</h3>
            <span className="text-lg text-orange-700">
              ${product.price.toFixed(2)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
