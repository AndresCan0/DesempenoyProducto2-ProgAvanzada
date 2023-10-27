
const express = require('express');

// Recuperar el archivo de "Eschema" de la colección "car"

const Car = require('../models/car');

const routerCarList = express.Router();


// Lista

routerCarList.get('/', async (req, res) => {

    try {

      const cars = await Car.find(); // Obtener todos los datos de la tabla "cars"
      
      res.render('carList', { cars }); // Pasamos la variables "cars" al archivo "carList.pug"

    } catch (error) {

      console.error(error);
      res.status(500).send('Error al obtener los datos de los carros');
    }
});


module.exports = routerCarList;

