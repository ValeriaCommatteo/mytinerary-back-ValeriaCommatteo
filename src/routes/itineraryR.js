import { Router } from "express";
import { allItinerary, itineraryByCity, createItinerary, upDateItinerary, deleteItinerary, addCollectionItinerary } from '../controllers/itineraryControllers.js'

const itineraryR = Router()

itineraryR.get('/', allItinerary);
itineraryR.get('/itineraryByCity/:id', itineraryByCity);
itineraryR.post('/', createItinerary);
itineraryR.put('/itinerary/:id', upDateItinerary);
itineraryR.delete('/itinerary/:id', deleteItinerary);
itineraryR.post("/collection", addCollectionItinerary);

export default itineraryR;