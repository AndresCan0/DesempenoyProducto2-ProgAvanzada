
const express = require('express');
const bcrypt = require('bcrypt');

// Recuperar el archivo de "Eschema" de la colección "user"

const User = require('../models/user');

const routerLogin = express.Router();


routerLogin.get('/', (req, res) => {

    res.render('singIn', { message: '', error: false });
});

routerLogin.post('/', async (req, res) => {

    try {

        const user = await User.findOne({ user: req.body.user });
        
        if (user == null) {
            res.render('singIn', { message: "El usuario no existe", error: true });
        } else {
            
            const passwordMatch = await bcrypt.compare(req.body.password, user.password);

            if (passwordMatch) {
                res.render('Menu');
            } else {
                res.render('singIn', { message: "Contraseña incorrecta", error: true });
            }
        }
        
    } catch (error) {

        console.error(error);
        res.render('singIn', { message: "Ha ocurrido un error", error: true });
    }
});

module.exports = routerLogin;