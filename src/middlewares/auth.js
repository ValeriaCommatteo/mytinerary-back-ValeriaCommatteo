import bcrypt from 'bcrypt';
import passport from 'passport';
import { Strategy, ExtractJwt} from 'passport-jwt';
import  jwt from 'jsonwebtoken';
import User from '../models/User.js';

// const options = {
//     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//     secretOrKey: "claveSuperSecreta"
// }

export const passportV = passport.use(
    new Strategy({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: 'claveSuperSecreta'
      }, async (payload, done) => {
        try {
          let userFound = await User.findOne({email: payload.email})
          if (userFound) return done(null, userFound)
          else return done(null)
        }
        catch (error) {
          return done(error)
        }
      })
    )
    

// export default passport.use ( new Strategy( options, fn ) )

export const hashPassword = (req, res, next) => {
    
    try {

        const passwordPlain = req.body.password;
        const hashPassword = bcrypt.hashSync(passwordPlain, 10);

        req.body.password = hashPassword;

        next()

    } catch (err) {
        res.status(500).json({error : err})
    }

}
export const verifyPassword = (req, res, next) => {

    const passwordPlain = req.body.password;
    console.log(req.user)
    const hashPassword = req.user.password;
    const isValid = bcrypt.compareSync(passwordPlain, hashPassword)
   
   if (isValid){
    next()
   }else{
    res.status(400).json({message: "wrong password"})
   }

}

export const verifyUserExists = async (req, res, next) => {

    const {email} = req.body;

        const userFounded = await User.findOne({email: email});

        if (userFounded){
            req.user = userFounded;

          next();

        }else{
            return res.status(400).json({message:"User not found"});

        }
}

export const generateToken = (req, res, next) => {
    try {

        let secretKey = "claveSuperSecreta"
        let token = jwt.sign({email: req.body.email}, secretKey, {expiresIn:60*3})
        req.token = token
        next()
        
    }catch (err){
        res.status(500).json({message: err.message});
    }
}

export const login = async (req, res) => {
    try {

        res.status(200).json
    }catch(err){
        res.status(500).json({error : err})
    }

};

export const authenticated = async (req, res) => {
    try {

        res.status(200).json
    }catch(err){
        res.status(500).json({error : err})
    }
}