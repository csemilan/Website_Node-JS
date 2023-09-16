import React, {useEffect, useState} from 'react'
import axios from "axios";
import { useParams } from "react-router-dom";

const Studentdetail = () => {

  const { studentId } = useParams();
  const [student, setStudent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isPremium, setIsPremium] = useState(Boolean);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/v1/students/${studentId}`
        );
        setStudent(response.data);
        // setIsPremium(response.data.isPremium)
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [studentId]);




  function handleSubmit(event) {
    event.preventDefault();
    setIsPremium(event.target.value)
    axios.put(`http://localhost:3000/api/v1/students/${studentId}`, { isPremium }).then((res) => {
        alert(res.data.message)
        console.log(res.data)
    });
  }


  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }


  return (
      <div className="card p-5 bg-body-tertiary">
      <h5 className="card-header p-4">Student's Detail</h5>
      <div className="card-body p-0">
        <table className="table table-striped table-hover table-bordered table-responsive align-middle">
          <thead className='align-middle'>
            <tr>
              <th scope="col">Student Id</th>
              <th scope="col">Student Image</th>
              <th scope="col">Student Name</th>
              <th scope="col">Student Contact</th>
              <th scope="col">Student Email</th>
              <th scope="col">Student isPremium</th>
              <th scope="col">Premium Status On</th>
              <th scope="col">Premium Status Off</th>
            </tr>
          </thead>
          <tbody>
              <tr key={student.id}>
                <th scope="row">{student._id}</th>
                <th><img src={student.image} alt=""></img></th>
                <th>{student.name}</th>
                <th>{student.phone}</th>
                <th>{student.email}</th>
                {(student.isPremium) ?
                  <th><i className="fa-solid fa-check fa-2xl" style={{color: "#46de1b"}}></i></th>
                  :
                  <th><i className="fa-solid fa-xmark fa-2xl" style={{color: "#e30d0d"}}></i></th>
                }
                <td>
                    <button className='btn btn-info p-2' name='isPremium' value={true} onClick={handleSubmit}>
                      Turn ON
                    </button>
                </td>
                <td>
                    <button className='btn btn-danger p-2' name='isPremium' value={false} onClick={handleSubmit}>
                      Turn OFF
                    </button>
                </td>
              </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Studentdetail
