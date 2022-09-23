const express = require('express') // importar o express

const server = express() // armazenar a instancia do express

// mapeaar para a URL raiz da aplicação, apontar para um middleware ou função

server.get('/', function (req, res) {
    res.send('<h1>Index!</h1>')
})

// para qualquer metodo ele vai chaamar a função
server.all('/teste', function(req, res){
    res.send('<h1>TESTE!</h1>')
})

// mapear URL

server.get(/api/, function(req, res){
    res.send('<h1>API!</h1>')
})

server.listen(3000, () => console.log('executando'))
