import React from 'react'
import Custom from './Custom'
import admissionForm from '../assets/admissionform.pdf'


const AdmissionForm = () => {
  return (
    <div>
    <Custom text="Admission Form" title1="Downloads" title="Admission Form"/>
    <div className='container-fluid pt-4 pb-5' style={{backgroundColor:'#ffff7726'}}>
        <div className='row'>
            <div className='col-md-2'></div>
            <div className='col-md-8 col-12'>
            <h4 className='fifth-text-color pb-4'><u>Addmission</u> Form</h4>
            <embed src={admissionForm} style={{width:'100%'}} height="400" />
            </div>
        </div>
    </div>
    </div>
  )
}

export default AdmissionForm
