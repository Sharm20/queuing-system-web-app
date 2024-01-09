import { createContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  //   login request
  const loginUser = async (userData) => {
    try {
      const res = await fetch(`http://localhost:8080/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData }),
      });
      const result = await res.json();
      if (!result.error) {
        console.log(result.user);
        localStorage.setItem("token", result.token);
        setUser(result.user);
      } else {
        // console.log(result);
        // setError(result.error);
        // toast.error(error);
        // setError(null);
      }

      const role = result.user.userType;
      if (role === "admin") {
        navigate("/admin-dashboard");
      } else {
        navigate("/clinic-dashboard");
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
  const logout = () => {
    setUser(null);
  };

  const addClinic = async (userData) => {
    try {
      const res = await fetch(`http://localhost:8080/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData }),
      });
      const result = await res.json();
      if (!result.error) {
        // console.log(result);
        console.log(result.user);
      } else {
      }
    } catch (error) {}
  };

  const addAdmin = async (userData) => {
    try {
      const res = await fetch(`http://localhost:8080/user/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...userData, userType: "admin" }),
      });
      const result = await res.json();
      if (!result.error) {
        console.log(result);
      } else {
      }
    } catch (error) {}
  };

  return (
    <AuthContext.Provider value={{ loginUser, addClinic, addAdmin, logout }}>
      <ToastContainer autoClose={2000} />
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
