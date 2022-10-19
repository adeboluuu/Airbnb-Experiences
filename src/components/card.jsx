import React from 'react'
import Katie_img from '../assets/katie zaferes.png'
import Star from '../assets/Star 1.png'

const card = () => {
  return (
    <div className='card'>
        <img src={Katie_img} alt='Katie-zaferes' className='card-img'/>
        <div className='card-stats'>
            <img src={Star} alt='Star'className='card-star'/>
            <span>5.0</span>
            <span className='gray'>(6) . </span>
            <span className='gray'>USA</span>
        </div>
        <p>Life Lessons with Katie Zaferes</p>
        <p><span className="bold">From $136</span> / person</p>

    </div>
  )
}

export default card