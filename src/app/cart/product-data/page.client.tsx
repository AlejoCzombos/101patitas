"use client";
import Link from "next/link";

import { FormEvent, useEffect, useState } from "react";
import { FormValuesCartProduct, Order, Product } from "@/types";
import { CartState, useCart } from "@/store/Cart";
import ProductForm from "@/components/ProductForm";
import { useForm, useFieldArray } from "react-hook-form";

type CartFormValues = {
  products: FormValuesCartProduct[];
};

export default function ClientPage({
  createOrder,
  products,
}: {
  createOrder: (order: Order[]) => void;
  products: Product[];
}) {
  const [cartProducts, setCartProducts] = useState<CartState["cartProducts"]>([]);
  const { cartProducts: initialCartProducts } = useCart() as CartState;

  useEffect(() => {
    setCartProducts(initialCartProducts);
  }, [initialCartProducts]);

  const {
    handleSubmit,
    formState: { errors },
    control,
    register,
    reset,
  } = useForm<CartFormValues>({
    defaultValues: {
      products: cartProducts.flatMap((product) =>
        Array.from({ length: product.quantity }, () => ({
          name: "",
          phone: "",
          backgroundColor: "",
          frontColor: "",
          waist: "",
        }))
      ),
    },
  });

  useEffect(() => {
    if (cartProducts.length > 0) {
      reset({
        products: cartProducts.flatMap((product) =>
          Array.from({ length: product.quantity }, () => ({
            name: "",
            phone: "",
            backgroundColor: "",
            frontColor: "",
            waist: "",
          }))
        ),
      });
    }
  }, [cartProducts, reset]);

  const { fields } = useFieldArray({
    control,
    name: "products",
  });

  const onSubmit = (data: CartFormValues) => {
    console.log(data);
  };

  return (
    <main className="p-5 bg-gray-100">
      <form
        onSubmit={handleSubmit(onSubmit)}
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
            {fields.length > 0 &&
              cartProducts.length > 0 &&
              fields.map((field, index) => (
                <ProductForm
                  key={field.id}
                  product={cartProducts[index] ? cartProducts[index] : { name: "", quantity: 0 }}
                  index={index}
                  register={register}
                  errors={errors}
                />
              ))}
          </div>
        </div>
        <div className="bg-primary-500 rounded-xl p-5 space-y-2 max-h-64">
          <header>
            <h2 className="text-2xl font-bold text-white">Resumen del pedido</h2>
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
