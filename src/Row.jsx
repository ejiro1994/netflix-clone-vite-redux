import axios from './axios.js'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([])

  const base_url = 'http://image.tmdb.org/t/p/original/'

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)

      return request
    }

    fetchData()
  }, [])
  console.log(movies)

  return (
    <RowContainer>
      {title}
      <RowPosters>
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && 
              <RowPoster
              key={movie.id}
                large={isLargeRow}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        }
      </RowPosters>
    </RowContainer>
  )
}

export default Row

const RowContainer = styled.div`
  color: white;
`
const RowPosters = styled.div`
  display: flex;
  overflow-y: hidden;
  overflow-x: scrollable;
`

const RowPoster = styled.img`
  color: white;
  max-height: 100px;
  object-fit: contain;
  margin-right: 10px;
  width: 100%;
  transition: transform 450ms;
  &::-webkit-scrollbar {
    display: none;
  }
  ${({ large }) => large && `max-height: 250px`};
  &:hover {
    transform: scale(1.08);
    opacity: 1;
    ${({ large }) => large && `transform: scale(1.09);`};
  }
`
