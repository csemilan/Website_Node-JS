import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const ImageList = () => {

  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/gallery');
        setGallery(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const handleDeleteGallery = async (galleryId) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/gallery/${galleryId}`);
      setGallery(gallery.filter(gallery => gallery.id !== galleryId));
    } catch (error) {
      setError(error.message);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
    <div className="card p-5 bg-body-tertiary">
    <h5 className="card-header p-4">Gallery List</h5>
    <div className="card-body p-0 text-center">
      <table className="table table-striped table-hover table-bordered table-responsive">
        <thead>
          <tr>
            <th scope="col">Sr.No.</th>
            <th scope="col">Album Name</th>
            <th scope="col">Thumbnail Image</th>
            <th scope="col">Description</th>
            <th scope="col">Date Created</th>
            <th scope="col">Add Images</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {gallery.map((gallery, index) => (
            <tr key={gallery.id}>
              <th scope="row">{`${index+1}`}</th>
              <th>{gallery.album.name}</th>
              <th><img src={gallery.image} width={100} height={100}/></th>
              <th>{gallery.desc}</th>
              <th>{gallery.dateCreated}</th>
              <td>
                  <button className='btn btn-success p-2'>
                  <Link className='link' to={`images/${gallery.id}/addimages`}><i class="fa-sharp fa-solid fa-square-plus fa-2xl"></i></Link>
                  </button>
              </td>
              <td>
                <button className='btn btn-danger p-2' onClick={() => handleDeleteGallery(gallery.id)}><i class="fa-solid fa-trash-can fa-2xl"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default ImageList
