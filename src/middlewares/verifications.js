
const verifyDataCities = (req, res, next) => {

    let {name, city, itinerary } = req.body

    if(!name || !city || !itinerary){
        return res.satatus(400).json({message:"Invalid data"})
    }
    if(city == ""){
        return res.satatus(400).json({message:"Name empty"})
    }
    if(name == ""){
        return res.satatus(400).json({message:"Invalid data"})
    }
    if(itinerary == ""){
        return res.satatus(400).json({message:"Invalid data"})
    }

    next()
}

module.exports = {
    verifyDataCities
}