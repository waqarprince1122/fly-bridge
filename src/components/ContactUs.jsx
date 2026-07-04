import React, { useState } from "react";
import "./ContactUs.css";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

function ContactUs() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Thank you! We received your message.");

    setForm({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      {/* Hero Section */}

      <section className="contact-hero">
        <div className="overlay">
          <h1>Contact Us</h1>

          <p>
            Ready for your next adventure? Our travel experts are here to help
            you plan the perfect journey.
          </p>
        </div>
      </section>

      {/* Contact Section */}

      <section className="contact-section">
        {/* Left Side */}

        <div className="contact-info">

          <span className="tag">Let's Talk</span>

          <h2>Plan Your Dream Trip With Us</h2>

          <p>
            Whether you're looking for a relaxing beach vacation, an exciting
            mountain adventure, or an international tour package, our team is
            ready to help. Contact us today and we'll make your travel
            experience unforgettable.
          </p>

          <div className="info-card">
            <div className="icon">
              <FaMapMarkerAlt />
            </div>

            <div>
              <h3>Office Address</h3>
              <p>Kalma Chock century Bulding , Lahore, Pakistan</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon">
              <FaPhoneAlt />
            </div>

            <div>
              <h3>Phone</h3>
              <p>+92 301 9103546</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon">
              <FaEnvelope />
            </div>

            <div>
              <h3>Email</h3>
              <p>waqarabdullah1970@gmail.com</p>
            </div>
          </div>

          <div className="info-card">
            <div className="icon">
              <FaClock />
            </div>

            <div>
              <h3>Working Hours</h3>
              <p>Monday - Saturday (9:00 AM - 6:00 PM)</p>
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div className="contact-form">

          <h2>Send Us A Message</h2>

          <p>
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Write your message..."
              value={form.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>
      </section>
    </>
  );
}

export default ContactUs;
