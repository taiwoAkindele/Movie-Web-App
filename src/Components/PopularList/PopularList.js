import { img_300 } from '../../Config/Config'
import unavailable from '../../Images/unavailable.png'
import { Link } from 'react-router-dom'

// styles
import './PopularList.css'

const PopularList = ({ popular }) => {
  return (
    <div className='popular-list'>
        {popular.map((p) => (
            <div key={p.id} className="card">
                <img className='poster' src={p.poster_path ? `${img_300}${p.poster_path}` : `${unavailable}`} alt={p.title} />
                <h3>{p.title}</h3>
                <Link to={`/movie/${p.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`}>Read more...</Link>
            </div>
        ))}
    </div>
  )
}

export default PopularList