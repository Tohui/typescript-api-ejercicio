import express from "express";
import productRouter from './modules/products/products.module'
import dotenv from "dotenv"

dotenv.config()

const app = express()
app.use(express.json())
app.use('/ejercicio',productRouter)

export default app;