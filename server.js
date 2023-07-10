import express from 'express';
const app = express();
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db';

//configure env 
dotenv.config(); 

//database config
connectDB();

//middlewares
app.use(express.json())
app.use(morgan())

const PORT = process.env.PORT || 8000;


//rest api
app.get("/", (req, res) => {
    res.send("<h1>Welcome to ecommerce app</h1>");
  });
  

  app.listen(PORT, () => {
    console.log("Server Running on",PORT);
  });