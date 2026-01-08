import { useState } from "react";
const MultipleCheckbox = () => {
  const [isCheckedHtml, setIsCheckedHtml] = useState(false);
  const [isCheckedCss, setIsCheckedCss] = useState(false);
  const [isCheckedJs, setIsCheckedJs] = useState(false);
  const [isCheckedReact, setIsCheckedReact] = useState(false);

  return (
    <div style={{ display: "flex", gap: "1.9rem" }}>
      <label htmlFor="html" style={{ fontSize: "2rem" }}>
        <input
          type="checkbox"
          checked={isCheckedHtml}
          name="html"
          id="html"
          onChange={(e) => {
            setIsCheckedHtml(e.target.checked);
          }}
          style={{ scale: "2" }}
        />
        HTML
      </label>
      <label htmlFor="css" style={{ fontSize: "2rem" }}>
        <input
          type="checkbox"
          checked={isCheckedCss}
          name="css"
          id="css"
          onChange={(e) => {
            setIsCheckedCss(e.target.checked);
          }}
          style={{ scale: "2" }}
        />
        CSS
      </label>
      <label htmlFor="js" style={{ fontSize: "2rem" }}>
        <input
          type="checkbox"
          checked={isCheckedJs}
          name="js"
          id="js"
          onChange={(e) => {
            setIsCheckedJs(e.target.checked);
          }}
          style={{ scale: "2" }}
        />
        JS
      </label>
      <label htmlFor="react" style={{ fontSize: "2rem" }}>
        <input
          type="checkbox"
          checked={isCheckedReact}
          name="react"
          id="react"
          onChange={(e) => {
            setIsCheckedReact(e.target.checked);
          }}
          style={{ scale: "2" }}
        />
        React
      </label>
    </div>
  );
};

export default MultipleCheckbox;
