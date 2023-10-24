const mongoose = require("mongoose");

const EquipamentoSchema = new mongoose.Schema({
    tipo: { type: String, required: true },
    serial: { type: String, required: true },
    productName: { type: String }, 
    marca: { type: String, required: true },
    modelName: { type: String },
    dataCompra: { type: Date },
    dataInstalacao: { type: Date },
    statusEquipamento: { type: String },
    nfeEntrada: {
        dataCompra: { type: Date },
        numeroNota: { type: String },
        chave: { type: String },
        vTotal: { type: Number, required },
        urlNfe: { type: String }
    },
    especificacoes: {
        // campos para computadores e notebooks
        processador: { 
            marca: { type: String },
            frequencia: { type: String },
            cache: { type: String }
        },
        memoria: {
            tamanho: { type: String },
            frequencia: { type: String }
        },
        Hdd: {
            capacidade: { type: String },
            tipo: { type: String }
        },
        fonte: {
            potencia: {type: String },
            voltagem: { type: String },
            padrao:{ type: String }
        },
        // campos para monitores
        polegadas: { type: String },
    },     
});

const User = mongoose.model('Equipamento', EquipamentoSchema);

module.exports = Equipamento;