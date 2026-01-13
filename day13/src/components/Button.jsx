import React from "react";

const Button = ({ handleSubmit }) => {
  return (
    <div className="flex justify-center gap-4 pt-4">
      <button
        type="submit"
        className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <button
        type="reset"
        className="bg-gray-200 text-gray-700 px-8 py-2 rounded-md hover:bg-gray-300 transition"
      >
        Reset
      </button>
    </div>
  );
};

export default Button;
