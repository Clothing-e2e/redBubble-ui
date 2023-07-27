import { create } from 'zustand';
import useCartSlice from "./slices/cartSlice";
import useFilterSlice from './slices/filterSlice';

const store = (...params) => ({
    ...useCartSlice(...params),
    ...useFilterSlice(...params),
});

const useStore = create(store);
export default useStore;