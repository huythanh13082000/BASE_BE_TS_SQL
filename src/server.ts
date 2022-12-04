import express from 'express'
import dotenv from 'dotenv'
import {connectMongoDB} from './config/mongodb'
import {userRoute} from './routers/v1/user.route'
const jwt = require('jsonwebtoken')
dotenv.config()

const app = express()

console.log(process.env.APP_HOST)

connectMongoDB()
  .then(() => {
    console.log('Connected successfully to database!')
  })
  .then(() => {
    bootServer()
  })
  .catch((error: any) => {
    console.log(error)
  })

const bootServer = () => {
  const port = process.env.APP_POST
  const host = process.env.APP_HOST
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    console.log(`Open http://${host}:${port}`)
  })
  app.use(express.json())
  app.use('/api/v1', userRoute)
  const decode = jwt.verify(
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOGM3ZThhZmFiODJlNWQxZjY3MTAyOSIsImlhdCI6MTY3MDE2NTY0OSwiZXhwIjoxNjcwMTY1NjY5fQ.GW_tx4LVzhVOuTlkNSXdzBb66n4CU___CVsSBiuP3qk',
    process.env.SECRET_KEY
  )
  console.log(decode, new Date(1670168370))
}
