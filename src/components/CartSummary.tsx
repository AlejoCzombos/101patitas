"use client";

import { useEffect, useState } from "react";
import { Product } from "@/types";
import { useCart } from "@/store/Cart";
import type { CartState } from "@/store/Cart";
import Link from "next/link";

export default function CartForm({ productList }: { productList: Product[] }) {
  const { cartProducts } = useCart() as CartState;

  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [products, setProducts] = useState<Product[]>(productList);

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
    <section className="bg-primary-500 rounded-xl p-5 space-y-2 max-h-64">
      <header>
        <h2 className="text-2xl font-bold text-white">Resumen de compra</h2>
      </header>
      <div className=" border-b border-white"></div>
      <div className="flex justify-between items-center text-xl text-gray-100">
        <h2>Subtotal:</h2>
        <h2>$ {totalPrice}</h2>
      </div>
      <div className="flex justify-between items-center text-xl text-gray-100">
        <h2>Impuestos:</h2>
        <h2>$ 0</h2>
      </div>
      <div className="flex justify-between items-center text-xl font-bold text-white">
        <h2>Total:</h2>
        <h2>$ {totalPrice}</h2>
      </div>

      <Link
        href={"/cart/product-data"}
        className="flex justify-center items-center rounded-full w-full py-2 font-bold text-lg bg-secondary-300  text-white hover:bg-secondary-400 transition-colors duration-300 ease-in-out"
      >
        Siguiente paso
      </Link>
    </section>
  );
}
