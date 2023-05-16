import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { MovieService } from "../api/MovieService"

const MovieDetail = () => {
  const {id} = useParams()
  const [movie, setMovie] = useState({})

  async function getMovie() {
    const { data } = await MovieService.getMovieDetails(id)
    setMovie(data)
  }

  useEffect(() => {
    getMovie()
  }, [])

  return (
    <section className="movie-detail">
      <div className="movie-detail__container">
        <div className="movie-detail__col">
          <h1 className="movie-detail__title">{MovieDetail.title}</h1>
          <div className="movie-detail__image">
            <img src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt="" />
          </div>
        </div>
        <div className="movie-detail__col">
          <div className="movie-detail__details">
            <div className="movie-detail__detail">
              <span>Budget:</span>{movie.budget}
            </div>
            <div className="movie-detail__detail">
              <span>Original language:</span> {movie.original_language}
            </div>
            <div className="movie-detail__detail">
              <span>Popularity:</span> {movie.popularity}
            </div>
            <div className="movie-detail__detail">
              <span>Overview:</span> {movie.overview}
            </div>
          </div>
          <Link to={"/"} className="movie-detail__button" >
            Voltar
          </Link>
        </div>
      </div>
    </section>
  )
}

export default MovieDetail