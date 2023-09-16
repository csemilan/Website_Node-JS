import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <div className="container-fluid footer-image">
      <div className="row footer-container pt-5 pb-4">
        <div className="col-md-2"></div>
        <div className="col-12 col-md-4">
          <h4><span className="primary-text-color">About</span><span className="secondary-text-color">Us</span></h4>
          <p className="about" style={{ textAlign: "justify", fontWeight:'lighter' }}>
            Shri Natthu Singh (SNS) Global School is a part of SNS
            Educational Society which was established with a purpose for
            providing education to this rural area. The school has a vast
            pastoral 1.5 acre expanse and is located in a serene and pollution
            free environment. Take a look of this journey "
          </p>
        </div>
        <div className="col-6 col-md-2 footer p-0" style={{marginLeft:'5%'}}>
          <h4 className="p-1 primary-text-color">Quick<span className="secondary-text-color">Links</span></h4>
          <ul className="footer-list">
            <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="/campus">Campus</a></li>
            <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="/laboratories">Laboratories</a></li>
            <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="/library">Library</a></li>
            <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="/sports">Sports</a></li>
            <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="/fee-structure">Fee Structure</a></li>
          </ul>
        </div>
        <div className="col-6 col-md-2 footer p-0" style={{marginLeft:'5%'}}>
        <h4 className="p-1 primary-text-color">Essentials</h4>
          <ul className="footer-list">
            <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="#">Downloads</a></li>
            <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="#">Academic Planner</a></li>
            <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="#">Transfer Certificate</a></li>
            <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="/diclouser">Disclouser</a></li>
            <li><i className="fa fa-solid fa-chevron-right p-2"></i><a href="/contact">Contact Us</a></li>
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
          <p>DPS Technologies &#169; 2023 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
