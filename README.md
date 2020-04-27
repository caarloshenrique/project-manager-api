# project-manager-api

> :house_with_garden: Uma API para gerenciamento de projetos

## Requisitos :clipboard:

- [NodeJS LTS (ou superior)](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/)

## Uso :hammer_and_wrench:

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

## Licença :page_facing_up:

[MIT](/LICENSE) &copy; Carlos Henrique da Costa Silva
