import React from 'react'
import { Link, useParams } from 'react-router-dom'
import useFetch from './useFetch'

function SingleMovie() {
  const {id} = useParams()
  const { loading, error,  data: movie } = useFetch(`&i=${id}`)


  // console.log(movie);
  const {Poster: image, Title: title, Plot: plot, Year: year} = movie


  if(loading){
    return <h1 className='loading'></h1>
  }

  console.log(movie);
  return (
    <div className='single-movie'>
        <img src={image} alt="" />
        <div className="single-movie-description">
            <h2 className='single-movie-title'>{title}</h2>
            <p>{plot}</p>
            <span>{year}</span>
            <br />
            <Link to={"/"}>
            <button className='back'>Back To Movie</button>
            </Link>
        </div>
    </div>
    
  )
}

export default SingleMovie