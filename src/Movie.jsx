import React, { useState, useEffect } from 'react'
import MovieCard from './MovieCard'
import SearchIcon from './search.svg'
import './Movie.css'

const API_URL = process.env.REACT_APP_MOVIE_URL
const Movie = () => {
  console.log(process.env)
  const [searchTerm, setSearchTerm] = useState('')
  const [movies, setMovies] = useState([])

  useEffect(() => {
    searchMovies('batman')
  }, [])

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    setMovies(data.Search)
  }

  return (
    <div className='app'>
      <h1 className='movie-title'>{process.env.SECRET_KEY}MovieLand</h1>

      <div className='search'>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder='Search for movies'
        />
        <img
          src={SearchIcon}
          alt='search'
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className='container-movie'>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className='empty'>
          <h2>WHAT WOULD YOU SEARCH</h2>
        </div>
      )}
    </div>
  )
}

export default Movie
