import {userModel} from '../models/user.model'

const createNew = async (data: {userName: string; passWord: string}) => {
  console.log(2131322, data)
  const user = await userModel.create({...data})
  console.log(431312, user)
  return user
}

export const userService = {createNew}
