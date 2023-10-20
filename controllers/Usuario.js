
const Sequelize = require('sequelize');
const db = require('../db/connection');
const sequelize = require('../db/connection');

const Usuario = db.define('usuario', {
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true // Isso garante que o serial seja único
    },
    nome: {
        type: Sequelize.STRING,
    },
    usuario: {
        type: Sequelize.STRING,
    },
    password: {
        type: Sequelize.STRING,
    }
});

module.exports = Usuario;