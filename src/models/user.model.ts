import mongoose, {Schema} from 'mongoose'

export interface IUser {
  userName: string
  passWord: string
  _id: string
}

export interface IUserModel extends IUser, Document {}

const userSchema: Schema = new Schema({
  userName: {type: String, require: true, unique: true},
  passWord: {type: String},
  createdAt: {type: Date, default: Date.now},
  refreshToken: {type: String, default: null},
})

export const userModel = mongoose.model<IUserModel>('users', userSchema)
