import { useState } from "react";
const GroupCheckbox = () => {
   const [languages, setLanguages] = useState({
     html: false,
     css: false,
     js: false,
     react: false,
   });
   console.log(languages);
   function handleCheckbox(e) {
     const { name, checked } = e.target;
     setLanguages({ ...languages, [name]: checked });
   }
   return (
     <div style={{ display: "flex", gap: "1.9rem" }}>
       <label htmlFor="html" style={{ fontSize: "2rem" }}>
         <input
           type="checkbox"
           checked={languages.html}
           name="html"
           id="html"
           onChange={handleCheckbox}
           style={{ scale: "2" }}
         />
         HTML
       </label>
       <label htmlFor="css" style={{ fontSize: "2rem" }}>
         <input
           type="checkbox"
           checked={languages.css}
           name="css"
           id="css"
           onChange={handleCheckbox}
           style={{ scale: "2" }}
         />
         CSS
       </label>
       <label htmlFor="js" style={{ fontSize: "2rem" }}>
         <input
           type="checkbox"
           checked={languages.js}
           name="js"
           id="js"
           onChange={handleCheckbox}
           style={{ scale: "2" }}
         />
         JS
       </label>
       <label htmlFor="react" style={{ fontSize: "2rem" }}>
         <input
           type="checkbox"
           checked={languages.react}
           name="react"
           id="react"
           onChange={handleCheckbox}
           style={{ scale: "2" }}
         />
         React
       </label>
     </div>
   );
}

export default GroupCheckbox
