import React, { useState, useEffect } from 'react'
import { Navigate, useParams } from "react-router-dom";
import axios from "axios";

const AddImage = () => {

  const { galleryId } = useParams();
  const [images, setImages] = useState(null);


  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const formData = new FormData();
  //   formData.append("images", images);

  //   if (formData) {
  //     axios
  //       .post(`http://localhost:3000/api/v1/gallery/gallery-images/${galleryId}`, formData)
  //       .then((res) => {
  //         console.log(res);
  //         alert(res.data.message);
  //       });
  //   } else {
  //     alert("invalid Input");
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("images", images);
    if(formData) {
      axios.post(`http://localhost:3000/api/v1/gallery/gallery-images/${galleryId}`, formData)
      .then((res) => {
        console.log(res);
        alert(res.data.message);
      });
    } else {
      alert("invalid Input");
    }
    
  };


  return (
    <div>
      <div className="container">
      <div className="row">
        <div className="col-1 p-0"></div>
        <div className="col-10 form mt-5">
          <div className="card card-ext ">
            <h2
              className="card-title pt-4"
              style={{ color: "rgba(2, 134, 138, 0.781) " }}
            >
              Add Image
            </h2>
            <hr />
            
            <div className="mb-3 pt-3">
              <label className="form-label" htmlFor='images'>
                Choose Image
              </label>
              <input
                type="file"
                name="images"
                className="form-control"
                id="formGroupExampleInput"
                onChange={(event)=>setImages(event.target.files[0])} 
                required
              />
            </div>

            <button
              type="button"
              className="btn btn-danger p-2 mb-5 mt-5"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default AddImage
