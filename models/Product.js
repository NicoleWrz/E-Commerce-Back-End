const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Product extends Model {}

Product.init(
  {
    id: {
      type: Datatypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
    price: {
      type: Datatypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
      stock: {
        type: Datatypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
        validate: {
          isNumeric: true,
        },
      },
      category_id: {
        type: Datatypes.INTEGER,
        references: {
          model: "category",
          key: "id",
          unique: false,
        },
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
