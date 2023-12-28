import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../context/AuthContext";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const [credential, setCredential] = useState({ email: "", password: "" });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCredential({ ...credential, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!credential.email || !credential.password) {
      toast.error("Enter all fields");
      return;
    }

    loginUser(credential);
  };

  return (
    <>
      <ToastContainer autoClose={2000} />
      <div className="container mt-5 mb-5 col-10 col-sm-8 col-md-6 col-lg-5">
        <h3> Login</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="Email" className="form-label mt-4">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="Username"
              name="email"
              aria-describedby="emailHelp"
              value={credential.email}
              onChange={handleInput}
              placeholder="Enter email"
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
          <input type="submit" className="btn btn-primary mt-3"></input>
          <p className="mt-2">
            Forgot Password? <Link to="/register">Click here.</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
