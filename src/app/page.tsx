import { api } from "@/api";
import { ProductCard } from "@/components/ProductCard";

export default async function Home() {
  const products = await api.products.list();

  return (
    <main className="py-10 bg-slate-200">
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            description={product.description}
            price={product.price}
            images={product.images || []}
          />
        ))}
      </section>
    </main>
  );
}
