import React from "react";
import "./Footer.css";
import logo from "../assets/logo.jpg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">

          <div className="col-md-4 mb-4">
           <img
  src={logo}
  alt="FlyBridge"
  className="img-fluid mb-3"
/>
            <p><i className="bi bi-geo-alt"></i> Office: 1A, Mezzanine Floor, Century Tower, Gulberg 3, Lahore</p>
            <p><i className="bi bi-telephone"></i> 0312-9200095 \ 042-32317486</p>
            <p><i className="bi bi-envelope"></i> contact@flybridgetravels.com</p>
          </div>

          <div className="col-md-2 mb-4">
            <h5 className="text-white">Top Destination</h5>
            <ul className="list-unstyled">
              <li><a href="#">Bali</a></li>
              <li><a href="#">Bangkok</a></li>
              <li><a href="#">Cancun</a></li>
              <li><a href="#">Nha Trang</a></li>
              <li><a href="#">Phuket</a></li>
              <li><a href="#">Tokyo</a></li>
              <li><a href="#">More Destinations</a></li>
            </ul>
          </div>

          <div className="col-md-2 mb-4">
            <h5 className="text-white">Information</h5>
            <ul className="list-unstyled">
              <li><a href="#">Help & FAQs</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Contact us</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Blogs</a></li>
            </ul>
          </div>

          <div className="col-md-4 mb-4">
            <h5 className="text-white">Follow Us</h5>
            <div className="mb-3">
              <a href="#" className="social-icon facebook"><i className="bi bi-facebook"></i></a>
              <a href="#" className="social-icon instagram"><i className="bi bi-instagram"></i></a>
              <a href="#" className="social-icon linkedin"><i className="bi bi-linkedin"></i></a>
              <a href="#" className="social-icon youtube"><i className="bi bi-youtube"></i></a>
            </div>

            <h5 className="text-white mt-3">Payment channels</h5>
            <div className="payment-icons d-flex flex-wrap">
              <img src="https://i.imgur.com/4NZ6uLY.png" alt="UnionPay" />
              <img src="https://i.imgur.com/5qgQNkE.png" alt="Visa" />
              <img src="https://i.imgur.com/6cB5QzZ.png" alt="MasterCard" />
              <img src="https://i.imgur.com/ljBk0xA.png" alt="JCB" />
              <img src="https://i.imgur.com/GpJ4SVy.png" alt="PayPal" />
              <img src="https://i.imgur.com/1JD1qra.png" alt="Amex" />
              <img src="https://i.imgur.com/xXQ0b8j.png" alt="Apple Pay" />
              <img src="https://i.imgur.com/7QLlEvH.png" alt="Google Pay" />
              <img src="https://i.imgur.com/f6x6w8O.png" alt="Alipay" />
              <img src="https://i.imgur.com/pxQkhB1.png" alt="Payoneer" />
            </div>
          </div>

        </div>

        <div className="footer-bottom">
          &copy; 2025 Flybridge. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;