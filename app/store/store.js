import { create } from 'zustand';
import useCartSlice from "./slices/cartSlice"

const store = (...params) => ({
    ...useCartSlice(...params)
});

const useStore = create(store);
export default useStore;