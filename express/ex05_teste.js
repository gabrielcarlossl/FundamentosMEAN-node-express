const express = require('express')
const server = express()

const router = require('./ex05_routes') // importando o router pelo require

// router aqui será um middleware que possui varias rotas mapeadas
server.use('/api', router) // usar as rotas importadas pelo server.use

server.listen(3000, () => console.log('executando'))