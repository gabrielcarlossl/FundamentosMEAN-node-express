process.stdout.write('seu nome: ')
process.stdin.on('data', function(data) {
    process.stdout.write(`Sua resposta: ${data.toString()}`)
    process.exit()
})