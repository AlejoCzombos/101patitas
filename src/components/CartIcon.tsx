"use client";

import { CartContextProps, useCart } from "@/context/CartContext";
import { useEffect, useState } from "react";

export default function CartIcon() {
  const { setIsOpen, isOpen } = useCart() as CartContextProps;

  const [cartLength, setCartLength] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCartLength(cart.length);
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <button
      className="py-4 px-1 relative border-2 border-transparent text-gray-800 rounded-full hover:text-gray-400 focus:outline-none focus:text-gray-500  transition duration-150 ease-in-out"
      aria-label="Cart"
      onClick={handleClick}
    >
      <svg
        className="size-7"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
      </svg>
      {cartLength > 0 && (
        <span className="absolute inset-0 object-right-top -mr-6">
          <div className="inline-flex justify-center items-center px-1.5 py-0.5 border-2 border-white bg-primary-500  rounded-full text-xs font-semibold leading-4 bg text-white">
            {cartLength}
          </div>
        </span>
      )}
    </button>
  );
}
