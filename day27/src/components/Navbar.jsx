import Wrapper from "./Wrapper";
import useMyStore from "../store/store";

const Navbar = () => {
  const setIsFormOpen = useMyStore((state) => state.setIsFormOpen);
  const totalBalance = useMyStore((state) => {
    return state.getTotalBalance();
  });
  return (
    <div className="bg-[#2a395c] fixed top-0 w-full">
      <Wrapper>
        <div className="flex justify-between items-center text-2xl   py-2">
          <h1 className="text-(--heading-text) font-medium">Expense Tracker</h1>
          <h1>
            <span className="text-(--main-balance-text)">Balance</span>{" "}
            <span className="text-(--main-amount-text)">₹{totalBalance}</span>
          </h1>
          <div>
            <button
              className="px-6 py-1 bg-(--primary-add-btn-bg) rounded-md hover:bg-(--primary-add-btn-hover) text-(--main-balance-text)"
              onClick={() => {
                setIsFormOpen(true);
              }}
            >
              Add
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
