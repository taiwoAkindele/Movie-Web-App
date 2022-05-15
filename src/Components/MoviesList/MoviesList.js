import { img_300 } from '../../Config/Config'
import unavailable from '../../Images/unavailable.png'
import { Link } from 'react-router-dom'

// styles
import './MoviesList.css'

const MoviesList = ({ movies }) => {
  return (
    <div className='movies-list'>
        {movies.map((m) => (
            <div key={m.id} className="card">
                <img className='poster' src={m.poster_path ? `${img_300}${m.poster_path}` : `${unavailable}`} alt={m.title} />
                <h3>{m.title}</h3>
                <Link to={`/movie/${m.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`}>Read more...</Link>
            </div>
        ))}
    </div>
  )
}

export default MoviesList