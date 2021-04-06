const mongoose = require("mongoose")
const electronicSchema = mongoose.Schema({
mobilecompany: String,
model: String,
prize: Number
})
module.exports = mongoose.model("Electronic", electronicSchema)