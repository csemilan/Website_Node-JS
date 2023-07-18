import React, { useState } from 'react'
import axios from "axios";


const Downloads = () => {

    const [downloads, setDownloads] = useState("");
    const [pdf, setPdf] = useState(null);

    const handleChange = (event) => {
        if (event.target) {
          const { name } = event.target;
    
          switch (name) {
            case "downloads":
              setDownloads(event.target.value);
              break;
            case "pdf":
              setPdf(event.target.files[0]);
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
        formData.append("downloads", downloads);
        formData.append("pdf", pdf);
    
        if (formData) {
          axios
            .post(`http://localhost:3000/api/v1/downloads`, formData)
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
              Add Downloads
            </h2>
            <hr />


            <div className="mb-3 py-4">
              <label htmlFor="downloads" className="form-label">
                downloads
              </label>
              <textarea
                type="text"
                name="downloads"
                value={downloads}
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter Text"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="pdf" className="form-label">
                Download Document
              </label>
              <input
                type="file"
                className="form-control"
                id="formGroupExampleInput2"
                name="pdf"
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
}

export default Downloads
