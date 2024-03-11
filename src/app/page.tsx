import { api } from "@/api";
import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";

export default async function Home() {
  const products = await api.products.list();

  return (
    <main className="p-5">
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-5 gap-x-10 items-center max-w-5xl">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        ))}
      </section>
    </main>
  );
}
