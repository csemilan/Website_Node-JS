import React from 'react'
import './custom.css';

const Custom = (props) => {
    const text = props.text;
    const title = props.title;
    const title1 = props.title1;

  return (
    <div className='container-fluid' style={{marginTop:'17vh', backgroundColor:'black', height:'20rem'}}>
    <div className='row'>
      <div className='col-12 header'>
        
      </div>
      <h3 style={{marginTop:'-15%', marginLeft: '6%', color:'white', fontWeight:'bolder', zIndex:'0'}}>{text}</h3><br/>
      <h4 style={{color: 'white', marginTop:'-12%', marginLeft:'6%', zIndex: '0'}}><a className='primary-text-color' href="/">{title1}</a>/<span style={{color: 'rgba(255,193,7,255)'}}>&nbsp;{title}</span></h4><br/>
    </div>
  </div>
  )
}

export default Custom
