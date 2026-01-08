import { useState } from 'react';
const SelectAllCheckbox = () => {
  const [languages, setLanguages] = useState({
    html: false,
    css: false,
    js: false,
    react: false,
  });
  function handleCheckbox(e) {
    const { name, checked } = e.target;
    setLanguages({ ...languages, [name]: checked });
  }
  const isAllChecked = Object.values(languages).every(Boolean);
  // console.log(isAllChecked);

  return (
    <div style={{ display: "flex", gap: "1.9rem" }}>
      <label htmlFor="sa" style={{ fontSize: "2rem" }}>
        <input
          type="checkbox"
          checked={isAllChecked}
          name="sa"
          id="sa"
          onChange={(e) => {
            setLanguages({
              html: e.target.checked,
              css: e.target.checked,
              js: e.target.checked,
              react: e.target.checked,
            });
          }}
          style={{ scale: "2" }}
        />
        Select all
      </label>
      {Object.keys(languages).map((lang) => (
        <label key={lang} htmlFor={lang} style={{ fontSize: "2rem" }}>
          <input
            type="checkbox"
            checked={languages[lang]}
            name={lang}
            id={lang}
            onChange={handleCheckbox}
            style={{ scale: "2" }}
          />
          {lang.toUpperCase()}
        </label>
      ))}
    </div>
  );
}

export default SelectAllCheckbox
