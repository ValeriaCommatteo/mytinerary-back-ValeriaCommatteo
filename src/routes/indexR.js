import { Router } from 'express';
import citiesR from '../routes/citiesR.js'
import itineraryR from '../routes/itineraryR.js'

const indexR = Router()

indexR.use("/cities", citiesR)
indexR.use("/itinerary", itineraryR)

export default indexR