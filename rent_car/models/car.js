
// Definir constante para generar el esquema de la colección (car)

const mongoose = require('mongoose');

// Definir el esquema de la colección (car) con sus respectivos campos (key, value)

const carSchema = new mongoose.Schema({

    plateNumber: String, 
    brand: String,
    state: String,
    
});

// Crear modelo (Car)

module.exports = mongoose.model('car', carSchema);