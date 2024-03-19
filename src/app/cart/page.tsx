import { api } from "@/api";
import CartProducts from "@/components/CartProducts";
import CartSummary from "@components/CartSummary";

export default async function Home() {
  const products = await api.products.list();

  return (
    <main className="p-5 bg-gray-100">
      <section className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-xl p-5 space-y-4 lg:space-x-5 max-w-5xl mx-auto">
        <CartProducts productList={products} />
        <CartSummary productList={products} />
      </section>
    </main>
  );
}
