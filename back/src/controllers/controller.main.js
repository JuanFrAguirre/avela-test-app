const Movie = require('../models/movie')
const uuid = require('uuid')

const controller = {
  ping: (req, res) => res.json('Avela BE is working'),
  getMovies: async (req, res) => {
    const movies = await Movie.findAll()
    if (!!movies.length) return res.json(movies)
    return res.sendStatus(404)
  },
  getMovieByID: async (req, res) => {
    const { id } = req.params
    const movie = await Movie.findByPk(id)
    if (!movie) return res.sendStatus(404)
    return res.json(movie)
  },
  insertMovie: async (req, res) => {
    const { title } = req.body
    if (!title) return res.status(500).json('Missing title')
    const movie1 = await Movie.create({ id: uuid.v1(), title })
    res.json(movie1)
  },
  modifyLikes: async (req, res) => {
    const { id } = req.params
    const { payload } = req.body
    if (!payload) return res.status(500).json('Missing payload')
    if (payload !== 'incrementLikes')
      return res.status(500).json('Incorrect payload')

    const movie = await Movie.findByPk(id)
    if (!movie) return res.sendStatus(404)

    const updateLikesCounter = () => {
      return movie.likes + 1
    }

    await Movie.update(
      { ...movie, likes: updateLikesCounter() },
      { where: { id } },
    )
    return res.json('ok')
  },
}

module.exports = controller
