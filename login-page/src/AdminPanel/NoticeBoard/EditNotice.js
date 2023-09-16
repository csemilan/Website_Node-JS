import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const EditNotice = () => {

    const { NoticeId } = useParams();
    const [notices, setNotices] = useState(null);
    const [notice, setNotice] = useState("");
    const [pdf, setPdf] = useState(null);
    const navigate = useNavigate();




    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/notice/${NoticeId}`).then((response) => {
            setNotices(response.data);
            setNotice(response.data.notice);
            setPdf(response.data.pdf);
        });
    }, [NoticeId]);


    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("notice", notice);
        formData.append("pdf", pdf);

        if (formData) {
            axios
                .put(`http://localhost:3000/api/v1/notice/${notices.id}`, formData)
                .then((res) => {
                    console.log(res);
                    alert(res.data.message);
                    navigate('/noticelist')
                });
        } else {
            alert("invalid Input");
        }
    };


  return (
    <div className='container'>
            <div className='row'>
                <div className='col-1 p-0'></div>
                <div className='col-10 form mt-5'>
                    <div className="card card-ext ">
                        <h2 className="card-title pt-4" style={{ color: 'rgba(2, 134, 138, 0.781) ' }}>Update Notice</h2>
                        <hr />
                        <div className="mb-3 pt-3">
                            <label for="notice" className="form-label">Notice</label>
                            <input type="text"  value={notice} className="form-control" id="formGroupExampleInput" placeholder="" onChange={(event) => setNotice(event.target.value)}/>
                        </div>
                        
                        <div className="mt-5">
                            <label htmlFor="image" className="form-label">
                                Notice Documentation
                            </label>
                            <input
                                type="file"
                                name='pdf'
                                className="form-control"
                                id="formGroupExampleInput2"
                                onChange={(event) => setPdf(event.target.files[0])}
                            />
                        </div>
                        <button type="button" className="btn btn-danger p-2 mb-5 mt-5" onClick={handleSubmit}>Update</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default EditNotice
