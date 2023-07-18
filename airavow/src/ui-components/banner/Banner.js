import React from "react";
import "./Banner.css";
import banner1 from '../../assets/banner.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'
import banner4 from '../../assets/campus1.jpg'
import banner5 from '../../assets/WhatsApp Image 2023-07-17 at 14.51.41.jpg';
import banner6 from '../../assets/WhatsApp Image 2023-07-17 at 14.47.27.jpg';
import banner7 from '../../assets/WhatsApp Image 2023-07-17 at 14.52.11.jpg';

const Banner = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row banner-top secondary-color pb-4" style={{backgroundColor: '#0a1638'}}>
        <div className="col-2"></div>
        <div className="col-8 pt-4 text-center" style={{ marginTop: "20vh" }}>
          <div className="banner-top-content primary-text-color">
            <h2>
              Addmimission open for <span>2023-2024</span>
            </h2>
            <button className="btn fifth-text-color btn-warning">
              <h4>Click Here To Apply</h4>
            </button>
          </div>
        </div>
      </div>

      {/* CROUSEL */}

      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ backgroundColor: "#2A303F" }}
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={banner1}
              className="d-block w-100"
              alt="..."
              style={{ width: "100%", height: "80vh" }}
            />
          </div>
          <span className="caption">
            <h2 className="heading">Title</h2>
            <h3>Lorem ipsum dolor sit amet consectetur ghtsftd hueyi</h3>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
            <h6>
              114/46 kanpur uttar pradesh 208025 &nbsp; &nbsp;
            </h6>
          </span>
          <div className="carousel-item">
            <img
              src={banner2}
              className="d-block w-100"
              alt="..."
              style={{ width: "100%", height:'80vh' }}
            />
          </div>
          <span className="caption">
            <h2 className="heading">Title</h2>
            <h3>Lorem ipsum dolor sit amet consectetur ghtsftd hueyi</h3>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
            <h6>
              114/46 kanpur uttar pradesh 208025 &nbsp; &nbsp;
            </h6>
          </span>
          <div className="carousel-item">
            <img
              src={banner3}
              className="d-block w-100"
              alt="..."
              style={{ width: "100%", height: "80vh" }}
            />
          </div>
          <span className="caption">
            <h2 className="heading">Title</h2>
            <h3>Lorem ipsum dolor sit amet consectetur ghtsftd hueyi</h3>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h5>
            <h6>
              114/46 kanpur uttar pradesh 208025 &nbsp; &nbsp;
            </h6>
          </span>

          <div className="carousel-item active">
            <img
              src={banner4}
              className="d-block w-100"
              alt="..."
              style={{ width: "100%", height: "80vh" }}
            />
          </div>

          <div className="carousel-item">
            <img
              src={banner5}
              className="d-block w-100"
              alt="..."
              style={{ width: "100%", height: "80vh" }}
            />
          </div>

          <div className="carousel-item">
            <img
              src={banner6}
              className="d-block w-100"
              alt="..."
              style={{ width: "100%", height: "80vh" }}
            />
          </div>

          <div className="carousel-item">
            <img
              src={banner7}
              className="d-block w-100"
              alt="..."
              style={{ width: "100%", height: "80vh" }}
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
