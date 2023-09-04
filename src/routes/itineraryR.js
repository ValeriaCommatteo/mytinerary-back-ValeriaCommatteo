import { Router } from "express";
import { allItinerary, itineraryByCity, createItinerary, upDateItinerary, deleteItinerary } from '../controllers/itineraryControllers.js'

const itineraryR = Router()

itineraryR.post('/', createItinerary);
itineraryR.get('/:id', itineraryByCity);
itineraryR.get('/', allItinerary);
itineraryR.put('/:id', upDateItinerary);
itineraryR.delete('/:id', deleteItinerary);

export default itineraryR;