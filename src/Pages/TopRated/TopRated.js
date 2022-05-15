import useFetch from '../../Hooks/useFetch'
import TopRatedList from '../../Components/TopRatedList/TopRatedList'

// styles
import './TopRated.css'

const TopRated = () => {
  const { data: topRated, isPending, error } = useFetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)

  return (
    <div className='media'>
      <span className='page-title'>Top Rated Movies</span>
      <div className="topRated">
        {isPending && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {topRated && <TopRatedList topRated={topRated} />}
      </div>
    </div>
  )
}

export default TopRated