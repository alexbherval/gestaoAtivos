//Criando servidor com express e carregando o mesmo no app
const express = require("express");
const app = express();
//Invocando a conexao com o banco de dados.
const db = require('./db/connection');

//Invocando parser, para envio de dados via corpo de requisição
const bodyParser = require('body-parser');


//Declarando a porta que vai rodar o servidor web
const PORT = 3000;

// Iniciando o servidor
app.listen(PORT, function() {
    console.log(`O express esta rodando na porta ${PORT}`);
});

//Utilizando o parser
app.use(bodyParser.urlencoded({ extended: false }));

//Conectando ao banco de dados
db
    .authenticate().then(() => {
        console.log("Conectado com sucesso!");
    })
    .catch(err => {
        console.log("Ops - Erro ao Conectar!", err)
    })


//ROTAS
app.get('/', (req, res)=> {
    res.send('Esta funcionando!')
})

    //Usuarios
    app.use('/usuario', require('./routers/usuario'));

    //Equipamentos
    app.use('/equipamento', require('./routers/equipamento'));





