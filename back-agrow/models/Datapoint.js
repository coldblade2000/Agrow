const {DataTypes, Model} = require("sequelize");
const sequelize = require("../lib/sequelize");

class Datapoint extends Model {
}

Datapoint.init(
    {
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        valueInteger: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        valueReal: {
            type: DataTypes.REAL,
            allowNull: true,
        },
        valueText: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        sequelize,
        timestamps: false,
        modelName: "Datapoint",
    }
);
module.exports = Datapoint;
