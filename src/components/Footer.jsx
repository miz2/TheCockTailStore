import React from "react";
import "./footer.css"; // Assuming your CSS file is named footer.css
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <h3>Contact Us</h3>
          <p>Email: mizaanurrehman@gmail.com</p>
          <p>Phone: +91 7983464480</p>
          <p>Student at: DIT University</p>
        </div>
        <div className="footer-content">
        </div>
        <div className="footer-content">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li>
              <a href="https://www.linkedin.com/in/mizaan-ur-rehman-278706249/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
                <i className="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bottom-bar">
        <p>&copy; 2024 Your Company. All rights reserved. Created by Mizaan ur Rehman</p>
      </div>
    </footer>
  );
};

export default Footer;
