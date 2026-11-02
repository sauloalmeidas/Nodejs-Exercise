# Nodejs-Exercise
Este Repositório tem como intuito, guardar exercícios feitos em node.js, tendo como foco central a pratica diária!

- Instruções sobre o repositorio 
1. cada exercicio contém sua pasta
2. alguns exercicios podem conter a pasta OBS, essa pasta contém: markdown´s e arquivos.js que foram usados para fazer testes e anotar insights, aprendizado e afins!
3. O Readme a seguir Contém informações sobre todos os exercicios, incluindo uma breve descrição do exercicio, funcionalidades, quais tecnologias foram usadas e afins.

## Exercicios 

# Sistema de Biblioteca — Node.js

Esse sistema foi desenvolvido com dois objetivos: simular um sistema de empréstimo de livros de uma biblioteca e praticar conceitos de Node.js.

O sistema utiliza o módulo nativo `readline` para criar uma interface de leitura e escrita de dados no terminal, permitindo que o usuário interaja com as funcionalidades da biblioteca.

## Versões

### 1.2 (atual)

- **Modularização:** criação da pasta `Utils`, contendo o arquivo `create.js`, responsável por armazenar a função de criação do arquivo JSON.
- **Inicialização automática:** ao executar o arquivo principal `biblioteca.js`, o sistema chama a função responsável por verificar e criar o arquivo que funciona como banco de dados da aplicação.
- **Verificação de existência:** antes de criar o arquivo `books.json`, o sistema verifica se ele já existe. Caso exista, os dados são preservados e não são sobrescritos.
- **Persistência de dados:** os status dos livros agora são armazenados no arquivo JSON, permitindo que as alterações permaneçam salvas mesmo após fechar e executar o programa novamente.
- **Armazenamento local:** os dados da biblioteca ficam salvos no computador onde o sistema está sendo executado.

### 1.1

- O sistema recebe o nome do livro que o usuário deseja pegar.
- Caso o livro esteja disponível, o sistema informa o empréstimo e atualiza seu status para indisponível (`false`).
- Caso o usuário tente pegar um livro que já está emprestado, o sistema informa que ele não está disponível.

## Tecnologias e recursos utilizados

- **Node.js:** ambiente de execução JavaScript.
- **Readline:** módulo nativo utilizado para interação com o terminal.
- **File System (`fs/promises`):** módulo nativo utilizado para manipulação de arquivos.
- **JSON:** formato utilizado para armazenar os dados dos livros.
- **ES Modules:** sistema de módulos utilizado para organizar e importar funcionalidades entre arquivos.

## Estrutura do projeto

```text
Exercise-1/
├── biblioteca.js
├── books.json
├── package.json
└── Utils/
    └── create.js
```

## Observação

O arquivo `books.json` funciona como uma forma simples de banco de dados local. Atualmente, os dados ficam armazenados no computador do usuário, sem depender de um banco de dados externo.

