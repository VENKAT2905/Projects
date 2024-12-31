import React, { useEffect, useRef } from 'react'
import './TittleCard.css'
import cards_data from '../../assets/cards/Cards_data'

const TittleCard = ({tittle, category}) => {

  const cardsRef = useRef();

  const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(()=>{
    cardsRef.current.addEventListener('wheel', handleWheel);
  },[])

  return (
    <div className='tittle-Card'>
      <h2>{tittle?tittle:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card, index) => {
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TittleCard
