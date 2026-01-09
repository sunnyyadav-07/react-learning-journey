import React from 'react'
import { useState } from 'react';
const MapSelect = () => {
  const [language, setLanguage] = useState("");
    const languages = ["html", "css", "js", "java", "python", "c++"];
    return (
      <>
        <select
          name="lang"
          id="lang"
          value={language}
          onChange={(e) => {
            setLanguage(e.target.value);
          }}
          style={{fontSize:'2rem'}}
        >
          <option value="">Select language</option>
          {languages.map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      </>
    );
}

export default MapSelect
