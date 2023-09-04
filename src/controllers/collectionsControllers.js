import City from "../models/City.js"

export const addCollection = async (req, res) => {
    try{
        let cities = [
            {
                "urlimage": "https://imgur.com/kj0aOWF" ,
                "name": "Snowy village",
                "city": "Alemania",
                "country": "Alemania"
            },
            {
                "urlimage": "https://imgur.com/jyQxUp2" ,
                "name": "Obelisk",
                "city": "Buenos Aires",
                "country": "Argentina"
            },
            {
                "urlimage": "https://imgur.com/tOMjT6K" ,
                "name": "Night landscape",
                "city": "Toronto",
                "country": "Canadá"
            },
            {
                "urlimage": "https://imgur.com/zFcBzRA" ,
                "name": "Lighthouse",
                "city": "Havvana",
                "country": "Cuba"
            },
            {
                "urlimage": "https://imgur.com/5UZiWpk",
                "name": "Pyramids",
                "city": "Egipto",
                "country": "Egipto"
            },
            {
                "urlimage": "https://imgur.com/u4V9WwR",
                "name": "Sunset",
                "city": "Santorini",
                "country": "Grecia"
            },
            {
                "urlimage": "https://imgur.com/07fBVGi",
                "name": "Beach",
                "city": "Ibiza",
                "country": "España"
            },
            {
                "urlimage": "https://imgur.com/HKQoYQ7",
                "name": "Channels",
                "city": "Venecia",
                "country": "Italia"
            },
            {
                "urlimage": "https://imgur.com/2VvL3Uw",
                "name": "Bullet Train Avenue",
                "city": "Tokyo",
                "country": "Japon"
            },
            {
                "urlimage": "https://imgur.com/D105j1a",
                "name": "Big Ben",
                "city": "Reino Unido",
                "country": "Londres"
            },
            {
                "urlimage": "https://imgur.com/1vSoxAK",
                "name": "Beach",
                "city": "Island Maldivas",
                "country": "Maldivas"
            },
            {
                "urlimage": "https://imgur.com/En8TDBQ",
                "name": "Hudson river",
                "city": "New York",
                "country": "EE.UU"
            }
        ]

        await City.insertMany(cities)

        res.status(200).json({
            "message": "added cities to Itinerary",
            "collection": cities
        
        })

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}