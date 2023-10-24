const mongoose = require("mongoose");

const EquipamentoSchema = new mongoose.Schema({
    tipo: {
        type: String
    },
    marca: {
        type: String,
        required: true
    },
    serial: {
        type: String,
        required: true
    },
    partNumber: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    }, 
    modelName: {
        type: String,
        required: true
    },
    nfe: {
        type: String,
        required: true
    },
    valorCompra: {
        type: String,
        required: true
    },
    dataCompra: {
        type: Date
        
    }
});

const User = mongoose.model('Equipamento', UserSchema);

module.exports = Equipamento;