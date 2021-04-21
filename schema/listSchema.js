const mongoose = require("mongoose")

const listSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    }
})

module.exports = listSchema