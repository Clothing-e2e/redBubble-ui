import { create } from 'zustand';
import cartSlice from './slices/cartSlice';
import filterSlice from './slices/filterSlice';

const store = (...params) => ({
  ...cartSlice(...params),
  ...filterSlice(...params),
});

const useStore = create(store);
export default useStore;
