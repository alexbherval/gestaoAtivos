const express = require('express');
const router = express.Router();
const Usuario = require('../controllers/Usuario');
const Equipamento = require('../controllers/Equipamento');

//ROUTES
    //Adicionando usuário via post
    router.post('/add', (req, res) => {
        let {
            serial, marca, modelo, patrimonio, statusOperacional, setorAlocado, itenAssociado, ordenServico,
            valorCompra, dataInstall, dataCompra } = req.body;

         // Verificar se o serial já existe no banco de dados
         Equipamento.findOne({ where: { serial } })
            .then(existingEquipamento => {
                if (existingEquipamento) {
                    res.status(400).json({ message: "O equipamento com este serial já está cadastrado." });
                }else {
                    //Inserindo dados no banco
                    Equipamento.create({
                        marca, modelo, serial, patrimonio, statusOperacional, setorAlocado, itenAssociado,
                        ordenServico, valorCompra, dataInstall, dataCompra,
                    })
                    .then(() => res.redirect('/'))
                    .catch(err => console.log(err));
                }
            })
            .catch(err => console.log(err));

    });

    //Fin da insersão de usuário via post

    module.exports = router;