import Joi from 'joi';

const userSchema = Joi.object({
    email: Joi.string().email().min(10).max(20).required({
        'string.email': "Please enter a valid email",
        'string.min': "Email must be at least 10 characters",
        'string.max': "Email must be at most 20 characters",
        'string.empy': "Please enter you email"
    }),
    password: Joi.string().alphanum().min(6).max(16).required(), /*TERMINAR EL CODIGO CON EL RESTO DE LOS REQUISISTOS */ 
});

export const verifyAuthData = (req, res, next) => {

    const payload = req.body; /*Objeto de validacion */
        const userValidated =  userSchema.validate(payload);

    if(userValidated.error) {
        return res.satatus(400).json({message : userValidated.error.details.map((err) => err.message)}) /*Mensaje de error por si o cumple con alguna caracteristica del esquema */
    }    

    next()

}


export const verifyDataCities = (req, res, next) => {

    let {name, city, itinerary } = req.body

    if(!name || !city || !itinerary){
        return res.satatus(400).json({message:"Invalid data"})
    }
    if(city == ""){
        return res.satatus(400).json({message:"City empty"})
    }
    if(name == ""){
        return res.satatus(400).json({message:"Invalid data"})
    }
    if(itinerary == ""){
        return res.satatus(400).json({message:"Invalid data"})
    }

    next()
}