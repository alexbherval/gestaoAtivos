//conexao com MongoDB
const mongoose = require('mongoose');

function connectDB() {
    mongoose.connect('mongodb://127.0.0.1:27017/gedAdmin', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
        console.log("Banco conectado com sucesso!");
    });
}

module.exports = connectDB;

