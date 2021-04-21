const express = require('express');
const connectToDb = require('./db/connectToDb');
const itemRouter = require('./routes/api/item');
const dotenv = require('dotenv').config()
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.static("frontend"))
connectToDb()
app.use(express.json())
const port = process.env.PORT
app.use("/api", itemRouter)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
