// primeiro programa fora do navegador feito em node
// este é um sistema de biblioteca com varios livros onde o user digita no terminal qual livre ele quer pegar e o sistema verifica 
// se aquele livro esta disponivel ou não, caso ele esteja ele muda o status do livro para false ou indisponivel e exibe a lista de livros

const readline = require("node:readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const Libraryname = "Biblioteca FortalCity"
const books = [
    {
        nome: "falsini",
        author: "andrezin",
        status: false,
    },
    {
        nome: "a lua e as estrelas",
        author: "Miguel de correia",
        status: true,
    },
    {
        nome: "Squad o ultimo amanhecer",
        author: "Saulo Almeida",
        status: true,
    },
    {
        nome: "Oxigenio 2.0",
        author: "andrezin",
        status: false,
    },
    {
        nome: "Oxigenio 2.0: o legado de paz",
        author: "John willian",
        status: true,
    },
]



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
















// cwd = diz o caminho do diretorio/pasta atual 
// version = diz qual a versão do node esta sendo usada

// process é um objeto node que podemos comparar com o event ou window do navegador, com ele podemos acessar informações do sistema que estamos rodando o node, e também podemos interagir com o sistema.







