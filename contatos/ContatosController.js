const express = require('express')
const router = express.Router()

router.get('/contatos', (req, res) => {
	res.render('contatos/index')
})

router.get('/contatos/new', (req, res) => {
	res.render('contatos/new')
})

module.exports = router