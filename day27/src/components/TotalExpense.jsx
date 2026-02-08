
import useMyStore from "../store/store";

const TotalExpense = () => {
  const totalExpense = useMyStore((state) => {
    return state.getTotalByType('expense');
  });
  console.log(totalExpense)
  return (
    <div className="flex flex-col gap-2 items-center bg-(--expense-card-bg) border-2 border-(--expense-card-border) px-25 py-5 rounded-md">
      <h2 className="text-3xl text-(--expense-card-text)">Expence</h2>
      <p className="text-(--expense-card-amount) text-3xl">₹{totalExpense}</p>
    </div>
  );
};

export default TotalExpense;
