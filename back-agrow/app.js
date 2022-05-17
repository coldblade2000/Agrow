var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const ProductInstance = require("./models/ProductInstance");
const Product = require("./models/Product");
const StageInstance = require("./models/StageInstance");
const Stage = require("./models/Stage");
const Report = require("./models/Report");
const Datapoint = require("./models/Datapoint");
const Crop = require("./models/Crop");
const Sensor = require("./models/Sensor");
const DataType = require("./models/DataType");
const sequelize = require("lib/sequelize")

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

async function associateModels() {
    ProductInstance.belongsTo(Product, {foreignKey: {allowNull: false}})
    Product.hasMany(ProductInstance, {foreignKey: {allowNull: false}})

    ProductInstance.belongsTo(StageInstance, {
        foreignKey:{
            name:"lastStage",
            allowNull: false
        }
    })
    StageInstance.hasMany(ProductInstance, {
        foreignKey:{
            name:"lastStage",
            allowNull: false
        }
    })

    StageInstance.belongsTo(StageInstance, {
        foreignKey:{
            name:"nextStage",
        }
    })
    StageInstance.hasOne(StageInstance, {
        foreignKey:{
            name:"nextStage",
        }
    })

    StageInstance.belongsTo(Stage, {
        foreignKey:{
            name:"stageTemplate",
        }
    })
    Stage.hasMany(StageInstance, {
        foreignKey:{
            name:"stageTemplate",
        }
    })

    Report.belongsTo(StageInstance, {
        foreignKey:{
            allowNull: false
        }
    })
    StageInstance.hasMany(Report, {
        foreignKey:{
            allowNull: false
        }
    })

    Datapoint.belongsTo(StageInstance, {
        foreignKey:{
            allowNull: true
        }
    })
    StageInstance.hasMany(Datapoint, {
        foreignKey:{
            allowNull: true
        }
    })

    Stage.belongsTo(Crop, {
        foreignKey:{
            allowNull: false
        }
    })
    Crop.hasMany(Stage, {
        foreignKey:{
            allowNull: false
        }
    })

    Sensor.belongsTo(Stage, {
        foreignKey:{
            allowNull: false
        }
    })
    Stage.hasMany(Sensor, {
        foreignKey:{
            allowNull: false
        }
    })

    Datapoint.belongsTo(Sensor, {
        foreignKey:{
            allowNull: false
        }
    })
    Sensor.hasMany(Datapoint, {
        foreignKey:{
            allowNull: false
        }
    })

    Datapoint.belongsTo(DataType, {
        foreignKey:{
            allowNull: false
        }
    })
    DataType.hasMany(Datapoint, {
        foreignKey:{
            allowNull: false
        }
    })

    await ProductInstance.sync()
    await Product.sync()
    await StageInstance.sync()
    await Stage.sync()
    await Report.sync()
    await Datapoint.sync()
    await Crop.sync()
    await Sensor.sync()
    await DataType.sync()

    await sequelize.sync()
}

associateModels();

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
