import useFetch from '../../Hooks/useFetch'
import PopularList from '../../Components/PopularList/PopularList'

// styles
import './Popular.css'

const Popular = () => {
  const { data: popular, isPending, error } = useFetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`)

  return (
    <div className='media'>
      <span className='page-title'>Popular Movies</span>
      <div className="popular">
        {isPending && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {popular && <PopularList popular={popular} />}
      </div>
    </div>
  )
}

export default Popular