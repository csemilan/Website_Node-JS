import React from 'react'

const ContactUs = () => {
  return (
    <div className='container-fluid' style={{backgroundColor:'#ffff7726'}}>
      <div className='row' style={{paddingTop:'5%', paddingBottom:'5%'}}>
        <div className='col-md-2'></div>
        <div className='col-12 col-md-4 p-0'>
         <h3 className='m-2'><span className='fifth-text-color'>Contact</span><span className='secondary-text-color'>Us</span></h3>
            <div style={{marginTop:'5%'}}>
            <h6>
            <i className='fa fa-solid fa-phone secondary-text-color px-2'></i>
            +91 8188875100
            </h6>
            <h6>
            <i className='fa fa-solid fa-phone secondary-text-color px-2'></i>
            +91 7398851400
            </h6>
            <h6>
            <i className='fa fa-solid fa-phone secondary-text-color px-2'></i>
            +91 9935609200
            </h6>
            <h6>
            <i className='fa fa-solid fa-envelope secondary-text-color px-2'></i>
            snsglobalschool3@gmail.com
            </h6>
            
            <h6>
            <i className='fa fa-solid fa-location-dot secondary-text-color px-2'></i>
            Semarin Chauraha, Raebareli, 229211, UP
            </h6>
            </div>
        </div>
        <div className='col-12 col-md-4 p-1'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.05614078052!2d80.86525137414102!3d26.259841287844836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399b87234a607393%3A0x4a7476673d5220ff!2sSNS%20Global%20School!5e0!3m2!1sen!2sin!4v1689585031841!5m2!1sen!2sin" width="100%" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
