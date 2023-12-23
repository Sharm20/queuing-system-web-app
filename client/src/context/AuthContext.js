import { createContext, useState } from "react";
import { ToastContainer } from "react-toastify";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  //   login request
  const loginUser = async (userData) => {
    try {
      const res = await fetch(`http://localhost:8080/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData }),
      });
      const user = await res.json();
      if (!user.error) {
        localStorage.setItem("token", user.token);
      } else {
        // console.log(user);
        setError(user.error);
      }
      // console.log(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <AuthContext.Provider value={{ loginUser }}>
      <ToastContainer autoClose={2000} />
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
