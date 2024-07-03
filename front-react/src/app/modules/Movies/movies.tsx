'use client'
import { useMovies } from '@/shared/hooks/useMovies'
import { AddMovieModal } from './addMovieModal'
import { Movie } from './movie'
import { useEffect, useState } from 'react'

export const Movies = () => {
  const { movies, getMovies } = useMovies()
  const [refetchMovies, setRefetchMovies] = useState(false)

  useEffect(() => {
    if (refetchMovies) {
      getMovies()
      setRefetchMovies(false)
    }
  }, [refetchMovies, getMovies])

  return (
    <main className="px-16 max-md:px-10 max-md:pt-5 pt-10 space-y-5 bg-stone-50 text-black pb-20">
      <h2 className="text-3xl max-md:text-xl tracking-wide">Movies</h2>
      {!!movies?.length ? (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {movies?.map((movie) => (
            <Movie key={movie.id} movie={movie} />
          ))}
        </section>
      ) : (
        <div className="flex justify-center items-center min-h-[40vh] md:text-xl lg:text-2xl">
          <p>No movies to see here... yet!</p>
        </div>
      )}
      <AddMovieModal setRefetchMovies={setRefetchMovies} />
    </main>
  )
}
