"use client";

import { CartContextProps, useCart } from "@/context/CartContext";

export default function CartSlideMenu() {
  const { isOpen, setIsOpen } = useCart() as CartContextProps;

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center z-30
        transition-colors ${isOpen ? "visible bg-black/50" : "invisible"}
      `}
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        id="cart"
        className={`
      ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } h-screen w-[60%] max-w-lg absolute top-0 right-0 z-50 bg-primary-100 transition-transform duration-300 ease-in-out overflow-y-auto border-l-2 border-primary-500`}
      >
        <div className="flex justify-between items-center p-4">
          <h2 className="text-2xl font-semibold">Carrito</h2>
          <button
            className="text-2xl"
            aria-label="Close Cart"
            onClick={onClose}
          >
            <svg
              className="size-7"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <div className="p-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <img
                className="h-16 w-16 object-contain"
                src="/chapa.png"
                alt="Chapa"
              />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">Chapa personalizada</h3>
                <p className="text-gray-500">Cantidad: 1</p>
              </div>
            </div>
            <button className="text-2xl" aria-label="Remove from Cart">
              <svg
                className="size-7"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
