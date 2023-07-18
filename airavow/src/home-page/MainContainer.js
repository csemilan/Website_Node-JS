import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import founder from "../assets/founder.jpeg";
import director1 from "../assets/director1.jpg";
import chairman from "../assets/director2.jpg";
import principle from "../assets/principle.jpg";
import manager from "../assets/manager.jpg";

const MainContainer = () => {
  const [notices, setNotice] = useState([]);
  const [downloads, setDownloads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/notice");
        setNotice(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/downloads"
        );
        setDownloads(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container-fluid p-0">
      {/* <div className="row">
        <div className="col-md-2"></div>
        <div className="col-12 col-md-8">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-4 col-6">
                <div className="card card-body text-center">
                  <i
                    className="fa-solid fa-book mt-4"
                    style={{ color: "darkblue", fontSize: "6rem" }}
                  ></i>
                  <br />
                  <a href="/library">
                    <h2 className="mt-1" style={{ color: "darkblue" }}>
                      Library
                    </h2>
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-6">
                <div className="card card-body text-center">
                  <i
                    className="fa-solid fa-futbol mt-4"
                    style={{ color: "red", fontSize: "6rem" }}
                  ></i>
                  <a href="/sports">
                    <h2 className="mt-4" style={{ color: "red" }}>
                      Sports
                    </h2>
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-6">
                <div className="card card-body text-center">
                  <i
                    class="fa-solid fa-building-columns mt-4"
                    style={{ color: "green", fontSize: "6rem" }}
                  ></i>
                  <a href="/campus">
                    <h2 className="mt-4" style={{ color: "green" }}>
                      Campus
                    </h2>
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-6">
                <div className="card card-body text-center">
                  <i
                    class="fa-solid fa-trophy mt-4"
                    style={{ color: "rgb(217, 217, 24)", fontSize: "6rem" }}
                  ></i>
                  <a href="/achievers">
                    <h2 className="mt-4" style={{ color: "rgb(217, 217, 24)" }}>
                      Achievers
                    </h2>
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-6">
                <div className="card card-body text-center">
                  <i
                    class="fa-solid fa-users mt-4"
                    style={{ color: "magenta", fontSize: "6rem" }}
                  ></i>
                  <a href="/students">
                    <h2 className="mt-4" style={{ color: "magenta" }}>
                      Students
                    </h2>
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-6">
                <div className="card card-body text-center">
                  <i
                    class="fa-sharp fa-regular fa-images mt-4"
                    style={{ color: "coral", fontSize: "6rem" }}
                  ></i>
                  <a href="/gallery">
                    <h2 className="mt-4" style={{ color: "coral" }}>
                      Gallery
                    </h2>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="notice1 pb-5">
        <div className="row notice-board">
          <div className="col-md-2"></div>
          <div className="col-md-4 col-12" style={{ marginTop: "1%" }}>
            <div
              className="card news p-4"
              style={{ backdropFilter: "blur(10px)" }}
            >
              <div className="title text-center">
                <h2 style={{ color: "white" }}>News & Events</h2>
              </div>
              <div className="scrolling-text-container mt-5">
                <div className="scrolling-text">
                  {notices.map((notice, index) => (
                    <ul key={notice.id}>
                      <a href={notice.pdf}>
                        <li style={{ color: "#ffc107" }}>
                          <h5>{notice.notice}</h5>
                        </li>
                      </a>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12" style={{ marginTop: "1%" }}>
            <div
              className="card notice p-4"
              style={{ backdropFilter: "blur(10px)" }}
            >
              <div className="title text-center">
                <h2 style={{ color: "white" }}>Downloads</h2>
              </div>
              <div className="scrolling-text-container mt-5">
                <div className="scrolling-text">
                  {downloads.map((downloads, index) => (
                    <ul key={downloads.id}>
                      <li style={{ color: "#ffc107" }}>
                        <div className="container-fluid">
                          <div className="row">
                            <div className="col-9 p-0"><h5>{downloads.downloads}</h5></div>
                            <div className="col-3 p-0"><a href={downloads.pdf} style={{backgroundColor: 'red', padding:'5px', color:'white'}}>Download</a></div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row" style={{backgroundColor:'#ffff7726', paddingTop:'5%'}}>
        <div className="col-md-2 p-0"></div>
        <div className="col-12 col-md-8">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-12 col-md-4 text-center">
                <div className="card card-body">
                  <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                      <img
                        src={founder}
                        alt="founder"
                        style={{
                          width: "100%",
                          marginTop: "-10%",
                        }}
                      />
                    </div>
                  </div>
                  <h5 className="fifth-text-color mt-2">
                    Founder <br />
                    Late Shri Natthu Singh
                  </h5>
                  <h6 className="fifth-text-color" style={{ marginTop: "-2%" }}>
                    Ex-Minister, <br /> Founder, SNS Trust
                  </h6>
                  <a type="button" className="btn btn-warning" href="/founder">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-4 text-center">
                <div className="card card-body text-center">
                  <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                      <img
                        src={manager}
                        alt="manager"
                        style={{
                          width: "100%",
                          height: "180px",
                          marginTop: "-10%",
                        }}
                      />
                    </div>
                  </div>
                  <h5 className="fifth-text-color mt-2">
                    Manager <br />
                    Mr. Govind Singh
                  </h5>
                  <p
                    className="fifth-text-color"
                    style={{ marginTop: "-2%", textAlign: "justify" }}
                  >
                    Ourfocus lies in to make every student a better....
                  </p>
                  <a type="button" className="btn btn-warning" href="/manager">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-md-4 col-12">
                <div className="card card-body text-center">
                  <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                      <img
                        src={principle}
                        alt="principle"
                        style={{
                          width: "100%",
                          marginTop: "-10%",
                        }}
                      />
                    </div>
                  </div>
                  <h5 className="fifth-text-color mt-2">
                    Principal <br />
                    Mr. S.B. Singh
                  </h5>
                  <p
                    className="fifth-text-color"
                    style={{ marginTop: "-2%", textAlign: "justify" }}
                  >
                    Today the role of a school is not only to pursue acndemic
                    excellence but also to motivate......
                  </p>
                  <a type="button" className="btn btn-warning" href="/principal">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="card card-body text-center">
                  <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                      <img
                        src={director1}
                        alt="director1"
                        style={{
                          width: "100%",
                          marginTop: "-10%",
                        }}
                      />
                    </div>
                  </div>
                  <h5 className="fifth-text-color mt-2">
                    Director <br />
                    Mr. Jaivind Singh
                  </h5>
                  <p
                    className="fifth-text-color"
                    style={{ marginTop: "-2%", textAlign: "justify" }}
                  >
                    Our prime focus is -'Leave No Child Behind'.We will
                    primarily focus on to......
                  </p>
                  <a type="button" className="btn btn-warning" href="/principal">
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="card crad-body text-center p-3">
                  <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                      <img
                        src={chairman}
                        alt="chairman"
                        style={{
                          width: "100%",
                          height: "155px",
                          marginTop: "-10%",
                        }}
                      />
                    </div>
                  </div>
                  <h5 className="fifth-text-color mt-2">
                    Chairman <br />
                    Mr. Arvind Singh
                  </h5>
                  <p
                    className="fifth-text-color"
                    style={{ marginTop: "-2%", textAlign: "justify" }}
                  >
                    Our aim is to educate the student in becoming an active and
                    productive.....
                  </p>
                  <a type="button" className="btn btn-warning" href="/chairman">
                    Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
