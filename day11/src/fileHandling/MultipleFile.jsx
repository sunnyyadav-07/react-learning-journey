import { useRef, useState } from "react";
const MultipleFile = () => {
 const fileRef = useRef(null);
 const [file, setFile] = useState([]);
 console.log(file);
 function handleFileChange(e) {
   if (e.target.files.length) {
     const selectedFiles = Array.from(e.target.files);
     console.log(selectedFiles);
     console.log(e.target.files.length);
     setFile((prev) => [...prev, ...selectedFiles]);
     fileRef.current.value = "";
   }
 }
 return (
   <>
     <input
       multiple
       type="file"
       ref={fileRef}
       onChange={handleFileChange}
       style={{ fontSize: "2rem" }}
       accept=".jpg,.png,.pdf"
     />
     {file &&
       file.map((item, index) => (
         <div key={index}>
           <p>{index + 1}. file details</p>
           <p>File name : {item.name}</p>
           <p>File size : {(item.size / 1024).toFixed(2)}kb</p>
           <p>File type : {item.type}</p>
         </div>
       ))}
   </>
 );
}

export default MultipleFile
