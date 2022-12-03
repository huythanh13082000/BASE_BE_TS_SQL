import {Request, Response} from 'express'
import {userService} from '../services/user.service'
import {HttpStatusCode} from '../utils/constants'

const createNew = async (req: Request, res: Response) => {
  try {
    const resuft = await userService.createNew(req.body)
    return res.status(HttpStatusCode.OK).json(resuft)
  } catch (error: any) {
    return res.status(HttpStatusCode.INTERNAL_SERVER).json({
      errors: error.message,
    })
  }
}
export const userController = {createNew}
