console.log(global === this)
console.log(module === this)
console.log(module.exports === this)

this.oi = function (){
    return console.log('oi!')
}