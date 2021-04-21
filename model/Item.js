const mongoose = require("mongoose")
const listSchema = require("../schema/listSchema")

const Item = mongoose.model("toDoList", listSchema)



module.exports = Item