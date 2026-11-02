// primeiro programa fora do navegador feito em node
// este é um sistema de biblioteca com varios livros onde o user digita no terminal qual livre ele quer pegar e o sistema verifica 
// se aquele livro esta disponivel ou não, caso ele esteja ele muda o status do livro para false ou indisponivel e exibe a lista de livros

import readline from 'node:readline';
import fs from 'node:fs/promises';
import {criararquivo} from './utils/create.js'

// pelo meu sistema estar usando o type module, não posso usar o require! apenas import e export 
// quando o codigo rodar pela primeira vez ele cria o arquivo, mas após o arquivo ser criado ele não cria mais nem atualiza


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const Libraryname = "Biblioteca FortalCity"
let books = ""

async function inserir() {
    try {
   const dados = await fs.readFile('./books.json', 'utf-8');
//    readfile lé o arquivo e retorna uma promise, que é resolvida com o conteúdo do arquivo, e o utf-8 é usado para ler o arquivo como texto(tranforma-lo em texto), caso não seja passado o utf-8 ele retorna um buffer, que é um objeto que representa uma sequência de bytes, e não é legivel para humanos.

    const data = JSON.parse(dados);
    // parse transforma o texto em objeto

    books = data
    } catch (error) {
        console.error("erro ao ler o arquivo books.json", error)
    }
}




function carregando() {
    let carregando = "Carregando"
    for (let i = 0; i < 5; i++) {
        carregando += "."

       
    }
    return carregando
}

function listarLivros() {
    const livrosFormatados = books.map((book) => ({
        nome: book.nome,
        author: book.author,
        status: book.status ? "Disponível" : "Indisponível",
    }))

    console.log(livrosFormatados)
}

async function atualizarArquivo() {
    try {
        await fs.writeFile('./books.json', JSON.stringify(books, null, 2), 'utf-8');
        // cria um arquivo ou ele sobrescreve o arquivo já existente, o stringify transforma o objeto em texto, 
        // já o null, 2 é usado na indentação do arquivo, sem indentação os dados ficariam lado a lado 
        // com indentação existe um tipo de quebra de linha! 2 define o recuo de 2 espaços para cada nivel de profundidade do objeto.
    } catch (error) {
        console.error("erro ao atualizar o arquivo books.json", error)
    }
}

console.log(Libraryname)

console.log(carregando())

setTimeout(() => {
    console.log("Livros disponiveis:")
    listarLivros()

     console.log("qual livro você deseja pegar?")
    rl.on('line', (valor) => {
   
        let livro = valor.toLowerCase()
        let livroEncontrado = books.find((book) => book.nome.toLowerCase() === livro && book.status === true)
        let indice = books.findIndex((book) => book.nome.toLowerCase() === livro && book.status === true)

        // find retorna o primeiro objeto que atende a condição
        // findindex retorna o indice do primeiro objeto que atende a condição

        if (livroEncontrado) {
                      books[indice].status = false

                      atualizarArquivo()
                    //   o push só serve para colocar um novo elemento, o metodo acima é usado para alterar o valor

                       listarLivros()
                    //    o map cria uma representação fixa, e ao rodar o map novamente ele pega os novos valores e atualiza, e para isso usamos uma função
                       console.log("livro encontrado, você pegou o livro " + livroEncontrado.nome + " com sucesso!")
                  
        } else {
             listarLivros()
            console.log("este livro está indisponivel")
           
        }

})
}, 2000)

criararquivo()
inserir()









// codigo roda = cria um arquivo, coloca os dados, transforma em array, e é salvo numa variavel chamada books






// cwd = diz o caminho do diretorio/pasta atual 
// version = diz qual a versão do node esta sendo usada

// process é um objeto node que podemos comparar com o event ou window do navegador, com ele podemos acessar informações do sistema que estamos rodando o node, e também podemos interagir com o sistema.







