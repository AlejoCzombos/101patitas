import Link from "next/link";

export function ProductCard({
  name,
  description,
  price,
}: {
  name: string;
  description: string;
  price: number;
}) {
  return (
    <article
      key={name}
      className="border-2 w-full border-gray rounded-xl overflow-hidden"
    >
      <img
        className="object-cover w-full h-auto hover:scale-105 transition-transform duration-300 ease-in-out"
        src="https://placehold.it/300x300"
        alt={name}
      />
      <div className="p-4 flex flex-col gap-1">
        <h3 className="text-2xl font-bold">{name}</h3>
        <p className="text-3xl">${price}</p>
        <Link
          href={`/product?name=${name}`}
          className="flex justify-center mt-3 border-2 border-primary rounded-full py-2 font-bold text-2xl text-primary hover:bg-primary hover:text-white transition-colors duration-300 ease-in-out"
        >
          Comprar
        </Link>
      </div>
    </article>
  );
}
