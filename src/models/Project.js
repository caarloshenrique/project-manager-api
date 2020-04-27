const { Model, DataTypes } = require("sequelize");

class Project extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        price: DataTypes.NUMERIC(6, 2),
        status: DataTypes.ENUM("open", "in_progress", "finished", "reviewing"),
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Client, {
      foreignKey: "client_id",
      as: "client",
    });
    this.belongsToMany(models.Author, {
      foreignKey: "project_id",
      through: "project_authors",
      as: "authors",
    });
  }
}

module.exports = Project;
