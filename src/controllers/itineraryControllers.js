import Itinerary from "../models/Itinerary.js"

export const allItinerary = async (req, res) => {
    //obtiene todas los itinerarios
    try {
        let { id } = req.query
        let itineraryFound = await Itinerary.findById(id)

        res.status(200).json(
            {
                "message": "itinerary found",
                "Itinerary": itineraryFound
            }
        )

    } catch (error) {
        res.json({ messange: 'error' })
    }
}

export const itineraryByCity = async (req, res) => {
    //obtiene un itinerario por ID
    try {
        let { id } = req.query

        let itinerariesFound = await Itinerary.find({ _city: id })

        if (itinerariesFound.length == 0) {
            return res.status(400).json(
                {
                    "message": "itinerary not found",

                })
        }
        return res.status(200).json(
            {
                "message": "itinerary found",
                "Itinerary": itinerariesFound
            })

    } catch (error) {
        res.json({ messange: 'error' })
    }
}

export const createItinerary = async (req, res) => {
    //crea un itinerario
    try {
        let { id } = req.query

        let cityFound = await City.findById(id)

        let newItinerary = await Itinerary.create({ ...infoItinerary, _city: cityFound })

        await cityFound.unDateOne({ _itinerary: [...cityFound._itinerary, newItinerary] })

        let cityFoundUpdated = await City.findeById(id).populate('itinerary')

        res.status(201).json({
            "message": "itinerary has been create successfully",
            "city": cityFoundUpdated
        })

    } catch (error) {
        res.json({ messange: 'error' })
    }
}

export const upDateItinerary = async (req, res) => {
    //actualiza un itinerario
    try {
        let updateData = {
            name: req.body.name,
            userImage: req.body.userImage,
            userName: req.body.userName,
            activities: req.body.activities,
            duration: req.body.duration,
            country: req.body.country,
            likes: req.body.likes,
            price: req.body.price,
            hastags: req.body.hastags,
            comments: req.body.comments,
        }

        let { id } = req.query
        let upDateItinerary = await Itinerary.findByIdAndUpdate({ _id: id }, updateData)

        res.status(200).json(
            {
                "message": "itinerary has been updated",
                "city": upDateItinerary
            }
        )

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

export const deleteItinerary = async (req, res) => {
    //borra un itinerario
    try {
        let { id } = req.query

        await Itinerary.deleteOne({ _id: id })

        res.status(201).json({
            "message": "itinerary has been daleted successfully",
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}