import React, { useState, useEffect } from "react";
import axios from "axios";
import "./addimage.css";

const AddImages = () => {
  const [desc, setDesc] = useState(" ");
  const [album, setAlbum] = useState(" ");
  const [albums, setAlbums] = useState([]);
  const [image, setImage] = useState(null);


  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/v1/albums");
        const albums = await response.json();
        setAlbums(albums);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAlbums();
  }, []);

  const handleChange = (event) => {
    if (event.target) {
      const { name, value } = event.target;

      switch (name) {
        case "desc":
          setDesc(event.target.value);
          break;
        case "album":
          setAlbum(value);
          break;
        case "image":
          setImage(event.target.files[0]);
          break;
          
        default:
          break;
      }
    }
    //   console.log(event.target.files, event.target.files[0].name)
  };

  const submit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("desc", desc);
    formData.append("album", album);
    formData.append("image", image);
    if (formData) {
      axios
        .post(`http://localhost:3000/api/v1/gallery`, formData)
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
              Add Gallery
            </h2>
            <hr />

            <label htmlFor="album" className="form-label">
              Select Album
            </label>
            <select
              className="py-1 dropdown"
              name="album"
              value={album}
              onChange={handleChange}
            >
              <option value="">--Select-Album--</option>
              {albums.map((album) => (
                <option key={album.id} value={album.id}>
                  {album.name}
                </option>
              ))}
            </select>

            <div className="mb-3 py-4">
              <label htmlFor="desc" className="form-label">
                Gallery Description
              </label>
              <textarea
                type="text"
                name="desc"
                value={desc}
                className="form-control"
                id="formGroupExampleInput2"
                placeholder="Enter Board Desc"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mt-4">
              <label htmlFor="image" className="form-label">
                Thumbnail Image
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
                className="btn btn-danger p-2 mb-5 mt-4 col-5"
                onClick={submit}
              >
                Submit
              </button>
              <button
                type="button"
                className="btn btn-warning p-2 mb-5 mt-4 m-2 col-5"
              >
                Add More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddImages;
