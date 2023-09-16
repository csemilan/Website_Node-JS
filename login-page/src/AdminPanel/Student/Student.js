import React, {useEffect, useState} from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import './student.css'

const Student = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/students');
        setStudents(response.data);
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
    <div className="card p-5 bg-body-tertiary">
      <h5 className="card-header p-4">Students List</h5>
      <div className="card-body p-0">
        <table className="table table-striped table-hover table-bordered table-responsive align-middle">
          <thead>
            <tr>
              <th scope="col">Sr.No.</th>
              <th scope="col">Student Image</th>
              <th scope="col">Student Name</th>
              <th scope="col">Student Contact</th>
              <th scope="col">Student Email</th>
              <th scope="col">Student Detail</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={student.id}>
                <th scope="row">{`${index+1}`}</th>
                <th><img src={student.image} alt=""></img></th>
                <th>{student.name}</th>
                <th>{student.phone}</th>
                <th>{student.email}</th>
                <td>
                    <button className='btn btn-danger p-2'>
                    <Link className='link' to={`detail/${student._id}`}>View Detail</Link>
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Student;
