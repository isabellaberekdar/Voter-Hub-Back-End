const db = require("../db");
const Sequelize = require("sequelize");

const MessageBoard = db.define("messageboard", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    subject: {
      type: Sequelize.STRING,
      unique: false,
      allowNull: false
    }
});

module.exports = MessageBoard;