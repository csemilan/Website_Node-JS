import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row banner-top secondary-color pb-4">
        <div className="col-2"></div>
        <div className="col-8 p-0 text-center">
          <div className="banner-top-content fifth-text-color" style={{marginTop:'12%'}}>
            <h2>
              Addmimission open for <span>2023-2024</span>
            </h2>
            <button className="btn fifth-text-color">
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
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://images.pexels.com/photos/5212653/pexels-photo-5212653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              className="d-block w-100"
              alt="..."
              style={{ width: "100%", height: "90vh" }}
            />
          </div>
          <div className="carousel-caption d-md-block fifth-color">
            <h2 className="secondary-text-color">First slide label</h2>
            <h3>Some representative placeholder content for the first slide.</h3>
          </div>
          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/8500309/pexels-photo-8500309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              class="d-block w-100"
              alt="..."
              style={{ width: "100%", height: "500px" }}
            />
          </div>
          <div className="carousel-caption d-md-block fifth-color">
            <h2 className="secondary-text-color">First slide label</h2>
            <h3>Some representative placeholder content for the first slide.</h3>
          </div>
          <div class="carousel-item">
            <img
              src="https://images.pexels.com/photos/8423020/pexels-photo-8423020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              class="d-block w-100"
              alt="..."
              style={{ width: "100%", height: "500px" }}
            />
          </div>
          <div className="carousel-caption d-md-block fifth-color">
            <h2 className="secondary-text-color">First slide label</h2>
            <h3>Some representative placeholder content for the first slide.</h3>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
