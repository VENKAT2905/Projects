import React, { useEffect, useRef, useState } from 'react'
import './TittleCard.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';

const TittleCard = ({tittle, category}) => {

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZjNkODRmNTNhOGYxMWFmNzRjYzgwOTFhMmQ5Y2U3ZiIsIm5iZiI6MTczNTY2MjgyNC41NzksInN1YiI6IjY3NzQxY2U4NjNmOTBmOGY2NjkyOWQ2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.jdYsHzzVBwOB3Ohul1uPDXs7uw01gQ3BFAw9U55wAiE'
    }
  };
  
  

  const handleWheel = (event)=>{
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(()=>{

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener('wheel', handleWheel);
  },[])

  return (
    <div className='tittle-Card'>
      <h2>{tittle?tittle:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return < Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TittleCard
