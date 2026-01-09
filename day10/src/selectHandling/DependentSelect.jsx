import React from "react";
import { useState } from "react";
const DependentSelect = () => {
  const country = {
    India: ["Delhi", "Mumbai", "Kolkata", "Bengaluru"],
    USA: ["New York", "Los Angeles", "Chicago"],
    Japan: ["Tokyo", "Osaka", "Kyoto"],
    Germany: ["Berlin", "Munich", "Hamburg"],
  };
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  return (
    <>
      <select
        value={selectedCountry}
        onChange={(e) => {
          setSelectedCountry(e.target.value);
        }}
        style={{ fontSize: "2rem" }}
      >
        <option value="">Select country</option>
        {Object.keys(country).map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
      {selectedCountry && (
        <select
          value={selectedCity}
          onChange={(e) => {
            setSelectedCity(e.target.value);
          }}
          style={{ fontSize: "2rem" }}
        >
          <option value="">Select city</option>
          {country[selectedCountry].map((item) => (
            <option key={item} value={item}>{item}</option>
          ))}
        </select>
      )}
    </>
  );
};

export default DependentSelect;
