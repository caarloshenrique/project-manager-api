const Project = require("../models/Project");
const Author = require("../models/Author");

module.exports = {
  async index(req, res) {
    const { project_id } = req.params;

    const project = await Project.findByPk(project_id, {
      include: {
        association: "authors",
        attributes: ["crea_ms", "name", "email", "phone"],
        through: {
          attributes: [],
        },
      },
    });

    return res.json(project.authors);
  },

  async store(req, res) {
    const { project_id } = req.params;
    const { crea_ms } = req.body;

    const project = await Project.findByPk(project_id);

    if (!project) {
      return res.status(400).json({ error: "Project not found" });
    }

    const author = await Author.findOne({
      where: { crea_ms },
    });

    await project.addAuthor(author);

    return res.json(author);
  },

  async delete(req, res) {
    const { project_id } = req.params;
    const { crea_ms, name, email, phone } = req.body;

    const project = await Project.findByPk(project_id);

    if (!project) {
      return res.status(400).json({ error: "Project not found" });
    }

    const author = await Author.findOne({
      where: { crea_ms, name, email, phone },
    });

    await project.removeAuthor(author);

    return res.json();
  },
};
