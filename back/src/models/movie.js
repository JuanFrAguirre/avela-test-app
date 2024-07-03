const { Sequelize, DataTypes } = require('sequelize')
const sequelize = require('../database/index')

const Movie = sequelize.define(
  'Movie',
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
)

module.exports = Movie
