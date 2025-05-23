import React, { useState } from "react";
import Cards from "./Cards";
import { products } from "../data";
import Cart from "./Cart";

const Layout = () => {
  const [data, setData] = useState(products);
  const [cart, setCart] = useState([]);

  const calcItem = (id, op) => {
    const findIncart = cart.find((el) => el.id === id);
    if (findIncart) {
      if (op === "inc") {
        findIncart.quantity += 1;
        findIncart.totalPrice = findIncart.quantity * findIncart.price;
      } else {
        if (findIncart.quantity <= 1) return;
        findIncart.quantity -= 1;
        findIncart.totalPrice = findIncart.quantity * findIncart.price;
      }
    }
    setCart([...cart]);
  };

  const removeFromCart = (index) => {
    cart.splice(index, 1);
    setCart([...cart]);
  };

  const addToCart = (id) => {
    const findItem = data.find((el) => el.id === id);
    const inCart = cart.find((el) => el.id === findItem.id);

    if (inCart) {
      inCart.quantity += 1;
      inCart.totalPrice = inCart.quantity * findItem.price;
      setCart([...cart]);
    } else {
      setCart([
        ...cart,
        { ...findItem, quantity: 1, totalPrice: findItem.price },
      ]);
    }
  };

  return (
    <section className="flex gap-10 p-16 max-md:flex-col max-md:px-3">
      <Cards products={data} addToCart={addToCart} />
      <Cart cart={cart} calc={calcItem} removeFromCart={removeFromCart} />
    </section>
  );
};

export default Layout;
