require ('dotenv').config();
const mongoose= require('mongoose');

const mongoUri= process.env.MONGOURI //'mongodb+srv://refaelbabayov:refael123@cluster0.dugli.mongodb.net/classdb?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(mongoUri).then(()=>console.log('connected to mongo!'));

module.exports=mongoose;