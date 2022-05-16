const {DataTypes, Model} = require("sequelize");
const sequelize = require("../lib/sequelize");

class ProductInstance extends Model {
}

ProductInstance.init(
    {
        UUID: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
        },
        dateProduced: {
            type: DataTypes.DATE,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        modelName: "ProductInstance",
    }
);
module.exports = ProductInstance;
