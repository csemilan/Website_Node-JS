import React from "react";

const Custom_Management = (props) => {
  const image = props.image;
  const name = props.name;
  const designation = props.designation;
  const content = props.content;
  const content1 = props.content1;
  const content2 = props.content2;

  return (
    <div
      className="container-fluid fifth-color primary-text-color pb-5 pt-5"
      style={{ marginTop: "20vh", textAlign: "justify" }}
    >
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8 col-12">
          <div className="row mt-5">
            <div className="col-3">
              <img src={image} style={{ width: "100%", boxShadow: "none" }} />
            </div>
            <div className="col-9">
              <h5>{name}</h5>
              <h6>{designation}</h6>
              <p className="mt-3 tertiary-text-color">{content}</p>
              <p className="mt-3 tertiary-text-color">{content1}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <p className="tertiary-text-color">{content2}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Custom_Management;
