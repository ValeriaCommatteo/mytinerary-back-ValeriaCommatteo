import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: { type: String, required: true },
    surname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    photo: { type: String, required: true },
    country: { type: String, required: true },
    // google: { type: Boolean, default: false}
})

const User = model( 'User', userSchema )

export default User