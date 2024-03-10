import { api } from "@/api";
import { Carousel } from "@components/Carousel";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    name?: string;
  };
}) {
  const products = await api.products.list();
  const product = products.find(
    (product) => product.name === searchParams?.name
  );
  console.log(searchParams);
  return (
    <section className="flex flex-col md:flex-row">
      <Carousel
        images={[
          "https://placehold.it/300x300",
          "https://placehold.it/300x300",
          "https://placehold.it/300x300",
        ]}
        name={product?.name || "Product Name"}
      />
      <div className="p-5">
        <h2>{product?.name}</h2>
      </div>
    </section>
  );
}
