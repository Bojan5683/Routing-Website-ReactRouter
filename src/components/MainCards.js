import React from 'react'
import "../assets/MainCards.css"

import { useNavigate, Link } from 'react-router-dom'

import image3 from "../assets/images/img-3.jpg"
import image4 from "../assets/images/img-4.jpg"
import image5 from "../assets/images/img-8.jpg"

export default function MainCards() {
  let navigate = useNavigate();

  return (
    <div className='cards'>
          <div>
            <img src={image3} onClick={() => {
              navigate('/sailing')
            }} title="More info..."/>
            <img src={image4} onClick={() => {
              navigate('/football')
            }} title="More info..."/>
            {/*<img src={image5} onClick={() => {
              navigate('/sahara')
            }} title="More info..."/> */}
          </div>
          <Link to="/sahara"><img src={image5} title="More info..."/> </Link>
              {/*<div className='img-container1'>
              <h3>Set Sail in the Atlantic Ocean visiting uncharted Waters</h3>
            </div>
            <div className='img-container2'>
              <h3>Experience Football on Top of the Himilayan Mountains</h3>
              </div>
          <div className='img-container3'>
              <h3>Ride through the Sahara Desert on a guided camel tour</h3>
  </div>*/}
  </div>
  )
}
