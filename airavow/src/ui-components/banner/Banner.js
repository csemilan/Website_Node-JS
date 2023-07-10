import React from 'react'
import './Banner.css';

const Banner = () => {
  return (
    <div className='container-fluid'>
      <div className='row banner-top'>
        <div className='col-2'></div>
        <div className='col-8 p-0 text-center'>
          <div className='banner-top-content'>
            <h2>Addmimission open for <span>2023-2024</span><span><button className='btn btn-dark'><h4>Click Here To Apply</h4></button></span></h2>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Banner
