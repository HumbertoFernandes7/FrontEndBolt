# Frontend - Bolt Challenge

Este é o frontend da aplicação desenvolvida como parte do desafio técnico da Bolt, utilizando Angular na versão 18.1.3.

## Tecnologias Utilizadas

- Angular 18.1.3  
- TypeScript  
- SCSS  

## Estrutura do Projeto

## Funcionalidades

### HomeComponent

- Apresenta uma lista com as top 5 usinas.
- Permite atualizar manualmente os dados das usinas.
- Utiliza um spinner para feedback visual de carregamento.
- Exibe modal de erro em caso de falha na requisição.

### UsinaService

- `listaTop5Empresas`: Requisição GET para `${APIURL}/lista/top5`.
- `atualizaManualment`: Requisição GET para `${APIURL}/importaManualment`.

## Como Rodar o Projeto

1. Instale as dependências:
```bash
npm install
ng serve
http://localhost:4200
