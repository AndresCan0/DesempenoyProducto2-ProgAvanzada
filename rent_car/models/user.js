
// Definir constante para generar el esquema de la colección (car)

const mongoose = require('mongoose');

// Definir el esquema de la colección (user) con sus respectivos campos (key, value)

const userSchema = new mongoose.Schema({

    user: String,
    name: String,
    password: String,

});

// Crear modelo (User)

module.exports = mongoose.model('user', userSchema);
