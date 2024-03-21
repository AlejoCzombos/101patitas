import { api } from "@/api";
import QuantitySelector from "@/components/QuantitySelector";
//import { Carousel } from "@components/Carousel";
import { Carousel } from "flowbite-react";

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
      <section className="flex flex-col lg:flex-row max-w-5xl gap-5 mx-auto bg-white rounded-xl p-5 lg:p-10">
        <Carousel
          slide={false}
          className="w-full lg:w-1/2 h-auto aspect-square"
        >
          {product.images?.map((image, index) => (
            <img
              key={index}
              src={`/${product.name}/${image}`}
              alt={product.name}
            />
          ))}
        </Carousel>
        <div className="flex flex-col gap-5 w-full lg:w-1/2">
          <div className="flex flex-col gap-2">
            <p className="text-gray-500 text-sm">
              Inicio / {product?.category} /
              <span className="text-black font-black"> {product.name}</span>
            </p>
            <h2 className="text-2xl font-bold">{product.name}</h2>
            <p className="-mt-3">{product.description}</p>
            <p className="text-4xl font-bold">$ {product.price}</p>
          </div>
          <QuantitySelector productName={product.name} />
        </div>
      </section>
    </main>
  );
}
