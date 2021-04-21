const express = require('express');
const connectToDb = require('./db/connectToDb');
const itemRouter = require('./routes/api/item');
const dotenv = require('dotenv').config()
const cors = require("cors")

const app = express()

app.use(cors())
connectToDb()
app.use(express.static("frontend"))
app.use(express.json())
app.use("/test", (req, res) => {
    res.send("This is a test endpoint")
})


const port = process.env.PORT
app.use("/api", itemRouter)
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
