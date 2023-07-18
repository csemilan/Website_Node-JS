import React, { useState } from "react";
import axios from "axios";

const AddFaculty = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [qualification, setQualification] = useState("");
  const [designation, setDesignation] = useState("");
  const [experience, setExperience] = useState("");
  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    if (event.target) {
      const { name } = event.target;

      switch (name) {
        case "name":
          setName(event.target.value);
          break;
        case "email":
          setEmail(event.target.value);
          break;
        case "phone":
          setPhone(event.target.value);
          break;
        case "qualification":
          setQualification(event.target.value);
          break;
        case "designation":
          setDesignation(event.target.value);
          break;
        case "experience":
          setExperience(event.target.value);
          break;
        case "image":
          setImage(event.target.files[0]);
          break;

        default:
          break;
      }
    }
    // console.log(event.target.files, event.target.files[0].name)
  };

  const submit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("qualification", qualification);
    formData.append("designation", designation);
    formData.append("experience", experience);
    formData.append("image", image);

    if (formData) {
      axios
        .post(`http://localhost:3000/api/v1/faculty`, formData)
        .then((res) => {
          console.log(res);
          alert(res.data.message);
        });
    } else {
      alert("invalid Input");
    }
  };

  return (
  <div className="container">
      <div className="row">
        <div className="col-1 p-0"></div>
        <div className="col-10 form mt-5">
          <div className="card card-ext ">
            <h2
              className="card-title pt-4"
              style={{ color: "rgba(2, 134, 138, 0.781) " }}
            >
              Add Faculty
            </h2>
            <hr />


            <div className="mb-3">
              <label htmlFor="notice" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={name}
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter Name"
                onChange={handleChange}
                required
              />
            </div>


            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={email}
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter Email"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={phone}
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter Phone Number"
                onChange={handleChange}
                required
              />
            </div>


            <div className="mb-3">
              <label htmlFor="qualification" className="form-label">
              Qualification
              </label>
              <input
                type="text"
                name="qualification"
                value={qualification}
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter Qualification"
                onChange={handleChange}
                required
              />
            </div>



            <div className="mb-3">
              <label htmlFor="designation" className="form-label">
              Designation
              </label>
              <input
                type="text"
                name="designation"
                value={designation}
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter Designation"
                onChange={handleChange}
                required
              />
            </div>


            <div className="mb-3">
              <label htmlFor="experience" className="form-label">
              Experience
              </label>
              <input
                type="text"
                name="experience"
                value={experience}
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter Experience"
                onChange={handleChange}
                required
              />
            </div>



            <div className="mt-2">
              <label htmlFor="doc" className="form-label">
                Faculty Image
              </label>
              <input
                type="file"
                className="form-control"
                id="formGroupExampleInput2"
                name="image"
                onChange={handleChange}
              />
            </div>

            

            <div>
              <button
                type="button"
                className="btn btn-danger p-2 mb-5 mt-4 col-12"
                onClick={submit}
              >
                Submit
              </button>
              {/* <button
                type="button"
                className="btn btn-warning p-2 mb-5 mt-4 m-2 col-5"
              >
                Add More
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default AddFaculty;
