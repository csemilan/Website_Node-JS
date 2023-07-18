import React, { useState } from 'react'
import axios from "axios";
import './addalbum.css';

const AddAlbum = () => {

  const [ album, setAlbum ] = useState({
        name: "",
        date: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setAlbum({
            ...album,
            [name]: value
        })
    }

    const submit = () => {
        const { name } = album
        if(name){
          axios.post('http://localhost:3000/api/v1/albums', album)
          .then((res)=>{
             alert(res.data.message)
             console.log(res)
             setAlbum("")
          })
        } else {
            alert("invalid Input")
        }
    }

  return (
    <div className='container'>
            <div className='row'>
                <div className='col-1 p-0'></div>
                <div className='col-10 form mt-5'>
                    <div className="card card-ext ">
                        <h2 className="card-title pt-4" style={{ color: 'rgba(2, 134, 138, 0.781) ' }}>Album Type</h2>
                        <hr />
                        <div className="mb-3 pt-3">
                            <label for="name" className="form-label">Album Name</label>
                            <input type="text" name='name' value={album.name} className="form-control" id="formGroupExampleInput" placeholder="Enter Name" onChange={handleChange} required />
                        </div>
                        

                        <button type="button" className="btn btn-danger p-2 mb-5 mt-5" onClick={submit}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default AddAlbum
