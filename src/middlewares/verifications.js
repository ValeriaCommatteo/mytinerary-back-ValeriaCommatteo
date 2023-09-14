import Joi from 'joi';
import joiPwd from 'joi-password-complexity';

export const complexityOptions = {
    min: 4,
    max: 50,
    lowerCase: 2,
    upperCase: 1,
    numeric: 2,
    symbol: 1,
    // requirementCount: 2,
}

    const registreSchema = Joi.object({
    name: Joi.string().max(10).required().messages({
        'any.required':'Name required',
        'string.name': "Please enter a valid name",
        'string.max': "Name must be at most 10 characters",
        'string.empty': "Please enter you name"}),
    surname: Joi.string().max(30).required().messages({
        'any.required':'Surname required',
        'string.surname': "Please enter a valid surname",
        'string.max': "Surname must be at most 30 characters",
        'string.empty': "Please enter you surname"
    }),
    email: Joi.string().required().email({minDomainSegments: 2, tlds: { allow: ['com', 'net'] }}).message({
        'any.required':'Email required',
        'string.email': "Please enter a valid email",
        'string.max': "Email must be at most 50 characters",
        'string.empty': "Please enter you surname"
    }),
    // password: joiPwd(complexityOptions).required().messages({
    //     'any.required':'Password required',
    //     'string.password': "Please enter a valid surname",
    //     'string.min': "Password must be at min 4 characters",
    //     'string.max': "Password must be at most 30 characters",
    //     'string.empty': "Please enter your password"
    // }),
    password: Joi.string().min(4).trim()
    // .pattern(new RegExp('^[0-9]'))
    .messages({
        'string.empty' : "Please enter your password",
        'string.min': "Password must be at min 4 characters",
        // 'string.pattern.base':'The password can only have letters or numbers' 
    }),
    photo: Joi.string().required().uri().messages({
        'any.required':'Photo required',
        'string.uri': "Url invalid",
        'string.empty': "Please enter you photo"
    }),
    country: Joi.any().required().messages({
        'any.required':'Country required',
        'any.country': "Please enter a valid country",
        'any.empty': "Please enter you country"
    })

})

export const validator = (req, res, next) => {
    const validate = registreSchema.validate( req.body, { abortEarly: false }) 
 
        if (validate.error) {
            return res.status(400).json({
                message: "Validation error",
                error: validate.error.details
            })
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