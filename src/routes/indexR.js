import { Router } from 'express';
import citiesR from '../routes/citiesR.js'
import itineraryR from '../routes/itineraryR.js'
import { authR } from '../routes/auth.js'

const indexR = Router()

indexR.use("/cities", citiesR)
indexR.use("/itineraries", itineraryR)
indexR.use("/user", authR)

export default indexR