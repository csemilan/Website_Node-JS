import React from "react";
import logo from "../../assets/hero-icon.png";

import "./Header.css";

const Header = () => {
  return (
    <div style={{position:'fixed', width:'100%', zIndex: '1'}}>
      <div className="container-fluid">
        <div className="row pt-1 pb-1" style={{ backgroundColor: "#14BDEE" }}>
          <div className="col-1"></div>
          <div className="col-3 p-0 text-center">
            <p
              style={{
                color: "white",
                marginBottom: "0",
                marginTop: "0",
                fontWeight: "lighter",
                fontSize: "0.75rem",
              }}
            >
              <i className="fa-solid fa-envelope p-1"></i>
              abhishekranjansrivastava19@gmail.com
            </p>
          </div>
          <div className="col-2 p-0 text-center">
            <p
              style={{
                color: "white",
                marginBottom: "0",
                marginTop: "0",
                fontWeight: "lighter",
                fontSize: "0.75rem",
              }}
            >
              <i className="fa-solid fa-phone p-1"></i>
              +91 7905355614
            </p>
          </div>

          <div className="col-4 p-0 text-center">
            <p
              style={{
                color: "white",
                marginBottom: "0",
                marginTop: "0",
                fontWeight: "lighter",
                fontSize: "0.75rem",
              }}
            >
              Affilated to CBSE (New Delhi) Affi No. 123456789
            </p>
          </div>

          <div className="col-2 p-0 text-center">
            <p
              style={{
                color: "white",
                marginBottom: "0",
                marginTop: "0",
                fontWeight: "lighter",
                fontSize: "0.75rem",
              }}
            >
              <i className="fa-brands fa-facebook px-2"></i>
              <i className="fa-brands fa-instagram px-2"></i>
              <i className="fa-brands fa-youtube px-2"></i>
            </p>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className="image-container" style={{ height: "50px" }}>
            <img
              src={logo}
              width={100}
              height={100}
              style={{ marginTop: "-25px", marginLeft: "30px" }}
            />
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
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            style={{ flexDirection: "column-reverse" }}
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  School Campus
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/campus">
                      Campus
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/laboratories">
                      Laboratories
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/library">
                      Library
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/sports">
                      Sports
                    </a>
                  </li>
                </ul>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Academic
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/management">
                      Management Committee
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/academic">
                      Academic
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/achievers">
                      Achievers
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/guidelines">
                      Guidelines
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="/faculty">
                      Faculty
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="/carriculum">
                      Carriculum
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="/cws">
                      Class Wise Student
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="/cwbl">
                      Class Wise Books List
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="/teachers-training-detail">
                      Teachers Training Details
                    </a>
                  </li>
                </ul>
              </li>
              
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gallery
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/media-coverage">
                      Media Coverage
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/gallery-album">
                      Gallery Album
                    </a>
                  </li>
                  
                </ul>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/disclouser">
                  Disclouser
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Downloads
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="/campus">
                      Downloads Documents
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/laboratories">
                      Admission From
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/library">
                      Fee Structure
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="/sports">
                      Datesheet
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="/sports">
                      Academic Planner
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="/sports">
                      Vacancy Form
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="/sports">
                      Summer Assignment
                    </a>
                  </li>

                  <li>
                    <a class="dropdown-item" href="/sports">
                      Transfer Certificate
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Student Portal
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
