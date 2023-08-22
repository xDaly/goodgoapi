const { sequelize } = require("../sequelize");
const { DataTypes,Sequelize } = require("sequelize");

exports.User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    username: {
      type: DataTypes.STRING,
      unique : true
    },
    password: {
      type: DataTypes.STRING,
    },
    role : {
      type : DataTypes.STRING
    },
    activated : {
      type : DataTypes.BOOLEAN
    }
  }
);  