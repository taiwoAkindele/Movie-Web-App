import { useLocation } from 'react-router-dom'
import useFetch from '../../Hooks/useFetch'
import MoviesList from '../../Components/MoviesList/MoviesList'

//styles
import './Search.css'

const Search = () => {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')

  const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`

  const { error, isPending, data } = useFetch(url)

  return (
    <div className='media'>
      <span className="page-title">Movies including "{query}"</span>
      <div className='search'>
        {isPending && <p className='loading'>Loading...</p>}
        {error && <p className='error'>{error}</p>}
        {data && <MoviesList movies={data} />}
       
      </div>
    </div>
  )
}

export default Search