"use client";

import { useState } from "react";

export default function FormProduct() {
  const [quantity, setQuantity] = useState<number>(1);

  const changeQuantity = (newQuantity: number) => {
    if (newQuantity < 1 || newQuantity > 99) return;
    setQuantity(newQuantity);
  };

  const formAction = () => {
    // This is a fake form action
    console.log(`Adding ${quantity} products to the cart`);
  };

  return (
    <form action={formAction} className="flex flex-row gap-2 md:gap-5">
      <div className="grid grid-cols-3 divide-x-2 divide-primary justify-stretch border-2 border-primary w-2/5 rounded-full text-xl md:text-2xl overflow-hidden">
        <button
          onClick={() => {
            changeQuantity(quantity - 1);
          }}
          className="hover:bg-primary/75 transition-colors duration-300 ease-in-out"
        >
          -
        </button>
        <p className="flex justify-center items-center">{quantity}</p>
        <button
          onClick={() => {
            changeQuantity(quantity + 1);
          }}
          className="hover:bg-primary/75 transition-colors duration-300 ease-in-out"
        >
          +
        </button>
      </div>
      <button
        type="submit"
        className="flex justify-center items-center rounded-full w-3/5 border-2 border-primary py-2 font-bold text-lg md:text-2xl bg-primary text-white hover:bg-primary/80 transition-colors duration-300 ease-in-out"
      >
        Agregar al carrito
      </button>
    </form>
  );
}
