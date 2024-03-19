import ProductData from "@/components/ProductData";

export default function Page() {
  return (
    <main className="p-5 bg-gray-100">
      <section className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-xl p-5 space-y-4 lg:space-x-5 max-w-5xl mx-auto">
        <ProductData />
      </section>
    </main>
  );
}
