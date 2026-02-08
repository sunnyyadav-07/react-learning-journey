import { create } from "zustand";
import { persist } from "zustand/middleware";
const store = (set, get) => ({
  isFormOpen: false,
  searchedDate: "",
  transactionList: [],
  transactionId: 0,
  setTransactionsList: (formData) => {
    set((state) => {
      const newId = state.transactionId + 1;
      return {
        transactionId: newId,
        transactionList: [...state.transactionList, { ...formData, id: newId }],
        isFormOpen: false,
      };
    });
  },
  setIsFormOpen: (bool) => {
    set({ isFormOpen: bool });
  },
  removeTransactions: (id) => {
    set((state) => ({
      transactionList: state.transactionList.filter((dtl) => dtl.id !== id),
    }));
  },
  setSearchedDate: (date) => {
    set({ searchedDate: date });
  },
  getTotalByType: (type) => {
    const { transactionList } = get();
    return transactionList.reduce((acc, curr) => {
      if (curr.type === type) {
        acc += Number(curr.amount) || 0;
      }
      return acc;
    }, 0);
  },
  getTotalBalance: () => {
    const { transactionList } = get();
    return transactionList.reduce((acc, curr) => {
      curr.type === "expense"
        ? (acc -= Number(curr.amount))
        : (acc += Number(curr.amount));
      return acc;
    }, 0);
  },
});

const useMyStore = create(persist(store, { name: "myTracker" }));
export default useMyStore;
