
const express = require('express');

require('dotenv').config();

const car = require('./routes/Cars');
const carList = require('./routes/carList');

const rent = require('./routes/Rents');
const rentList = require('./routes/rentList');

const user = require('./routes/Users');
const login = require('./routes/Login');


const morgan = require('morgan');

const port = process.env.PORT || 3500;

const app = express();

const mongoose = require('./database/db');


// Configurar el motor de plantillas Pug

app.set('view engine', 'pug'); 
app.set('views', 'views'); 

// Middlewares

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public')); // Configurar la ruta de los archivos css e imagenes


app.use('/Car', car);
app.use('/carList', carList);

app.use('/Rent', rent);
app.use('/rentList', rentList);

app.use('/createAccount', user);
app.use('/singIn', login);


app.use(morgan('dev'));


// Redireccionar a las diferentes página


app.get("/Menu", (req, res)=>{
    res.render('menu');
})

app.get("/singIn", (req, res)=>{
    res.render('singIn');
})

app.get("/createAccount", (req, res)=>{
    res.render('createAccount');
})



app.listen(port, () => {
    console.log(`Server in http://localhost:${port}`);
})      
