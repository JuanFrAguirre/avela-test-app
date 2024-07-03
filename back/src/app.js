const express = require('express')
const mainRouter = require('./routes/routes.main')
const app = express()
const sequelize = require('./database/index.js')
const cors = require('cors')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
require('./database/index.js')
;(async () => {
  await sequelize.sync({ force: true })
})()

const PORT = process.env.PORT || 3030

app.use('/', mainRouter)

app.listen(PORT, () => {
  console.log(`--\n\nServer listening on port ${PORT}`)
})
