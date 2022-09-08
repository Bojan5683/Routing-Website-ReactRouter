import React from 'react'
import {useNavigate} from "react-router-dom";
import '../assets/Main.css'

import image1 from "../assets/images/img-2.jpg"
import image2 from "../assets/images/img-9.jpg"
import MainCards from './MainCards'


function Main() {

  let navigate = useNavigate();


  return (
    <div>
        <h1 className='naslov'>Check out there EPIC Destinations!</h1>
          <div className='image1'>
            <img src={image2} onClick={() => {
              navigate('/jungle')
            }}/>
            <img src={image1} onClick={() => {
              navigate('/bali')
            }}/>
          </div>
          <div className='fig-caption'>
            <h3>Explore the hidden waterfall deep inside the Amazon Jungle</h3>
          </div>
          <div className='fig-caption2'>
          <h3>Travel through the islands of Bali in a Private Cruise</h3>
          </div>
          <MainCards/>
    </div>
    
  )
}

export default Main