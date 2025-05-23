import React, { useState } from "react";
import ConfirmOrder from "./ConfirmOrder";

const Cart = ({ cart, calc, removeFromCart }) => {
  const total = cart.reduce((acc, curr) => acc + curr.totalPrice, 0);
  const [active, setActive] = useState(false);

  return (
    <>
      <div className="w-1/3 h-fit max-md:w-full">
        <div className="flex flex-col h-fit py-6 px-8 rounded-lg bg-white w-full gap-6">
          <h4 className="font-bold text-lg text-orange-700">
            Your Cart ({cart.length})
          </h4>
          {cart.length >= 1 ? (
            <div className="flex flex-col gap-6 w-full h-fit">
              <div className="flex flex-col gap-2 w-full h-[40vh] overflow-y-auto pr-1">
                {cart.map((el, i) => (
                  <div
                    key={i}
                    className="flex items-center w-full justify-between min-h-[10vh] py-4 border-b border-b-orange-700"
                  >
                    <div className="space-y-2">
                      <h3 className="font-bold text-sm">{el.name}</h3>
                      <div className="flex items-center gap-3">
                        <div className="space-x-3 w-30 ">
                          <span className="text-orange-700 font-semibold">
                            {el.quantity}X
                          </span>
                          <span className="text-gray-500">@${el.price}</span>
                          <span className="text-gray-700">
                            @${el.totalPrice}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 ml-3  ">
                          <img
                            src="./assets/images/icon-decrement-quantity.svg"
                            alt=""
                            className="w-4 h-4 rounded-full bg-orange-700 p-1"
                            onClick={() => calc(el.id, "dec")}
                          />
                          <span>{el.quantity}</span>
                          <img
                            src="./assets/images/icon-increment-quantity.svg"
                            alt=""
                            className="w-4 h-4 bg-orange-700 rounded-full  p-1"
                            onClick={() => calc(el.id, "inc")}
                          />
                        </div>
                      </div>
                    </div>
                    <img
                      src="./assets/images/icon-remove-item.svg"
                      alt=""
                      className="w-6 h-6 p-1 rounded-full border border-gray-300 cursor-pointer"
                      onClick={() => removeFromCart(i)}
                    />
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-between w-full">
                <h2 className="font-bold text-xl text-gray-700">Order Total</h2>
                <span className="text-2xl font-semibold">
                  ${total.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center justify-center py-3 px-6 bg-gray-300 rounded-lg gap-2">
                <img src="./assets/images/icon-carbon-neutral.svg" alt="" />
                <p className="text-gray-500 text-sm space-x-2">
                  this is a{" "}
                  <span className="text-black font-bold">carbon-neutral</span>
                  delivery
                </p>
              </div>
              <button
                onClick={() => setActive(true)}
                className="w-full py-3 rounded-lg bg-orange-700 text-white cursor-pointer"
              >
                Confirm Order
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-2">
              <img
                src="./assets/images/illustration-empty-cart.svg"
                alt=""
                className="aspect-auto w-full h-[20vh]"
              />
              <span className="text-orange-900 text-center">
                Your added items will appear here
              </span>
            </div>
          )}
        </div>
      </div>
      <ConfirmOrder cart={cart} active={active} setActive={setActive} />
    </>
  );
};

export default Cart;
