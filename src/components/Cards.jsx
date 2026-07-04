import React from "react";
import "./Cards.css";
import { FaGlobe, FaTags, FaUmbrellaBeach, FaAward } from "react-icons/fa";

function Features() {
  return (
    <div className="features-section py-5">
      <div className="container">
        <div className="row text-center">

          <div className="col-md-3 mb-4">
            <div className="feature-box">
              <FaGlobe className="feature-icon" />
              <h4>Discover the possibilities</h4>
              <p>
                With nearly half a million attractions, hotels & more,
                you're sure to find joy.
              </p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="feature-box">
              <FaTags className="feature-icon" />
              <h4>Enjoy deals & delights</h4>
              <p>
                Quality activities. Great prices. Plus, earn credits
                to save more.
              </p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="feature-box">
              <FaUmbrellaBeach className="feature-icon" />
              <h4>Exploring made easy</h4>
              <p>
                Book last minute, skip lines & get free cancellation
                for easier exploring.
              </p>
            </div>
          </div>

          <div className="col-md-3 mb-4">
            <div className="feature-box">
              <FaAward className="feature-icon" />
              <h4>Travel you can trust</h4>
              <p>
                Read reviews & get reliable customer support.
                We're with you at every step.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Features;