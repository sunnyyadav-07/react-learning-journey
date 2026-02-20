import { useState } from "react";

const ManualVirtualization = ({ list, height, itemHeight }) => {
  const noOfVisibleItems = Math.floor(height / itemHeight) + 3;
  const [indices, setIndices] = useState([0, noOfVisibleItems]);
  const visibleList = list.slice(indices[0], indices[1]);
  function handleScrol(e) {
    const { scrollTop } = e.target;
    const newStartingIndex = Math.floor(scrollTop / itemHeight);
    const endIndex = newStartingIndex + noOfVisibleItems;
    setIndices([newStartingIndex, endIndex]);
  }
  return (
    <div
      style={{ height: height, backgroundColor: "gray", overflowY: "auto" }}
      onScroll={handleScrol}
    >
      {/* ManualVirtualization */}
      <div style={{ height: list.length * itemHeight }}>
        <div style={{ transform: `translateY(${indices[0] * itemHeight}px)` }}>
          {visibleList.map((item) => (
            <p
              key={item}
              style={{ height: itemHeight, borderBottom: "1px solid black" }}
            >
              Item : {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManualVirtualization;
