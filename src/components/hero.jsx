import React from 'react'
import Photogrid from '../assets/photogrid.png'

const herosection = () => {
  return (
    <div className='hero'>
        <img src={Photogrid}alt='Photogrid' className='photo-grid'/>
        <div className='hero-text'>
          <h1>Online Experiences</h1>
          <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    </div>
  )
}

export default herosection