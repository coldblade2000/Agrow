const {Sequelize} = require("sequelize");

const sequelize = new Sequelize("database", "", "", {
    dialect: "sqlite",
    storage: "./back-agrow/database/database.sqlite",
});

sequelize.authenticate().then(() => {
    console.log("Authenticated!");
});

module.exports = sequelize;
