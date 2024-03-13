"use client";

import { useEffect, useState } from "react";

interface CartProduct {
  productName: string;
  quantity: number;
}

export default function FormProduct({ productName }: { productName: string }) {
  const [quantity, setQuantity] = useState<number>(1);
  const [cart, setCart] = useState<CartProduct[]>([] as CartProduct[]);

  useEffect(() => {
    const cartLS = JSON.parse(localStorage.getItem("cart") as string) ?? [];
    setCart(cartLS);
  }, []);

  useEffect(() => {
    if (cart.length === 0) return;
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const changeQuantity = (newQuantity: number) => {
    if (newQuantity < 1 || newQuantity > 99) return;
    setQuantity(newQuantity);
  };

  const addToCart = () => {
    if (cart.some((product) => product.productName === productName)) {
      const newCart = cart.map((product) => {
        if (product.productName === productName) {
          product.quantity = quantity;
        }
        return product;
      });

      setCart(newCart);
    } else {
      setCart([...cart, { productName: productName, quantity: quantity }]);
    }
  };

  return (
    <section className="flex flex-col gap-3">
      <div>
        <label htmlFor="quantity" className="text-xl">
          Cantidad:
        </label>
        <select
          className="border-2 border-primary-500  w-full rounded-full text-center text-xl cursor-pointer"
          value={quantity}
          onChange={(e) => changeQuantity(parseInt(e.target.value))}
          name="quantity"
          id="quantity"
        >
          {[...Array(10).keys()].map((i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
      <button
        onClick={addToCart}
        className="flex justify-center items-center rounded-full w-full  py-2 font-bold text-xl bg-primary-500  text-white hover:bg-primary-400/90 transition-colors duration-300 ease-in-out"
      >
        Agregar al carrito
      </button>
    </section>
  );
}
