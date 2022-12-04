import {IUserModel, userModel} from '../models/user.model'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv/config'
import bcrypt from 'bcrypt'

const createNew = async (data: {userName: string; passWord: string}) => {
  console.log(2131322, data)
  const saltRounds = 10
  const hashPassWord = bcrypt.hashSync(data.passWord, saltRounds)
  const user = await userModel.create({...data, passWord: hashPassWord})
  return {data: user, description: 'Create User Success!'}
}
const login = async (data: {userName: string; passWord: string}) => {
  const user: IUserModel | null = await userModel.findOne({
    userName: data.userName,
  })
  if (!user) {
    throw new Error('Username or password wrong!')
  } else {
    const compare = await bcrypt.compare(data.passWord, user.passWord)
    if (compare) {
      const access_token = jwt.sign(
        {id: user._id},
        process.env.SECRET_KEY || '',
        {expiresIn: 20}
      )
      const resuft = {access_token, description: 'Login success!'}
      return resuft
    } else throw new Error('Username or password wrong!')
  }
}

export const userService = {createNew, login}
