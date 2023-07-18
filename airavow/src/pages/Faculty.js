import React, { useState, useEffect } from "react";
import axios from "axios";
import Custom from "./Custom";

const Faculty = () => {
  const [faculty, setFaculty] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/faculty"
        );
        setFaculty(response.data);
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
    <div>
      <Custom text="School Faculty" title1="Academics" title="Faculty" />
      <div className="container-fluid main-body mt-5">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10 col-12">
            <h4
              className="fifth-text-color text-bolder"
              style={{ color: "darkblue" }}
            >
              <u>Teaching Staff</u>
            </h4>
            <table class="table table-hover table-responsive-md text-center align-middle mt-4 table-bordered">
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
                </tr>
              </thead>
              <tbody>
                {faculty.map((faculty, index) => (
                  <tr key={faculty.id}>
                    <th scope="row">{`${index + 1}`}</th>
                    <th>{faculty.name}</th>
                    <th>
                      <img
                        src={faculty.image}
                        width={100}
                        height={100}
                        alt="faculty"
                        // style={{ borderRadius: "50%" }}
                      />
                    </th>
                    <th>{faculty.email}</th>
                    <th>{faculty.phone}</th>
                    <th>{faculty.qualification}</th>
                    <th>{faculty.designation}</th>
                    <th>{faculty.experience}</th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
