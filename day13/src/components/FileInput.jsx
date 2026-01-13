import React from 'react'

const FileInput = ({handleChange,error}) => {
  return (
    <div>
      <label className="block font-medium mb-1">Profile Picture</label>
      <input
        type="file"
        name="picture"
        className="w-full border rounded-md px-3 py-2
                         file:mr-4 file:py-2 file:px-4
                         file:rounded-md file:border-0
                         file:bg-blue-600 file:text-white
                         hover:file:bg-blue-700"
        onChange={handleChange}
      />
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}

export default FileInput
