'use client'
import { useMovies } from '@/shared/hooks/useMovies'
import { FC, useState } from 'react'

export interface Movie {
  id: string
  title: string
  likes: number
}

interface Props {
  movie: Movie
}

export const Movie: FC<Props> = ({ movie }) => {
  const [movieData, setMovieData] = useState(movie)

  const { addLikeToMovie, getMovie } = useMovies()

  const fireLikeFlow = async () => {
    const { id } = movie
    await addLikeToMovie(id)
    const newMovieData = await getMovie(id)
    setMovieData(newMovieData)
  }

  return (
    <article className="p-4 md:p-6 border rounded-xl h-[150px] md:h-[200px] flex flex-col justify-between items-center gap-3 md:gap-6 relative">
      <p className="text-xl md:text-2xl text-center tracking-wide text-brandPurple font-bold">
        {movieData.title}
      </p>
      <button
        className="p-2 absolute left-0 right-0 top-0 bottom-0"
        onClick={fireLikeFlow}
      >
        <p className="md:text-3xl text-2xl text-center font-bold">
          {movieData.likes} <span className="font-light">likes</span>
        </p>
      </button>
    </article>
  )
}
