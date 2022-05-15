import { img_300 } from '../../Config/Config'
import unavailable from '../../Images/unavailable.png'
import { Link } from 'react-router-dom'

//styles
import './TopRatedList.css'

const TopRatedList = ({ topRated }) => {
  return (
    <div className='toprated-list'>
      {topRated.map((tp) => (
        <div key={tp.id} className="card">
          <img className='poster' src={tp.poster_path ? `${img_300}${tp.poster_path}` : `${unavailable}`} alt={tp.title} />
          <h3>{tp.title}</h3>
          <Link to={`/movie/${tp.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`}>Read more...</Link>
        </div>
      ))}
    </div>
  )
}

export default TopRatedList