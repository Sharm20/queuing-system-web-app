import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../context/AuthContext";

const Login = ({}) => {
  const { loginUser } = useContext(AuthContext);

  const [credential, setCredential] = useState({ name: "", password: "" });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCredential({ ...credential, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!credential.name || !credential.password) {
      toast.error("Enter all fields");
      return;
    }
    loginUser(credential);
  };

  return (
    <>
      <ToastContainer autoClose={2000} />
      <div className="container  mb-5 col-10 col-sm-8 col-md-6 col-lg-5">
        <h3> Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="Name" className="form-label mt-4">
              Name
            </label>
            <input
              type="name"
              className="form-control"
              id="name"
              name="name"
              aria-describedby="name"
              value={credential.name}
              onChange={handleInput}
              placeholder="Enter Name"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your Username with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="passwordInput" className="form-label mt-4">
              Password
            </label>
            <input
              type="password" //makes it dots
              className="form-control"
              id="passwordInput"
              name="password"
              value={credential.password}
              onChange={handleInput}
              placeholder="Enter password"
            />
          </div>

          {""}
          <input type="submit" className="btn btn-primary mt-3"></input>
          <p className="mt-2">Forgot Password?</p>
        </form>
      </div>
    </>
  );
};

export default Login;
