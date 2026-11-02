import fs from 'node:fs/promises';


export const criararquivo = async () => {
   try {
        await fs.access('./books.json');
        // verifica se o arquivo já existe

        console.log('O arquivo já existe!');
        return;

    } catch (error) {
        if (error.code !== 'ENOENT') {
            throw error;
            // se o arquivo não existir, o erro será ENOENT e ele deve continuar a função, caso seja outro erro, ele será lançado
        }
    } 

   await fs.writeFile('books.json', `[
  {
    "nome": "falsini",
    "author": "andrezin",
    "status": true
  },
  {
    "nome": "a lua e as estrelas",
    "author": "Miguel de correia",
    "status": true
  },
  {
    "nome": "Squad o ultimo amanhecer",
    "author": "Saulo Almeida",
    "status": true
  },
  {
    "nome": "Oxigenio 2.0",
    "author": "andrezin",
    "status": true
  },
  {
    "nome": "Oxigenio 2.0: o legado de paz",
    "author": "John willian",
    "status": true
  }
]`, 'utf-8')
}


