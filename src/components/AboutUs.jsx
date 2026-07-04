import React from "react";
import Page from "../assets/Page.jpg";

function AboutUs() {
  return (
    <>
     <div ClassName="about-wrapper">
      <div className="bg-light py-5 border-bottom">
        <div className="container text-center">
          <h1 className="fw-bold mt-5">About Us</h1>
          <p className="text-muted mx-auto" style={{ maxWidth: "800px" }}>
            FlyBride Tours is a travel service dedicated to making your journeys simple, comfortable, and memorable. 
            We help people explore new destinations with ease by offering well-planned and affordable travel options. 
            Whether you are planning a family trip, a honeymoon, or a group tour, our goal is to provide a smooth and 
            enjoyable experience from start to finish.
          </p>
        </div>
      </div>
      <div className="container py-5 px-3">
        <div className="row align-items-center justify-content-center g-4">

          <div className="col-md-5">
            <img
              src={Page}
              className="img-fluid rounded shadow-sm w-100"
              alt="travel"
            />
            
          </div>

          <div className="col-md-5">
            <h2 className="fw-bold mb-3">Who We Are</h2>
            <p className="text-muted">
              We are a travel service that focuses on helping people explore
              different places in a simple and comfortable way.
            </p>
            <p className="text-muted">
              Our goal is to provide easy travel planning with affordable
              options and reliable support so you can enjoy your trip without stress.
            </p>
          </div>

        </div>
      </div>
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-4">Why Choose Us</h2>

         <div className="row align-items-center justify-content-center g-4">

            <div className="col-md-3">
              <div className="p-4 border rounded">
                <h5 className="fw-bold">Easy Booking</h5>
                <p className="text-muted mb-0">
                  Simple and quick booking process for everyone.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-4 border rounded">
                <h5 className="fw-bold">Affordable Plans</h5>
                <p className="text-muted mb-0">
                  Travel packages that fit your budget.
                </p>
              </div>
            </div>

            <div className="col-md-3">
              <div className="p-4 border rounded">
                <h5 className="fw-bold">Customer Support</h5>
                <p className="text-muted mb-0">
                  We are always here to guide you.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="container py-5 text-center">
        <h4 className="fw-bold">Ready to travel?</h4>
        <p className="text-muted">
          Start planning your next trip with us today.
        </p>
        <button className="btn btn-dark px-4">Explore Tours</button>
      </div>
      </div>
    </>
  );
}

export default AboutUs;