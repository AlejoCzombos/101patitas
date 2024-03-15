"use client";

import { useCart, useCartOpen } from "@/store/Cart";
import type { CartOpenState, CartState } from "@/store/Cart";
import CloseIcon from "./Icons/CloseIcon";
import { useEffect, useState } from "react";
import { Product } from "@/types";
import Link from "next/link";

export default function CartProducts({
  newProducts,
}: {
  newProducts: Product[];
}) {
  const { removeProduct, cartProducts, changeQuantity } =
    useCart() as CartState;
  const { isOpen, setIsOpen } = useCartOpen() as CartOpenState;

  const [products, setProducts] = useState<Product[]>(newProducts);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  const onClose = () => {
    setIsOpen(false);
  };

  const getPrice = (name: string) => {
    return products.find((product) => product.name === name)?.price || 0;
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
    <section>
      <div className="flex flex-col justify-between space-y-8">
        <article className="space-y-5">
          {cartProducts.map((cartProduct) => (
            <div
              key={cartProduct.name}
              className="grid grid-cols-4 lg:grid-cols-3"
            >
              <div className="flex items-center gap-4 col-span-2 lg:col-span-1">
                <img
                  className="size-16 object-contain rounded-lg"
                  src="https://placehold.it/64x64"
                  alt="Chapa"
                />
                <div>
                  <Link href={`/products/${cartProduct.name}`}>
                    <h3 className="text-lg font-semibold hover:underline">
                      {cartProduct.name}
                    </h3>
                  </Link>
                  <p className="text-gray-500">
                    $ {getPrice(cartProduct.name)}
                  </p>
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
                  <p className="flex items-end pb-1 text-lg font-bold">
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
        {cartProducts.length > 0 && (
          <article className="space-y-2">
            <div className="flex justify-between items-center pb-2 text-3xl font-bold ">
              <h2>Total:</h2>
              <h2>$ {totalPrice}</h2>
            </div>
          </article>
        )}
      </div>
    </section>
  );
}
