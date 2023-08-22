const { sequelize } = require("../sequelize");
const { DataTypes,Sequelize } = require("sequelize");

exports.OrderItem = sequelize.define(
  "OrderItem",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    product_id: {
      type: DataTypes.STRING,
      unique : true
    },
    qte: {
      type: DataTypes.STRING,
    }
  }
);  