import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Custom from "./Custom";

const Images = () => {
  const { galleryId } = useParams();
  const [image, setImage] = useState('');
  const [images, setImages] = useState([]);


  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/gallery/${galleryId}`)
      .then((response) => {
        setImage(response.data);
        setImages(response.data.images);
        console.log(response.data.images);
      });
  }, [galleryId]);

  return (
    <div style={{ backgroundColor: "#ffff7726" }}>
      <Custom text="Images" title1="Gallery" title="Images" />
      <h4 className="pt-4 text-center fifth-text-color">{image.desc}</h4>
      <div className="container-fluid">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
            <div className="row">
              <div className="col-6 mt-5 mb-5 pb-3">
                <img src={images[0]} style={{ width: "100%", height: "350px" }} alt="Upload Image"/>
              </div>
              <div className="col-6 mt-5 mb-5 pb-3">
                <img src={images[1]} style={{ width: "100%", height: "350px" }} alt="Upload Image"/>
              </div>
              <div className="col-6 mt-5 mb-5 pb-3">
                <img src={images[2]} style={{ width: "100%", height: "350px" }} alt="Upload Image"/>
              </div>
              <div className="col-6 mt-5 mb-5 pb-3">
                <img src={images[3]} style={{ width: "100%", height: "350px" }} alt="Upload Image"/>
              </div>
              <div className="col-6 mt-5 mb-5 pb-3">
                <img src={images[4]} style={{ width: "100%", height: "350px" }} alt="Upload Image"/>
              </div>
              <div className="col-6 mt-5 mb-5 pb-3">
                <img src={images[5]} style={{ width: "100%", height: "350px" }} alt="Upload Image"/>
              </div>
              <div className="col-6 mt-5 mb-5 pb-3">
                <img src={images[6]} style={{ width: "100%", height: "350px" }} alt="Upload Image"/>
              </div>
              <div className="col-6 mt-5 mb-5 pb-3">
                <img src={images[7]} style={{ width: "100%", height: "350px" }} alt="Upload Image"/>
              </div>
              <div className="col-6 mt-5 mb-5 pb-3">
                <img src={images[8]} style={{ width: "100%", height: "350px" }} alt="Upload Image"/>
              </div>
              <div className="col-6 mt-5 mb-5 pb-3">
                <img src={images[9]} style={{ width: "100%", height: "350px" }} alt="Upload Image"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
