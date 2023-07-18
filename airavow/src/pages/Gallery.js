import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Custom from "./Custom";

const Gallery = () => {
  const { albumId } = useParams();
  const [gallery, setGallery] = useState([]);
  const [album, setAlbum] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/gallery?album=${albumId}`)
      .then((response) => {
        setGallery(response.data);
      });
  }, [albumId]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/v1/albums/${albumId}`)
      .then((response) => {
        setAlbum(response.data);
      });
  }, [albumId]);

  return (
    <div style={{backgroundColor:'#ffff7726'}}>
      <Custom text="Our Gallery" title1="Gallery Album" title="Our Gallery" />
      <div className="pt-4 text-center">
        <h4 className="card-header">{album.name}</h4>
        <div className="card-body pt-4 pb-5 text-center">
          <div>
            <div className="row">
              <div className="col-2"></div>
              <div className="col-8">
                <div className="row">
                  {gallery.map((gallery, index) => (
                    <div className="col-4 mt-4" key={gallery.id}>
                      <a href={`images/${gallery.id}`}>
                      <img src={gallery.image} width={200} height={200} />
                      <h5 className="fifth-text-color pt-3">{gallery.desc}</h5>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
