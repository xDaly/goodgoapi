const { sequelize } = require("../sequelize");
const { DataTypes,Sequelize } = require("sequelize");

exports.Order = sequelize.define(
  "Order",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING,
    }
  }
);  