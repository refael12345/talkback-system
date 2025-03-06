require("dotenv");
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const apiRouter = require('./api/api.js');
//mongoose.connect('mongodb+srv://refaelbabayov:refael123@cluster0.dugli.mongodb.net/classdb?retryWrites=true&w=majority&appName=Cluster0')
  //  .then(()=>console.log('Connected to mongo'));

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api', apiRouter );

const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>console.log(`Listen to port ${PORT}`));