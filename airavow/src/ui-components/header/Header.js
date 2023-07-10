import React from "react";
import logo from '../../assets/hero-icon.png';

import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row" style={{backgroundColor: 'rgb(7, 78, 78)'}}>
          <div className="col-1"></div>
          <div className="col-3 p-0 text-center">
            <p style={{color:'white', marginBottom:'0', marginTop:'0', fontWeight:'lighter', fontSize:'0.75rem'}}>
              <i className="fa-solid fa-envelope p-1"></i>
              abhishekranjansrivastava19@gmail.com
            </p>
          </div>
          <div className="col-2 p-0 text-center">
            <p style={{color:"white", marginBottom:'0', marginTop:'0', fontWeight:'lighter', fontSize:'0.75rem'}}>
              <i className="fa-solid fa-phone p-1"></i>
              +91 7905355614
            </p>
          </div>

          
          <div className="col-4 p-0 text-center">
            <p style={{color:"white", marginBottom:'0', marginTop:'0', fontWeight:'lighter', fontSize:'0.75rem'}}>Affilated to CBSE (New Delhi) Affi No. 123456789</p>
          </div>

          <div className="col-2 p-0 text-center">
            <p style={{color:"white", marginBottom:'0', marginTop:'0', fontWeight:'lighter', fontSize:'0.75rem'}}>
              <i className="fa-brands fa-facebook px-2"></i>
              <i className="fa-brands fa-instagram px-2"></i>
              <i className="fa-brands fa-youtube px-2"></i>
            </p>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="image-container" style={{height:'50px'}}>
            <img src={logo} width={100} height={100} style={{marginTop:'-25px', marginLeft:'30px'}}/>
          </div>
          <a className="navbar-brand" href="#">
            {/* <img src={logo}/> */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav" style={{flexDirection: 'column-reverse'}}>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  School Campus
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Academic
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Gallery</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Disclouser</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Downloads</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Student Portal</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
