const Client = require("../models/Client");
const Project = require("../models/Project");

module.exports = {
  async index(req, res) {
    const { client_id } = req.params;

    const client = await Client.findByPk(client_id, {
      include: { association: "projects" },
    });

    return res.json(client.projects);
  },

  async store(req, res) {
    const { client_id } = req.params;
    const { name, price, status } = req.body;

    const client = await Client.findByPk(client_id);

    if (!client) {
      return res.status(400).json({ error: "Client not found" });
    }

    const project = await Project.create({
      name,
      price,
      status,
      client_id,
    });

    return res.json(project);
  },
};
