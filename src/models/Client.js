const { Model, DataTypes } = require("sequelize");

class Client extends Model {
  static init(sequelize) {
    super.init(
      {
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
    this.hasMany(models.Project, {
      foreignKey: "client_id",
      as: "projects",
    });
  }
}

module.exports = Client;
