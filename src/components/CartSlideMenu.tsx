"use client";

import { useCart, useCartOpen } from "@/store/Cart";
import type { CartOpenState, CartState } from "@/store/Cart";
import CloseIcon from "./Icons/CloseIcon";
import { useEffect, useState } from "react";
import { Product } from "@/types";
import Link from "next/link";

export default function CartSlideMenu({
  newProducts,
}: {
  newProducts: Product[];
}) {
  const { removeProduct, cartProducts } = useCart() as CartState;
  const { isOpen, setIsOpen } = useCartOpen() as CartOpenState;

  const [products, setProducts] = useState<Product[]>(newProducts);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const onClose = () => {
    setIsOpen(false);
  };

  const getImage = (name: string) => {
    const product = products.find((product) => product.name === name);
    return product?.images?.[0] ?? "https://placehold.it/64x64";
  };

  const CalculateTotalPrice = () => {
    let total = 0;
    cartProducts.forEach((cartProduct) => {
      const product = products.find(
        (product) => product.name === cartProduct.name
      );
      total += (product?.price ?? 0) * cartProduct.quantity;
    });
    return total;
  };

  useEffect(() => {
    setTotalPrice(CalculateTotalPrice());
  }, [totalPrice, cartProducts]);

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-30
        transition-colors ${isOpen ? "visible bg-black/50" : "invisible"}
      `}
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        id="cart"
        className={`
      ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } h-screen w-screen sm:max-w-xl absolute top-0 right-0 z-50 bg-white transition-transform duration-300 ease-in-out`}
      >
        <button
          className="flex justify-start items-center p-4 bg-primary-500 group border-b border-primary-500 w-full gap-3 transition-colors hover:bg-white duration-300 ease-in"
          aria-label="Close Cart"
          onClick={onClose}
        >
          {/* Reemplazar por un icono */}{" "}
          <p className="block sm:hidden text-2xl font-bold">{"<"}</p>
          <CloseIcon className="size-6 group-hover:transform group-hover:scale-125 duration-300 hidden sm:block" />
          <h2 className="text-xl font-semibold">Carrito de Compras</h2>
        </button>
        <div className="flex flex-col justify-between p-5 space-y-8">
          <section className="space-y-4">
            {cartProducts.map((cartProduct) => (
              <div
                key={cartProduct.name}
                className="flex justify-between relative"
              >
                <div className="flex items-center gap-4">
                  <img
                    className="size-16 object-cover rounded-lg"
                    src={
                      `${cartProduct.name}/${getImage(cartProduct.name)}` ||
                      "https://placehold.it/64x64"
                    }
                    alt={cartProduct.name}
                  />
                  <div>
                    <Link href={`/products/${cartProduct.name}`}>
                      <h3 className="text-lg font-semibold hover:underline">
                        {cartProduct.name}
                      </h3>
                    </Link>
                    <p className="text-gray-500">
                      Cantidad: {cartProduct.quantity}
                    </p>
                  </div>
                </div>
                {products && (
                  <p className="flex items-end pb-1 text-lg font-bold">
                    ${" "}
                    {(products.find(
                      (product) => product.name === cartProduct.name
                    )?.price ?? 0) * cartProduct.quantity}
                  </p>
                )}
                <button
                  className="absolute top-1 right-1"
                  aria-label="Remove from Cart"
                  onClick={() => {
                    removeProduct(cartProduct);
                    setTotalPrice(CalculateTotalPrice());
                  }}
                >
                  <CloseIcon className="size-6 hover:transform hover:scale-125 duration-300" />
                </button>
              </div>
            ))}
          </section>
          {cartProducts.length > 0 && (
            <section className="space-y-2">
              <div className="flex justify-between items-center pb-2 text-3xl font-bold ">
                <h2>Total:</h2>
                <h2>$ {totalPrice}</h2>
              </div>
              <Link
                href={"/cart"}
                onClick={onClose}
                className="flex justify-center items-center rounded-full w-full py-2 font-bold uppercase text-lg bg-primary-500  text-white hover:bg-primary-400/90 transition-colors duration-300 ease-in-out"
              >
                Iniciar Compra
              </Link>
              <button
                onClick={onClose}
                className="flex justify-center items-center py-2 w-full hover:underline"
              >
                Ver más productos
              </button>
            </section>
          )}
        </div>
      </aside>
    </div>
  );
}
