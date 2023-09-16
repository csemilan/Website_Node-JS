import React from "react";
import "./sidenav.css";
import { Link } from "react-router-dom";

const Sidenav = () => {
  return (
    <>
      <div className="card card-body bg-body-tertiary">
        <div className="accordion bg-body-tertiary" id="accordionExample">
          <div className="accordion-item bg-body-tertiary py-1">
            <h2 className="accordion-header bg-body-tertiary ">
              <button
                className="accordion-button bg-body-tertiary active"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Dashboard
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body bg-body-tertiary">
                <ul>
                  <li>
                    <Link to="dashboard">Dashboard</Link>
                  </li>

                  <li>
                    <u>Home Page Top Banner</u>
                  </li>
                  <li>
                    <u>Image List</u>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-body-tertiary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Notice Board
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body bg-body-tertiary">
                <ul>
                  <li>
                    <Link to="addnotice">Add Notice</Link>
                  </li>
                  <li>
                    <Link to="noticelist">Notice List</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-body-tertiary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Album
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse bg-body-tertiary"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body bg-body-tertiary">
                <ul>
                  <li>
                    <Link to="addalbum">Add Album</Link>
                  </li>

                  <li>
                    <Link to="albumlist">Album List</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-body-tertiary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefour"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Add Images In Album
              </button>
            </h2>
            <div
              id="collapsefour"
              className="accordion-collapse collapse bg-body-tertiary"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body bg-body-tertiary">
                <ul>
                  <li>
                    <Link to="addimages">Add Images</Link>
                  </li>
                  <li>
                    <Link to="imageslist">Images List</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-body-tertiary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsefive"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Faculty
              </button>
            </h2>
            <div
              id="collapsefive"
              className="accordion-collapse collapse bg-body-tertiary"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body bg-body-tertiary">
                <ul>
                  <li>
                    <Link to="addfaculty">Add Faculty</Link>
                  </li>

                  <li>
                    <Link to="facultylist">Faculty List</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-body-tertiary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsesix"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Students
              </button>
            </h2>
            <div
              id="collapsesix"
              className="accordion-collapse collapse bg-body-tertiary"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body bg-body-tertiary">
                <ul>
                  <li>
                    <Link to="student">Students List</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-body-tertiary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseseven"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Fees Structure
              </button>
            </h2>
            <div
              id="collapseseven"
              className="accordion-collapse collapse bg-body-tertiary"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body bg-body-tertiary">
                <ul>
                  <li>
                    <Link to="addfeestr">Add Fee Structure</Link>
                  </li>
                  <li>
                    <Link to="feestrlist">Fees Structure List</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed bg-body-tertiary"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseeight"
                aria-expanded="false"
                aria-controls="collapseeight"
              >
                Downloads
              </button>
            </h2>
            <div
              id="collapseeight"
              className="accordion-collapse collapse bg-body-tertiary"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body bg-body-tertiary">
                <ul>
                  <li>
                    <Link to="adddownloads">Add Downloads</Link>
                  </li>
                  <li>
                    <Link to="downloadslist">Downloads List</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidenav;
