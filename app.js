require('dotenv').config();
const express = require('express');
const cors = require('cors');
const routerFly = require('./Router/fly-route');
const routerTravels = require('./Router/travel-route');
const routerUsers = require('./Router/users-route');
const mongoose = require('mongoose');
const db = require('./DB/index');
const app = express();
const port = 3002;



db.on('error', err => {console.log(err)});
 
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/Travels', routerTravels);
app.use('/fly', routerFly);
app.use('/users', routerUsers);


app.get('/', (req, res) => {
    res.send("hello world");
});

app.listen(port, () => {
    console.log(`listen to port : ${port}`);
});