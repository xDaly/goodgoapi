const { sequelize } = require("../sequelize");
const { DataTypes, Sequelize } = require("sequelize");

exports.Product = sequelize.define(
  "Product",
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
    image: {
      type: DataTypes.STRING
    },
    price: {
      type: DataTypes.INTEGER
    },
    available: {
      type: DataTypes.BOOLEAN
    },
    visibility: {
      type: DataTypes.BOOLEAN
    },
    isTop: {
      type: DataTypes.BOOLEAN
    },
  }
);  

