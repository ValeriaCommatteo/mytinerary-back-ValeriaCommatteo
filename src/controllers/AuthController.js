import User from '../models/User.js';
import bcrypt from 'bcryptjs';
// import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { verifyPassword } from '../middlewares/auth.js';

export const register = async (req, res) => {
    try {
        // return res.status(200).json({message:"Todo ok"})

        const { password, email } = req.body
        const userExists = await User.findOne({ email })

        if (userExists){
            return res.status(403).json({message:"Email already exists"})
        }

        const passwordHash = bcrypt.hashSync( password, 10)

        const newObj = { ...req.body }
        newObj.password = passwordHash

        const newUser = await User.create( newObj )

        const userResponse = { email: newUser.email, name:newUser.name, _id: newUser._id  }

        const token = jwt.sign({ email: newUser.email }, "claveSuperSecreta" , { expiresIn:60*3} )

        return res.status(201).json({ success:true, user: userResponse, token : token })

    }catch(error){
        res.status(400).json({ success: false, error: error})

    }
}

export const login = async (req, res) => {
    
    try {
        res.status(200).json({ message: "Succesfully logged in", token: req.token,
            user: {
                email: req.user.email,
                id: req.user._id,
                urlimage: req.user.urlimage,
                firstName: req.user.firstName

            }
        })

    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const authenticate = async (req, res) => {
    try {    
        res.status(200).json({
          message: 'User successfully authenticated',
          token: req.token,
          user: {
            email: req.user.email,
            id: req.user._id
          }
        })      
      }
      catch (error) {
        res.status(400).json({message: error.message})
      }
    }
export const logout = async (req, res) => {
    

    try {
        res.status(200).json({message: 'logged out', token: req.token})

    } catch(err){

    }
}