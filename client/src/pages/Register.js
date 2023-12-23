import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "../index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import RegContext from "../context/RegisterContext";

const Register = () => {
  // const { RegisterUser } = useContext(RegContext);
  const [credentials, setCredential] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
    confirmPassword: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setCredential({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(credentials);
    if (
      !credentials.name ||
      !credentials.email ||
      !credentials.dob ||
      !credentials.password ||
      !credentials.confirmPassword
    ) {
      toast.error("Enter all fields");
      return;
    }

    if (credentials.password !== credentials.confirmPassword) {
      toast.error("Password do not match");
    }

    // RegisterUser(credentials);
  };

  return (
    <>
      <div className="container mt-5 mb-5 col-10 col-sm-8 col-md-6 col-lg-5">
        <ToastContainer autoClose={2000} />
        <center />
        <h3> Add an Admin</h3>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="Name" className="form-label mt-4">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={credentials.name}
              onChange={handleInput}
              placeholder="Enter full name"
            />
          </div>
          <div class="form-group">
            <label htmlFor="Email" className="form-label mt-4">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleInput}
              placeholder="Enter Email"
            />
          </div>
          <div class="form-group">
            <label htmlFor="dob" className="form-label mt-4">
              Date of Birth
            </label>
            <input
              type="date"
              className="form-control"
              id="dob"
              name="dob"
              value={credentials.dob}
              onChange={handleInput}
              placeholder="Enter your Birthday"
            />
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
              value={credentials.password}
              onChange={handleInput}
              placeholder="Enter password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword" className="form-label mt-4">
              Confirm Password
            </label>
            <input
              type="password" //makes it dots
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={credentials.confirmPassword}
              onChange={handleInput}
              placeholder="Confirm Password"
            />
          </div>
          <input
            type="submit"
            value="Register"
            className="btn btn-primary mt-3"
          />
          <p className="mt-2">
            already have an account? <Link to="/login"> Login</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Register;
