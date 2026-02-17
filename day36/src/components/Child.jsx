import { memo } from "react";

const Child = ({ handleClick }) => {
  handleClick();
  console.log("child rendering");
  return <h1>Child</h1>;
};

export default memo(Child);
