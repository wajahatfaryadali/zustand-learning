import { create } from 'zustand'

export const useCartStore = create((set) => ({
    cart: [],
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
    removeFromCart: (productID) => set((state) => ({ cart: state.cart.filter(prod => prod.id !== productID) })),
    clearCart: () => set(state => ({ cart: [] }))
}))