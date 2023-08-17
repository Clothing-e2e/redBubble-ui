import utils from '@/app/utils/utils';

const { ensureArray } = utils;

const removeItem = (state, id, size) => ({
  cart: state.cart.reduce((acc, current) => {
    if (current.id === id && current.size === size) return acc;
    acc.push(current);
    return acc;
  }, []),
});

const updateItem = (state, id, quantity, size) =>
  state.cart.map((item) => {
    if (item.id === id && item.size === size) {
      return { ...item, quantity };
    }
    return item;
  });

const checkDuplicates = (prevData, newData) => {
  let isNewDataAdded = false;
  const result = ensureArray(prevData).reduce((acc, current) => {
    if (current.id === newData.id && current.size === newData.size) {
      isNewDataAdded = true;
      acc.push({
        ...current,
        quantity: current.quantity + newData.quantity,
      });
    } else {
      acc.push(current);
    }
    return acc;
  }, []);

  if (!isNewDataAdded) {
    return [...result, newData];
  }
  return result;
};

/**
 * @description Slice for cart functionality
 * @param {function} set - state setter
 */
const cartSlice = (set) => ({
  cart: [],
  isCartVisible: false,
  addToCart: (data) =>
    set((state) => ({
      cart: checkDuplicates(state.cart, data),
      isCartVisible: true,
    })),
  removeFromCart: (id, size) => set((state) => removeItem(state, id, size)),
  updateCart: (id, quantity, size) => {
    if (quantity === 0) return set((state) => removeItem(state, id, size));
    return set((state) => ({
      cart: updateItem(state, id, quantity, size),
    }));
  },
  clearCart: () => set({ cart: [] }),
  showCart: () => set({ isCartVisible: true }),
  hideCart: () => set({ isCartVisible: false }),
  addAndCheckout: (data) =>
    set((state) => ({
      cart: checkDuplicates(state.cart, data),
    })),
});

export default cartSlice;
