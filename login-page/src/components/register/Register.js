import React, { useState } from 'react'
import './Register.css'
import axios from "axios"

const Register = () => {

    const [ user, setUser ] = useState({
        name: "",
        email: "",
        phone: "",
        password: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const register = () => {
        const { name, email, phone, password} = user
        if(name && email && phone && password){
          axios.post('http://localhost:3000/api/v1/users/register', user)
          .then((res)=>{
             alert(res.data.message)
          })
        } else {
            alert("invalid Input")
        }
        
    }

  return (
    <div className='register'>
        <h1>Register</h1>
        <input type='text' name='name' value={user.name} placeholder='Enter your Name' onChange={handleChange} required></input>
        <input type='email' name='email' value={user.email} placeholder='Enter your Email' onChange={handleChange} required></input>
        <input type='text' name='phone' value={user.phone} placeholder='Enter your Phone No.' onChange={handleChange} required></input>
        <input type='password' name='password' value={user.password} placeholder='Enter your password' onChange={handleChange} required></input> 
        <div className='button' onClick={register}>Register</div>
        <div>or</div>
        <div className='button'>Login</div>     
    </div>
  )
}

export default Register
