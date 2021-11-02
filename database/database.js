const Sequelize = require('sequelize')

const connection = new Sequelize('guiapress', 'root', '@Augusto1993', {
	host: 'localhost',
	dialect: 'mysql'
})

module.exports = connection
