const {DataTypes, Model} = require("sequelize");
const sequelize = require("../lib/sequelize");

class DataType extends Model {
}

DataType.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        unit: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [["INTEGER", "REAL", "TEXT"]]
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        modelName: "DataType",
    }
);
module.exports = DataType;
