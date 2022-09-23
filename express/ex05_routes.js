const express = require('express')

const router = express.Router()

// USE mapeia para qualquer metodo http, usando a url passada

// router é um middleware global
router.use((req, res, next) =>{
    const init = Data.now()
    next()
    console.log(`tempo = ${Data.now() - init} ms.`)
})

// colocando dois pontos no id, informa que será algo variavel 
router.get('/produtos/:id', (req, res) => {
    // aqui sera criado um objeto que o id sera pegado no parametro passasdo na url
    res.json({id:req.params.id, name:'caneta'})
})

router.get('/clientes/:id', (req, res) => {
    res.json({id: req.params.id, name: 'gabriel'})
})

module.exports = router