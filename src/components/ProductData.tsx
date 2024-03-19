import Link from "next/link";
import CartForm from "./CartForm";

export default function ProductData() {
  return (
    <section className="flex flex-col justify-between gap-3 bg-white rounded-xl">
      <header className="space-y-5">
        <Link className="hover:underline" href={"/cart"}>
          {"<"} Volver atrás
        </Link>
        <div className="border-b"></div>
        <div>
          <h2 className="text-2xl font-bold">Información productos</h2>
          <p>Complete los datos para cada producto</p>
        </div>
      </header>
      <CartForm />
    </section>
  );
}
