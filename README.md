# Projeto Marketplace Backend

  Este projeto faz parte da prova de conceito da conclusão do curso de pós-graduação em Arquitetura de Sistemas Distribuídos. Ele contempla o desenvolvimento do frontend da aplicação.

## Objetivo

  A prova de conceito fui desenvolvida para apresentar a solução proposta para algumas restrições arquiteturais do projeto.

## Tecnologias Utilizadas

* Git
* Angular
* Angular Materials
* Bootstrap
* CSS
* HTML
* JavaScript
* TypeScript
* JWT
* NINGX
* Docker
* Docker Compose

## Pré Requisitos para executar o projeto

  A máquina deve possuir git, docker e docker compose instalados e o projeto [marketplace-backend](https://github.com/viniciusufop/marketplace-backend) deve estar executando.

## Executando o projeto

* Efetue o clone do projeto através do comando: ```git clone https://github.com/viniciusufop/marketplace-frontend.git```
* Acesse a pasta marketplace-frontend criada.
* Execute o comando ```docker-compose up -d```
* O Docker vai subir todos o container do projeto.

## Estrutura de containers do projeto

  O arquivo docker-compose está configurado para utilizar a network abaixo:

* net-frontend 

  O arquivo docker-compose está configurado para subir o container abaixo:

* Container da aplicação marketplace-frontend exposto na porta 80 (associado net-frontend)
