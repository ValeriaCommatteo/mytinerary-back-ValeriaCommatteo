import bcrypt from 'bcrypt';
import { model } from 'mongoose';
import passport from 'passport';
import { Strategy, ExtractJwt} from 'passport-jwt';
import  jwt from 'jsonwebtoken';
import User from '../models/User.js';

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "claveSuperSecreta"
}

const fn = async (jwt_payload, next ) => {
    
    try {

        const user = await User.findOne ({ email: jwt_payload.email })

        if (!user){
            next(null, false);
        }
        next (null, user )

    }catch(error){
        document( error, false)
    }

}

export default passport.use ( new Strategy( options, fn ) )

export const hashPassword = (req, res, next) => {
    
    try {

        const passwordPlain = req.body.password
        const hashPassword = bcrypt.hashSync()

        req.body.password = hashPassword

        next()

    } catch (err) {
        res.status(500).json({error : err})
    }

}

export const verifyPassword = (req, res, next) => {

    const passwordPlain = req.body.password;
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
            return res.status(400).json({message:"User not founded"});

        }
}

export const generateToken = (req, res, netx) => {
    try {

        let secretKey = "claveSuperSecreta"
        let token = jwt.sing({email: req.body.email}, secretKey, {expiresIn:60*3})
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