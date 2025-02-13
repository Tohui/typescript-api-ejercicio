import express from "express";
import dotenv from "dotenv"
import productRouter from './modules/products/products.module'

dotenv.config()


const app = express()

app.use(express.json())
app.use('/ejercicio',productRouter)

export default app;