import React from 'react'
import Image from 'next/image'

const Card = ({ movie }) => {
  return (
    <div className='m-auto w-11/12'>
        <h2>{ movie.title }</h2>
        <p> 개봉년도 {movie.year} </p>
        <Image src={movie.medium_cover_image} width={500} height={300} />
    </div>
  )
}

export default Card

