import React from 'react'
import Custom from './Custom'
import image1 from '../assets/sports1.jpeg';
import image2 from '../assets/sports2.jpeg';
import image3 from '../assets/sports3.jpeg';

const Sports = () => {
  return (
    <div>
      <Custom text="Sports" title1="School Campus" title="Sports"/>

      <div className="container-fluid pt-5 pb-5" style={{backgroundColor:'#ffff7726'}}>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-12 col-md-8">
            <div className="row mt-4">
              <div className="col-4">
                <img src={image1} style={{ width: "100%", height: "250px" }} alt='sports'/>
              </div>
              <div className="col-4">
                <img src={image2} style={{ width: "100%", height: "250px" }} alt='sports'/>
              </div>
              <div className="col-4">
                <img src={image3} style={{ width: "100%", height: "250px" }} alt='sports'/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sports
