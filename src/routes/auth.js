import { Router } from "express";
import  model  from  'mongoose';
import  { verifyAuthData } from '../middlewares/verifications.js';
import  { hashPassword } from '../middlewares/auth.js';
import { register, login } from '../controllers/AuthController.js'

export const authR = Router()

authR.post('/register', verifyAuthData, hashPassword, register)
authR.post('/login', verifyAuthData, login)