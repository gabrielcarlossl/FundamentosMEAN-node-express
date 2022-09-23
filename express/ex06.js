const express1 = require('express')

const express2 = require('express')


// saber se eles usam a mesma instancia
console.log(express1 === express2)

const server1 = express1()
const server2 = express1()
// mosntrando que são instancias diferentes, sempre que cria uma instancia do express, ele retorna uma instancia nova
console.log(server1 === server2)


// quando cria instancias do router ele cria instancias diferentes
const router1 = express1.Router()
const router2 = express1.Router()
console.log(router1 === router2)