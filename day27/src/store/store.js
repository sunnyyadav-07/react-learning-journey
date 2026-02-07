import { create } from "zustand";

const useMyStore = create((set) => ({
  isFormOpen: false,
  setIsFormOpen: (bool) => {
    set({ isFormOpen: bool });
  },
}));
export default useMyStore;
