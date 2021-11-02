const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const connection = require('./database/database')

// Rotas
const ContatosContrller = require('./contatos/ContatosController')

// View engine
app.set('view engine', 'ejs')

// Arquivos Static
app.use(express.static('public'))

// Body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Database conexão
connection
	.authenticate()
	.then(() => {
		console.log('Conexão feita com sucesso!')
	}).catch((error) => {
		console.log('Error ao se conectar com banco de dados: ' + error)
	})

// Rotas
app.use('/', ContatosContrller)

app.get('/', (req, res) => {
	res.render('index')
})

app.get('/sobre', (req, res) => {
	res.render('sobre')
})


app.listen(8080, () => {
	console.log('O servidor está rodando na porta: 8080')
})