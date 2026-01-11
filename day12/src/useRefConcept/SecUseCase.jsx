import React from 'react'
import { useRef } from 'react';
const SecUseCase = () => {
   const divRef = useRef(null);
   function handleClick() {
     divRef.current.style.borderRadius = "100%";
     divRef.current.style.backgroundColor = "pink";
     divRef.current.style.transition = "all 0.8s linear";
     console.log();
   }
   return (
     <>
       <div
         ref={divRef}
         style={{
           width: "400px",
           height: "400px",
           backgroundColor: "cadetblue",
         }}
       ></div>
       <br />
       <button style={{ fontSize: "1.5rem" }} onClick={handleClick}>
         click
       </button>
     </>
   );
}

export default SecUseCase
