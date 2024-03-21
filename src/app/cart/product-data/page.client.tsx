"use client";
import Link from "next/link";

import { FormEvent } from "react";
import { Order, Product } from "@/types";
import { CartState, useCart } from "@/store/Cart";
import ProductForm from "@/components/ProductForm";
import AccordeonIcon from "@/components/Icons/AccordeonIcon";

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
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-xl p-5 space-y-4 lg:space-x-5 max-w-5xl mx-auto"
      >
        <div className=" space-y-5">
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
          <div className="flex flex-col gap-2">
            {cartProducts.map((product, index) =>
              Array.from({ length: product.quantity }).map((_, i) => (
                <ProductForm
                  key={`${product.name}-${i}`}
                  product={product}
                  index={index}
                />
              ))
            )}
          </div>
        </div>
        <div className="bg-primary-500 rounded-xl p-5 space-y-2 max-h-64">
          <header>
            <h2 className="text-2xl font-bold text-white">
              Resumen del pedido
            </h2>
          </header>
          <div className=" border-b border-white"></div>
          <button
            type="submit"
            className="flex justify-center items-center rounded-full w-full py-2 font-bold text-lg bg-secondary-300  text-white hover:bg-secondary-400 transition-colors duration-300 ease-in-out"
          >
            Enviar
          </button>
        </div>
      </form>
    </main>
  );
}
