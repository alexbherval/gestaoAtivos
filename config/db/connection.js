//invocando o módulo Sequelize para conexao e manutenção de bancos ralacionais 
const Sequelize = require('sequelize');

//Criando a instancia do banco
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/app.db'
});

module.exports = sequelize;