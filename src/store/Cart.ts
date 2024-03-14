import {create} from 'zustand'
import {persist} from 'zustand/middleware'

export interface CartState {
    cartProducts: CartProduct[]
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

export const useCart = create(
    persist(
    (set) => ({
        cartProducts: [],
        addProduct: (cartProduct: CartProduct) => set((state : any) => {
            const productIndex = state.cartProducts.findIndex((p : any) => p.name === cartProduct.name);

            const newProducts = [
                 ...state.cartProducts.slice(0, productIndex),
                 { name: cartProduct.name , quantity: cartProduct.quantity },
                 ...state.cartProducts.slice(productIndex + 1)
                ]
            return { cartProducts: newProducts };
        }),
        removeProduct: (cartProduct: CartProduct) => set((state : any) => {
            const newProducts = state.cartProducts.filter((p : any) => p.name !== cartProduct.name);
            return { cartProducts: newProducts };
        }),
    }),
    {name: "cart"}
    )
);

export const useCartOpen = create((set) => ({
    isOpen: false,
    setIsOpen: (isOpen: boolean) => set({isOpen})
}))