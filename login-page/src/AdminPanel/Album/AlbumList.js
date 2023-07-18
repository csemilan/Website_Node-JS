import React, { useState, useEffect } from 'react'
import axios from 'axios';

const AlbumList = () => {

  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/albums');
        setAlbums(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDeleteNotice = async (albumId) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/albums/${albumId}`);
      // Update products state after successful deletion
      setAlbums(albums.filter(album => album.id !== albumId));
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
    <h5 className="card-header p-4">Albums List</h5>
    <div className="card-body p-0">
      <table className="table table-striped table-hover table-bordered table-responsive">
        <thead>
          <tr>
            <th scope="col">Sr.No.</th>
            <th scope="col">Album Name</th>
            <th scope="col">Created At</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album, index) => (
            <tr key={album.id}>
              <th scope="row">{`${index+1}`}</th>
              <th>{album.name}</th>
              <th>{album.dateCreated}</th>
              
              <td>
                <button className='btn btn-danger p-2' onClick={() => handleDeleteNotice(album.id)}><i class="fa-solid fa-trash-can fa-2xl"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default AlbumList
