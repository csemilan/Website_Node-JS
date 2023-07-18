import React from "react";
import Custom from "./Custom";
import image1 from "../assets/logo.jpg";
import image2 from "../assets/campus1.jpg";
import image3 from "../assets/campus2.jpg";

const Campus = () => {
  return (
    <div>
      <Custom text="School Campus" title1="School Campus" title="Campus" />
      <div className="container-fluid tertiary-color pt-5" style={{backgroundColor:'#ffff7726'}}>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-12 col-md-4 p-2">
            <h4 className="text-bolder" style={{ color: "darkblue" }}>
              <u>School </u>Campus
            </h4>
            <h3 className="text-bolder fifth-text-color text-size mt-3">
              Welcome to <br />
              SNS Global School
            </h3>

            <div
              id="carouselExampleAutoplaying"
              className="carousel slide mt-4"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner" style={{boxShadow:'5px 0 15px grey'}}>
                <div class="carousel-item active">
                  <img src={image1} class="d-block w-100" alt="campus" height={300}/>
                </div>
                <div class="carousel-item">
                  <img src={image2} class="d-block w-100" alt="campus" height={300}/>
                </div>
                <div class="carousel-item">
                  <img src={image3} class="d-block w-100" alt="campus" height={300}/>
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div
            className="col-12 col-md-4 mt-5 p-4"
            style={{ textAlign: "justify" }}
          >
            <p className="fifth-text-color">
              Babu Gaya Prasad Convent School is part of Babu Gaya Prasad
              Educational Society Society which was established with a purpose
              for providing education to this rural area. The school has a vast
              pastoral 1.5 acre expanse and is located in a serene and pollution
              free environment. The Babu Gaya Prasad Convent is a brain child of
              Mr. Keshav Ram Maurya who felt the need of good institution for
              catering the needs of modern generation learners in region
              ofAyodhya and between Ayodhya and Ambedkar nagar. The idea of
              institution also inculcating the needs of first-generation
              learners of this region was finalized on 2nd April 2013. The
              school was affiliated to CBSE Delhi on 1st April 2017, upgraded to
              class XII in 2019 for science and commerce stream. The school is
              equipped with physics, chemistry, biology, computer, math labs.
              The school has well stocked library as well as indoor and outdoor
              games facilities. Subjects offered for classes XI-XII are English,
              Math, Physics, Chemistry, Physical and health Education, Biology,
              accountancy, Economics, Business studies and Hindi for the session
              2020-21 onwards.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-12 col-md-8">
            <h4 className="text-bolder" style={{ color: "darkblue" }}>
              <u>Mission</u>
            </h4>
            <p
              className=" fifth-text-color"
              style={{ textAlign: "justify" }}
            >
              We aim to preserve and enhance the highest standards of excellence
              and prepare capable, responsible citizens for the 21st century'.
              We ensure that Babu Gaya Prasad Convent School students are helped
              to master the expanding horizons of technology as also to become
              the repository of a deep commitment to the Indian ethos and
              culture. We enable Babu Gaya Prasad Convent School students to be
              equipped to access the best opportunities of growth and
              advancement prepared linguistically and culturally for them. The
              concept of 'enlightened citizens of the world' is the backdrop of
              all our efforts. We earnestly desire to train the students of Babu
              Gaya Prasad Convent Schools to be sensitized to the environmental
              concerns, evoking in them the feelings of nationalism and communal
              harmony and motivating them to follow the motto of 'Service Before
              Self' by serving others willingly, graciously and selflessly.
            </p>

            <div className="container-fluid">
              <div className="row">
                <div className="col-12 p-0">
                  <h5 className="secondary-text-color">
                    "To bear the cost of the instrument and never to know that
                    it is for the music is the tragedy of life’s deafness"
                  </h5>
                  <h6 className="fifth-text-color">-Rabindra Nath Tagore</h6>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2"></div>
            <div className="col-12 col-md-8 mt-4">
              <h4 className="text-bolder" style={{ color: "darkblue" }}>
                <u>Our </u> Vission
              </h4>
              <ul className="fifth-text-color mt-3 mb-4" type="square">
                <li>Laying a sound foundation in the core subjects.</li>
                <li>
                  Assessment based on competition with oneself, not with others.
                </li>
                <li>Hands-on interactive learning.</li>
                <li>Multiple intelligence.</li>
                <li>Greater use of peer learning and correction.</li>
                <li>Personalized learning.</li>
                <li>Constructivism</li>
                <li>Learning without cramming.</li>
                <li>Inculcating discipline without fear.</li>
                <li>Making every child IT savvy.</li>
                <li>Developing life skills.</li>
                <li>Developing self-esteem & confidence in each child.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campus;
