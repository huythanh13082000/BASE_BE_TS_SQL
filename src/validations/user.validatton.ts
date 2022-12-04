import {NextFunction, Request, Response} from 'express'
import Joi from 'joi'
import {IUserModel, userModel} from '../models/user.model'
import {HttpStatusCode} from '../utils/constants'

const condition = Joi.object({
  userName: Joi.string().alphanum().min(3).max(20).required(),
  passWord: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
})

const createNew = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body)
    await condition.validateAsync(req.body, {abortEarly: false})
    const user = await userModel.findOne({userName: req.body.userName})
    if (!user) {
      next()
    } else throw new Error('Account already exists!')
  } catch (error: any) {
    console.log(error)
    return res.status(HttpStatusCode.BAD_REQUEST).json({
      errors: new Error(error).message,
    })
  }
}
const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await condition.validateAsync(req.body, {abortEarly: false})
    next()
  } catch (error: any) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({
      errors: new Error(error).message,
    })
  }
}

export const userValidation = {createNew, login}
