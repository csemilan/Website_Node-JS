import React from "react";
import Custom from "./Custom";
import image1 from "../assets/bio-lab1.webp";
import image2 from "../assets/bio-lab2.webp";
import image3 from "../assets/chemistry-lab.webp";
import image4 from "../assets/chemistry-lab2.webp";
import image5 from "../assets/physics-lab1.jpeg";
import image6 from "../assets/physics-lab2.webp";
import image7 from "../assets/computer-lab.webp";
import image8 from "../assets/maths-lab.jpeg";

const Laboratories = () => {
  return (
    <div>
      <Custom text="Laboratories" title1="School Campus" title="Laboratories" />
      <div className="container-fluid pt-5" style={{backgroundColor:'#ffff7726'}}>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-12 col-md-8">
            <h4 className="text-bolder" style={{ color: "darkblue" }}>
              <u>Laboratories</u>
            </h4>
            <p className="fifth-text-color mt-3">
              School has well equipped and well-furnished labs of Physics,
              Chemistry, Biology. Here the students test the laws of natural
              sciences. In order to promote scientific temper amongst juniors
              the school has a composite lab where activities related to Basic
              sciences are performed.
            </p>

            <h4 className="text-bolder mt-5" style={{ color: "darkblue" }}>
              <u>Biology </u>Lab
            </h4>
            <div className="row mt-4">
              <div className="col-6">
                <img src={image1} style={{ width: "100%", height: "250px" }} />
              </div>
              <div className="col-6">
                <img src={image2} style={{ width: "100%", height: "250px" }} />
              </div>
            </div>

            <h4 className="text-bolder mt-5" style={{ color: "darkblue" }}>
              <u>Chemistry </u>Lab
            </h4>
            <div className="row mt-4">
              <div className="col-6">
                <img src={image3} style={{ width: "100%", height: "250px" }} />
              </div>
              <div className="col-6">
                <img src={image4} style={{ width: "100%", height: "250px" }} />
              </div>
            </div>

            <h4 className="text-bolder mt-5" style={{ color: "darkblue" }}>
              <u>Physics </u>Lab
            </h4>
            <div className="row mt-4">
              <div className="col-6">
                <img src={image5} style={{ width: "100%", height: "250px" }} />
              </div>
              <div className="col-6">
                <img src={image6} style={{ width: "100%", height: "250px" }} />
              </div>
            </div>

            <h4 className="text-bolder mt-5" style={{ color: "darkblue" }}>
              <u>Computer </u>Lab
            </h4>
            <p className="fifth-text-color mt-3">
              The school has two computer labs one for seniors and the other for
              juniors. In addition to that students are encouraged to learn the
              machine languages.
            </p>
            <div className="row mt-4">
              <div className="col-6">
                <img src={image7} style={{ width: "100%", height: "250px" }} />
              </div>
            </div>

            <h4 className="text-bolder mt-5" style={{ color: "darkblue" }}>
              <u>Maths </u>Lab
            </h4>
            <p className="fifth-text-color mt-3">
              Mathematics is completely man made as such it is based on axiom,
              lemmas etc. However the conjecture here is how mathematics can be
              related to other spheres of human activities be it scientific,
              economic or social.
            </p>
            <div className="row mt-4">
              <div className="col-6">
                <img src={image8} style={{ width: "100%", height: "250px" }} />
              </div>
            </div>

            <h4 className="text-bolder mt-5" style={{ color: "darkblue" }}>
              <u>Laboratory </u>Rules
            </h4>
            <p className="fifth-text-color">The school has well equipped laboratories to carry out experimental work in various sciences. <br/>
            The following rules are to be followed in the laboratories:
            </p>

            <ol className="fifth-text-color mb-5" style={{marginLeft:'-2%', textAlign:'justify'}}>
              <li>
                Equipment for use in laboratories will be issued to students
                as per rules laid down by the science teachers.
              </li>
              <li>
                No equipment is to be taken out of the laboratories without a
                written permission.
              </li>
              <li>
                In case of any damage, during practical lessons, expenses for
                the repair of the equipment will be borne by the student.
              </li>
              <li>
                Any item issued from the laboratories must be returned before
                the Annual Examination and a no dues certificate obtained from
                the Science teachers should be submitted to the Class teacher to
                allow the students to appear in their Annual Examination.
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Laboratories;
