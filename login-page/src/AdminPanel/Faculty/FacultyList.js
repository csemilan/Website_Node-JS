import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const FacultyList = () => {

  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/faculty');
        setFaculty(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  const handleDeleteNotice = async (FacultyId) => {
    try {
      await axios.delete(`http://localhost:3000/api/v1/faculty/${FacultyId}`);
      setFaculty(faculty.filter(faculty => faculty.id !== FacultyId));
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
    <div className="card p-5">
    <h5 className="card-header p-4">Faculty List</h5>
    <div className="card-body p-0 text-center">
      <table className="table table-striped table-hover table-bordered table-responsive">
        <thead>
          <tr>
            <th scope="col">Sr.No.</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">Email</th>
            <th scope="col">Phone No.</th>
            <th scope="col">Qualification</th>
            <th scope="col">Designation</th>
            <th scope="col">Experience</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {faculty.map((faculty, index) => (
            <tr key={faculty.id}>
              <th scope="row">{`${index+1}`}</th>
              <th>{faculty.name}</th>
              <th><img src={faculty.image} style={{borderRadius:'50%', width:'100%', height:'100%'}} alt='faculty'/></th>
              <th>{faculty.email}</th>
              <th>{faculty.phone}</th>
              <th>{faculty.qualification}</th>
              <th>{faculty.designation}</th>
              <th>{faculty.experience}</th>
              <td>
                  <button className='btn btn-success p-2'>
                    <Link className='link' to={`faculty/${faculty.id}/edit`}><i class="fa-sharp fa-solid fa-pencil fa-2xl"></i></Link>
                  </button>
              </td>
              <td>
                <button className='btn btn-danger p-2' onClick={() => handleDeleteNotice(faculty.id)}><i class="fa-solid fa-trash-can fa-2xl"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default FacultyList
