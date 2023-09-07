import bcrypt from 'bcrypt';
import { model } from 'mongoose';

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

export const verifyPassword = (passwordPlain, hashPassword) => {

   const isValid = bcrypt.compareSync(passwordPlain, hashPassword)
    return isValid

}
