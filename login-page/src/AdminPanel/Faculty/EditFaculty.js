import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';



const EditFaculty = () => {

    const { FacultyId } = useParams();
    const [faculty, setFaculty] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [qualification, setQualification] = useState("");
    const [designation, setDesignation] = useState("");
    const [experience, setExperience] = useState("");
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v1/faculty/${FacultyId}`).then((response) => {
            setFaculty(response.data);
            setName(response.data.name);
            setEmail(response.data.email);
            setPhone(response.data.phone);
            setQualification(response.data.qualification);
            setDesignation(response.data.designation);
            setExperience(response.data.experience);
            setImage(response.data.image);
            console.log(response);
        });
    }, [FacultyId]);

    // function handleSubmit(event) {
    //     event.preventDefault();
    //     axios.put(`http://localhost:3000/api/v1/faculty/${faculty.id}`, { name, email, phone, qualification, designation, experience, image }).then((res) => {
    //         alert(res.data.message)
    //         navigate('/facultylist')
    //     });
    //   }


    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("phone", phone);
        formData.append("qualification", qualification);
        formData.append("designation", designation);
        formData.append("experience", experience);
        formData.append("image", image);

        if (formData) {
            axios
                .put(`http://localhost:3000/api/v1/faculty/${faculty.id}`, formData)
                .then((res) => {
                    console.log(res);
                    alert(res.data.message);
                    navigate('/facultylist')
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
                        <h2 className="card-title pt-4" style={{ color: 'rgba(2, 134, 138, 0.781) ' }}>Update Faculty</h2>
                        <hr />
                        <div className="mb-3 pt-3">
                            <label for="name" className="form-label">Faculty Name</label>
                            <input type="text"  value={name} className="form-control" id="formGroupExampleInput" placeholder="Enter Name" onChange={(event) => setName(event.target.value)}/>
                        </div>
                        <div className="mb-3">
                            <label for="email" className="form-label">Email</label>
                            <input type="email" value={email} className="form-control" id="formGroupExampleInput2" placeholder="Enter Email" onChange={(event) => setEmail(event.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label for="phone" className="form-label">Phone</label>
                            <input type="text" value={phone} className="form-control" id="formGroupExampleInput2" placeholder="Enter Phone No." onChange={(event) => setPhone(event.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label for="qualification" className="form-label">Qualification</label>
                            <input type="text" value={qualification} className="form-control" id="formGroupExampleInput2" placeholder="Enter Qualification" onChange={(event) => setQualification(event.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label for="designation" className="form-label">Designation</label>
                            <input type="text" value={designation} className="form-control" id="formGroupExampleInput2" placeholder="Enter Designation" onChange={(event) => setDesignation(event.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label for="experience" className="form-label">Experience</label>
                            <input type="text" value={experience} className="form-control" id="formGroupExampleInput2" placeholder="Enter Experience" onChange={(event) => setExperience(event.target.value)} />
                        </div>

                        <div className="mt-5">
                            <label htmlFor="image" className="form-label">
                                Image
                            </label>
                            <input
                                type="file"
                                name='image'
                                className="form-control"
                                id="formGroupExampleInput2"
                                onChange={(event) => setImage(event.target.files[0])}
                            />
                        </div>
                        <button type="button" className="btn btn-danger p-2 mb-5 mt-5" onClick={handleSubmit}>Update</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default EditFaculty
