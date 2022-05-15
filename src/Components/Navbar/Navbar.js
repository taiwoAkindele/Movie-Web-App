import { Link } from 'react-router-dom'


// styles
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <nav className='nav'>
        <div className='title'>
          <Link to="/" className='brand'>
            <h1>React Movie App</h1>
          </Link>
        </div>
        <div className='bar'>
          <Link to='/toprated' className='link'>Top Rated</Link>
          <Link to='/popular' className='link'>Popular</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar