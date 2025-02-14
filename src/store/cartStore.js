import { create } from 'zustand'

export const useCartStore = create((set) => ({
    cart: [],
    addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
    removeFromCart: (productID) => set((state) => ({ cart: state.cart.filter(prod => prod.id !== productID) })),
    clearCart: () => set(state => ({ cart: [] }))
}))


const initialState = {
    user: {
        id: "u001",
        username: "wajahat_ali",
        email: "wajahat@example.com",
        profile: {
            firstName: "Wajahat",
            lastName: "Ali",
            age: 27,
            gender: "Male",
            address: {
                street: "123 Main Street",
                city: "Karachi",
                state: "Sindh",
                postalCode: "74000",
                country: "Pakistan",
            },
            contact: {
                phone: "+92-300-1234567",
                alternatePhone: "+92-300-7654321",
                social: {
                    facebook: "facebook.com/wajahat",
                    twitter: "@wajahat",
                    linkedin: "linkedin.com/in/wajahat",
                },
            },
        },
    }
};


export const useUserStore = create((set) => ({
    ...initialState,
    // updateUserStreetAddress: (street) => set((state) => ({
    //     user: {
    //         ...state.user,
    //         profile: {
    //             ...state.user.profile,
    //             address: {
    //                 ...state.user.profile.address,
    //                 street: street
    //             }
    //         }
    //     }
    // }))
    updateUserStreetAddress: (street) => set(produce((state) => {
        state.user.profile.address.street = street
    }))
}))
