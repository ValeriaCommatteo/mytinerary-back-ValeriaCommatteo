import { Router } from "express";
import { allCities, citiesById, createCity, upDateCity, deleteCity } from '../controllers/citiesControllers.js';
import { addCollection } from "../controllers/collectionsControllers.js";

const citiesR = Router()

citiesR.get('/', allCities);
citiesR.get('/:id', citiesById);
citiesR.post('/', createCity);
citiesR.put('/:id', upDateCity);
citiesR.delete('/:id', deleteCity);
citiesR.post("/collection", addCollection);

export default citiesR;