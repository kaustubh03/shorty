import dbConfig from "../config/db_config.js";

const Sequelize = require("sequelize");
let sequelize = null;

try{
  sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    logging: false,
    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle
    }
  });
  console.info('Database connectivity established successfully.')
}
catch(err){
  console.error(err,'Database Connectivity Unsuccessful');
}


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;