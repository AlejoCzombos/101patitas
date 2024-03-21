"use client";

import { useCart, useCartOpen } from "@/store/Cart";
import type { CartOpenState, CartState } from "@/store/Cart";
import CloseIcon from "./Icons/CloseIcon";
import { useEffect, useState } from "react";
import { Product } from "@/types";
import Link from "next/link";

export default function CartProducts({
  productList,
}: {
  productList: Product[];
}) {
  const { removeProduct, cartProducts, changeQuantity } =
    useCart() as CartState;
  const { isOpen, setIsOpen } = useCartOpen() as CartOpenState;

  const [products, setProducts] = useState<Product[]>(productList);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const onClose = () => {
    setIsOpen(false);
  };

  const getPrice = (name: string) => {
    return products.find((product) => product.name === name)?.price || 0;
  };

  const getImage = (name: string) => {
    const product = products.find((product) => product.name === name);
    return product?.images?.[0];
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
    <section className="flex flex-col justify-between gap-3 bg-white rounded-xl">
      <header className="space-y-5">
        <Link className="hover:underline" href={"/"}>
          {"<"} Continuar comprando
        </Link>
        <div className="border-b"></div>
        <div>
          <h2 className="text-2xl font-bold">Carrito de compras</h2>
          <p>Tienes {cartProducts.length} productos en tu carrito</p>
        </div>
      </header>
      <article className="space-y-3">
        {cartProducts.map((cartProduct) => (
          <div
            key={cartProduct.name}
            className="grid grid-cols-4 border p-2 rounded-xl shadow-sm relative gap-4 bg-white hover:shadow-md transition duration-300 ease-in-out"
          >
            <div className="flex items-center gap-4 col-span-2">
              <img
                loading="lazy"
                className="size-16 object-cover rounded-lg"
                src={
                  `${cartProduct.name}/${getImage(cartProduct.name)}` ||
                  "https://placehold.it/64x64"
                }
                alt={cartProduct.name}
              />
              <div>
                <Link href={`/product/${cartProduct.name}`}>
                  <h3 className="text-lg font-semibold hover:underline">
                    {cartProduct.name}
                  </h3>
                </Link>
                <p className="text-gray-500">$ {getPrice(cartProduct.name)}</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <select
                className="border-none max-w-xs text-center text-xl cursor-pointer"
                value={cartProduct.quantity}
                onChange={(e) =>
                  changeQuantity(cartProduct.name, parseInt(e.target.value))
                }
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
            <div className="flex justify-end items-center">
              {products && (
                <p className="flex items-end text-lg font-bold">
                  $ {getPrice(cartProduct.name) * cartProduct.quantity}
                </p>
              )}
            </div>
            {/*<button
                className="absolute top-1 right-1"
                aria-label="Remove from Cart"
                onClick={() => {
                  removeProduct(cartProduct);
                  setTotalPrice(CalculateTotalPrice());
                }}
              >
                <CloseIcon className="size-6 hover:transform hover:scale-125 duration-300" />
            </button>*/}
          </div>
        ))}
      </article>
    </section>
  );
}
