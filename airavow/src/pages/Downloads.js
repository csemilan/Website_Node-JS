import React, { useState, useEffect } from "react";
import Custom from "./Custom";
import axios from "axios";

const Downloads = () => {
  const [downloads, setDownloads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/v1/downloads"
        );
        setDownloads(response.data);
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
    <div>
      <Custom text="Documents" title1="Downloads" title="Documents" />
      <div className=" p-5 bg-body-tertiary">
        <h5 className="card-header p-4" style={{ color: "darkblue" }}>
          <u>Download</u> Documents
        </h5>
        <div className="card-body p-0">
          <table className="table table-striped table-hover table-bordered table-responsive">
            <thead>
              <tr>
                <th scope="col">Sr.No.</th>
                <th scope="col">File Name</th>
                <th scope="col">Download Documents</th>
              </tr>
            </thead>
            <tbody>
              {downloads.map((downloads, index) => (
                <tr key={downloads.id}>
                  <th scope="row">{`${index + 1}`}</th>
                  <th>{downloads.downloads}</th>
                  <th>
                    <a href={downloads.pdf}><i class="fa-solid fa-download fa-2xl" style={{color:'red', fontSize:'2rem'}}></i></a>
                    {/* <embed src={downloads.pdf} width="500" height="200" /> */}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Downloads;
