import { Schema, Types, model } from "mongoose";

const citySchema = new Schema({
    name: { type: String, required: true },
    urlimage: { type: String, required: true },
    city: { type: String, required: true },
    country: {  type: String, required: true },
    _itinerary: [{ type: Types.ObjectId, ref: 'Itinerary', required: true }],
    description: [{ type: String }]
})

const City = model( 'City',citySchema )

export default City