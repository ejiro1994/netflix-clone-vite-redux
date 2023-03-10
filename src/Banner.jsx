import axios from './axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components/'
import requests from './Requests'

const Banner = () => {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )

      return request
    }

    fetchData()
  }, [])

  const img = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
  // `123`

  const truncate = (string, n) => {
    return string?.length > n ? string.substring(0, n - 1) + '...' : string
  }

  return (
    <Header background={img}>
      <BannerContent>
        <BannerTitle>
          {movie?.title || movie?.name || movie?.original_name}
        </BannerTitle>
        <BannerButtons>
          <BannerButton>Play</BannerButton>
          <BannerButton>My List</BannerButton>
        </BannerButtons>
        <BannerDescription>{truncate(movie?.overview, 150)} </BannerDescription>
      </BannerContent>

      <BannerFadeBottom />
    </Header>
  )
}

export default Banner

const Header = styled.header`
  height: 448px;
  background: url(${({ background }) => background}), #000;
  background-position: center center;
  position: relative;
  object-fit: contain;
  color: #fff;
`
const BannerContent = styled.div`
  margin-left: 30px;
  padding-top: 140px;
  height: 190px;
`
const BannerTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  padding-bottom: 0.3rem;
`
const BannerButtons = styled.div``
const BannerButton = styled.button`
  cursor: pointer;
  color: #fff;
  outline: none;
  border: none;
  font-weight: 700;
  border-radius: 0.2vw;
  margin-right: 1rem;
  background: rgba(51, 51, 51, 0.5);
  padding: 0.5rem 2rem;
  &:hover {
    color: #000;
    background: #e6e6e6;
    transition: all 0.2s;
  }
`
const BannerDescription = styled.h1`
  width: 45rem;
  line-height: 1.3;
  padding-top: 1rem;
  font-size: 0.8rem;
  min-width: 360px;
  height: 80px;
`
const BannerFadeBottom = styled.div`
  height: 7.4rem;
  background: linear-gradient(
    180deg,
    transparent,
    rgba(37, 37, 37, 0.61),
    #111
  );
`
