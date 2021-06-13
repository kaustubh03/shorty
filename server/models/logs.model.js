'use strict';
const db = require('./index');

const sequelize = db.sequelize;
const Sequelize = db.Sequelize;

const Logs = sequelize.define("Logs", {
  urlId: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    userAgent: {
      type: Sequelize.STRING,
      allowNull: true
    },
    ip: {
      type: Sequelize.STRING,
      allowNull: true
    },
    createdAt: {
      type: Sequelize.DATE,
      allowNull: true
    },
    updatedAt: {
      type: Sequelize.DATE,
      allowNull: true
    },
  }
  );
module.exports = Logs;
