import useMyStore from "../store/store";

const TotalIncome = () => {
  const totalIncome = useMyStore((state) => {
    return state.getTotalByType('income');
  });
  return (
    <div className="flex flex-col gap-2 items-center bg-(--income-card-bg) border-2 border-(--income-card-border) px-25 py-5 rounded-md">
      <h2 className="text-3xl text-(--income-card-text)">Expense</h2>
      <p className="text-(--income-card-amount) text-3xl">₹{totalIncome}</p>
    </div>
  );
};

export default TotalIncome;
