const mongoose = require("mongoose")
const dotenv = require('dotenv').config()

const dbUrl = `mongodb+srv://RafSef20101:${process.env.DB_PASS}@raf-cluster1.p95gr.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
const connectToDb = async () => {
    await mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
    console.log('Mongoose connected...')
}


module.exports = connectToDb