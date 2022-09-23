const express = require('express') // importar o express

const server = express() // armazenar a instancia do express

// mapeaar para a URL raiz da aplicação, apontar para um middleware ou função

server.get('/', function(req, res, next){
    console.log('inicio')
    next()
    console.log('fim')
})

server.get('/', function(req,res){
    console.log('resposta')
    res.send('<h1>express</h1>')
})

server.listen(3000, () => console.log('executando'))
