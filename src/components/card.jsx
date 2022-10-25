import React from 'react'
import Star from '../assets/Star 1.png'

const card = (props) => {
  let badgeText
  if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
  }else if (props.location ==="Online"){
    badgeText = "ONLINE"

  }
  return (
    <div className='card'>
      {badgeText  && <div className="card-badge">{badgeText}</div>}
        <img src={`/src/assets/${props.item.coverImg}`}   className='card-img'/>
        <div className='card-stats'>
            <img src={Star} alt='Star'className='card-star'/>
            <span>{props.item.stats.rating}</span>
            <span className='gray'>({props.item.stats.reviewCount}) . </span>
            <span className='gray'>{props.item.location}</span>
        </div>
        <p className='card-title'>{props.item.title}</p>
        <p className='card-price'><span className="bold">From ${props.item.price}</span> / person</p>

    </div>
  )
}

export default card