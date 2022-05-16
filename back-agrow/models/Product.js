const {DataTypes, Model} = require("sequelize");
const sequelize = require("../lib/sequelize");

class Product extends Model {
}

Product.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        modelName: "Product",
    }
);
module.exports = Product;
