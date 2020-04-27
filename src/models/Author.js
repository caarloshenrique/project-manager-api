const { Model, DataTypes } = require("sequelize");

class Author extends Model {
  static init(sequelize) {
    super.init(
      {
        crea_ms: DataTypes.BIGINT,
        name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.BIGINT,
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsToMany(models.Project, {
      foreignKey: "author_id",
      through: "project_authors",
      as: "projects",
    });
  }
}

module.exports = Author;
