import { useRef, useState } from "react";
const SingleFile = () => {
  const [file, setFile] = useState(null);
  function handleFileChange(e) {
    if (e.target.files.length) {
      setFile(e.target.files[0]);
    }
  }
  return (
    <>
      <input
        type="file"
        onChange={handleFileChange}
        style={{ fontSize: "2rem" }}
      />
      {file && (
        <div>
          <p>File name : {file.name}</p>
          <p>File size : {(file.size / 1024).toFixed(2)}kb</p>
          <p>File type : {file.type}</p>
        </div>
      )}
    </>
  );
};

export default SingleFile;
