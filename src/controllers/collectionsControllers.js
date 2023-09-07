import City from "../models/City.js"

export const addCollection = async (req, res) => {
    try{
        let cities = [
            {
                "urlimage": "https://imgur.com/kj0aOWF.jpg" ,
                "name": "Snowy village",
                "city": "Berlín",
                "country": "Alemania"
            },
            {
                "urlimage": "https://imgur.com/jyQxUp2.jpg" ,
                "name": "Obelisk",
                "city": "Buenos Aires",
                "country": "Argentina"
            },
            {
                "urlimage": "https://imgur.com/tOMjT6K.jpg" ,
                "name": "Night landscape",
                "city": "Toronto",
                "country": "Canadá"
            },
            {
                "urlimage": "https://imgur.com/zFcBzRA.jpg" ,
                "name": "Lighthouse",
                "city": "Habana",
                "country": "Cuba"
            },
            {
                "urlimage": "https://imgur.com/5UZiWpk.jpg",
                "name": "Pyramids",
                "city": "El Cairo",
                "country": "Egipto"
            },
            {
                "urlimage": "https://imgur.com/u4V9WwR.jpg",
                "name": "Sunset",
                "city": "Santorini",
                "country": "Grecia"
            },
            {
                "urlimage": "https://imgur.com/07fBVGi.jpg",
                "name": "Beach",
                "city": "Ibiza",
                "country": "España"
            },
            {
                "urlimage": "https://imgur.com/HKQoYQ7.jpg",
                "name": "Channels",
                "city": "Venecia",
                "country": "Italia"
            },
            {
                "urlimage": "https://imgur.com/2VvL3Uw.jpg",
                "name": "Bullet Train Avenue",
                "city": "Tokyo",
                "country": "Japon"
            },
            {
                "urlimage": "https://imgur.com/D105j1a.jpg",
                "name": "Big Ben",
                "city": "Reino Unido",
                "country": "Londres"
            },
            {
                "urlimage": "https://imgur.com/1vSoxAK.jpg",
                "name": "Beach",
                "city": "Malé",
                "country": "Maldivas"
            },
            {
                "urlimage": "https://imgur.com/En8TDBQ.jpg",
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