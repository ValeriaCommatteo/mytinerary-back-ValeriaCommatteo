import { Router } from "express";
import { validator } from '../middlewares/verifications.js';
import { hashPassword, verifyPassword, verifyUserExists, generateToken } from '../middlewares/auth.js';
import { register, login, logout, authenticate } from '../controllers/AuthController.js'
import passport from "../middlewares/auth.js";

const authR = Router()

authR.post('/register', hashPassword, validator, register)
authR.post('/signin', verifyUserExists, verifyPassword, generateToken, login)
authR.post('/authenticate', passport.authenticate("jwt", {session: false}) , authenticate)
authR.post('/signout', passport.authenticate("jwt", {session: false}), logout)

export default authR