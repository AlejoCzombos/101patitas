"use client";

import { createContext, useContext, useState } from "react";

export type CartContextProps = {
  isOpen: boolean;
  setIsOpen(isOpen: boolean): void;
};

export const CartContext = createContext<CartContextProps | null>(null);

export function CartProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CartContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
