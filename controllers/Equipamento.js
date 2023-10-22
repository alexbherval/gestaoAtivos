
const Sequelize = require('sequelize');
const db = require('../config/db/connection');
const sequelize = require('../config/db/connection');

const Equipamento = db.define('equipamento', {
    serial: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true // Isso garante que o serial seja único
    },
    marca: {
        type: Sequelize.STRING,
    },
    modelo: {
        type: Sequelize.STRING,
    },
    patrimonio: {
        type: Sequelize.STRING,
    },
    statusOperacional: {
        type: Sequelize.STRING,
    },
    setorAlocado: {
        type: Sequelize.STRING,
    },
    itenAssociado: {
        type: Sequelize.STRING,
    },
    ordenServico: {
        type: Sequelize.STRING,
    },
    valorCompra: {
        type: Sequelize.STRING,
    },
    dataInstall: {
        type: Sequelize.STRING,
    },
    dataCompra: {
        type: Sequelize.STRING,
    }

});

module.exports = Equipamento;