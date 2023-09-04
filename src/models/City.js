import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
    name: { type: String, required: true },
    urlimage: { type: String, required: true },
    city: { type: String, required: true },
    country: {  type: String, required: true },
    _itinerary: [{ type: mongoose.Types.ObjectId, ref: 'Itinerary', required: true }],
})

const City = mongoose.model( 'City',citySchema )

export default City