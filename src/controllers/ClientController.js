const Client = require("../models/Client");

module.exports = {
  async index(req, res) {
    const clients = await Client.findAll();

    return res.json(clients);
  },
  async store(req, res) {
    const { name, email, phone } = req.body;

    const client = await Client.create({ name, email, phone });

    return res.json(client);
  },
};
