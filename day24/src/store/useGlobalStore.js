import { create } from "zustand";
import { persist } from "zustand/middleware";

const store = (set) => ({
  count: 0,
  theme: "light",

  increment: () => {
    set((state) => ({
      count: state.count + 1,
    }));
  },
  decrement: () => {
    set((state) => ({
      count: state.count - 1,
    }));
  },
  reset: () => {
    set(() => ({
      count: 0,
    }));
  },
  toggleTheme: () => {
    set((state) => ({
      theme: state.theme === "light" ? "dark" : "light",
    }));
  },
});
const useGlobalStore = create(persist(store,{name:'myTheme'}));

export default useGlobalStore;
