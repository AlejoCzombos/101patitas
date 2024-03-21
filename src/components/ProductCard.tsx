"use client";

import Link from "next/link";

export function ProductCard({
  name,
  description,
  price,
  images,
}: {
  name: string;
  description: string;
  price: number;
  images: string[];
}) {
  return (
    <article
      key={name}
      className="rounded-xl bg-white p-3 shadow-lg hover:shadow-xl hover:transform hover:scale-105 duration-300"
    >
      <img
        className="object-cover w-full aspect-square rounded-xl"
        src={`${name}/${images[0]}` || "https://placehold.it/300x300"}
        loading="lazy"
        alt={name}
      />
      <div className="p-4 flex flex-col gap-1">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-3xl">${price}</p>
        <Link
          href={`/product/${name}`}
          className="flex justify-center mt-3 border-2 border-primary-500 rounded-full py-2 font-bold text-2xl text-primary-500  hover:bg-primary-400/90  hover:text-white transition-colors duration-300 ease-in-out"
        >
          Comprar
        </Link>
      </div>
    </article>
  );
}
