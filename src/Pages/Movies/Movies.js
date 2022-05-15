// import useFetch from '../../Hooks/useFetch'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { img_300 } from '../../Config/Config'
import unavailable from '../../Images/unavailable.png'

//styles
import './Movies.css'

const Movies = () => {
  const [movie, setMovie] = useState(null)

    const { id } = useParams()
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`

   useEffect(() => {
     fetch(url)
     .then(response => response.json())
     .then(json => setMovie(json))
   }, [url])

    console.log(movie)

  return (
    <div className='movie'>
        
        {movie && (
            <>
                <h2 className='page-title'>{movie.title}</h2>
                <img className='poster' src={movie.poster_path ? `${img_300}${movie.poster_path}` : `${unavailable}`} alt={movie.title} />
                <ul>
                  <li>Rating: {movie.vote_average}</li>
                  <li>Release Date: {movie.release_date}</li>
                </ul>
                <p className='overview'>{movie.overview}</p>
            </>
        )}
    </div>
  )
}

export default Movies