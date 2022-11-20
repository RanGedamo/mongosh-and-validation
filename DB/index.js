const mongoose = require('mongoose');


mongoose.connect(process.env.dbURI).then(()=>console.log("connect to database")).catch(err=>console.log(err))


const db = mongoose.connection;

module.exports = db;