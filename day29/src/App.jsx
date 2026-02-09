import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { addToProduct, increment } from "./redux/actions/addToProduct";
import { useEffect } from "react";

function App() {
  const products = useSelector((state) => state.productReducer.products);
  const dispatch = useDispatch();
  function handleAddToProduct() {
    dispatch(addToProduct({ id: 1, product: "samsung" }));
  }
  function handleIncrement() {
    dispatch(increment());
  }
  // console.log(state);
  useEffect(() => {
    console.log("re render");
  });
  return (
    <>
      <h1>Hello</h1>
      <button onClick={handleAddToProduct}>Click</button>
      <button onClick={handleIncrement}>Counter</button>

      <h1>{JSON.stringify(products)}</h1>
    </>
  );
}

export default App;
