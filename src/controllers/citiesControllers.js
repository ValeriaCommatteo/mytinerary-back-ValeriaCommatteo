import City from "../models/City.js";


export const allCities = async (req, res) => {
    //obtiene todas las ciudades
    try {
        let cities = await City.find()
        // let cities = await City.find().populate('itinerary')

        res.status(200).json(
            cities
        )

    } catch (error) {
        res.status(500).json({ message: 'error' })
    }

}

export const citiesById = async (req, res) => {
    //obtiene una ciudad por ID
    try {
        let { id } = req.params // PARAMS SE PASA DIRECTAMENTE, QUERY SE PASA POR PARAMETRO ?XXX=XXX

        let city = await City.findById(id)

        res.status(200).json(
            city
        )

    } catch (error) {
        res.status(500).json({ message: error })
    }
}

export const createCity = async (req, res) => {
    //crea una ciudad
    const newCity = await City.create(req.body)

    res.status(201).json({
        "message": "city has been added",
        "city": newCity
    })

}

export const upDateCity = async (req, res) => {
    //actualiza una ciudad
    try {
        let { id } = req.query

        await City.findByIdAndUpdate(id, { name: "Nombre nuevo" })

        res.status(201).json({
            "message": "city has been updated"
        })

    } catch (error) {
        res.json({ message: 'error' })
    }
}

export const deleteCity = async (req, res) => {
    //borra una ciudad
    try {
        let { id } = req.query

        await City.deleteOne({ _id: id })

        res.status(201).json({
            "message": "city has been daleted",
        })
    } catch (error) {
        res.status(500).json({ message: err })
    }
}
