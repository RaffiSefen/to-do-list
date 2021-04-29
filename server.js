const express = require('express');
const connectToDb = require('./db/connectToDb');
const itemRouter = require('./routes/api/item');
const dotenv = require('dotenv').config()
const cors = require("cors");
const authRouter = require('./routes/api/auth');

const app = express()
const port = process.env.PORT
connectToDb()

app.use(cors())


app.use(express.static("frontend"))
app.use(express.json())

app.use("/api", authRouter)
app.use("/api", itemRouter)


app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
