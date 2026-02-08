import useMyStore from "../store/store";

const TransactionList = () => {
  const transactionList = useMyStore((state) => state.transactionList);
  const searchedDate = useMyStore((state) => state.searchedDate);
  const removeTransactions = useMyStore((state) => state.removeTransactions);
  function transactions() {
    return searchedDate === ""
      ? transactionList
      : transactionList.filter((item) => item.date.includes(searchedDate));
  }
  console.log(transactionList);
  return (
    <>
      {transactions().length ? (
        <div className="mt-10 pb-2">
          <h2 className="text-2xl text-white mb-2">
            {transactionList.length ? "Transactions" : null}
          </h2>
          {transactions().map((data) => (
            <div
              key={data.id}
              className="bg-(--transaction-list-bg) border-2 border-(--transaction-list-border) grid grid-cols-[1fr_28rem_8rem] items-center  p-2  rounded-md mb-2"
            >
              <div>
                <h2 className="text-(--transaction-list-title-text) text-2xl">
                  {data.item}
                </h2>
                <p className="text-(--transaction-list-date-text)">
                  {data.date}
                </p>
              </div>
              <p
                className={`text-2xl ${data.type === "expense" ? "text-red-500" : "text-green-600"}`}
              >
                ₹{data.amount}
              </p>
              <button
                className="bg-(--remove-btn-bg) text-(--remove-btn-text) hover:bg-(--remove-btn-hover) text-2xl px-4 py-2 rounded-md w-30"
                onClick={() => {
                  removeTransactions(data.id);
                }}
              >
                remove
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-2xl text-center mt-29 text-red-600">No transaction found</p>
      )}
    </>
  );
};

export default TransactionList;
