import { Router } from "express";
import { validator } from '../middlewares/verifications.js';
import { hashPassword, verifyPassword, verifyUserExists, generateToken, passportV } from '../middlewares/auth.js';
import { register, login, logout, authenticate } from '../controllers/AuthController.js'

const authR = Router()

authR.post('/register', hashPassword, validator, register)
authR.post('/signin', verifyUserExists, generateToken, login)
// authR.post('/signin', verifyUserExists, verifyPassword, generateToken, login)
authR.post('/authenticate', passportV.authenticate("jwt", {session: false}), authenticate)
authR.post('/signout', passportV.authenticate("jwt", {session: false}), logout)

export default authR