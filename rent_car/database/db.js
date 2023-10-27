
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/rent_car')

    .then(db => console.log('Connected to database Renta_Autos'))
    .catch(err => console.log(err));

/*

--------- Conexión con Atlas

require('dotenv').config();

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.ckfdcsl.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri, 

    { useNewUrlParser: true, useUnifiedTopology: true }
)

    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e)) 

*/

