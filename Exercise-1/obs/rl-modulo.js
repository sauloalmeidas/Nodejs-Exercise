const readline = require('node:readline');
// readline é um modulo do node que permite ler dados do terminal, ele é usado para criar uma interface de leitura e escrita no terminal, ele é usado para criar um prompt de comando no terminal, onde o user pode digitar dados e o sistema pode ler esses dados e processar eles.

const rl = readline.createInterface({
    // o createInterface é readline que cria uma interface de leitura e escrita no terminal, ele recebe um objeto com duas propriedades, input e output, input é o fluxo de entrada de dados, output é o fluxo de saída de dados.
    input: process.stdin,
    // receber dados do terminal (question)
    output: process.stdout
    // escrever dados 
});


rl.question('Qual é o seu nome? ', (nome) => {
    console.log(`Olá, ${nome}!`);

        
    });