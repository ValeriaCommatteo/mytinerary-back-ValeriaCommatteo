import { Schema, Types, model } from "mongoose";

const itinerarySchema = new Schema({
    name: { type: String, required: true },
    userImg: { type: String, required: true },
    userName: { type: String, required: true },
    activities: { type: String, required: true },
    duration: { type: Number, required: true },
    _city: { type: Types.ObjectId, ref: 'City', required: true },
    country: { type: String, required: true },
    likes : { type: Number},
    price: { type: Number, required: true },
    hashtags: { type: String },
    comments: { type: String },
})

const Itinerary = model( 'Itinerary', itinerarySchema )

export default Itinerary
