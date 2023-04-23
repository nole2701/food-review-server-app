import express from 'express'
import cors from 'cors'
import mongoose from "mongoose";
import session from "express-session";
import AuthController from './users/auth-controller.js';



// Connect to Windows MongoDB from WSL2 https://github.com/microsoft/WSL/issues/5486

const CONNECTION_STRING = 
    "mongodb+srv://group9:<password>@food-review.tnxblvo.mongodb.net/?retryWrites=true&w=majority"
    || 'mongodb://172.31.0.1:27017/tuiter'
mongoose.connect(CONNECTION_STRING);
const app = express()
app.use(
    cors({
      credentials: true,
      origin: "http://localhost:3000",
    })
   );
   app.use(express.json());
   
app.use(express.json());
app.use(
    session({
      secret: "any string",
      resave: false,
      saveUninitialized: true,
    })
   );


AuthController(app);


app.listen(process.env.PORT || 4000);