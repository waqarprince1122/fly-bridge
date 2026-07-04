import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
      <div className="container-fluid">
        
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" width="60" />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav ms-">

            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Tours
              </a>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/tours">
                    Tours List
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/tour1">
                    Single Tour Layout 1
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/tour1">
                    Single Tour Layout 1
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/tour2">
                    Single Tour Layout 2
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/tour2">
                    Single Tour Layout 2
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/deals">
                    Deals
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;