import React from 'react'
import Custom_Management from './Custom_Management'
import chairman from '../assets/director2.jpg'

const Chairman = () => {
  return (
    <div>
      <Custom_Management image={chairman} name="Mr. Arvind Singh" designation="Chairman, SNS Global School" content="Our aim is to educate the student in becoming an active and productive member of society through quality eduducation that focuses on holistic development-the social, emotional, mental, physical, and cognitive  development of each student regardless of gender, race, ethnicity, socioeconomic status,or geographic location. It prepares the child for life, not just for testing."/>
    </div>
  )
}

export default Chairman
