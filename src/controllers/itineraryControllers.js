import Itinerary from "../models/Itinerary.js"
import City from "../models/City.js"

export const allItinerary = async (req, res) => {
    console.log('allItinerary')
    //obtiene todas los itinerarios
    try {
        let itineraries = await Itinerary.find()

        res.json(
            itineraries
        )

    } catch (error) {
        res.json({ messange: 'error' })
    }

}

export const itineraryByCity = async (req, res) => {
    //obtiene un itinerario por ID
    try {
        let { id } = req.params
        let cityFound = await City.findById( id )
        if (cityFound) {
            const itinerariesFound = await Itinerary.find({ _city: id })
            if (itinerariesFound.length == 0) {
                return res.status(200).json({ "message": "itinerary not found" })
            }
            return res.status(200).json({ itinerariesFound })
        }

    } catch (error) {
        res.json({ messange: 'error' })
    }
}

export const createItinerary = async (req, res) => {
    //crea un itinerario
    console.log('createItinerary')
    try {
        const newItinerary = await Itinerary.create( req.body )
        res.status(201).json( { newItinerary: newItinerary } )
    } catch (error) {
        res.status(500).json( error )
    }
}

export const upDateItinerary = async (req, res) => {
    //actualiza un itinerario
    console.log('upDateItinerary')
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
    console.log('deleteItinerary')
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

export const addCollectionItinerary = async (req, res) => {
    console.log('addCollectionItinerary')
    try {
        let itineraries = [
            {
                "name": "Walk through the Santorini Vineyards",
                "userImg": "https://i.imgur.com/XRZku3j.jpg",
                "userName": "Liam Wilson",
                "activities": "Here would be the activities available",
                "duration": 2,
                "_city": "64f91b5a5d3edc3c24eaaddf",
                "country": "Grecia",
                "likes": 10,
                "price": 4,
                "hashtags": "SantoriniWineTour, GreekWineTasting",
                "comments": "SantoriniWineTour, GreekWineTasting"
            },
            {
                "name": "Art and Culture in Berlin",
                "userImg": "https://i.imgur.com/Nrz2dM0.jpg",
                "userName": "Sophia Johnson ",
                "activities": "Here would be the activities available",
                "duration": 4,
                "_city": "64f91b5a5d3edc3c24eaadda",
                "country": "Alemania",
                "likes": 20,
                "price": 2,
                "hashtags": "BerlinArtScene",
                "comments": "BerlinArtScene"
            },
            {
                "name": "Buenos Aires Night",
                "userImg": "https://i.imgur.com/x1VPmjm.jpg",
                "userName": "Mia Andersen",
                "activities": "Here would be the activities available",
                "duration": 6,
                "_city": "64f91b5a5d3edc3c24eaaddf",
                "country": "Argentina",
                "likes": 30,
                "price": 5,
                "hashtags": "NightOutInArgentina, BuenosAiresNightlife",
                "comments": "NightOutInArgentina, BuenosAiresNightlife"
            },
            {
                "name": "Diving trip in the Maldives",
                "userImg": "https://i.imgur.com/nXQSdg0.jpg",
                "userName": "Isabella Silva ",
                "activities": "Here would be the activities available",
                "duration": 0,
                "_city": "64f91b5a5d3edc3c24eaade4",
                "country": "Maldivas",
                "likes": 40,
                "price": 4,
                "hashtags": "UnderwaterAdventure, MarineLifeExploration",
                "comments": "UnderwaterAdventure, MarineLifeExploration"
            },
            {
                "name": "New York on Foot and by Bike",
                "userImg": "https://i.imgur.com/joeIGRo.jpg",
                "userName": "Fabio Rossi ",
                "activities": "Here would be the activities available",
                "duration": 5,
                "_city": "64f91b5a5d3edc3c24eaade5",
                "country": "EE UU",
                "likes": 5,
                "price": 1,
                "hashtags": "NYCExploration, CitySightseeing, WalkingAndBiking",
                "comments": "NYCExploration, CitySightseeing, WalkingAndBiking"
            },
            {
                "name": "Canadian Nature: Mountains and Lakes",
                "userImg": "https://i.imgur.com/QLZLIqs.jpg",
                "userName": "Alexander Smith",
                "activities": "Here would be the activities available",
                "duration": 6,
                "_city": "64f91b5a5d3edc3c24eaaddc",
                "country": "Canada",
                "likes": 15,
                "price": 1,
                "hashtags": "CanadianAdventure",
                "comments": "CanadianAdventure"
            },
            {
                "name": "Adventure in the Pyramids and the Desert of Egypt",
                "userImg": "https://i.imgur.com/cAXr79c.jpg",
                "userName": "Elena Petrov",
                "activities": "Here would be the activities available",
                "duration": 3,
                "_city": "64f91b5a5d3edc3c24eaadde",
                "country": "Egipto",
                "likes": 25,
                "price": 1,
                "hashtags": "EgyptianAdventure, PyramidsExploration",
                "comments": "EgyptianAdventure, PyramidsExploration"
            },
            {
                "name": "Romantic venice",
                "userImg": "https://i.imgur.com/16g7PA8.jpg",
                "userName": "Sofia Martinez ",
                "activities": "Here would be the activities available",
                "duration": 2,
                "_city": "64f91b5a5d3edc3c24eaade1",
                "country": "Italia",
                "likes": 35,
                "price": 1,
                "hashtags": "johndoe123, traveler23, adventuregirl",
                "comments": "johndoe123, traveler23, adventuregirl"
            },
            {
                "name": "Gastronomic Adventure in Buenos Aires",
                "userImg": "https://i.imgur.com/9HYLQlX.jpg",
                "userName": "Pablo García",
                "activities": "Here would be the activities available",
                "duration": 3,
                "_city": "64f91b5a5d3edc3c24eaaddf",
                "country": "Argentina",
                "likes": 0,
                "price": 5,
                "hashtags": "BuenosAiresFoodie, ArgentinianCuisine, FoodAndWineTour",
                "comments": "BuenosAiresFoodie, ArgentinianCuisine, FoodAndWineTour"
            },
            {
                "name": "Santorini at Sunset",
                "userImg": "https://i.imgur.com/oQ64tzK.jpg",
                "userName": "Emma Nguyen ",
                "activities": "Here would be the activities available",
                "duration": 1,
                "_city": "64f91b5a5d3edc3c24eaaddf",
                "country": "Grecia",
                "likes": 10,
                "price": 0,
                "hashtags": "SantoriniSunset, IslandParadise",
                "comments": "SantoriniSunset, IslandParadise"
            }
        ]
        await Itinerary.insertMany(itineraries)

        res.status(200).json({
            "message": "Collection of Itineraries created sucessfully",
            "collection": itineraries
        })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}