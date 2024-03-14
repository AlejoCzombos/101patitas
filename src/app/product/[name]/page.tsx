import { api } from "@/api";
import FormProduct from "@/components/ProductForm";
import { Carousel } from "@components/Carousel";

export default async function ProductPage({
  params,
}: {
  params: { name: string };
}) {
  const productName = decodeURIComponent(params.name);

  const products = await api.products.list();
  const product = products.find((product) => product.name === productName) || {
    name: "Huesito",
    price: 3000,
    category: "Clásico",
    description: "Description",
    shape: "Cuadrado",
  };

  return (
    <main className="gap-5 p-5 bg-slate-100">
      <section className="flex flex-col lg:flex-row max-w-5xl gap-5 lg:gap-5 mx-auto bg-white rounded-xl p-5 lg:p-10">
        <Carousel
          className="w-full lg:w-1/2"
          images={[
            "https://placehold.it/1000x1000",
            "https://placehold.it/1000x1000",
            "https://placehold.it/1000x1000",
          ]}
          name={product?.name || "Product Name"}
        />
        <div className="flex flex-col gap-5 w-full lg:w-1/2">
          <div className="flex flex-col gap-2">
            <p className="text-gray-500 text-sm">
              Inicio / {product?.category} /
              <span className="text-black font-black"> {product?.name}</span>
            </p>
            <h2 className="text-2xl font-bold">{product?.name}</h2>
            <p className="text-4xl font-bold">$ {product?.price}</p>
          </div>
          <FormProduct productName={product.name} />
          <p>{product?.description}</p>
        </div>
      </section>
    </main>
  );
}