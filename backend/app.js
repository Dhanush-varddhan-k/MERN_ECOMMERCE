// main file (backend's application file)
const express = require('express');
const app=express();   // creating an app from express model
const dotenv=require('dotenv');
const path=require('path');
const cors=require('cors')
const connectDatabase = require('./config/connectDatabase');
dotenv.config({path:path.join(__dirname, 'config','config.env')});

const products =require('./routes/product');
const orders =require('./routes/order');

connectDatabase();

app.use(express.json());
app.use(cors());
app.use('/api/v1/',products);
app.use('/api/v1/',orders);


app.listen(process.env.PORT,() =>{
    console.log(`server listening to port ${process.env.PORT} in production`) //to confirm it is in production or development
}

);         // making app to listen the server
//config.enev --stores the environment, configuration vzriables, as always the app could not run in same port and might change
