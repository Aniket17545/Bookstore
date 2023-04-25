// loading module
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// startup the app

const port = 5500; 
app.use(express.json());
app.use(cors('*'));

// database connection
mongoose.connect('mongodb://127.0.0.1:27017/BOOKSTORE',{
    useNewUrlParser: true, useUnifiedTopology: true
})
const db = mongoose.connection;
db.on('error', (error) => (console.error(error)))
db.once('open', () => console.log('Connected to Database'))

const userRoute = require("./route/user.routes");
const authRoute =require("./route/auth.route");

// User Route
app.use('/user', userRoute);

// Admin Route
app.use('/auth', authRoute);

// start the server
app.listen(port, () => { console.log('Server Started on Port : 5500')});
