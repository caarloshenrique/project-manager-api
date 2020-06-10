# project-manager-api

> :house_with_garden: Uma API para gerenciamento de projetos com Sequelize


## :rocket: Tecnologias utilizadas

O projeto foi feito utilizando as seguintes tecnologias:

- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/pt-br/)
- [Sequelize ORM](https://sequelize.org/)
- [PostgreSQL](https://www.postgresql.org/)
{...}

## :clipboard: Pré-requisitos

- [NodeJS LTS (ou superior)](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)

## :hammer_and_wrench: Uso

```
$ git clone https://github.com/caarloshenrique/project-manager-api.git
$ cd project-manager-api
$ yarn
```

Ajustar parâmetros de usuário e senha do arquivo [database.js](/src/config/database.js) de acordo com as credencias do seu banco de dados

```
$ yarn sequelize db:create
$ yarn sequelize db:migrate
$ yarn dev
```

## :page_facing_up: Licença 
Este projeto é desenvolvido sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para saber mais detalhes.

<p align="center" style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">Feito com :green_heart: por <strong> Carlos Henrique da Costa Silva </strong> </p>
