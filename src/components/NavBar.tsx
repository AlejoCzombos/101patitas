import Link from "next/link";
import CartButton from "./CartButton";
import Image from "next/image";
import CartSlideMenu from "./CartSlideMenu";
import { api } from "@/api";
import logo from "@public/Logo.png";

async function getData() {
  const products = await api.products.list();
  return products;
}

export default async function NavBar() {
  const products = await getData();
  return (
    <nav className="sticky top-0 z-20 w-full shadow-sm bg-white py-3 sm:py-5 px-6 sm:px-4">
      <div className="container mx-auto flex max-w-6xl flex-wrap items-center justify-between">
        <div className="px-6"></div>
        <Link href="/" className="flex items-center">
          <Image
            priority={true}
            width={750}
            height={300}
            className="size-24 object-contain h-10 w-auto sm:h-12 sm:w-auto"
            src={logo}
            alt="Logo de 101Patitas"
          />
        </Link>
        <CartButton />
        <CartSlideMenu newProducts={products} />
      </div>
    </nav>
  );
}
