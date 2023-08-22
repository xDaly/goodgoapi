const { sequelize } = require("../sequelize");
const { DataTypes, Sequelize } = require("sequelize");

exports.Departement = sequelize.define(
  "Departement",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING
    },
  }
);  

