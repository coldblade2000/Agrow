const {DataTypes, Model} = require("sequelize");
const sequelize = require("../lib/sequelize");

class StageInstance extends Model {
}

StageInstance.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        startDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        endDate: {
            type: DataTypes.DATE,
            allowNull: true
        }
    },
    {
        sequelize,
        timestamps: false,
        modelName: "StageInstance",
    }
);
module.exports = StageInstance;
