const { Sequelize } = require('sequelize')
const confi = require('../config')


const sequelize = new Sequelize (confi.database.DATABASE, confi.database.USER, confi.database.PASSWORD, {
    host: confi.database.HOST,
    dialect: 'mysql', 
    logging: false
})

module.exports = sequelize