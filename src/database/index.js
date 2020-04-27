const Sequelize = require("sequelize");
const dbConfig = require("../config/database");

const Client = require("../models/Client");
const Project = require("../models/Project");
const Author = require("../models/Author");

const connection = new Sequelize(dbConfig);

Client.init(connection);
Project.init(connection);
Author.init(connection);

Client.associate(connection.models);
Project.associate(connection.models);
Author.associate(connection.models);

module.exports = connection;
