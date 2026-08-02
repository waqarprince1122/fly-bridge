import React from "react";
import "./Hero.css";
import Card1 from "../assets/Card1.jpg";
import { FaMapMarkerAlt, FaCalendarAlt, FaSearch } from "react-icons/fa";

function Hero() {
  return (
    <div className="hero-container-fluid position-relative">
      <img src={Card1} className="hero-img img-fluid w-100" alt="travel" />

      <div className="hero-text text-center text-white position-absolute top-50 start-50 translate-middle w-75">
        <h1>
          Millions of experiences.<br />
          One simple search.
        </h1>
        <p>Find what makes you happy anytime, anywhere</p>

        {/* Bootstrap Search Bar */}
        <div className="card hero-search-card p-3 shadow border-0">
          <div className="row g-0 align-items-center">
            <div className="col-md-5 border-end d-flex align-items-center px-3">
              <FaMapMarkerAlt className="me-2 text-secondary" />
              <div>
                <small className="text-muted d-block">Where To?</small>
                <input
                  type="text"
                  className="form-control border-0 p-0"
                  placeholder="Search a place or activity"
                />
              </div>
            </div>

            <div className="col-md-5 border-end d-flex align-items-center px-3">
              <FaCalendarAlt className="me-2 text-secondary" />
              <div>
                <small className="text-muted d-block">When?</small>
                <input
                  type="text"
                  className="form-control border-0 p-0"
                  placeholder="Select dates"
                />
              </div>
            </div>

            <div className="col-md-2 text-center">
              <button className="btn btn-warning rounded-circle p-3">
                <FaSearch className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;