const express = require("express");

const ClientController = require("./controllers/ClientController");
const ProjectController = require("./controllers/ProjectController");
const AuthorController = require("./controllers/AuthorController");
const ReportController = require("./controllers/ReportController");

const routes = express.Router();

routes.get("/clients", ClientController.index);
routes.post("/clients", ClientController.store);

routes.get("/clients/:client_id/projects", ProjectController.index);
routes.post("/clients/:client_id/projects", ProjectController.store);

routes.get("/projects/:project_id/authors", AuthorController.index);
routes.post("/projects/:project_id/authors", AuthorController.store);
routes.delete("/projects/:project_id/authors", AuthorController.delete);

routes.get("/report", ReportController.show);

module.exports = routes;
