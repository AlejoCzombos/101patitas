import { api } from "@/api";
import CartProducts from "@/components/CartProducts";
import CartForm from "@components/CartForm";

export default async function Home() {
  const products = await api.products.list();

  return (
    <main className="grid grid-cols-1 lg:grid-cols-2 p-5 bg-gray-100">
      <section className="bg-white rounded-xl p-5">
        <CartProducts newProducts={products} />
        <CartForm />
      </section>
    </main>
  );
}
