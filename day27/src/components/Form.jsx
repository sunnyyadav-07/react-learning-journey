import useMyStore from "../store/store";
import { useForm } from "react-hook-form";
const Form = () => {
  const setIsFormOpen = useMyStore((state) => state.setIsFormOpen);
  const setTransactionsList = useMyStore((state) => state.setTransactionsList);
  const form = useForm();
  const { register, handleSubmit, reset } = form;
  const { errors } = form.formState;

  function onSubmit(data) {
    setTransactionsList(data);
    reset();
  }

  return (
    <div className="bg-(--modal-bg) w-full h-screen flex justify-center items-center">
      <button
        className="absolute right-8 top-6 bg-[#6a6060] px-4 rounded-lg py-2 text-black text-2xl cursor-pointer hover:bg-[#4c4a4a]"
        onClick={() => {
          setIsFormOpen(false);
        }}
      >
        X
      </button>

      <form
        className="w-[50%] flex flex-col justify-center items-center bg-(--card-bg) gap-6 px-6 py-12 rounded-xl shadow-2xl shadow-[black]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full">
          <select
            name={"type"}
            id="type"
            className="w-full text-3xl bg-(--form-input-bg) py-1 px-3 rounded-md text-(--form-input-text) focus:outline-(--form-input-focus) "
            {...register("type", {
              required: "Type is required",
            })}
          >
            <option value="">type</option>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
          {errors.type && (
            <p className="text-red-600  ">{errors.type.message}</p>
          )}
        </div>
        <div className="w-full">
          <label htmlFor="userItem" className="block text-3xl mb-1">
            Item
          </label>
          <input
            type="text"
            placeholder="enter item"
            id="userItem"
            {...register("item", {
              required: "Item is required",
            })}
            className="w-full bg-(--form-input-bg) text-2xl px-4 py-1.5 rounded-md text-(--form-input-text) border-(--form-input-border) focus:outline-(--form-input-focus) placeholder-(--form-input-placeholder)  "
          />
          {errors.item && <p className="text-red-600">{errors.item.message}</p>}
        </div>
        <div className="w-full">
          <label htmlFor="amount" className=" text-3xl block mb-1 ">
            Amount
          </label>
          <input
            type="text"
            placeholder="enter amount"
            id="amount"
            {...register("amount", {
              required: "Amount is required",
              validate: (value) =>
                (!isNaN(value) && Number(value) > 0) || "Enter valid amount",
            })}
            className="w-full bg-(--form-input-bg) text-2xl px-4 py-1.5 rounded-md text-(--form-input-text) focus:outline-(--form-input-focus) placeholder-(--form-input-placeholder)"
          />
          {errors.amount && (
            <p className="text-red-600">{errors.amount.message}</p>
          )}
        </div>
        <div className="w-full">
          <input
            id="date"
            type="date"
            {...register("date", {
              required: "Date is required",
            })}
            className="w-full bg-(--form-input-bg) text-2xl px-4 py-1.5 rounded-md text-(--form-input-text) focus:outline-(--form-input-focus) placeholder-(--form-input-placeholder)"
          />
          {errors.date && <p className="text-red-600">{errors.date.message}</p>}
        </div>
        <button className="bg-(--primary-add-btn-bg) px-8 rounded-lg active:scale-95 py-2 text-2xl font-medium cursor-pointer hover:bg-(--primary-add-btn-hover) ">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
