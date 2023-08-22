const { sequelize } = require("./sequelize");
const { Category } = require("./models/category.model");
const { Model } = require("./models/model.model");
const { Product } = require("./models/product.model");
const { Departement } = require("./models/department.model");
const { Collection } = require("./models/collection.model");
const { User } = require("./models/user.model");
const { Profil } = require("./models/profil.model");
const { Order } = require("./models/order.model");
const { OrderItem } = require("./models/order_item.model");


User.hasOne(Profil, { onUpdate: "CASCADE" })
Profil.belongsTo(User, { onUpdate: "CASCADE" })

User.hasMany(Order, { onUpdate: "CASCADE" })
Order.belongsTo(User, { onUpdate: "CASCADE" })

Order.hasMany(OrderItem, { onUpdate: "CASCADE" })
OrderItem.belongsTo(Order, { onUpdate: "CASCADE" })

User.hasMany(Departement, { onUpdate: "CASCADE" })
Departement.belongsTo(User, { onUpdate: "CASCADE" })

Departement.hasMany(Collection, { onUpdate: "CASCADE" })
Collection.belongsTo(Departement, { onUpdate: "CASCADE" })

Collection.hasMany(Category, { onUpdate: "CASCADE" })
Category.belongsTo(Collection, { onUpdate: "CASCADE" })

Category.hasMany(Product, { onUpdate: "CASCADE" })
Product.belongsTo(Category, { onUpdate: "CASCADE" })

Product.hasMany(Model, { onUpdate: "CASCADE" })
Model.belongsTo(Product, { onUpdate: "CASCADE" })



module.exports = {
  User: User,
  Profil:Profil,
  Order:Order,
  OrderItem:OrderItem,
  Departement: Departement,
  Collection: Collection,
  Category: Category,
  Product: Product,
  Model: Model,
  sequelize: sequelize
};
