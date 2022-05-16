const {DataTypes, Model} = require("sequelize");
const sequelize = require("../lib/sequelize");

class Sensor extends Model {
}

Sensor.init(
    {
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        latitude: {
            type: DataTypes.FLOAT,
            allowNull: true,
        },
        longitude: {
            type: DataTypes.FLOAT,
            allowNull: true,
        }
    },
    {
        sequelize,
        timestamps: false,
        modelName: "Sensor",
    }
);
module.exports = Sensor;
