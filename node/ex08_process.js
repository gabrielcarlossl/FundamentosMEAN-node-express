function temParam(param){
    return process.argv.indexOf(param) != -1
}

if(temParam('--producao')){
    console.log('atenção')
}else{
    console.log('nada')
}