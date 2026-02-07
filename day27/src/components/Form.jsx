import useMyStore from "../store/store";

const Form = () => {
  const setIsFormOpen = useMyStore((state) => state.setIsFormOpen);
  return (
    <div className="bg-(--modal-bg) w-full h-screen flex justify-center items-center">
      <button className="absolute right-8 top-6 bg-[#6a6060] px-4 rounded-lg py-2 text-black text-2xl cursor-pointer hover:bg-[#4c4a4a]" onClick={()=>{setIsFormOpen(false)}}>
        X
      </button>

      <form className="w-[50%] flex flex-col justify-center items-center bg-(--card-bg) gap-6 px-6 py-12 rounded-xl shadow-2xl shadow-[black]">
        <select
          name={"type"}
          id="type"
          className="w-full text-3xl bg-(--form-input-bg) py-1 px-3 rounded-md text-(--form-input-text) focus:outline-(--form-input-focus) "
        >
          <option value="">type</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
        <label
          htmlFor="userItem"
          className="w-full text-3xl flex flex-col gap-3"
        >
          Item
          <input
            type="text"
            placeholder="enter item"
            id="userItem"
            name={"item"}
            className="w-full bg-(--form-input-bg) text-2xl px-4 py-1.5 rounded-md text-(--form-input-text) border-(--form-input-border) focus:outline-(--form-input-focus) placeholder-(--form-input-placeholder)  "
          />
        </label>
        <label htmlFor="amount" className="w-full text-3xl flex flex-col gap-3">
          Amount
          <input
            type="text"
            placeholder="enter amount"
            id="amount"
            name={"amount"}
            className="w-full bg-(--form-input-bg) text-2xl px-4 py-1.5 rounded-md text-(--form-input-text) focus:outline-(--form-input-focus) placeholder-(--form-input-placeholder)"
          />
        </label>
        <input
          id="date"
          type="date"
          name={"date"}
          className="w-full bg-(--form-input-bg) text-2xl px-4 py-1.5 rounded-md text-(--form-input-text) focus:outline-(--form-input-focus) placeholder-(--form-input-placeholder)"
        />
        <button className="bg-(--primary-add-btn-bg) px-8 rounded-lg active:scale-95 py-2 text-2xl font-medium cursor-pointer hover:bg-(--primary-add-btn-hover) ">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
