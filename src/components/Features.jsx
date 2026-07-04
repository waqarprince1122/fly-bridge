import React from "react";
import "./Features.css";

import Card1 from "../assets/Card1.jpg";
import Cards2 from "../assets/Cards2.jpg";
import Cards3 from "../assets/Cards3.jpg";
import Cards4 from "../assets/Cards4.jpg";

import {
  FaArrowRight,
  FaArrowLeft,
  FaHeart,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";

function Features() {
  const destinations = [
    {
      id: 1,
      image: Card1,
      name: "Bali",
      country: "Indonesia",
      rating: "4.9",
      price: "$499",
    },
    {
      id: 2,
      image: Cards2,
      name: "Bangkok",
      country: "Thailand",
      rating: "4.8",
      price: "$399",
    },
    {
      id: 3,
      image: Cards3,
      name: "Cancun",
      country: "Mexico",
      rating: "4.7",
      price: "$699",
    },
    {
      id: 4,
      image: Cards4,
      name: "Nha Trang",
      country: "Vietnam",
      rating: "4.8",
      price: "$459",
    },
  ];

  return (
    <section className="features-section">

      <div className="container">

        {/* Heading */}

        <div className="features-header">

          <div>
            <span className="section-tag">
              Popular Destinations
            </span>

            <h2>
              Top Destinations For Your Next Vacation
            </h2>

            <p>
              Discover beautiful places around the world with the
              best travel experiences.
            </p>
          </div>

          <div className="slider-btns">

            <button>
              <FaArrowLeft />
            </button>

            <button>
              <FaArrowRight />
            </button>

          </div>

        </div>

        {/* Cards */}

        <div className="row g-4">

          {destinations.map((item) => (

            <div
              className="col-12 col-sm-6 col-lg-3"
              key={item.id}
            >

              <div className="destination-card">

                <div className="image-box">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-fluid"
                  />

                  <button className="wishlist-btn">
                    <FaHeart />
                  </button>

                  <div className="rating">

                    <FaStar />

                    <span>{item.rating}</span>

                  </div>

                </div>

                <div className="card-content">

                  <h4>{item.name}</h4>

                  <p>
                    <FaMapMarkerAlt className="location-icon" />
                    {item.country}
                  </p>

                  <div className="card-footer">

                    <div>

                      <small>Starting From</small>

                      <h5>{item.price}</h5>

                    </div>

                    <button className="explore-btn">
                      Explore
                    </button>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom Button */}

        <div className="text-center mt-5">

          <button className="see-btn">

            View All Destinations

          </button>

        </div>

      </div>

    </section>
  );
}

export default Features;

