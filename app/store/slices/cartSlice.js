const removeItem = (state, id) => ({
    cart: state.cart.filter((item) => item.id !== id)
});

const updateItem = (state, id, quantity) => state.cart.map((item) => {
    if (item.id === id) {
        return { ...item, quantity };
    }
    return item;
});

/**
 * @description Slice for cart functionality
 * @param {function} set - state setter
 */
const useCartSlice = (set) => ({
    cart: [],
    isCartVisible: false,
    addToCart: (data) => set((state) => ({ cart: [...state.cart, data], isCartVisible: true })),
    removeFromCart: (id) => set((state) => removeItem(state, id)),
    updateCart: (id, quantity) => {
        if (quantity === 0) return set((state) => removeItem(state, id));
        return set((state) => ({
            cart: updateItem(state, id, quantity)
        }))
    },
    clearCart: () => set({ cart: [] }),
    showCart: () => set({ isCartVisible: true }),
    hideCart: () => set({ isCartVisible: false }),
});

export default useCartSlice;