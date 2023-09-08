import express from 'express'
import cors from 'cors'
import './config/database.js'
import indexR from './routes/indexR.js'
import dotenv from 'dotenv'

dotenv.config()

const app = express()

app.use(express.json())

app.use(cors())

app.get("/", ( request , response) => { response.json('') })

app.use( "/api",indexR)
// app.use( "/api",citiesR)
// app.get( '/cities', (req, res ) => { res.json( {data : citiesR,success : true})})

app.listen( process.env.PORT, () => {console.log('Servidor escuchando en el puerto ' + process.env.PORT)})
