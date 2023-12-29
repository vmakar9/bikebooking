import express from "express"
import cors from "cors"
import {configs} from "./configs/config";
import * as mongoose from "mongoose";
import {bikeRouter} from "./router/bike.router";

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use('/bikes',bikeRouter)

app.listen(configs.PORT,()=>{
    mongoose.connect(configs.DB_URL)
    console.log(`Server is Started on port ${configs.PORT}`)
})


