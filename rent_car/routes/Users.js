const express = require('express');
const bcrypt = require('bcrypt'); 

// Recuperar el archivo de "Eschema" de la colección "user"

const User = require('../models/user');

const routerUser = express.Router();

routerUser.get('/', (req, res) => {
    res.render('createAccount', { message: "", error: false });
});

routerUser.post('/', async (req, res) => {
    try {
        const user = await User.findOne({ user: req.body.user });

        if (user == null) {
            
            const hashedPassword = await bcrypt.hash(req.body.password, 10); 

            const newUser = new User({
                user: req.body.user,
                name: req.body.name,
                password: hashedPassword, 
            });
            await newUser.save();

            res.render('createAccount', { message: "Usuario registrado con éxito", error: true });
        } else {
            res.render('createAccount', { message: "Usuario ya existente", error: false });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error interno del servidor');
    }
});

module.exports = routerUser;
