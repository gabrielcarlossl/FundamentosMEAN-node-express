const http = require('http') // referencia do http

// função createserver ela recebe a função call back como parametro
const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.end('<h1>Gabriel Carlos da Silva Leite</h1>')
})

const porta = 7777

server.listen(porta, function(){
    console.log(`escutando a porta ${porta}`)
})