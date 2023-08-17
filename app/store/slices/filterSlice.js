const defaultFilters = {};

const filterSlice = (set) => ({
  filters: defaultFilters,
  size: 100,
  page: 0,
  sort: 'createdOn,asc',
  setSort: (value) => set({ sort: value }),
  setFilters: (value) => set({ filters: value }),
  clearFilters: () => set({ filters: defaultFilters }),
  setCategory: (category) =>
    set((state) => ({ filters: { ...state, category } })),
  clearAllFilters: () => set({ filters: {}, sort: 'createdOn,asc' }),
});

export default filterSlice;
