import React from "react";
import logo from "../../assets/logo.jpg";

import "./Header.css";

const Header = () => {
  return (
    <div style={{height:'17vh', width:'100%', zIndex: '2', position:'fixed'}}> 
      <div className="container-fluid">
        <div className="row pt-3 pb-3 primary-color"> 
          <div className="col-1"></div>
          <div className="col-12 col-md-3 p-0 text-center">
            <p
              style={{
                color: "white",
                marginBottom: "0",
                marginTop: "0",
                fontWeight: "lighter",
                fontSize: "1rem",
              }}
            >
              <i className="fa-solid fa-envelope p-1"></i>
              snsglobalschool3@gmail.com
            </p>
          </div>
          <div className="col-12 col-md-2 p-0 text-center">
            <p
              style={{
                color: "white",
                marginBottom: "0",
                marginTop: "0",
                fontWeight: "lighter",
                fontSize: "1rem",
              }}
            >
              <i className="fa-solid fa-phone p-1"></i>
              +91 8188875100
            </p>
          </div>

          <div className="col-12 col-md-4 p-0 text-center">
            <p
              style={{
                color: "white",
                marginBottom: "0",
                marginTop: "0",
                fontWeight: "lighter",
                fontSize: "1rem",
              }}
            >
              To Be Affilated From CBSE (New Delhi)
            </p>
          </div>

          <div className="col-12 col-md-2 p-0 text-center">
            <p
              style={{
                color: "white",
                marginBottom: "0",
                marginTop: "0",
                fontWeight: "lighter",
                fontSize: "1rem",
              }}
            >
              <i className="fa-brands fa-facebook px-2"></i>
              <i className="fa-brands fa-instagram px-2"></i>
              <i className="fa-brands fa-youtube px-2"></i>
            </p>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg secondary-color" style={{boxShadow:'5px 0 10px grey', padding:'5px'}}>
        <div className="container-fluid">
          <div className="image-container">
            <img
              src={logo}
              width={100}
              height={95}
              style={{ marginLeft: "10%", boxShadow:'none'}}
            />
          </div>
          <a className="navbar-brand" href="#">
            <h2 className="fifth-text-color" style={{marginLeft:'10%'}}><span className="secondary-text-color">Shri Natthu Singh</span> <br/> Global School</h2>
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
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  School Campus
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/campus">
                      Campus
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/laboratories">
                      Laboratories
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/library">
                      Library
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/sports">
                      Sports
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Academic
                </a>
                <ul className="dropdown-menu">
                  {/* <li>
                    <a class="dropdown-item" href="/management">
                      Management Committee
                    </a>
                  </li> */}
                  <li>
                    <a className="dropdown-item" href="/academic">
                      Academic
                    </a>
                  </li>
                  {/* <li>
                    <a class="dropdown-item" href="/achievers">
                      Achievers
                    </a>
                  </li> */}
                  {/* <li>
                    <a class="dropdown-item" href="/guidelines">
                      Guidelines
                    </a>
                  </li> */}

                  {/* <li>
                    <a class="dropdown-item" href="/faculty">
                      Faculty
                    </a>
                  </li> */}

                  <li>
                    <a className="dropdown-item" href="/carriculum">
                      Carriculum
                    </a>
                  </li>

                  {/* <li>
                    <a class="dropdown-item" href="/cws">
                      Class Wise Student
                    </a>
                  </li> */}

                  {/* <li>
                    <a class="dropdown-item" href="/cwbl">
                      Class Wise Books List
                    </a>
                  </li> */}

                  {/* <li>
                    <a class="dropdown-item" href="/teachers-training-detail">
                      Teachers Training Details
                    </a>
                  </li> */}
                </ul>
              </li>
              
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Gallery
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/media-coverage">
                      Media Coverage
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/gallery-album">
                      Gallery Album
                    </a>
                  </li>
                  
                </ul>
              </li>
              
              {/* <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li> */}
              <li className="nav-item">
                <a className="nav-link" href="/disclouser">
                  Disclouser
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Downloads
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/download_documents">
                      Downloads Documents
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/admission_form">
                      Admission From
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/library">
                      Fee Structure
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/sports">
                      Datesheet
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="/sports">
                      Academic Planner
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="/sports">
                      Vacancy Form
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="/sports">
                      Summer Assignment
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="/sports">
                      Transfer Certificate
                    </a>
                  </li>
                </ul>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="#">
                  Student Portal
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

// position:'fixed',