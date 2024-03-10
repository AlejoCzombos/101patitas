import { api } from "@/api";
import Image from "next/image";
import { ProductCard } from "@/components/ProductCard";

export default async function Home() {
  const products = await api.products.list();

  return (
    <main className="p-5 mx-auto">
      <h1 className="text-5xl font-bold text-center p-5">101Patitas</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
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
