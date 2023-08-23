const { Schema, model, Types } = require('mongoose')

const citySchema = new Schema ({
  nombre: { type:String, required:true },
  country: { type:String, required:true },
  place: { type:String, required:true },
  imagen: { type:String, required:true },
  dato: { type:String, required:true }
})

const City = model(collection, schema);

module.exports = City;