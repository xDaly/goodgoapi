const { sequelize } = require("../sequelize");
const { DataTypes, Sequelize } = require("sequelize");

exports.Profil = sequelize.define(
  "Profil",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4, primaryKey: true,
      allowNull: false
    },
    nom: {
      type: DataTypes.STRING,
    },
    prenom: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.INTEGER
    },
    address: {
      type: DataTypes.STRING,
    },
    shop_name: {
      type: DataTypes.STRING,
    },
    logo: {
      type: DataTypes.STRING,
    },
    couverture: {
      type: DataTypes.STRING,
    },
  }
);