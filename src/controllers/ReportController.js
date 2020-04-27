const Project = require("../models/Project");

module.exports = {
  async show(req, res) {
    //Encontrar o nome e preço de projetos com status aberto,
    //junto ao nome do cliente e autores envolvidos

    const projects = await Project.findAll({
      attributes: ["name", "price"],
      where: {
        status: "open",
      },
      include: [
        { association: "client", attributes: ["name"] },
        {
          association: "authors",
          attributes: ["crea_ms", "name"],
          through: {
            attributes: ["project_authors"],
          },
        },
      ],
    });
    return res.json(projects);
  },
};
