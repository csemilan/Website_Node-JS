import { Outlet } from 'react-router-dom';
import Sidenav from '../sidenav/Sidenav'
import './Homepage.css'
import React from 'react'

const Homepage = () => {
  return (
    <div className='homepage bg-body-tertiary'>
      <div className='container-fluid'>
        <div className='row p-4 bg-body-tertiary'>
          <div className='col-2'></div>
          <div className='col-4'>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
          <div className='col-6'></div>
        </div>
        <div className='row'>
          <div className='col-2 p-0'>
            <Sidenav />
          </div>
          <div className='col-10 p-0 bg-body-tertiary'>
              <Outlet />
          </div>
        </div>
      </div>
    </div>

  )
}


export default Homepage


