import { Link } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/CreateClinic";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const Navbar = ({ title = "Admin" }) => {
  const { user, setUser } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <Link to="/">
          <a className="navbar-brand">{title}</a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarColor02">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/">
                <a className="nav-link">Login</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/create-clinic">
                <a className="nav-link">Add Clinic</a>
              </Link>

              {/* <button className="btn btn-danger">Logout</button> */}
            </li>
            <li>
              <Link to="/create-admin">
                <a className="nav-link">Add Admin</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
