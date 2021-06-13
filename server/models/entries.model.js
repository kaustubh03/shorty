'use strict';
const db = require('./index');

const sequelize = db.sequelize;
const Sequelize = db.Sequelize;

const Entries = sequelize.define("Entries", {
  url: {
      type: Sequelize.STRING,
      allowNull: false
    },
  shortenUrl: {
      type: Sequelize.STRING,
      allowNull: false
    },
    expirationDate: {
      type: Sequelize.DATE,
      allowNull: true
    },
    logging: {
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
    password:{
      type: Sequelize.STRING,
      allowNull: true
    },
    passwordRequire:{
      type: Sequelize.BOOLEAN,
      allowNull: true
    },
    isExpired:{
      type: Sequelize.BOOLEAN,
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
module.exports = Entries;
