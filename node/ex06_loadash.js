const _ = require('lodash')

const alunos = [{
    nome: 'gabriel',
    nota: 10
},{
    nome: 'carlos',
    nota: 9
},{
    nome: 'lely',
    nota: 10
}]

const media = _.sumBy(alunos, 'nota') / alunos.length
console.log(media)