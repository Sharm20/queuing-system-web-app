import { Link } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
const Navbar = ({ title = "Admin" }) => {
  return (
    <nav class="navbar navbar-expand bg-dark" data-bs-theme="dark">
      <div class="container-fluid">
        <Link to="/">
          <a class="navbar-brand">{title}</a>
        </Link>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor02"
          aria-controls="navbarColor02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <Link to="/login">
                <a class="nav-link">Login</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/register">
                <a class="nav-link">Register</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
