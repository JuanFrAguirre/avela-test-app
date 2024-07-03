const router = require('express').Router()
const controller = require('../controllers/controller.main')

router
  .get('/', controller.ping)
  .get('/movies', controller.getMovies)
  .get('/movies/:id', controller.getMovieByID)
  .post('/movies', controller.insertMovie)
  .post('/movies/:id', controller.modifyLikes)

module.exports = router
