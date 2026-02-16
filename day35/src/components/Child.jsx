import React, { memo, useEffect } from "react";

const Child = ({ count }) => {
  console.log(count);
  useEffect(() => {
    console.log("Child rendered");
  });
  return <h1>Child : {}</h1>;
};
const EnhancedChild = memo(Child);
// const EnhancedChild = memo(Child, (prevProp, currProp) => {
//   return true;
// });
export default EnhancedChild;
