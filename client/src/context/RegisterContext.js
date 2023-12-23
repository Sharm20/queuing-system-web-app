// import { createContext, useState } from "react";

// const RegContext = createContext();

// export const RegContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const RegisterUser = async (userInfo) => {
//     try {
//       const res = await fetch(`${process.env.SERVER_URL}/register`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ ...userInfo }),
//       });

//       const user = await res.json();
//       console.log(user);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <RegContext.Provider value={{ RegisterUser }}>
//       {children}
//     </RegContext.Provider>
//   );
// };

// export default RegContext;
