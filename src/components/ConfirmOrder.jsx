import React from "react";

const ConfirmOrder = ({ cart, active, setActive }) => {
  const total = cart.reduce((acc, curr) => acc + curr.totalPrice, 0);

  const confirmOrder = () => {
    cart.length = 0;
    setActive(false);
  };

  return (
    <div
      className={`w-full h-screen fixed ${
        active ? "flex" : "hidden"
      } top-0 left-0 bg-black/50 `}
    >
      <div className="flex flex-col gap-4 shadow-2xl  z-10 absolute top-1/2 left-1/2 -translate-1/2 w-2/6 rounded-lg h-fit p-8 bg-white max-md:w-3/3">
        <img
          src="./assets/images/icon-order-confirmed.svg"
          alt=""
          className="w-8 h-8"
        />
        <div className="space-y-4">
          <h2 className="font-bold text-gray-800 leading-0 text-2xl">
            Order confirmed
          </h2>
          <span className="text-gray-600 text-xs">
            We hope you enjoy your food
          </span>
        </div>
        <div className="flex flex-col w-full h-[30vh] bg-gray-50 overflow-y-auto p-2 gap-2">
          {cart.map((el, i) => (
            <div
              key={i}
              className="flex items-center justify-between w-full h-[8vh]"
            >
              <img
                src={el.image.thumbnail}
                alt=""
                className="h-full rounded-lg"
              />
              <div className="flex flex-col gap-2 justify-center mr-auto ml-2 h-full ">
                <h4 className="text-sm font-semibold leading-0">{el.name}</h4>
                <div className="space-x-3">
                  <span className="text-gray-600">X{el.quantity}</span>
                  <span className="text-gray-600">${el.price.toFixed(2)}</span>
                </div>
              </div>
              <span className="text-base font-bold">
                ${el.totalPrice.toFixed(2)}
              </span>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-between">
          <h2 className="font-semibold">Order total</h2>
          <span className="text-gray-700 font-bold">${total.toFixed(2)}</span>
        </div>
        <button
          onClick={confirmOrder}
          className="cursor-pointer w-full py-3 rounded-lg bg-orange-700 text-white"
        >
          Start new order
        </button>
      </div>
    </div>
  );
};

export default ConfirmOrder;
