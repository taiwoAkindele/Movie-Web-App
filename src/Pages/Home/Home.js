import useFetch from '../../Hooks/useFetch'
import MoviesList from '../../Components/MoviesList/MoviesList'

//styles
import './Home.css'
import Searchbar from '../../Components/Searchbar/Searchbar'

const Home = () => {
  const { data: movies, isPending, error } = useFetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=vote_average.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)

  return (
    <div className="media">
      <span className="page-title">Homepage</span>
      <Searchbar />
      <div className='home'>
        {isPending && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {movies && <MoviesList movies={movies} />}
      </div>
    </div>
  )
}

export default Home