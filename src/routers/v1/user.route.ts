import express from 'express'
import {userController} from '../../controllers/user.controller'
import {userValidation} from '../../validations/user.validatton'
const route = express.Router()
route.post('/users', userValidation.createNew, userController.createNew)
route.post('/login', userValidation.login, userController.login)

export const userRoute = route
