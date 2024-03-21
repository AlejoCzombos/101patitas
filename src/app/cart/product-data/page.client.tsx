"use client";
import Link from "next/link";

import { FormEvent } from "react";
import { Order, Product } from "@/types";
import { CartState, useCart } from "@/store/Cart";
import ProductForm from "@/components/ProductForm";

export default function ClientPage({
  createOrder,
  products,
}: {
  createOrder: (order: Order[]) => void;
  products: Product[];
}) {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const order: Order[] = cartProducts.map((product, index) => ({
      model: product.name,
      name: formData.get(`name-${index}`)?.toString() || "",
      phone: formData.get(`phone-${index}`)?.toString() || "",
      backgroundColor:
        formData.get(`backgroundColor-${index}`)?.toString() || "",
      frontColor: formData.get(`frontColor-${index}`)?.toString() || "",
      waist: formData.get(`waist-${index}`)?.toString() || "",
    }));

    createOrder(order);

    //event.currentTarget.reset();
  }

  const { cartProducts } = useCart() as CartState;

  return (
    <main className="p-5 bg-gray-100">
      <section className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-xl p-5 space-y-4 lg:space-x-5 max-w-5xl mx-auto">
        <header className="space-y-5">
          <Link className="hover:underline" href={"/cart"}>
            {"<"} Volver atrás
          </Link>
          <div className="border-b"></div>
          <div>
            <h2 className="text-2xl font-bold">Información productos</h2>
            <p>Complete los datos para cada producto</p>
          </div>
        </header>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {cartProducts.map((product, index) => (
            <ProductForm key={product.name} product={product} index={index} />
          ))}
          <button
            type="submit"
            className="bg-primary-500 text-white p-3 rounded-full hover:bg-primary-400 transition-all duration-300 ease-in-out font-bold text-xl"
          >
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
}
