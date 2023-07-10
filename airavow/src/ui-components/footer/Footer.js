import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-12 col-md-4">
          <h2>About Us</h2>
          <p className="about" style={{ textAlign: "justify", fontWeight:'lighter' }}>
            Babu Gaya Prasad Convent School is a part of Babu Gaya Prasad
            Educational Society which was established with a purpose for
            providing education to this rural area. The school has a vast
            pastoral 1.5 acre expanse and is located in a serene and pollution
            free environment. Take a look of this journey "
          </p>
        </div>
        <div className="col-6 col-md-2 footer">
          <h2 className="p-1">Quick Links</h2>
          <ul className="footer-list">
            <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="#">Campus</a></li>
            <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="#">Laboratories</a></li>
            <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="#">Library</a></li>
            <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="#">Sports</a></li>
            <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="#">Fee Structure</a></li>
          </ul>
        </div>
        <div className="col-6 col-md-2 footer">
        <h2 className="p-1">Essentials</h2>
          <ul className="footer-list">
            <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="#">Campus</a></li>
            <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="#">Laboratories</a></li>
            <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="#">Library</a></li>
            <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="#">Sports</a></li>
            <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="#">Fee Structure</a></li>
          </ul>
        </div>
      </div>
      <div className="row footer-social-icons">
        <div className="col-12 text-center">
          <i className="fa-brands fa-facebook px-4"></i>
          <i className="fa-brands fa-instagram px-4"></i>
          <i className="fa-brands fa-youtube px-4"></i>
        </div>
        <div className="col-12 text-center mt-1">
          <p>BGCS &#169; 2023 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
