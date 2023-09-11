import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {

    try {

        const { password, email } = req.body
        const userExists = await User.findOne({ email })

        if (userExists){
            return res.status(403).json({message:"Email already exists"})
        }

        const passwordHash = bcrypt.hashSync( password, 10)

        const newObj = { ...req.body }
        newObj.password = passwordHash

        const newUser = await User.create( newObj )

        const userResponse = { email: userExists.email, photo: userExists.photo, name: userExists.name, _id: userExists._id  }

        const token = jwt.sign({ email: newUser.email }, "claveSuperSecreta" , { expiresIn:60*3} )

        return res.status(201).json({ success:true, user: userResponse, token : token })

    }catch(error){
        res.json({ success: false, error: error})

    }
};

export const login = async () => {
    try {

        const { email, password } = req.body
        const userExists = await User.findOne({ email })

        if (!userExists){
            return res.json({ success: false, error: "Email o password incorrect"})
        }

        const validPassword = bcrypt.compareSync( password, userExists.password)

        if (!validPassword) {
            return res.json({ success: false, error: "Email o password incorrect"})
        }

        const userResponse = { email: userExists.email, photo: userExists.photo, name: userExists.name, _id: userExists._id }
        const token = jwt.sign({ email: userExists.email}, "claveSuperSecreta" )

        return res.status(200).json({ success: true, user:userResponse, token: token })

    }catch (err){
        res.status(400).json({ message: err.message})
        
    }
}

export const authenticate = async (req, res) => {

        const userResponse = {  email: userExists.email, photo: userExists.photo, name: userExists.name, _id: userExists._id }
        res.status(200).json( { success: true, user: userResponse})

}
export const logout = async (req, res) => {
    

    try {
        res.status(200).json({message: 'logged out', token: req.token})

    } catch(err){

    }
}