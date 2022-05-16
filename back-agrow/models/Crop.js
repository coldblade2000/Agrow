const {DataTypes, Model} = require("sequelize");
const sequelize = require("../lib/sequelize");

class Crop extends Model {
}

Crop.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        modelName: "Crop",
    }
);
module.exports = Crop;
