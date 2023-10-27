
const express = require('express');

// Paquete para transformar la fecha

const moment = require('moment'); // npm install moment

// Recuperar el archivo de "Eschema" de la colección "renta"

const Rent = require('../models/rent');

const routerRentList = express.Router();


// Lista

routerRentList.get('/', async (req, res) => {

    try {

      const rents = await Rent.find(); // Obtener todos los datos de la tabla "rents"
      
      res.render('rentList', { rents, moment }); // Pasamos las variables "rents" y "moment" al archivo "rentList.pug"

    } catch (error) {

      console.error(error);
      res.status(500).send('Error al obtener los datos de las rentas');
    }
});


module.exports = routerRentList;

