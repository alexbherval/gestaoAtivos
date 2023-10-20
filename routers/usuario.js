const express = require('express');
const router = express.Router();
const Usuario = require('../controllers/Usuario');

//ROUTES

    //Rota de testes
    router.get('/test', (req, res) => {
        res.send('deou certo!')
    })

    //Adicionando usuário via post
    router.post('/add', (req, res) => {
        let {
            nome, usuario, email, password
        } = req.body;

        // Verificar se o serial já existe no banco de dados
        Usuario.findOne({ where: { email } })
          .then(existingMail => {
            if (existingMail) {
              res.status(400).json({ message: "Já existe um cadastro com este e-mail." });
            }else{
        //Inserindo dados no banco
                Usuario.create({
                    email, nome, usuario, password
                })
                .then(() => res.redirect('/'))
                .catch(err => console.log(err));
            }
        })
        .catch(err => console.log(err));

    });

    module.exports = router;