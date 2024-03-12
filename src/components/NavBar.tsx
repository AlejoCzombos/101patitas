import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="sticky top-0 z-20 w-full shadow-sm bg-white py-3 sm:py-5 px-6 sm:px-4">
      <div className="container mx-auto flex max-w-6xl flex-wrap items-center justify-between">
        <div className="px-6"></div>
        <Link href="/" className="flex items-center">
          <Image
            width={500}
            height={500}
            className="size-24 object-contain h-10 w-auto sm:h-12 sm:w-auto"
            src="/logo.png"
            alt="Logo de 101Patitas"
          />
        </Link>
        <CartIcon />
      </div>
    </nav>
  );
}
