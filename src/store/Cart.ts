import {create} from 'zustand'
import {persist} from 'zustand/middleware'

export interface CartState {
    products: CartProduct[]
    addProduct: (product: CartProduct) => void
    removeProduct: (product: CartProduct) => void
}

export interface CartProduct {
    name: string
    quantity: number
}

export interface CartOpenState {
    isOpen: boolean
    setIsOpen: (isOpen: boolean) => void
}

const getCartLocalStorage = () => {
    const cartLS = JSON.parse(localStorage.getItem("cart") || "[]");
    return cartLS;
}

export const useCart = create(
    persist(
    (set) => ({
        products: [],
        addProduct: (product: CartProduct) => set((state : any) => {
            const productIndex = state.products.findIndex((p : any) => p.name === product.name);

            const newProducts = [
                 ...state.products.slice(0, productIndex),
                 { name: product.name , quantity: product.quantity },
                 ...state.products.slice(productIndex + 1)
                ]
            return { products: newProducts };
        }),
        removeProduct: (product: CartProduct) => set((state : any) => {
            const newProducts = state.products.filter((p : any) => p.name !== product.name);
            return { products: newProducts };
        }),
    }),
    {name: "cart"}
    )
);

export const useCartOpen = create((set) => ({
    isOpen: false,
    setIsOpen: (isOpen: boolean) => set({isOpen})
}))