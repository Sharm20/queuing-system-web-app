import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      const result = await res.json();
      if (!result.error) {
        localStorage.setItem("token", result.token);
      } else {
        // console.log(result);
        // setError(result.error);
        // toast.error(error);
        // setError(null);
      }

      if (result) {
        toast.success("logged in");
      } else {
        toast.error("log in failed");
      }

      console.log(`token: ${result.token}`);
      // console.log(`token: ${user.name}`);
    } catch (error) {
      console.log(error);
      toast.error("Login Failed");
    }
  };

  const registerUser = async (userData) => {
    try {
      const res = await fetch(`http://localhost:8080/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData }),
      });
      const result = await res.json();
      if (!result.error) {
        console.log(result);
      } else {
      }
    } catch (error) {}
  };
  return (
    <AuthContext.Provider value={{ loginUser, registerUser }}>
      <ToastContainer autoClose={2000} />
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
