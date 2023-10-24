 //Modulos
 const express = require("express");
 const mongoose = require("mongoose");
 const bodyParser = require("body-parser");
 const cors = require("cors");


 //routers





 //middlewares





 //config
 const dbName = "MyGEDExpress"
 const port = 3000;

 const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

// alterar rotas no express

//conexao com mongodb
mongoose.connect(
    `mongodb://127.0.0.1:27017/${dbName}`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);


app.get("/", (req, res) => {
    res.json({ message: "Rota de testes!" })
})


app.listen(port, ()=> {
    console.log(`O backEnd esta rodando na porta ${port}`);
})