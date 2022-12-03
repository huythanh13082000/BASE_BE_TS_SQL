import {NextFunction, Request, Response} from 'express'
import Joi from 'joi'
import {HttpStatusCode} from '../utils/constants'
const condition = Joi.object({
  userName: Joi.string().alphanum().min(3).max(20).required(),
  passWord: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
  refreshToken: Joi.string(),
})

const createNew = async (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.body)
    await condition.validateAsync(req.body, {abortEarly: false})
    next()
  } catch (error: any) {
    console.log(error)
    return res.status(HttpStatusCode.BAD_REQUEST).json({
      errors: new Error(error).message,
    })
  }
}

export const userValidation = {createNew}
