const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
// acima criamos uma interface de leitura e escrita no terminal e o create interface recebe um objeto com duas e principais propriedades.
// o input para a entrada de dados e output para a saida de dados, no caso o input é o teclado e o output é o console.
// o input é a maneira como minha aplicação recebe os dados do usuario pelo terminal, output é a maneira como minha aplicação envia de volta os dados 
// digito um ola, input pega esse valor do terminal, envia para minha aplicação, o output pega esse valor e envia de volta para o terminal!

// Input = o que entra na aplicação.
// Output = o que sai da aplicação.

const usuarios = [];

rl.on('line', (entrada) => {

    usuarios.push(entrada);

    console.log('Usuários cadastrados:', usuarios);

});
// acima usamos o rl.on('line', (entrada) => { ... }) para ouvir o evento 'line', que é disparado quando o usuário digita uma linha de texto e pressiona Enter. A função de callback recebe a entrada do usuário como argumento e adiciona essa entrada ao array usuarios. Em seguida, imprime a lista atualizada de usuários cadastrados no console.