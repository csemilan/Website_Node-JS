import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const NoticeList = () => {

  const [notice, setNotice] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/notice');
        setNotice(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const handleDeleteNotice = async (NoticeId) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/notice/${NoticeId}`);
      setNotice(notice.filter(notice => notice.id !== NoticeId));
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
    <h5 className="card-header p-4">Notice List</h5>
    <div className="card-body p-0 text-center">
      <table className="table table-striped table-hover table-bordered table-responsive">
        <thead>
          <tr>
            <th scope="col">Sr.No.</th>
            <th scope="col">Notice</th>
            <th scope="col">Document</th>
            <th scope="col">Date Created</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {notice.map((notice, index) => (
            <tr key={notice.id}>
              <th scope="row">{`${index+1}`}</th>
              <th>{notice.notice}</th>
              <th><img src={notice.pdf} style={{width:'50%'}} alt='notice doc'/></th>
              <th>{notice.dateCreated}</th>
              <td>
                  <button className='btn btn-success p-2'>
                  <Link className='link' to={`notice/${notice.id}/edit`}><i class="fa-sharp fa-solid fa-pencil fa-2xl"></i></Link>
                  </button>
              </td>
              <td>
                <button className='btn btn-danger p-2' onClick={() => handleDeleteNotice(notice.id)}><i class="fa-solid fa-trash-can fa-2xl"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default NoticeList
