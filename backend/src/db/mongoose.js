import Mongoose from 'mongoose'
const { connect } = Mongoose;
import dotenv from 'dotenv'
dotenv.config()

connect(process.env.DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})