import React from 'react'

import Star from '../assets/Star 1.png'

const card = (props) => {
  console.log(props)
  return (
    <div className='card'>
        <img src={`../assets/${props.img}`}   className='card-img'/>
        <div className='card-stats'>
            <img src={Star} alt='Star'className='card-star'/>
            <span>{props.rating}</span>
            <span className='gray'>({props.reviewCount}) . </span>
            <span className='gray'>{props.location}</span>
        </div>
        <p>{props.title}</p>
        <p><span className="bold">From ${props.price}</span> / person</p>

    </div>
  )
}

export default card