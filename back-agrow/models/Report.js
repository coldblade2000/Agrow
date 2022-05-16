const {DataTypes, Model} = require("sequelize");
const sequelize = require("../lib/sequelize");

class Report extends Model {
}

Report.init(
    {
        message: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        startDate: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        endDate: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        sequelize,
        timestamps: false,
        modelName: "Report",
    }
);
module.exports = Report;
