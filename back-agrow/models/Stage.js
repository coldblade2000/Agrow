const {DataTypes, Model} = require("sequelize");
const sequelize = require("../lib/sequelize");

class Stage extends Model {
}

Stage.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        location: {
            type: DataTypes.STRING,
            allowNull: true,
        },description: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        modelName: "Stage",
    }
);
module.exports = Stage;
