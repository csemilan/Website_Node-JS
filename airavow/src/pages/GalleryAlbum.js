import React, { useState, useEffect } from 'react'
import Custom from './Custom'
import axios from "axios";

const GalleryAlbum = () => {

  const [album, setAlbum] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/albums"
        );
        setAlbum(response.data);
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
    <div style={{backgroundColor:'#ffff7726'}}>
      <Custom text="Gallery Albums" title1="Gallery" title="Gallery Album"/>
      <div className='container-fluid pb-5' style={{backgroundColor:'#ffff7726'}}>
        <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4 col-12'>
            <div className='row'>
            {album.map((gallery, index) => (
                <div className='p-2 card text-center' key={gallery.id} style={{backgroundColor:'#0a1638', color:'rgba(255,193,7,255)'}}>
                  <h4>{gallery.name}</h4>
                  <a href={`gallery_album/gallery/${gallery.id}`} className='btn card' style={{backgroundColor: 'rgba(255,193,7,255)', color:'#0a1638'}}>View</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryAlbum
