import { Movie } from '@/app/modules/Movies/movie'
import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { BACKEND_URL } from '../utils/vars'

export const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>()

  const getMovies = useCallback(async () => {
    try {
      const response = await axios.get(`${BACKEND_URL}/movies`)
      setMovies(response.data)
    } catch (error) {
      console.error(error)
    }
  }, [])

  const getMovie = useCallback(async (id: string) => {
    try {
      const response = await axios.get(`${BACKEND_URL}/movies/${id}`)
      return response.data
    } catch (error) {
      console.error(error)
    }
  }, [])

  const addLikeToMovie = useCallback(async (id: string) => {
    try {
      await axios.post(`${BACKEND_URL}/movies/${id}`, {
        payload: 'incrementLikes',
      })
    } catch (error) {
      console.error(error)
    }
  }, [])

  const createMovie = useCallback(async (title: string) => {
    try {
      await axios.post(`${BACKEND_URL}/movies`, { title })
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    getMovies()
  }, [getMovies])

  return { movies, getMovies, addLikeToMovie, getMovie, createMovie }
}
