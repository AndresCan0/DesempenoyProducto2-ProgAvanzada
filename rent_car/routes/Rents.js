
const express = require('express');

// Recuperar el archivo de "Eschema" de las colecciones

const User = require('../models/user')
const Car = require('../models/car');
const Rent = require('../models/rent')

const routerRent = express.Router();

let listRents = [];


// Lista

routerRent.get('/', async (req, res) => {

    try {

      const rents = await Rent.find();
      const users = await User.find();
      const cars = await Car.find();
      
      res.render('Rent', { rents, users, cars }); 

    } catch (error) {

      console.error(error);
      res.status(500).send('Error al obtener los datos de las rentas');
    }
});


routerRent.post('/', async (req, res) => {

    try {

        const existingRent = await Rent.findOne({ rentNumber: req.body.rentNumber });

        if (existingRent) {
            res.render('Rent', { message: 'Número de renta ya existe, ingrese una nueva', error: false});
            return;
        }

        const user = await User.findOne({ user: req.body.user });

        if (!user) {
            res.render('Rent', { message: 'El nombre de usuario no existe', error: false });
            return;
        }

        const car = await Car.findOne({ plateNumber: req.body.plateNumber });

        if (!car) {
            res.render('Rent', { message: 'El número de placa no existe', error: false });
            return;
        }

        if (car.state !== 'disponible') {
            
            res.render('Rent', { message: 'El automovil ya fue rentado', error: false });
            return;
        }

        car.state = 'no disponible';
        await car.save();
        
        const newRent = new Rent(req.body);
        await newRent.save();
        
        listRents.push(newRent);
        
        res.render('Rent', { message: 'Renta agregada correctamente', error: true, rents: listRents });

    } catch (err) {

        console.error(err);
        res.status(500).send('Error interno del servidor');
    }
});

module.exports = routerRent;