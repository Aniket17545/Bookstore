// loading module
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// startup the app
const app = express();
const port = 5500; 
app.use(express.json());
app.use(cors());

// database connection
mongoose.connect('mongodb://localhost:27017/BOOKSTORE',{
    useNewUrlParser: true, useUnifiedTopology: true
})

// start the server
app.listen(port, () => { console.log('Server Started on Port : 5500')});
