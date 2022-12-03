import mongoose from 'mongoose'
import dotenv from 'dotenv/config'
export const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL || '')
    console.log('connect mongodb success!')
  } catch (error:any) {
    throw new Error(error)
  }
}
