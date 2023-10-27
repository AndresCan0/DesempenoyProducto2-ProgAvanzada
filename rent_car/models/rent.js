
// Definir constante para generar el esquema de la colección (car)

const mongoose = require('mongoose');

// Definir el esquema de la colección (rent) con sus respectivos campos (key, value)

const rentSchema = new mongoose.Schema({

    rentNumber: String,
    user: String,
    plateNumber: String,
    rentDate: Date,
    
});

// Crear modelo (Rent)

module.exports = mongoose.model('rent', rentSchema);
