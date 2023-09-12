// import React, { useState, useEffect } from "react";
// import fs from "fs";

// const StudentForm = () => {
  
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const data = {
//       name: name,
//       email: email,
//     };

//     const jsonString = JSON.stringify(data);

//     fs.writeFile("data.json", jsonString, (err) => {
//       if (err) {
//         console.error(err);
//       } else {
//         console.log("Data saved successfully!");
//       }
//     });
//   };

//   useEffect(() => {
//     // Read the data from the JSON file and set it as the initial state of the form.
//     fs.readFile("data.json", "utf8", (err, data) => {
//       if (err) {
//         return;
//       }

//       const jsonObject = JSON.parse(data);
//       setName(jsonObject.name);
//       setEmail(jsonObject.email);
//     });
//   }, []);

//   return (

//     <>
//     <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         name="name"
//         placeholder="Your name"
//         onChange={(e) => setName(e.target.value)}
//       />
//       <input
//         type="email"
//         name="email"
//         placeholder="Your email address"
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <button type="submit">Submit</button>
//     </form>
//     </>
//   )
// }

// export default StudentForm 

