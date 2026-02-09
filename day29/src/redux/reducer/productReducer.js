const initialState = {
  products: [],
  count: 0,
};

const productReducer = (state = initialState, action) => {
  if (action.type === "ADD_TO_PRODUCT") {
    console.log("added to product");
    return {
      ...state,
      products: [...state.products, action.payload],
    };
  } else if (action.type === "INCREMENT") {
    console.log("counter", state.count);
    return {
      ...state,
      count: state.count + 1,
    };
  } else {
    return state;
  }
};
export default productReducer;
