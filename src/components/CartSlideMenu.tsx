"use client";

import { useCart, useCartOpen } from "@/store/Cart";
import type { CartOpenState, CartState } from "@/store/Cart";
import CloseIcon from "./Icons/CloseIcon";
import { useState } from "react";
import { Product } from "@/types";

export default function CartSlideMenu({
  newProducts,
}: {
  newProducts: Product[];
}) {
  const { removeProduct, cartProducts } = useCart() as CartState;
  const { isOpen, setIsOpen } = useCartOpen() as CartOpenState;

  const [products, setProducts] = useState<Product[]>(newProducts);

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center z-30
        transition-colors ${isOpen ? "visible bg-black/50" : "invisible"}
      `}
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        id="cart"
        className={`
      ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } h-screen w-[60%] max-w-lg absolute top-0 right-0 z-50 bg-white transition-transform duration-300 ease-in-out overflow-y-auto`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-2xl font-semibold">Carrito</h2>
          <button
            className="text-2xl"
            aria-label="Close Cart"
            onClick={onClose}
          >
            <CloseIcon className="size-8 hover:transform hover:scale-125 hover:fill-red-500 duration-300" />
          </button>
        </div>
        {cartProducts.map((cartProduct) => (
          <div key={cartProduct.name} className="p-4">
            <div className="flex justify-between items-center relative">
              <div className="flex items-center gap-4">
                <img
                  className="size-16 object-contain rounded-lg"
                  src="https://placehold.it/64x64"
                  alt="Chapa"
                />
                <div>
                  <h3 className="text-lg font-semibold">{cartProduct.name}</h3>
                  <p className="text-gray-500">
                    Cantidad: {cartProduct.quantity}
                  </p>
                </div>
              </div>
              {products && (
                <p className="">
                  ${" "}
                  {(products.find(
                    (product) => product.name === cartProduct.name
                  )?.price ?? 0) * cartProduct.quantity}
                </p>
              )}
              <button
                className="absolute top-1 right-1"
                aria-label="Remove from Cart"
                onClick={() => removeProduct(cartProduct)}
              >
                <CloseIcon className="size-6 hover:transform hover:scale-125 duration-300" />
              </button>
            </div>
          </div>
        ))}
      </aside>
    </div>
  );
}
