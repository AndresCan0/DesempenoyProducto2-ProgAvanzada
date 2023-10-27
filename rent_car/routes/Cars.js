
const express = require('express');

// Recuperar el archivo de "Eschema" de la colección "car"

const Car = require('../models/car');

const routerCar = express.Router();

let listCars = [];


// Lista

routerCar.get('/', async (req, res) => {

    try {

      const cars = await Car.find();
      
      res.render('Car', { cars }); 

    } catch (error) {

      console.error(error);
      res.status(500).send('Error al obtener los datos de los carros');
    }
});




routerCar.post('/', async (req, res) => {

    try {

        const car = await Car.findOne({ plateNumber: req.body.plateNumber });

        if (car == null) {
            
            
            

            const newCar = new Car(req.body);
            newCar.state = 'disponible';
            await newCar.save();
            listCars.push(newCar);

            
            
            
            res.render('Car', { message: "Automovil agregado correctamente", error: true, cars: listCars })  

        } else {
            
            res.render('Car', { message: "Automóvil ya existente", error: false });
        }

    } catch (err) {

        console.error(err);
        res.status(500).send('Error interno del servidor');
    }
});

module.exports = routerCar;

